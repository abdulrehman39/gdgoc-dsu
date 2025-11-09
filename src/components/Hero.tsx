import { Calendar, Users, Lightbulb } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-brand/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-brand-dark">
              GDGOC - Dha Suffa University
            </span>
          </div>

          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6 leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
              GDG On Campus DSU
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            Join a community of passionate developers, designers, and innovators
            building the future with Google technologies
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="https://linktr.ee/GDSC.DSU">
              <button className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Join Our Community
              </button>
            </a>
            <a href="#events">
              <button className="bg-white hover:bg-gray-50 text-brand-dark px-8 py-4 rounded-lg font-semibold transition-all border-2 border-gray-200 hover:border-brand">
                View Events
              </button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-brand" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">80+</h3>
              <p className="text-gray-600">Events Organized</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-brand-red" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-brand-yellow" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Projects Built</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
