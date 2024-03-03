<script setup lang="ts">
import { ref } from 'vue'
import { createApp } from 'vue'
import { QuillEditor,  Quill} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';

// создание эдитора
const app = createApp()
app.component('QuillEditor', QuillEditor)

const quill = new Quill('#editor', {
  placeholder: 'Compose an epic...',
  theme: 'bubble',
});

// Переменные
const email = 'randall.johanson@gmail.com';
let inpEmail = ref('')
let display = ref('none')
let displayModal = ref('none')

// Логика выпадающего списка
function showContent() {
  if (display.value == 'none') {
    display.value = 'block';
  } else {
    display.value = 'none';
  }
} 

// Вставка в input значений
function inputEmail() {
  inpEmail.value = 'randall.johanson@gmail.com';
  display.value = 'none';
}



</script>

<template >
  

  <div class="border">

    <div class="editor" id="editor">
      <QuillEditor theme="bubble"  toolbar="essential"/>
    </div>
    
    
    <div class="line"></div>
    <input id = "From" type="text" class="from" v-model="inpEmail">
    <div class="line2"></div>
    <input type="text" class="theme">
    <div type="text" class="froma">From:</div>

    <!-- Кнопка выподающего списка -->
    <div class="btn-image" @click="showContent()">
      <img src="./components/icon/caret-down.svg" alt="">
    </div>

    <!-- Выподающий список -->
    <div class="drop" :style="{display: display}">
      <div class="drop_item" @click="inputEmail()">
        {{ email }}
      </div>
    </div>
  
    <div class="footer">
      <div class="send">Send Now</div>
    </div>

    <div class="modal" :style="{display: displayModal}">
      <button> 
        <img src="./components/icon/type-bold.svg" class="bold"> 
      </button>
      <button>  
        <img src="./components/icon/type-italic.svg" class="italic">
      </button>
      <button>
        <img src="./components/icon/type-strikethrough.svg" class="strikethrough">
      </button>
      <button>
        <img src="./components/icon/type-underline.svg" class="underline">
      </button>
      
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

.line{
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid #999;
  width: 555px;
  transform: translate(20px, 100px);
}

.line2{
  position: absolute;
  top: 10px;
  left: 0px;
  border: 1px solid #999;
  width: 555px;
  transform: translate(20px, 150px);
}

.froma {
  position: absolute;
  top: 0px;
  left: 0px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
  color: #52525b;
  transform: translate(20px,67px);
}

.from {
  position: absolute;
  top: 0px;
  left: 0px;
  transform: translate(110px,73px);
  width: 300px;
  border: 1px none silver;
  border-radius: 16px;
  cursor: text;
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  font-weight: bold;
}

.theme {
  position: absolute;
  top: 0px;
  left: 0px;
  transform: translate(20px,121px);
  width: 470px;
  border: 1px none silver;
  border-radius: 16px;
  cursor: text;
  font-family: 'Times New Roman', Times, serif;
  font-size: 22px;
  font-weight: bold;
}

.from:focus, .theme:focus {
  outline: none;
}

.footer {
  position: absolute;
  width: 600px;
  height: 60px;
  border-radius: 32px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border: 2px solid rgb(221, 218, 218);
  background-color: rgb(221, 218, 218);
  transform: translate(-4.4px, 540px);
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

.btn-image{
  position: relative;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  transform: translate(430px, 77px);
}

.drop{
  position: absolute;
  width: 220px;
  border-radius: 32px;
  border: solid #999;
  background-color: #999;
  display: none;
  cursor: pointer;
  transform: translate(340px, 90px);
}

.drop_item {
  color: black;
  /* position: relative; */
  display: flex;
  justify-content: center;
}

.drop :hover {
  background-color: #ddd;
  border-radius: 32px;
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
