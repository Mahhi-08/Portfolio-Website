const projects = [
  {
    title: "GreenCart",
    description: "A modern e-commerce platform for buying eco-friendly products with a smooth shopping experience.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT", "REST APIs"],
    status: "Prototype",
    repo: "https://github.com/Mahhi-08",
    demo: null,
  },
  {
    title: "Sweet Shop",
    description: "A vibrant storefront concept for showcasing sweets, categories, and customer-friendly ordering flows.",
    stack: ["React", "Vite", "CSS", "Responsive Design"],
    status: "In Progress",
    repo: "https://github.com/Mahhi-08",
    demo: null,
  },
  {
    title: "Jiivan",
    description: "A numerology-inspired web app focused on personalized insights and a modern user experience.",
    stack: ["React", "TypeScript", "Responsive Design"],
    status: "In Progress",
    repo: "https://github.com/Mahhi-08",
    demo: null,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-card border border-border rounded-xl p-4 shadow-sm hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full min-h-[360px] justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {project.status}
                </span>
              </div>

              <p className="text-left text-muted-foreground mb-1 min-h-[64px] leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-1 mb-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2 py-1 rounded-full bg-secondary text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-1 flex items-stretch gap-2">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-h-[42px] flex items-center justify-center text-center px-3 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
                >
                  GitHub
                </a>

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-h-[42px] flex items-center justify-center text-center px-3 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-colors"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="flex-1 min-h-[42px] flex items-center justify-center text-center px-3 py-2 rounded-full bg-secondary text-muted-foreground">
                    Demo Soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
