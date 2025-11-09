import { Calendar, Users, ArrowRight } from "lucide-react";
import { events } from "../data/events";

export default function Events() {
  return (
    <section
      id="events"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Events
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for workshops, hackathons, and tech talks designed to
            enhance your skills
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold ${
                    event.status === "Upcoming"
                      ? "bg-green-500 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  {event.status}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {event.description}
                </p>

                <div className="flex items-center justify-between mb-3 text-xs text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1.5 text-blue-600" />
                    <span className="truncate">{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="mr-1.5 text-green-600" />
                    <span>{event.attendees}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (event.status === "Upcoming") {
                      // Could add registration logic here
                      alert("Registration coming soon!");
                    } else {
                      window.location.hash = `/events/${event.id}`;
                    }
                  }}
                  className={`w-full py-2.5 rounded-lg font-semibold transition-colors flex items-center justify-center group text-sm ${
                    event.status === "Upcoming"
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  {event.status === "Upcoming"
                    ? "Register Now"
                    : "View Details"}
                  <ArrowRight
                    size={16}
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
