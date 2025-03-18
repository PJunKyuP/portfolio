import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "박준규 - 빅데이터 분석가 & 교통 시스템 전문가",
  description: "박준규의 포트폴리오 웹사이트입니다. 빅데이터 분석과 교통 시스템 관련 프로젝트를 확인하세요.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Header */}
          <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-16 items-center justify-between">
              <div className="flex items-center gap-2">
                <MobileNav />
                <Link href="/" className="font-bold text-xl">
                  박준규
                </Link>
              </div>
              <nav className="hidden md:flex gap-6">
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
                <Link href="/skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </Link>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </nav>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Link href="/contact">
                  <Button variant="outline" size="sm">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </header>

          {children}

          {/* Footer */}
          <footer className="border-t py-6">
            <div className="container flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground">© 2025 박준규. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="https://github.com/parkjunq" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://linkedin.com/in/parkjunq" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="mailto:contact@parkjunq.com" className="text-muted-foreground hover:text-foreground">
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'