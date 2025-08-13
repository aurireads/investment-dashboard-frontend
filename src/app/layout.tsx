import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/Providers';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Toaster } from 'sonner';

// Importe o ThemeProvider
import { ThemeProvider } from './(dashboard)/dashboard/components/ThemeProvider'; 

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Envolva a aplicação com o ThemeProvider */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
        </ThemeProvider>
      </body>
    </html>
  );
}