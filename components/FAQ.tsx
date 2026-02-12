export default function FAQ() {
  const faqs = [
    { q: "How does ProFlow's AI automation work?", a: "ProFlow's AI learns from your team's work patterns to automatically assign tasks and predict timelines." },
    { q: "Can ProFlow integrate with our existing tools?", a: "Yes, ProFlow offers native integrations with 200+ tools including GitHub, Slack, and more." },
    { q: "Is ProFlow suitable for remote teams?", a: "Absolutely. ProFlow is designed specifically for distributed teams with real-time collaboration features." }
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
