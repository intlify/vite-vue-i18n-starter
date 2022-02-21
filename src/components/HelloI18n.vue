<template>
  <h1>{{ t('hello') }}</h1>

  <button @click="count++">{{ t('count', { count }) }}</button>

  <p>
    <a href="https://vue-i18n.intlify.dev/" target="_blank">{{ t('docs.vue-i18n') }}</a> |
    <a href="https://github.com/intlify/vite-plugin-vue-i18n#globe_with_meridians-intlifyvite-plugin-vue-i18n" target="_blank">{{ t('docs.vite-plugin') }}</a>
  </p>

  <p>
    {{ t('recommended') }}:
    <a href="https://github.com/lokalise/i18n-ally/" target="_blank">i18n ally (Visutal Studio Code extension)</a>
    +
    <a
      href="https://eslint-plugin-vue-i18n.intlify.dev/"
      target="_blank"
    >eslint-plugin-vue-i18n</a>
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const count = ref(0)

// use local scope
const { t } = useI18n({
  // `locale` inherit from global scope
  inheritLocale: true
})
</script>

<i18n>
{
  "en": {
    "hello": "Hello Vue I18n 9 🌏!",
    "count": "count is: {count}",
    "docs": {
      "vue-i18n": "Vue I18n v9 Documentation",
      "vite-plugin": "Vite Plugin Vue I18n Documentation"
    },
    "recommended": "Recommended setup"
  },
  "ja": {
    "hello": "こんにちは Vue I18n 9 🌏！",
    "count": "カウントは{count}です",
    "docs": {
      "vue-i18n": "Vue I18n v9 ドキュメント",
      "vite-plugin": "Vite プラグイン Vue I18n ドキュメント"
    },
    "recommended": "推奨セットアップ"
  }
}
</i18n>
