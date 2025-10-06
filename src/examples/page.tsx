import TemplateCard from "@/templates/components/card-template";

const ExamplesMemesSection = () => {
    return (
        <>
            <div>
                <h1 className="font-bold text-white text-2xl mb-5 mt-5">
                    Memex de otros usuarios
                </h1>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                {
                    [...Array(7)].map((_, idx) => (
                        <TemplateCard key={idx} />
                    ))
                }
            </div>
        </>
    )
}

export default ExamplesMemesSection;