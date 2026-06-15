export type Course = {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  image: string;
  category: string;
  students: number;
  lessons: number;
  curriculum: string[];
  release: "Popular" | "Trending" | "New";
};

export const courses: Course[] = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "John Doe",
    duration: "20 hours",
    rating: 4.9,
    level: "Beginner",
    description: "Learn HTML, CSS, JavaScript, React, APIs, and deployment from scratch.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    category: "Development",
    students: 18420,
    lessons: 56,
    release: "Popular",
    curriculum: ["Web fundamentals", "Responsive layouts", "JavaScript essentials", "React projects", "API integration", "Deployment workflow"]
  },
  {
    id: 2,
    title: "UI UX Design Masterclass",
    instructor: "Nadia Rahman",
    duration: "14 hours",
    rating: 4.8,
    level: "Beginner",
    description: "Design elegant user experiences with research, wireframes, prototypes, and usability testing.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    category: "Design",
    students: 12300,
    lessons: 38,
    release: "Popular",
    curriculum: ["Design thinking", "User research", "Wireframing", "Visual hierarchy", "Interactive prototypes", "Portfolio case study"]
  },
  {
    id: 3,
    title: "Digital Marketing Growth Lab",
    instructor: "Marcus Lee",
    duration: "11 hours",
    rating: 4.7,
    level: "Intermediate",
    description: "Plan campaigns, optimize funnels, build SEO strategy, and measure growth with analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    category: "Marketing",
    students: 9900,
    lessons: 32,
    release: "Trending",
    curriculum: ["Audience mapping", "SEO foundations", "Content funnels", "Paid campaigns", "Email automation", "Analytics reporting"]
  },
  {
    id: 4,
    title: "Data Analytics with Python",
    instructor: "Dr. Emily Carter",
    duration: "18 hours",
    rating: 4.9,
    level: "Intermediate",
    description: "Analyze datasets with Python, pandas, charts, dashboards, and practical business cases.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    category: "Data",
    students: 15100,
    lessons: 44,
    release: "Popular",
    curriculum: ["Python refresh", "Data cleaning", "Exploratory analysis", "Visualization", "Dashboard storytelling", "Capstone analysis"]
  },
  {
    id: 5,
    title: "Product Management Sprint",
    instructor: "Aisha Karim",
    duration: "9 hours",
    rating: 4.6,
    level: "Beginner",
    description: "Turn customer problems into roadmaps, experiments, launch plans, and measurable outcomes.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    category: "Business",
    students: 7400,
    lessons: 27,
    release: "New",
    curriculum: ["Problem discovery", "Prioritization", "Roadmaps", "Sprint planning", "Launch checklist", "Metrics review"]
  },
  {
    id: 6,
    title: "Cybersecurity Essentials",
    instructor: "Omar Faruk",
    duration: "16 hours",
    rating: 4.5,
    level: "Advanced",
    description: "Understand network security, threat modeling, authentication, and secure application habits.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    category: "Security",
    students: 6800,
    lessons: 35,
    release: "Trending",
    curriculum: ["Security mindset", "Network basics", "Threat modeling", "Authentication", "OWASP risks", "Incident response"]
  }
];

export function getPopularCourses() {
  return [...courses].sort((a, b) => b.rating - a.rating).slice(0, 3);
}

export function getCourseById(id: string) {
  return courses.find((course) => course.id === Number(id));
}

export function getTrendingCourses() {
  return courses.filter((course) => course.release === "Trending" || course.release === "New");
}
