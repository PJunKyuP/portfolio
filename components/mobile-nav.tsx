"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "./theme-toggle"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const isMobile = useMobile()

  if (!isMobile) return null

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col gap-4 mt-8">
          <Link href="/" className="text-lg font-medium" onClick={() => setOpen(false)}>
            홈
          </Link>
          <Link href="/about" className="text-lg font-medium" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/skills" className="text-lg font-medium" onClick={() => setOpen(false)}>
            Skills
          </Link>
          <Link href="/projects" className="text-lg font-medium" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link href="/contact" className="text-lg font-medium" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">다크 모드</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

