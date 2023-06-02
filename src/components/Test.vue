<template>
  <slot />
  <p>{{ x.t('any') }}</p>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
// comment/remove the line below to make translation work again!
const x = useI18n();
// alternatively, remove the <i18n> block below for the same effect)
</script>

<i18n lang="yaml">
en:
  any: thing
</i18n>
