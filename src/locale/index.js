import { createI18n } from "vue-i18n";
import en_US from "./en_US";
import zh_CHT from './zh_CHT';
import zh_CN from "./zh_CN";

const i18n = createI18n({
   legacy: false,
   globalInjection: true,
   locale: localStorage.getItem("locale")||'en_US',
   messages: {
      zh_CN: zh_CN,
      en_US: en_US,
      zh_CHT: zh_CHT
   }
})
export default i18n;