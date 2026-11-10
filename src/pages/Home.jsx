import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { Aboutsection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    {/*ThemeToggle - for changing the mode */}
    <ThemeToggle />
    
    {/* Background Effects */}
    <StarBackground />

    {/* Navbar */}
    <Navbar />

    {/*Main Content */}
    <main>
        <HeroSection />
        <Aboutsection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
    </main> 
    
    {/*footer */}
    <Footer />
    
    </div>;
};