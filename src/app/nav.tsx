import { Button } from "@heroui/react";

const Navegation = () => {
    return (
        <div
            className="flex justify-between items-center bg-black text-white border-b-1 border-gray-400  p-2">
            <div>
                <h1 className="font-bold">
                    MEMEX
                </h1>
            </div>
            <div className="flex items-center gap-1">
                <Button variant="light" color="default" className="text-white">
                    Ingresar
                </Button>
                <Button variant="faded" color="default">
                    Crear cuenta
                </Button>
            </div>
        </div>
    )
}

export default Navegation;