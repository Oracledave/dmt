import { AccordionContent } from "@/components/ui/accordion"
import { AccordionTrigger } from "@/components/ui/accordion"
import { AccordionItem } from "@/components/ui/accordion"
import { Accordion } from "@/components/ui/accordion"
export default function FaqSection() {
  return (
    <section id="faq" className="py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8 md:text-4xl">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">What is the MK Quiz League?</AccordionTrigger>
            <AccordionContent>
              The MK Quiz League is a competitive quiz league based in Milton Keynes and surrounding areas. We organize
              regular quiz nights for teams and individuals looking for a challenge.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">How can I join the league?</AccordionTrigger>
            <AccordionContent>
              We are always looking for new players and teams! You can contact us via the "Contact" section on our
              website, or come along to one of our quiz nights to meet us.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">Where do you hold your quiz nights?</AccordionTrigger>
            <AccordionContent>
              Our quiz nights are held at various venues around Milton Keynes. Please check our "Questions" or "Archive"
              sections for the latest schedule and locations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">What kind of questions are asked?</AccordionTrigger>
            <AccordionContent>
              Our quizzes cover a wide range of topics including general knowledge, history, science, pop culture, and
              more. There's something for everyone!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
