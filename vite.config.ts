import type { UserConfig } from 'vite'
import { friendlyJSONstringify } from 'vue-i18n'
import yaml from 'js-yaml'
import json5 from 'json5'

function i18n(source: string, query: Record<string, string>) {
  const { lang } = query
  return new Promise<string>(resolve => {
    const code = `export default Comp => {
  Comp.__i18n = Comp.__i18n || []
  Comp.__i18n.push('${friendlyJSONstringify(convert(source.trim(), lang) || {})}')
}`.trim()
    resolve(code)
  })
}

function convert(source: string, lang: string) {
  switch (lang) {
    case 'yaml':
    case 'yml':
      return yaml.safeLoad(source)
    case 'json5':
      return json5.parse(source)
    case 'json':
    default:
      return JSON.parse(source)
  }
}

const config: UserConfig = {
  vueCustomBlockTransforms: {
    i18n
  }
}

export default config
