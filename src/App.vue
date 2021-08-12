<template>
  <img alt="Vue I18n logo" src="../assets/logo.png" />
  <form>
    <label>{{ t('language') }}</label>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="ja">ja</option>
    </select>
  </form>
  <HelloI18n />
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import HelloI18n from './components/HelloI18n.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloI18n
  },
  setup() {
    // use global scope
    const { t, locale } = useI18n()
    // `locale` type is `writableComputedRef<string>

    watch(locale, newLocale => {
      // `newLocale` should be inferred as a `string`, but it's `writableComputedRef<string>` ...
    })

    return { t, locale }
  }
})
</script>

<style scoped>
form {
  margin-top: 48px;
}

label {
  margin-right: 8px;
}
</style>