"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface HeaderProps {
  setActiveSection: (section: string) => void
}

export default function Header({ setActiveSection }: HeaderProps) {
  return (
    <header className="border-b bg-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/images/quizmk-logo.png" alt="QUIZMK Logo" width={64} height={64} className="h-16 w-auto" />
          <span className="text-lg font-semibold sr-only">MK Quiz League</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#"
            onClick={() => setActiveSection("home")}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            HOME
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:underline underline-offset-4">
              ABOUT
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="#" onClick={() => setActiveSection("cup")}>
                  Cup
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" onClick={() => setActiveSection("tables")}>
                  Tables
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" onClick={() => setActiveSection("teams")}>
                  Teams
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" onClick={() => setActiveSection("fixtures")}>
                  Fixtures
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" onClick={() => setActiveSection("rules")}>
                  Rules
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:underline underline-offset-4">
              QUESTIONS
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
          </DropdownMenu>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            CONTACT
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:underline underline-offset-4">
              ARCHIVE
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="#" onClick={() => setActiveSection("past-seasons")}>
                  Past Seasons
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" onClick={() => setActiveSection("results")}>
                  Results
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <span className="sr-only">Toggle navigation</span>
          {/* Add a menu icon here if needed for mobile */}
        </Button>
      </div>
    </header>
  )
}
