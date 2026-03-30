import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createMiddleware({
  ...routing,
  localeDetection: true,
  alternateLinks: false // 交给 page.tsx 自己处理 SEO alternate 标签
});

export const config = {
  matcher: [
    // 匹配所有的路径，除了静态文件、api、_next
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ],
};
