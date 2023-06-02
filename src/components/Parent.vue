<template>
  <Test>
    component: <i18n-t keypath="doesNotWork" />
    <br />
    t: {{ t('doesNotWork') }}
  </Test>
</template>

<script setup lang="ts">
import Test from './Test.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n() // TODO: https://github.com/intlify/vue-i18n-next/issues/1274
</script>

<i18n lang="yaml">
en:
  doesNotWork: 'works'
</i18n>
