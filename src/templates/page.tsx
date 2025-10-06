import TemplateCard from "./components/card-template";

const TemplateSection = () => {
    return (
        <>
            <div>
                <h1 className="font-bold text-2xl text-white mb-5">Templates populares</h1>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-5 flex-wrap">
                {
                    [...Array(7)].map((_, idx) => (
                        <TemplateCard key={idx} />
                    ))
                }
            </div>
        </>
    )
}

export default TemplateSection;