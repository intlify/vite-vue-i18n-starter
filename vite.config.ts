import path from 'path'
import { pluginI18n } from '@intlify/vite-plugin-vue-i18n'

import type { UserConfig } from 'vite'

const config: UserConfig = {
  alias: {
    'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
  },
  plugins: [
    pluginI18n({
      include: path.resolve(__dirname, './src/locales/**')
    })
  ]
}

export default config
