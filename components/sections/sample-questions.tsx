export default function SampleQuestionsSection() {
  return (
    <section id="sample-questions" className="py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8 md:text-4xl">Sample Quiz Questions</h2>
        <div className="space-y-6 text-gray-700">
          <p>Test your knowledge with a few sample questions from our league quizzes!</p>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h3 className="text-xl font-semibold">Round 1: General Knowledge</h3>
            <p>
              <strong>Question 1:</strong> What is the capital city of Australia?
            </p>
            <p>
              <strong>Answer:</strong> Canberra
            </p>
            <p>
              <strong>Question 2:</strong> Which planet is known as the "Red Planet"?
            </p>
            <p>
              <strong>Answer:</strong> Mars
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h3 className="text-xl font-semibold">Round 2: History</h3>
            <p>
              <strong>Question 1:</strong> In which year did the Titanic sink?
            </p>
            <p>
              <strong>Answer:</strong> 1912
            </p>
            <p>
              <strong>Question 2:</strong> Who was the first Emperor of Rome?
            </p>
            <p>
              <strong>Answer:</strong> Augustus
            </p>
          </div>

          <p>Think you've got what it takes? Join our league!</p>
        </div>
      </div>
    </section>
  )
}
