<script setup lang="ts">
import { QuillEditor} from '@vueup/vue-quill'
import fromTeme from './components/fromTeme.vue';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';

</script>

<template >

  <div class="border">

    <div class="editor" id="editor">
      <QuillEditor theme="bubble"  toolbar="essential"/>
    </div>

    <fromTeme></fromTeme>
  
    <div class="footer">
      <div class="send">Send Now</div>
    </div>

  </div>
</template>

<style scoped>
.border {
  position: absolute;
  top: 200px;
  left: 555px;
  border: 5px solid #fff;
  width: 600px;
  height: 600px;
  border-radius: 32px;
  background-color: #fff;
  transform: translate(100px);
}


.footer {
  width: 600px;
  height: 60px;
  border-radius: 32px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border: 2px solid rgb(221, 218, 218);
  background-color: rgb(221, 218, 218);
  transform: translate(-4.4px, 445px);
  display: flex;
  justify-content: center;
}

.send {
  position: relative;
  border: 3px solid black;
  border-radius: 32px;
  background-color: black;
  width: 100px;
  height: 50px;
  cursor: pointer;
  transform: translate(0px, 4px);
  text-align: center;
  padding: 8px;
  color: #fff;
}

.editor{
  position: absolute;
  color:  #000;
  transform: translate(10px, 170px);
  border: 1px none #999;
  width:  580px;
  height: 370px;
  font-family: 'Times New Roman', Times, serif;
}

</style>
