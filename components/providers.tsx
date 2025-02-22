"use client";

import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/Footer';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
} 