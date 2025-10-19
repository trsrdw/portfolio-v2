import Container from "@/components/Layout/Container/container";
import HeroSection from "@/components/Page/Home/Hero/hero";
import AboutSection from "@/components/Page/Home/About/about";
import JourneySection from "@/components/Page/Home/Journey/journey";
import ProjectsSection from "@/components/Page/Home/Projects/projects";
import ProfileSection from "@/components/Page/Home/Profile/profile";

let metadataObj;
if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
    metadataObj = {
        title: "Rick and Morty Multiverse | Explore Characters, Episodes & Locations",
        description: "Discover characters, episodes, and locations from Rick and Morty. Dive into the multiverse and explore detailed information about your favorite characters.",
        robots: "index, follow",
        openGraph: {
            title: "Rick and Morty Multiverse",
            description: "Explore characters, episodes, and locations from Rick and Morty.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            siteName: "Rick and Morty Multiverse",
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_BASE_URL}/hero.webp`,
                    width: 1280,
                    height: 720,
                    alt: "Rick and Morty Multiverse",
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Rick and Morty Multiverse",
            description: "Explore characters, episodes, and locations from Rick and Morty.",
            images: [`${process.env.NEXT_PUBLIC_BASE_URL}/hero.webp`],
        },
    };
}
export const metadata = metadataObj;

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