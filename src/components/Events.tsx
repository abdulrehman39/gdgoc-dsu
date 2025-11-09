import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

export default function Events() {
  const events = [
    {
      title: "Cloud Study Jam",
      date: "December 15, 2024",
      location: "DSU Campus",
      attendees: 120,
      image:
        "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Learn Google Cloud Platform fundamentals and earn certification",
      status: "Upcoming",
      color: "blue",
    },
    {
      title: "Android Development Workshop",
      date: "November 28, 2024",
      location: "Innovation Lab",
      attendees: 85,
      image:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Build your first Android app with Kotlin and Jetpack Compose",
      status: "Upcoming",
      color: "green",
    },
    {
      title: "Web Development Bootcamp",
      date: "November 10, 2024",
      location: "DSU Campus",
      attendees: 150,
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Full-stack web development with modern frameworks",
      status: "Completed",
      color: "gray",
    },
    {
      title: "AI/ML Workshop",
      date: "October 22, 2024",
      location: "Tech Hub",
      attendees: 95,
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Introduction to Machine Learning with TensorFlow",
      status: "Completed",
      color: "gray",
    },
  ];

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for workshops, hackathons, and tech talks designed to
            enhance your skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    event.status === "Upcoming"
                      ? "bg-green-500 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  {event.status}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={18} className="mr-2 text-brand" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-2 text-brand-red" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users size={18} className="mr-2 text-brand" />
                    <span className="text-sm">{event.attendees} attendees</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center group">
                  {event.status === "Upcoming"
                    ? "Register Now"
                    : "View Details"}
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
