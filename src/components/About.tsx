import { Code2, Rocket, Heart, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a community of tech enthusiasts at Dha Suffa University,
            powered by <br /> Google Developers Group On Campus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              GDG On Campus DSU is dedicated to creating a collaborative
              environment where students can learn, share, and grow together. We
              focus on Google technologies and open-source development to
              empower the next generation of developers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through workshops, hackathons, and tech talks, we provide hands-on
              experience and mentorship to help students build real-world
              projects and advance their careers in technology.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-brand/10 to-brand p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Learn</h4>
              <p className="text-gray-600 text-sm">
                Master cutting-edge technologies through hands-on workshops
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-red/10 to-brand-red p-6 rounded-xl">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Build</h4>
              <p className="text-gray-600 text-sm">
                Create innovative projects that solve real problems
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-yellow p-6 rounded-xl">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Connect</h4>
              <p className="text-gray-600 text-sm">
                Network with like-minded developers and industry experts
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand/10 to-brand p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Innovate</h4>
              <p className="text-gray-600 text-sm">
                Transform ideas into impactful solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
