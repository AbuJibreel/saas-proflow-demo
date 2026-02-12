export default function QuickFacts() {
  const facts = [
    { icon: "⏰", question: "How much time does ProFlow save teams?", answer: "Teams using ProFlow report saving 15-25 hours per week on project coordination." },
    { icon: "🚀", question: "What's the average project delivery improvement?", answer: "ProFlow users complete projects 30% faster on average with 85% fewer missed deadlines." },
    { icon: "⚡", question: "How quickly can teams start using ProFlow?", answer: "Most teams are fully productive within 24 hours with our AI setup wizard." }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Facts About ProFlow</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {facts.map((fact, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl mb-3">{fact.icon}</div>
              <h3 className="font-semibold mb-2">{fact.question}</h3>
              <p className="text-gray-600 text-sm">{fact.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
