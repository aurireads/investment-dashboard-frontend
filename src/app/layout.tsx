import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/Providers';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Investment Dashboard',
  description: 'Investment management dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Header />
              <main className="flex-1 p-8 overflow-y-auto">
                {children}
              </main>
            </div>
          </div>
          <Toaster position="bottom-right" />
        </Providers>
      </body>
    </html>
  );
}