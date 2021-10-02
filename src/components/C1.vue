<template>
  <div>
    C1:
    <div>{{ t("hello", { world: t("world") }) }}</div>
    <i18n-t keypath="hello" tag="div">
      <template #world>
        <strong>{{ t("world") }}</strong>
      </template>
    </i18n-t>

    <br />

    <C2>
      <div>{{ t("hello", { world: t("world") }) }}</div>
      <i18n-t keypath="hello" tag="div">
        <template #world>
          <strong>{{ t("world") }}</strong>
        </template>
      </i18n-t>
    </C2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import C2 from './C2.vue'

export default defineComponent({
  components: {
    C2
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  }
})
</script>

<i18n>
{
  "en": {
    "hello": "Hello {world}",
    "world": "world!"
  }
}
</i18n>
