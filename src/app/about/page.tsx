import { Suspense } from "react";
import { Loader } from "@/components/Layout/Loader/loader";
import Container from "@/components/Layout/Container/container";
import About from "@/components/Page/About/about";

export const metadata = {
    title: "About this Project | Tiara's Mini Task",
    description: "Explaining my approach and technical decisions also showcase features and implementation details.",
};

export default function Page() {
    return (
        <Container>
            <Suspense fallback={<Loader />}>
                <About />
            </Suspense>
        </Container>
    );
}