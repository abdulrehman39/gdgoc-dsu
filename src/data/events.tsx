export const events = [
  {
    id: 0,
    title: "Cloud Study Jam",
    date: "December 15, 2025",
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
    date: "November 28, 2025",
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
    title: "Baithak",
    date: "Oct 30, 2025",
    location: "DHA Suffa University, Ext, Karachi, 75500",
    attendees: 150,
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_2560/c_crop,h_640,w_2560,y_0.0_mul_h_sub_0.0_mul_640/c_crop,h_640,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/event_banners/blob_BUaC3ip",
    description:
      "A vibrant community gathering fostering connections and collaboration",
    detailedDescription:
      "Baithak was an engaging community gathering designed to connect students with the organizing team, build meaningful relationships, and introduce them to the heart of our tech community. It wasn’t just an orientation — it was a warm, interactive session where attendees explored what makes our circle unique and vibrant. The event featured exciting activities including a Community Meet & Greet, where participants got to know the organizing team and the vision behind the initiative, and a Scavenger Hunt, which added a fun, high-energy twist that tested creativity, teamwork, and problem-solving skills. The vibe throughout the event was casual, interactive, and full of laughter, energy, and connection. Baithak truly lived up to its purpose of breaking the ice and building community through shared fun and engagement.",
    status: "Completed",
    color: "gray",
  },
  {
    id: 3,
    title: "Web Bootcamp (NextJS + Supabase)",
    date: "Jun 26, 2025",
    location: "Dha Suffa University, Ext, Karachi, 75500",
    attendees: 95,
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_2560/c_crop,h_640,w_2560,y_0.0_mul_h_sub_0.0_mul_640/c_crop,h_640,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/event_banners/Frame%201171274986_3FDxlVb.png",
    description: "Introduction to Machine Learning with TensorFlow",
    detailedDescription:
      "We’re cooking up an unmissable Web Dev session where we dive headfirst into the ultimate tech power couple: Next.js (the brainy one with killer SEO) + 🔥 Supabase (the cool, open-source backend you wish you knew sooner) Get ready to build smarter, faster, and way cooler than you ever thought possible.",
    status: "Completed",
    color: "gray",
  },
];

export type Event = (typeof events)[number];
