'use client'
import { Card, CardBody, CardFooter, Image } from "@heroui/react";

const TemplateCard = () => {
    return (
        <Card isPressable shadow="sm" onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
                <Image
                    alt={"Imagen del template de memex"}
                    className="w-full object-cover h-[140px] min-w-[100px]"
                    radius="sm"
                    shadow="sm"
                    src={'./templates/bg-pattern.jpg'}
                    width="100%"
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b>Memes del gato</b>
            </CardFooter>
        </Card>
    )
}

export default TemplateCard;