import { Button, HeroUIProvider } from "@heroui/react";

export default function Home() {
  return (
    <HeroUIProvider>
      <Button color="warning">Hola mundo</Button>
    </HeroUIProvider>
  );
}
