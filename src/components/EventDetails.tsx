import { ArrowLeft, ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { events } from "../data/events";
import { useEffect, useState } from "react";

export default function EventDetails() {
  const [eventId, setEventId] = useState<number | null>(null);

  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash || "";
      const match = hash.match(/#\/events\/(\d+)/);
      if (match) {
        setEventId(parseInt(match[1], 10));
      } else {
        setEventId(null);
      }
    };

    parseHash();
    window.addEventListener("hashchange", parseHash);
    return () => window.removeEventListener("hashchange", parseHash);
  }, []);

  if (eventId === null) {
    return null;
  }

  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-md mx-4 p-8 bg-white rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Event Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            Sorry, the event you're looking for doesn't exist.
          </p>
          <button
            onClick={() => (window.location.hash = "")}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Image Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-fit"
            />
            {/* <button
              onClick={() => (window.location.hash = "")}
              className="absolute left-4 top-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md text-gray-700 hover:bg-white transition-all flex items-center font-medium group"
            >
              <ArrowLeft
                size={18}
                className="mr-2 group-hover:-translate-x-1 transition-transform"
              />
              Back
            </button> */}
            <div
              className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                event.status === "Upcoming"
                  ? "bg-green-500 text-white"
                  : "bg-gray-500 text-white"
              }`}
            >
              {event.status}
            </div>
          </div>

          {/* Event Details Section */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {event.title}
            </h1>

            {/* Meta Information */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center text-gray-700">
                <div className="bg-blue-50 p-3 rounded-lg mr-3">
                  <Calendar size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Date</p>
                  <p className="text-sm font-semibold">{event.date}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="bg-red-50 p-3 rounded-lg mr-3">
                  <MapPin size={24} className="text-red-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Location</p>
                  <p className="text-sm font-semibold">{event.location}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="bg-green-50 p-3 rounded-lg mr-3">
                  <Users size={24} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Attendees</p>
                  <p className="text-sm font-semibold">{event.attendees}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About This Event
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {event.detailedDescription}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {event.status === "Upcoming" && (
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center group shadow-lg hover:shadow-xl">
                  Register for Event
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              )}
              <button
                onClick={() => (window.location.hash = "")}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to All Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
