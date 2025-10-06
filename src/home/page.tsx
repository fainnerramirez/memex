import CreateMemexSection from "@/createMemex/page"
import ExamplesMemesSection from "@/examples/page"
import TemplateSection from "@/templates/page"
import HeroSection from "../home/components/hero"

export default function Home() {
    return (
        <>
            <HeroSection />
            <TemplateSection />
            <ExamplesMemesSection />
            <CreateMemexSection />
        </>
    )
}