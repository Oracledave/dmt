import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <main className="flex-1 py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-serif font-normal tracking-tight sm:text-5xl md:text-6xl">MK Quiz League</h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Looking for a new challenge on Monday evenings.
          </p>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Live around the Milton Keynes or surrounding areas
          </p>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We are looking for more players and teams to join our competitive league
          </p>
          <Button className="mt-6 px-6 py-3 text-base">MORE ABOUT US</Button>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/trophies.png"
            width={600}
            height={400}
            alt="Trophies"
            className="mx-auto aspect-[3/2] overflow-hidden rounded-lg object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </main>
  )
}
