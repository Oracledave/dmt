export default function TablesSection() {
  return (
    <section id="tables" className="py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8 md:text-4xl">League Tables</h2>
        <div className="space-y-6 text-gray-700">
          <p>
            Stay up-to-date with the latest standings in the MK Quiz League. Our league tables are updated regularly
            after each quiz night, showing team positions, points, and performance.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Rank</th>
                  <th className="py-3 px-6 text-left">Team Name</th>
                  <th className="py-3 px-6 text-left">Played</th>
                  <th className="py-3 px-6 text-left">Wins</th>
                  <th className="py-3 px-6 text-left">Losses</th>
                  <th className="py-3 px-6 text-left">Draws</th>
                  <th className="py-3 px-6 text-left">Points</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm font-light">
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-6 text-left whitespace-nowrap">1</td>
                  <td className="py-3 px-6 text-left">The Brainiacs</td>
                  <td className="py-3 px-6 text-left">10</td>
                  <td className="py-3 px-6 text-left">8</td>
                  <td className="py-3 px-6 text-left">1</td>
                  <td className="py-3 px-6 text-left">1</td>
                  <td className="py-3 px-6 text-left">25</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-6 text-left whitespace-nowrap">2</td>
                  <td className="py-3 px-6 text-left">Quizzy Rascals</td>
                  <td className="py-3 px-6 text-left">10</td>
                  <td className="py-3 px-6 text-left">7</td>
                  <td className="py-3 px-6 text-left">2</td>
                  <td className="py-3 px-6 text-left">1</td>
                  <td className="py-3 px-6 text-left">22</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-6 text-left whitespace-nowrap">3</td>
                  <td className="py-3 px-6 text-left">Know-It-Alls</td>
                  <td className="py-3 px-6 text-left">10</td>
                  <td className="py-3 px-6 text-left">6</td>
                  <td className="py-3 px-6 text-left">3</td>
                  <td className="py-3 px-6 text-left">1</td>
                  <td className="py-3 px-6 text-left">19</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
          <p>Check back regularly for the latest league standings!</p>
        </div>
      </div>
    </section>
  )
}
