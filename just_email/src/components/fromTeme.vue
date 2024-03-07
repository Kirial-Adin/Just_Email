<script setup lang="ts">
import { ref } from 'vue'

// Переменные
const email = ref('randall.johanson@gmail.com');
const inpEmail = ref('')
const isShowDD = ref(false)


// Логика выпадающего списка
function showContent() {
  isShowDD.value = !isShowDD.value
} 

// Вставка в input значений
function inputEmail() {
  inpEmail.value = email.value;
  isShowDD.value = !isShowDD.value
}
</script>

<template>
    <div class="line"></div>
    <input id = "From" type="text" class="from" v-model="inpEmail">
    <div class="line2"></div>
    <input type="text" class="theme">
    <div type="text" class="froma">From:</div>

    <!-- Кнопка выподающего списка -->
    <div class="btn-image" @click="showContent()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
        <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
      </svg>
    </div>

    <!-- Выподающий список -->
    <div class="drop" v-if="isShowDD" >
      <div class="drop_item" @click="inputEmail()">
        {{ email }}
      </div>
    </div>
</template>

<style scoped>
.line{
  display: flex;
  justify-content: center;
  top: 0px;
  left: 0px;
  border: 1px solid #999;
  width: 555px;
  transform: translate(20px, 80px);
}

.line2{
  display: flex;
  justify-content: center;
  top: 10px;
  left: 0px;
  border: 1px solid #999;
  width: 555px;
  transform: translate(20px, 130px);
}

.froma {
  display: flex;
  justify-content: center;
  width: fit-content;
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
  color: #52525b;
  transform: translate(19px,-8px);
}

.from {
  display: flex;
  justify-content: center;
  transform: translate(90px,50px);
  width: 370px;
  border: 1px none silver;
  border-radius: 16px;
  cursor: text;
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  font-weight: bold;
}

.theme {
  display: flex;
  justify-content: center;
  transform: translate(20px,95px);
  width: 550px;
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

.btn-image{
  color: black;
  display: flex;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  width: fit-content;
  transform: translate(470px, -28px);
}

.drop{
  position: absolute;
  width: 220px;
  border-radius: 32px;
  border: solid #999;
  background-color: #999;
  display: block;
  cursor: pointer;
  transform: translate(370px, -10px);
}

.drop_item {
  color: black;
  display: flex;
  justify-content: center;
}

.drop :hover {
  background-color: #ddd;
  border-radius: 32px;
}

</style>