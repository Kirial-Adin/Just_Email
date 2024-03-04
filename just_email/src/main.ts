import './assets/main.css'

import { createApp } from 'vue'
import { QuillEditor} from '@vueup/vue-quill'
import App from './App.vue'



createApp(App).mount('#app', 'QuillEditor', QuillEditor)
