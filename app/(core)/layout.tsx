import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import type { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  
  return (
    <div className="flex bg-muted">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Sidebar />
        <main className="grow p-4">
          {children}
        </main>
      </ThemeProvider>
    </div >
  )
}