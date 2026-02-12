import QuickFacts from '@/components/QuickFacts'
import FAQ from '@/components/FAQ'

export default function HomePage() {
  return (
    <>
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-indigo-600">ProFlow</h1>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-indigo-600">Sign In</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered Project Management
              <span className="text-indigo-600 block">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your team productivity with intelligent automation, seamless collaboration, 
              and powerful insights. Built for modern remote teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 font-semibold text-lg">
                Start Free 14-Day Trial
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">No credit card required • Set up in 2 minutes</p>
          </div>
        </section>

        <QuickFacts />

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Everything You Need to Manage Projects</h2>
              <p className="text-xl text-gray-600">From AI-powered automation to real-time collaboration</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">AI-Powered Automation</h3>
                <p className="text-gray-600">
                  Intelligent task assignment, deadline predictions, and automated workflow optimization.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Remote Team Collaboration</h3>
                <p className="text-gray-600">
                  Real-time collaboration tools and async communication for distributed teams.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Developer-Friendly</h3>
                <p className="text-gray-600">
                  Native Git integration, API access, and integrations with your dev tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQ />

        {/* CTA Section */}
        <section className="bg-indigo-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join thousands of teams using ProFlow to deliver projects faster.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold text-lg">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl font-bold mb-4">ProFlow</p>
          <p className="text-gray-400">&copy; 2024 ProFlow. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
