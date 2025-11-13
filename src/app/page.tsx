import Container from "@/components/Layout/Container/container";
import HeroSection from "@/components/Page/Home/Hero/hero";
import AboutSection from "@/components/Page/Home/About/about";
import JourneySection from "@/components/Page/Home/Journey/journey";
import ProjectsSection from "@/components/Page/Home/Projects/projects";
import FormSection from "@/components/Page/Home/Form/form";
import ResumeSection from "@/components/Page/Home/Resume/resume";
import BlogSection from "@/components/Page/Home/Blog/blog";
import { getPosts } from "@/lib/utils/blog";
import { Suspense } from "react";
import { Loader } from "@/components/Layout/Loader/loader";

export default async function Page() {
    const res = await getPosts("en");

    if (!res) {
        throw new Error("Missing data from server");
    }

    const data = res.data;

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
            {/* <Container>
                <CertificationSection />
            </Container> */}
            <Container>
                <ProjectsSection />
            </Container>
            <Container>
                <Suspense fallback={<Loader item />}>
                    <BlogSection posts={data} />
                </Suspense>
            </Container>
            <Container>
                <ResumeSection />
            </Container>
            <Container>
                <FormSection />
            </Container>
        </main>
    );
}