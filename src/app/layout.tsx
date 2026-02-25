import { ThemeProvider } from '@/components/theme/theme-provider';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';

export const metadata = {
  title: 'iDiaz Lab — Portfolio',
  description:
    '10+ years of experience designing and shipping production systems end-to-end using React, TypeScript, Node.js, and AWS—focused on performance, developer experience, and real business impact.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
