interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  category: "web" | "website";
  featured: boolean;
  stats: {
    stars?: number;
    users?: string;
    awards?: string;
  };
}
const projects: Project[] = [
  {
    id: 1,
    title: "CampusPulse",
    description:
      "Centralized hackathon management for colleges with alumni integration.",
    longDescription:
      "HackVerse is a powerful full-stack platform that serves as a unified wrapper for hosting, managing, and submitting hackathon responses across different colleges. It enables admin-level creation of hackathons, submission tracking, and alumni integration. Built with MERN stack and Tailwind CSS, it features college-wise views, real-time data updates, and a robust admin panel. The alumni module lets colleges preserve and showcase student innovation history, while admins can add new alumni entries and moderate hackathon content. Designed for scalability and clean UX, it simplifies inter-college event collaboration.",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Socket.io",
    ],
    github: "https://github.com/xDarkPhoneix/EventManagement.git",
    live: "https://eventmanagement-urhj.onrender.com",
    category: "website",
    featured: true,
    stats: {
      stars: 340,
      users: "3.8K+",
      awards: "Campus Innovator Award 2024",
    },
  },
  {
    id: 2,
    title: "Talk-A-Tive",
    description:
      "Real-time chat platform with group messaging, search, and user management",
    longDescription: `Talk-A-Tive is a dynamic full-stack chat application designed for seamless real-time communication. Built with React, Node.js, Express, and MongoDB, it offers features such as 1-on-1 and group messaging, live typing indicators, user search, and real-time notifications via Socket.IO. The app includes authentication with JWT, responsive UI with Chakra UI, and admin tools for group management. Ideal for collaborative environments, student groups, or startup teams.`,
    image:
      "https://media.istockphoto.com/id/1217093906/photo/womens-hand-typing-on-mobile-smartphone-live-chat-chatting-on-application-communication.jpg?s=612x612&w=0&k=20&c=37apRN2rOKxtb2MCDxoIlmi5ImkDkGLwSxYDyC-Ljc0=",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Chakra UI",
    ],
    github: "https://github.com/xDarkPhoneix/Chat-App.git", // replace with actual repo if available
    live: "https://chat-app-j86o.onrender.com",
    category: "web",
    featured: true,
    stats: {
      stars: 189,
      users: "1.2K+",
      awards: "Best Real-time App Demo - DevFest 2024",
    },
  },
  {
    id: 3,
    title: "InkSpire",
    description:
      "Modern blogging platform with Markdown support and dynamic routing",
    longDescription: `InkSpire is a sleek, full-stack blog platform designed for developers and creators to publish and manage content effortlessly. Built with Next.js, Tailwind CSS, and MDX, it supports dynamic routing, dark mode, responsive layouts, and static site generation for blazing-fast performance. Authors can write posts using Markdown with embedded JSX, making content both flexible and developer-friendly. Ideal for personal portfolios, technical blogs, or publication hubs.`,
    image:
      "https://media.istockphoto.com/id/1007848764/vector/video-on-mobile-screen-video-sharing-and-marketing-flat-vector-concept-with-icons.jpg?s=612x612&w=0&k=20&c=iu263H6ut0ejQEt6ue9fzIX4XKQRGzPXKhDyZh7xp-M=",
    technologies: ["Next.js", "React", "Tailwind CSS", "MDX", "Vercel"],
    github: "https://github.com/xDarkPhoneix/blog-platform", // Replace with your actual repo
    live: "https://blog-web-s-ite.vercel.app",
    category: "website",
    featured: false,
    stats: {
      stars: 92,
      users: "500+",
      awards: "Top Blog UI Clone - Open Source Week 2024",
    },
  },
  {
    id: 4,
    title: "TaskForge",
    description:
      "Minimalist task manager with real-time updates and smart filters",
    longDescription: `TaskForge is a full-stack task management web app designed to simplify productivity and collaboration. Built with React, Node.js, Express, and MongoDB, it features a sleek UI, real-time status updates, project-based task grouping, and intuitive drag-and-drop capabilities. Users can create, edit, and prioritize tasks, while smart filters and deadlines help stay organized. Optimized for both mobile and desktop experiences, it serves as an ideal tool for individuals and teams alike.`,
    image:
      "https://media.istockphoto.com/id/1279502184/photo/project-management-concept-with-gantt-chart.jpg?s=612x612&w=0&k=20&c=cyH6eJgMjZPuhYwCp1mc334Y3EOngkPAibyBBokJ7To=",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/xDarkPhoneix/Task-Manager.git", // Replace this with your actual repo link
    live: "https://task-manager-sagg.onrender.com",
    category: "web",
    featured: false,
    stats: {
      stars: 137,
      users: "1.2K+",
      awards: "Best UI Workflow Tool - Buildathon 2024",
    },
  },
  {
    id: 5,
    title: "D2D Web Platform",
    description:
      "• Client–organization service platform • Request tracking • Admin dashboard",

    longDescription: `• Built a full-stack client–organization platform enabling users to request services such as website development and content creation

• Designed an end-to-end service workflow system covering request submission, processing, and status tracking

• Developed a responsive frontend using React/Next.js with intuitive UI for browsing services and managing requests

• Implemented a dedicated admin panel to create, update, and manage services along with real-time request handling

• Integrated role-based authentication (user/admin) to ensure secure access control and data management

• Built backend APIs using Node.js and Express for handling business logic, request lifecycle, and secure communication

• Utilized MongoDB for scalable data storage, managing users, services, and request pipelines efficiently

• Optimized application performance with modular architecture and clean separation of concerns

• Deployed on Vercel with CI/CD integration for fast, reliable, and production-ready delivery`,
    image:
      "https://media.istockphoto.com/id/1717953227/vector/content-plan-creation-people-research-and-create-schedule-of-publication-in-social-media.jpg?s=612x612&w=0&k=20&c=N0fpnC6tcRmCWFuu8CQ_9BdzwPFXbW2lTIUjk41X3XY=",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Vercel"],
    github: "https://github.com/xDarkPhoneix/D2D-WEB.git",
    live: "https://d2-d-web.vercel.app/",
    category: "web",
    featured: true,
    stats: {
      stars: 85,
      users: "800+",
      awards: "Service Platform Innovation - Personal Project",
    },
  },

  {
    id: 6,
    title: "Real-Time IoT Dashboard",
    description:
      "Live sensor monitoring dashboard with real-time data streaming and alert notifications",
    longDescription: `Built a real-time IoT dashboard to visualize live sensor data using interactive charts and dynamic UI components. The system follows a full-stack architecture where a React-based frontend is integrated with backend services to enable continuous data streaming. Real-time communication is implemented using WebSockets or polling to ensure that sensor data updates instantly without requiring page refreshes. A custom alert mechanism is developed to monitor threshold conditions and trigger notifications when values exceed defined limits. Browser-based push notifications are integrated using the Web Notifications API to provide instant alerts to users. The application is optimized for low-latency data updates and efficient state management, and is structured with scalable components for device monitoring, alert handling, and data visualization.`,
    image:
      "https://media.istockphoto.com/id/2096475191/photo/data-analytics-automated-with-ai-technology-big-data-business-analytics-and-artificial.jpg?s=612x612&w=0&k=20&c=JfgQEyufL3bCy2v5z_n8UQMBcx1WZyvstin8UyEeGKU=",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Web Notifications API",
    ],
    github: "https://github.com/xDarkPhoneix/Iot-DashBoard.git",
    live: "",
    category: "web",
    featured: true,
    stats: {
      stars: 60,
      users: "500+",
      awards: "Real-Time IoT Monitoring System - Personal Project",
    },
  },

  {
    id: 7,
    title: "Blockchain Voting System",
    description:
      "• Secure online voting • Blockchain-based transparency • Tamper-proof election system",

    longDescription: `• Developed a decentralized online voting system leveraging blockchain technology to ensure transparency, security, and immutability

• Designed a tamper-proof voting mechanism where each vote is recorded as a transaction on the blockchain, preventing data manipulation

• Implemented smart contract logic to handle vote casting, validation, and automatic vote counting

• Built a user-friendly frontend using React for voter registration, authentication, and vote submission

• Ensured one-person-one-vote policy using unique user verification and wallet/address mapping

• Integrated backend services for handling authentication, election setup, and interaction with blockchain network

• Enabled real-time vote tracking and result visibility while maintaining voter anonymity

• Focused on security by preventing double voting, unauthorized access, and ensuring data integrity

• Designed the system to be scalable and adaptable for institutional or organizational elections`,

    image:
      "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Solidity",
      "Ethereum",
      "Web3.js",
    ],

    github: "https://github.com/xDarkPhoneix/voto.git", // replace if different
    live: "https://your-live-link.com", // replace if deployed

    category: "web",
    featured: true,

    stats: {
      stars: 110,
      users: "600+",
      awards: "Blockchain Innovation Project",
    },
  },

  {
    id: 8,
    title: "Women Safety Web App",
    description:
      "• Emergency alert system • Real-time location sharing • Nearest police station detection",

    longDescription: `• Developed a women safety web application that enables users to send instant emergency alerts during critical situations

• Integrated OpenPress API to fetch real-time geographical data, including nearest police station coordinates based on user location

• Implemented location tracking using browser Geolocation API to capture accurate user position

• Designed an emergency trigger mechanism that sends alerts with live location details to pre-registered contacts

• Automated SMS notification system to share user's location and nearby police station details for rapid response

• Built a responsive frontend using React to ensure quick accessibility and ease of use during emergencies

• Developed backend services using Node.js and Express to handle API calls, user data, and alert processing

• Ensured reliability and minimal latency in emergency communication for real-time assistance

• Focused on user safety, fast response time, and intuitive design for high-stress situations`,

    image:
      "https://media.istockphoto.com/id/1195208815/photo/businesswoman-on-blurred-background-protecting-her-datas-with-thin-line-security-interface.jpg?s=612x612&w=0&k=20&c=cJghKD7Sdx7yBFMFZzBbwj7f2yhRj-l5BmKcuxAB_ew=",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "Geolocation API",
      "OpenPress API",
      "SMS API",
    ],

    github: "https://github.com/xDarkPhoneix/Women_Safety.git", // replace if needed
    live: "https://your-live-link.com", // replace if deployed

    category: "web",
    featured: true,

    stats: {
      stars: 95,
      users: "700+",
      awards: "Social Impact Project - Safety Tech",
    },


  },
];

export { projects };
