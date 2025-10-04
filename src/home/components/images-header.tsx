import { useEffect, useState } from "react";

export default function ImagesHeaderHome() {

    const [images, setImages] = useState<string[]>([])

    useEffect(() => {
        const generatedImages = Array.from({ length: 6 }, (_, i) => {
            const isLandscape = i % 2 === 0;
            const width = isLandscape ? 600 : 700;
            const height = isLandscape ? 800 : 500;
            const seed = i + 1;
            const url = `https://picsum.photos/seed/${seed}/${width}/${height}`;
            return url
        });
        setImages(generatedImages);
    }, []);

    return (
        <section id="photos">
            <div className="columns-2 gap-4 sm:columns-3">
                {images.map((img, idx) => (
                    <div key={idx}>
                        <img
                            className="mb-4 size-full rounded-lg object-contain"
                            src={img}
                            alt={`Random stock image ${idx + 1}`}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}