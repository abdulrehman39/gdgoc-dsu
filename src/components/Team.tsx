import { Linkedin, Github, Mail } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Saad Jangda",
      role: "Lead",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_face,h_130,q_auto:good,w_130/v1/gcs/platform-data-goog/avatars/saad_jangda.JPG",
      linkedin: "https://www.linkedin.com/in/saad-jangda/",
      github: "#",
      email: "#",
    },
    {
      name: "Hani Zehra",
      role: "Co-Lead",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_face,h_130,q_auto:good,w_130/v1/gcs/platform-data-goog/avatars/hani_zehra.JPG",
      linkedin: "https://www.linkedin.com/in/hani-zehra14/",
      github: "#",
      email: "#",
    },
    {
      name: "Muhammad Sheryar",
      role: "Lead Operations",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_face,h_130,q_auto:good,w_130/v1/gcs/platform-data-goog/avatars/muhammad_sheryar_4v8Iiob.jpg",
      linkedin: "#",
      github: "#",
      email: "#",
    },
    {
      name: "Sualeha Junaid",
      role: "Co-Lead Decor",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_face,h_130,q_auto:good,w_130/v1/gcs/platform-data-goog/avatars/sualeha_junaid.jpg",
      linkedin: "#",
      github: "#",
      email: "#",
    },
    {
      name: "Sidra Tanvir",
      role: "Lead Decor",
      image: "/profile-icon.png",
      linkedin: "#",
      github: "#",
      email: "#",
    },
    {
      name: "Umer Noor",
      role: "AI Co-Lead",
      image: "/profile-icon.png",
      linkedin: "#",
      github: "#",
      email: "#",
    },
    {
      name: "Somil Raj",
      role: "Co-Lead Marketing",
      image: "/profile-icon.png",
      linkedin: "#",
      github: "#",
      email: "#",
    },
    {
      name: "Naba Yousuf",
      role: "Co-Lead Web",
      image: "/profile-icon.png",
      linkedin: "#",
      github: "#",
      email: "#",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate leaders driving innovation and building a thriving tech
            community
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-4">
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={member.github}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={member.email}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand font-medium">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
