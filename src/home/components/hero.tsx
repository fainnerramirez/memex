'use client'
import { Button } from "@heroui/react";
import { MoveRight } from "lucide-react";
import ImagesHeaderHome from "./images-header";

const HeroSection = () => {
    return (
        <div className="mt-10 min-h-screen flex flex-col md:flex-row justify-center gap-2 items-center w-full">
            <div className="w-full md:w-1/2 flex flex-col gap-3">
                <h1 className="text-white text-4xl text-center md:text-6xl md:text-left font-bold sm:mt-5">Crea memes que conquisten la red</h1>
                <h3 className="text-lg text-gray-400 text-center md:text-left">
                    <span className="font-bold">Memex</span> te ofrece las herramientas para transformar tus idea en contenido viral.
                    Diseña, edita y comparte memes con facilidad
                </h3>
                <div className="flex justify-center md:justify-start gap-3">
                    <Button
                        variant="shadow"
                        color="secondary"
                        className="rounded-full font-bold"
                        endContent={<MoveRight />}
                    >
                        Comenzar gratis
                    </Button>
                </div>
            </div>
            <div className="w-full md:w-1/2 mt-2 md:mt-0 grid place-content-center">
                <ImagesHeaderHome />
            </div>
        </div>
    )
}

export default HeroSection;