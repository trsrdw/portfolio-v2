import Container from "@/components/Layout/Container/container";
import HeroSection from "@/components/Page/Home/Hero/hero";
import AboutSection from "@/components/Page/Home/About/about";
import JourneySection from "@/components/Page/Home/Journey/journey";
import ProjectsSection from "@/components/Page/Home/Projects/projects";
import ProfileSection from "@/components/Page/Home/Profile/profile";

export default async function Page() {
    return (
        <main className="homecontent">
            <Container>
                <HeroSection />
            </Container>
            <Container>
                <AboutSection />
            </Container>
            <Container>
                <JourneySection />
            </Container>
            <Container>
                <ProjectsSection />
            </Container>
            <Container>
                <ProfileSection />
            </Container>
        </main>
    );
}