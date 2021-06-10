<template>
    <div>
        <div v-if="loading" class="bg-white p-4 w-full">
            <div class="flex space-x-4">
                <div class="flex-1 space-y-4 py-1">
                    <div class="space-y-2">
                        <div class="skeleton-box h-4 rounded w-2/4"></div>
                        <div class="skeleton-box h-2 rounded w-3/4"></div>
                        <div class="skeleton-box h-2 rounded w-3/4"></div>
                        <div class="skeleton-box big-box h-40 rounded w-2/4"></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="got_meta_data && (url_file_type=='image' || url_file_type=='video' || url_file_type=='audio')" class="bg-white border-l-2 py-2 px-3 rounded border-gray-400">
            <img v-if="url_file_type=='image'" class="link-image mt-1" :src="webLink.link" alt="Shared link image">
            <audio class="audio-video mt-1" v-else-if="url_file_type=='audio'" :src="webLink.link"></audio>
            <video class="audio-video mt-1" v-else-if="url_file_type=='video'" :src="webLink.link"></video>
        </div>
        <blockquote v-else-if="got_meta_data && url_file_type=='website'" class="link-preview flex flex-wrap flex-col bg-white border-l-2 rounded border-gray-400 px-4 py-2 mb-2">
            <a :href="webLink.link" target="blank" class="link-blue text-md">{{link_metadata.meta.title}}</a>
            <span class="text-sm text-black">{{link_metadata.meta.description}}</span>
            <div v-if="link_metadata.og.videos && link_metadata.og.videos.length>0">
                <div v-for="(video,index) in link_metadata.og.videos" :key="index">
                    <iframe class="audio-video" v-if="video.type=='text/html'" :src="video.url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <video class="audio-video" v-else-if="video.type=='video'" :src="video.url"></video>
                    <video class="audio-video" v-else-if="video.type.split('/')[0]=='video'" :src="video.url"></video>
                </div>
            </div>
            <div v-else-if="link_metadata.og.audios && link_metadata.og.audios.length>0">
                <div v-for="(audio,index) in link_metadata.og.audios" :key="index">
                    <iframe class="audio-video" v-if="audio.type=='text/html'" :src="audio.url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <audio class="audio-video" v-else-if="audio.type=='video'" :src="audio.url"></audio>
                    <audio class="audio-video" v-else-if="audio.type.split('/')[0]=='video'" :src="audio.url"></audio>
                </div>
            </div>
            <img v-else-if="link_metadata.og.image" class="link-image mt-1" :src="link_metadata.og.image" :alt="link_metadata.meta.title">
            <img v-else-if="link_metadata.og.images.length>0" class="link-image mt-1" :src="link_metadata.og.images[0].url" :alt="link_metadata.meta.title">
            <div class="flex justify-end mt-2">
                <a :href="webLink.link" target="blank" class="link-blue text-md">
                    <svg class="mr-2 cursor-pointer text-gray-700 hover:text-blue-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z"/></svg>
                </a>
            </div>
        </blockquote>
    </div>
</template>

<script>
import {getUrlMetaData} from '../../../lib/misc'
import { mapGetters } from "vuex"
export default {
    name: "LinkMetaData",
    props: {
        webLink: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            loading: true,
            got_meta_data: false,
            got_err: false,
            link_metadata: {},
            IMAGESFORMATS: ["png","jpg","jpeg","gif","jfif", "svg"],
            VIDEOFORMATS: ["webm","mpg", "mp2", "mpeg", "mpe", "mpv","og","mp4", "m4p", "m4v","avi", "wmv","mov", "qt","flv", "swf","avchd"],
            AUDIOFORMATS: ["mp3","wav","wma"],
            url_file_type: "website",
        }
    },
    mounted(){
        this.loadLinkMetaData()
    },
    methods: {
        ...mapGetters("all", ["getToken"]),
        loadLinkMetaData(){
            this.loading = true
            this.got_meta_data= false
            this.got_err = false;
            let url = this.webLink.link.trim()+""
            let ext = this.getUrlExtension(url)
            this.url_file_type="website"
            if(this.AUDIOFORMATS.indexOf(ext)>=0){
                this.url_file_type = "audio"
                this.loading = false;
                this.got_meta_data = true
            }else if(this.VIDEOFORMATS.indexOf(ext)>=0){
                this.url_file_type = "video"
                this.loading = false;
                this.got_meta_data = true
            }else if(this.IMAGESFORMATS.indexOf(ext)>=0){
                this.url_file_type = "image"
                this.loading = false;
                this.got_meta_data = true
            }else{
                getUrlMetaData(this.getToken(), url)
                .then(res=> {
                    if (res.data.err){
                        this.loading = false;
                        this.got_err = true;
                    }else{
                        this.loading = false;
                        this.link_metadata = res.data.data.metadata
                        this.got_meta_data = true;
                    }
                }).catch((err)=> {
                    this.loading = false;
                    this.got_err = true;
                    console.log(err);
                })
            }
        },
        getUrlExtension(url) {
            return (url = url.substr(1 + url.lastIndexOf("/")).split('?')[0]).split('#')[0].substr(url.lastIndexOf(".")).split(".")[1]+"".toLowerCase()
        }
    },
    watch: {
        webLink(newWebLink){
            this.loadLinkMetaData()
        }
    }
}
</script>

<style scoped>
blockquote.link-preview {
    font-style: normal;
}
.link-blue {
    color: rgb(0, 81, 255);
}
.link-image {
    width: auto;
    margin-right: auto;
    height: 200px;
}
.audio-video {
    background-color: rgb(0, 0, 0);
    width: 70%;
    height: auto;
}
.big-box {
    min-width: 150px;
}
</style>