export default function Sponsors() {
  const sponsors = [
    {
      name: "Google",
      color: "from-blue-500 to-red-500",
    },
    {
      name: "Microsoft",
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "Amazon Web Services",
      color: "from-orange-500 to-yellow-400",
    },
    {
      name: "GitHub",
      color: "from-gray-800 to-gray-600",
    },
    {
      name: "JetBrains",
      color: "from-purple-600 to-pink-500",
    },
    {
      name: "DigitalOcean",
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Meta",
      color: "from-blue-600 to-blue-500",
    },
    {
      name: "Netflix",
      color: "from-red-600 to-red-500",
    },
  ];

  // Duplicate sponsors for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <section
      id="sponsors"
      className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Sponsors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proud to be supported by industry leaders who believe in empowering
            student developers
          </p>
        </div>

        {/* Animated Scrolling Stripe */}
        <div className="relative">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Scrolling Container */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll hover:pause">
              {duplicatedSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  style={{ width: "200px" }}
                >
                  <div
                    className={`aspect-[3/2] bg-gradient-to-br ${sponsor.color} rounded-lg flex items-center justify-center p-1`}
                  >
                    <div className="bg-white rounded-md w-full h-full flex items-center justify-center px-4">
                      <span className="text-gray-800 text-lg font-semibold text-center">
                        {sponsor.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 max-w-3xl mx-auto text-center shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2">
              Become a Sponsor
            </h3>
            <p className="text-blue-100 mb-6">
              Partner with us to support the next generation of developers
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
