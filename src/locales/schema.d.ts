import { DefineLocaleMessage } from 'vue-i18n' // eslint-disable-line @typescript-eslint/no-unused-vars
import en from './en.json'

type MessageSchema = typeof en

declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {} // eslint-disable-line @typescript-eslint/no-empty-interface
}
