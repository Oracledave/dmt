import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 justify-between">
        <div className="space-y-2">
          <h3 className="text-2xl font-normal font-serif">Contact</h3>
          <p className="text-gray-400">dave.turnbull3@btinternet.com</p>
        </div>
        <div className="space-y-2"></div>
        <div className="flex justify-end space-x-4">
          <Link
            href="https://www.facebook.com/MiltonKeynesQuizLeague"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="h-6 w-6 text-gray-400 hover:text-white" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-6 w-6 text-gray-400 hover:text-white" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
