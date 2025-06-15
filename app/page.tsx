"use client"

import { useState } from "react"
import Header from "@/components/layout/header"
import Hero from "@/components/sections/hero"
import FaqSection from "@/components/sections/faq"
import QuizRulesSection from "@/components/sections/quiz-rules"
import SampleQuestionsSection from "@/components/sections/sample-questions"
import CupSection from "@/components/sections/cup" // New import
import TablesSection from "@/components/sections/tables" // New import
import FixturesSection from "@/components/sections/fixtures" // New import
import TeamsSection from "@/components/sections/teams" // Declared the variable
import Footer from "@/components/layout/footer"
import PastSeasonsSection from "@/components/sections/past-seasons"
import ResultsSection from "@/components/sections/results"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home") // Default to home

  return (
    <div className="flex flex-col min-h-screen">
      <Header setActiveSection={setActiveSection} />
      {activeSection === "home" && <Hero />}
      {activeSection === "cup" && <CupSection />} {/* New conditional render */}
      {activeSection === "tables" && <TablesSection />} {/* New conditional render */}
      {activeSection === "teams" && <TeamsSection />} {/* Existing TeamsSection, now linked from About */}
      {activeSection === "fixtures" && <FixturesSection />} {/* New conditional render */}
      {activeSection === "past-seasons" && <PastSeasonsSection />}
      {activeSection === "results" && <ResultsSection />}
      {activeSection === "rules" && <QuizRulesSection />} {/* Existing QuizRulesSection, now linked from About */}
      {activeSection === "quiz-rules" && <QuizRulesSection />}
      {activeSection === "sample-questions" && <SampleQuestionsSection />}
      {activeSection === "faq" && <FaqSection />}
      <Footer />
    </div>
  )
}
