import { Image } from "@heroui/react";

export default function ImagesHeaderHome() {

    return (
        <section id="photos">
            <div className="">
                <Image
                    isBlurred
                    className="mb-4 size-full rounded-lg object-contain"
                    src={'./home/memes-hero.png'}
                    alt={"Hero memes images"}
                />
            </div>
        </section>
    )
}