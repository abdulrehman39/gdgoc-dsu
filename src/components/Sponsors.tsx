export default function Sponsors() {
  const sponsors = [
    {
      name: "Google",
      // color: "from-blue-500 to-red-500",
      img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/WhatsApp%20Image%202025-04-14%20at%207.18.04%20PM_INa6hEj.jpeg",
    },
    {
      name: "Zapdas",
      // color: "from-blue-600 to-blue-400",
      img: "https://res.cloudinary.com/dgjvt9oa9/image/upload/v1719180440/pstzv3s9mgmn7aaxeis9.svg",
    },
    {
      name: "Vivid Labs",
      // color: "from-orange-500 to-yellow-400",
      img: "https://res.cloudinary.com/dgjvt9oa9/image/upload/v1719180430/t0ixpr3x6is43dstwzee.svg",
    },
    {
      name: "DataCamp",
      // color: "from-blue-500 to-cyan-400",
      img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/download_AihCh5V.png",
    },
    {
      name: "",
      // color: "from-blue-600 to-blue-500",
      img: "https://res.cloudinary.com/dgjvt9oa9/image/upload/v1719180451/zwbcmlsmgx64nennvdsw.svg",
    },
    {
      name: "",
      // color: "from-red-600 to-red-500",
      img: "https://res.cloudinary.com/dgjvt9oa9/image/upload/v1719180514/yn6rrn0cjjynqifzwshr.svg",
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
                  className="flex-shrink-0 mx-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-white"
                  style={{ width: "180px" }}
                >
                  <div
                    className={`aspect-[3/2] bg-gradient-to-br ${sponsor} rounded-lg flex items-center justify-center overflow-hidden`}
                  >
                    <img
                      src={sponsor.img}
                      alt={sponsor.name}
                      className="w-full h-full object-fit"
                    />
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
            <a href="https://linktr.ee/GDSC.DSU">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow">
                Partner With Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
