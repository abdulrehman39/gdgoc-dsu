export const events = [
  {
    id: 0,
    title: "Cloud Study Jam",
    date: "December 15, 2024",
    location: "DSU Campus",
    attendees: 120,
    image:
      "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Learn Google Cloud Platform fundamentals and earn certification",
    detailedDescription:
      "Join us for an intensive Cloud Study Jam where you'll learn Google Cloud Platform fundamentals through hands-on labs and workshops. This comprehensive program covers essential GCP services including Compute Engine, Cloud Storage, BigQuery, and Kubernetes Engine. Participants will gain practical experience with cloud architecture, deployment strategies, and best practices. Upon completion, you'll be well-prepared to earn Google Cloud certifications and apply cloud solutions in real-world scenarios.",
    status: "Upcoming",
    color: "blue",
  },
  {
    id: 1,
    title: "Android Development Workshop",
    date: "November 28, 2024",
    location: "Innovation Lab",
    attendees: 85,
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Build your first Android app with Kotlin and Jetpack Compose",
    detailedDescription:
      "Dive into modern Android development with our comprehensive workshop featuring Kotlin and Jetpack Compose. Learn the fundamentals of Android app architecture, UI design principles, and state management. We'll guide you through building a complete Android application from scratch, covering topics like Material Design 3, navigation components, and API integration. Whether you're a beginner or looking to modernize your Android skills, this workshop will equip you with industry-standard tools and practices used by professional developers.",
    status: "Upcoming",
    color: "green",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    date: "November 10, 2024",
    location: "DSU Campus",
    attendees: 150,
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Full-stack web development with modern frameworks",
    detailedDescription:
      "Master full-stack web development in our intensive bootcamp covering the complete web development lifecycle. Learn React for building dynamic user interfaces, Node.js and Express for backend development, and MongoDB for database management. The bootcamp includes hands-on projects covering responsive design, RESTful APIs, authentication, state management with Redux, and deployment strategies. Participants completed real-world projects and gained the skills needed to build and deploy production-ready web applications. This event was a huge success with overwhelmingly positive feedback from attendees.",
    status: "Completed",
    color: "gray",
  },
  {
    id: 3,
    title: "AI/ML Workshop",
    date: "October 22, 2024",
    location: "Tech Hub",
    attendees: 95,
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Introduction to Machine Learning with TensorFlow",
    detailedDescription:
      "Explore the fascinating world of Artificial Intelligence and Machine Learning in this comprehensive workshop. Using TensorFlow and Python, participants learned the fundamentals of neural networks, supervised and unsupervised learning, and deep learning concepts. The workshop covered practical applications including image classification, natural language processing, and predictive modeling. Through hands-on coding sessions and real-world datasets, attendees built and trained their own ML models. The workshop also addressed ethical considerations in AI and provided insights into the future of machine learning technologies.",
    status: "Completed",
    color: "gray",
  },
];

export type Event = (typeof events)[number];
