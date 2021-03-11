<template>
  <div></div>
</template>

<script>
import {getUrlMetaData} from '../../../../lib/misc'
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
            link_metadata: {}
        }
    },
    mounted(){
        this.loading = true
        this.got_meta_data= false,
    }
}
</script>

<style>

</style>