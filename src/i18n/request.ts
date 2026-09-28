import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // 本站所有文案均在各页面内按 locale 硬编码，未使用 next-intl 的翻译字典，
  // 因此此处不加载外部 messages 文件，避免对不存在的资源做动态导入。
  return {
    locale,
    messages: {}
  };
});
