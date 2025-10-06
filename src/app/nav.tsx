import { Button, Image } from "@heroui/react";

const Navegation = () => {
    return (
        <div
            className="flex justify-between items-center bg-black text-white border-b-1 border-gray-400  p-2">
            <div className="flex gap-2 items-center">
                <Image
                    isBlurred
                    alt="HeroUI Album Cover"
                    src="./logo-memex.png"
                    width={40}
                />
                <h1 className="font-bold">
                    MEMEX
                </h1>
            </div>
            <div className="flex items-center gap-1">
                <Button variant="ghost" color="secondary" className="font-bold">
                    Ingresar
                </Button>
                <Button variant="faded" color="default" className="font-bold">
                    Crear cuenta
                </Button>
            </div>
        </div>
    )
}

export default Navegation;