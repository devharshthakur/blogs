import type { Metadata } from 'next';
import { Geist_Mono, Syne_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/global/theme-provider';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const syneMono = Syne_Mono({
  variable: '--font-syne-mono',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Personal Blogs Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="">
            <main className="">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
