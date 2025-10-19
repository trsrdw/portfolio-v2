"use client";
import Footer from "@/components/Global/Footer/footer";
import { useErrorContext } from "@/lib/context/errorcontext";

export default function FooterCondition() {
    const { hasError } = useErrorContext();

    if (hasError) return null;
    return <Footer />;
}