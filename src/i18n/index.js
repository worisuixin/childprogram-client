import {createI18n} from "vue-i18n";
import zh from "@/i18n/languages/language-zh.json"
import en from "@/i18n/languages/language-en.json"

const lang = window.navigator.language.replace('-', '_')

const i18n = createI18n({
    locale: lang,
    fallbackLocale: 'zh_CN',
    messages: {
        'zh_CN': zh,
        'en_US': en
    }
})

export default i18n;