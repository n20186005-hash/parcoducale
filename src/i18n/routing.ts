import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['it', 'en', 'fr', 'zh-Hant'],
  defaultLocale: 'it',
  localePrefix: 'as-needed' // 默认语言不添加前缀，避免重定向循环
});