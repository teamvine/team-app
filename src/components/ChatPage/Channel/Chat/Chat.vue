<template>
  <div class="chat">
    <div class="chat-content">
      <div class="chat-header">
          <Header/>
      </div>
      <div class="chat-messages p-4">
          <div class="messages px-2 py-3">
              <MessageItem v-for="(message,index) in sampleSMS" :message="message" :key="index"/>
          </div>
          <div class="code-snippets short" v-highlight>
            <pre class="language-html">
              <code>
              &#x3C;header&#x3E;
&#x9;&#x3C;div class=&#x22;intro&#x22; data-src=&#x22;assets/templates/header-main.html&#x22; data-type=&#x22;text/html&#x22;&#x3E;&#x3C;/div&#x3E;

&#x9;&#x3C;ul id=&#x22;features&#x22;&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x3C;strong&#x3E;Dead simple&#x3C;/strong&#x3E;
&#x9;&#x9;&#x9;Include prism.css and prism.js, use proper HTML5 code tags (&#x3C;code&#x3E;code.language-xxxx&#x3C;/code&#x3E;), done!
&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x3C;strong&#x3E;Intuitive&#x3C;/strong&#x3E;
&#x9;&#x9;&#x9;Language classes are inherited so you can only define the language once for multiple code snippets.
&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x3C;strong&#x3E;Light as a feather&#x3C;/strong&#x3E;
&#x9;&#x9;&#x9;The core is 2KB minified &#x26;amp; gzipped. Languages add 0.3-0.5KB each, themes are around 1KB.
&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x3C;strong&#x3E;Blazing fast&#x3C;/strong&#x3E;
&#x9;&#x9;&#x9;Supports parallelism with Web Workers, if available.
&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x3C;strong&#x3E;Extensible&#x3C;/strong&#x3E;
&#x9;&#x9;&#x9;Define new languages or extend existing ones.
&#x9;&#x9;&#x9;Add new features thanks to Prism&#x2019;s plugin architecture.
&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x9;&#x3C;li&#x3E;
&#x9;&#x9;&#x9;&#x3C;strong&#x3E;Easy styling&#x3C;/strong&#x3E;
&#x9;&#x9;&#x9;All styling is done through CSS, with sensible class names like &#x3C;code&#x3E;.comment&#x3C;/code&#x3E;, &#x3C;code&#x3E;.string&#x3C;/code&#x3E;, &#x3C;code&#x3E;.property&#x3C;/code&#x3E; etc
&#x9;&#x9;&#x3C;/li&#x3E;
&#x9;&#x3C;/ul&#x3E;

&#x3C;/header&#x3E;
              </code>
            </pre>
          </div>
      </div>
      <div :class="[chat_footer=='minimal'? 'chat-footer':'chat-footer-extended']">
          <Footer :changeFooter="changeFooter"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Footer from "./Footer"
import MessageItem from './MessageItem'
const {messages} = require('../../../../testdb/db')
import { component as CodeHighlight } from 'vue-code-highlight'
export default {
  name: "Chat",
  components: {
      Header,
      Footer,
      MessageItem,
      CodeHighlight,
  },
  data(){
    return {
      chat_footer: localStorage.getItem("editor_type") || "minimal",
      sampleSMS: messages
    }
  },
  methods: {
    changeFooter(str_type){
      this.chat_footer = str_type
    }
  }
};
</script>
<style scoped>
.chat {
  width: 100%;
  height: 100%;
  max-height: 100%;
  min-width: 400px;
  overflow: hidden;
  background-color: rgba(224, 224, 224, 0.01);
  /* color: white; */
}
.chat-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow: hidden;
    padding: 0% 1% !important;
    /* background: rgb(230, 230, 230); */
}
.chat-header {
    min-height: 60px;
    max-height: 60px;
}
.chat-messages {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    padding: 0;
    /* background-color: rgb(179, 162, 162); */
}
.messages {
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
    display: block;
}
.messages::-webkit-scrollbar {
  width: 6px;
}
.messages::-webkit-scrollbar-thumb {
  width: 6px;
  background-color: rgb(0, 0, 0,0.2);
  border-radius: 6px;
}
.chat-footer {
    min-height: 60px;
    max-height: 60px;
}
.chat-footer-extended {
    min-height: 120px;
    max-height: 120px;
}
.code-snippets.short code{
  height: 200px !important;
  max-height: 200px !important;
  overflow: hidden; 
  white-space: pre;
}
</style>