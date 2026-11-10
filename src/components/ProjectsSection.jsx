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
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {project.status}
                </span>
              </div>

              <p className="text-muted-foreground mb-4 min-h-[72px]">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2 py-1 rounded-full bg-secondary text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
                >
                  GitHub
                </a>

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-colors"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="flex-1 text-center px-4 py-2 rounded-full bg-secondary text-muted-foreground">
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
