export default function Sponsors() {
  const sponsors = [
    {
      name: "Google",
      tier: "Title Sponsor",
      logo: "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Microsoft",
      tier: "Gold Sponsor",
      logo: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Amazon Web Services",
      tier: "Gold Sponsor",
      logo: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "GitHub",
      tier: "Silver Sponsor",
      logo: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "JetBrains",
      tier: "Silver Sponsor",
      logo: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "DigitalOcean",
      tier: "Bronze Sponsor",
      logo: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <section
      id="sponsors"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Sponsors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proud to be supported by industry leaders who believe in empowering
            student developers
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Title Sponsor
          </h3>
          <div className="flex justify-center">
            <div className="bg-white p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full max-w-md">
              <div className="aspect-video bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 rounded-xl flex items-center justify-center">
                <div className="bg-gradient-to-br from-brand via-brand-red to-brand-yellow rounded-xl flex items-center justify-center w-full h-full">
                  <span className="text-white text-4xl font-bold">Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Gold Sponsors
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors
              .filter((s) => s.tier === "Gold Sponsor")
              .map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-700 text-2xl font-bold">
                      {sponsor.name}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Silver Sponsors
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {sponsors
              .filter((s) => s.tier === "Silver Sponsor")
              .map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 text-xl font-semibold">
                      {sponsor.name}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div>
          <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Bronze Sponsors
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {sponsors
              .filter((s) => s.tier === "Bronze Sponsor")
              .map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 text-lg font-medium">
                      {sponsor.name}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Become a Sponsor
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Partner with us to support the next generation of developers and
              gain visibility among talented students
            </p>
            <button className="bg-white text-brand px-8 py-4 rounded-lg font-semibold hover:bg-brand/10 transition-colors shadow-lg">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
