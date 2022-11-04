import VueI18n from "vue-i18n";
import Vue from "vue";

Vue.use(VueI18n);

//引入element的语言包
import localeLib from "element-ui/lib/locale"; //本地
import enLocale from "element-ui/lib/locale/lang/en"; //英文
import zhLocale from "element-ui/lib/locale/lang/zh-CN"; //中文

// 引入需要语言包也可是js文件，export default抛出语言包的对象
import en from "@/lang/en.js";
import zh from "@/lang/zh.js";
import dateTime from "@/lang/dateTime.js";

const lang = localStorage.getItem("language") || navigator.language || "zh";
const i18n = new VueI18n({
  locale: lang, // 语言标识
  fallbackLocale: "zh-CN",
  silentTranslationWarn: true, // 设置为true 会屏蔽翻译在控制台报出的警告
  messages: {
    en: Object.assign(en, enLocale),
    "zh-CN": Object.assign(zh, zhLocale),
  },
  dateTimeFormats: {
    en: dateTime,
    "zh-CN": dateTime,
  }
});
// 设置语言
localeLib.i18n((key: string, value: any) => i18n.t(key, value));
export default i18n;
