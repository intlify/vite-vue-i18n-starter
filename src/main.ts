import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './index.css'
// About the below import
// See https://github.com/intlify/vite-plugin-vue-i18n#static-bundle-importing
// import messages from '@intlify/vite-plugin-vue-i18n/messages'
import en from './locales/en.json'
import ja from './locales/ja.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  // messages
  messages: {
    en,
    ja
  }
})

createApp(App).use(i18n).mount('#app')
