import { Linkedin, Github, Mail } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Lead",
      image:
        "https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#",
      github: "#",
      email: "#",
    },
    {
      name: "Arjun Patel",
      role: "Co-Lead",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#",
      github: "#",
      email: "#",
    },
    {
      name: "Ananya Reddy",
      role: "Technical Lead",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#",
      github: "#",
      email: "#",
    },
    {
      name: "Rohan Kumar",
      role: "Events Head",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#",
      github: "#",
      email: "#",
    },
    {
      name: "Sneha Iyer",
      role: "Design Lead",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#",
      github: "#",
      email: "#",
    },
    {
      name: "Vikram Singh",
      role: "Community Manager",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#",
      github: "#",
      email: "#",
    },
    {
      name: "Meera Nair",
      role: "Marketing Head",
      image:
        "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#",
      github: "#",
      email: "#",
    },
    {
      name: "Aditya Gupta",
      role: "Content Lead",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300",
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
