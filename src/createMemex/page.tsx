import { Button } from "@heroui/react";

const CreateMemexSection = () => {
    return (
        <div
            className="
                h-[300px]
              bg-purple-200 
              text-white 
              grid 
              place-content-center 
              rounded-2xl 
              w-2/3
              ">
            <h1 className="text-3xl text-black mb-5 font-bold">
                Empieza a crear memes ahora
            </h1>
            <Button variant="shadow" color="secondary" className="">
                Crear meme
            </Button>
        </div>
    )
}

export default CreateMemexSection