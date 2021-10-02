<template>
  <C1 />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import C1 from './C1.vue'

export default defineComponent({
  name: 'HelloI18n',
  components: {
    C1
  },
  setup() {
    const count = ref(0)

    // use local scope
    const { t } = useI18n({
      // `locale` inherit from global scope
      inheritLocale: true
    })
    
    return { count, t }
  }
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
