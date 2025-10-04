'use client'
import { Button, HeroUIProvider } from "@heroui/react";

export default function Home() {
  return (
    <HeroUIProvider>
      <main className="grid place-content-center min-h-screen">
        <Button color="secondary" variant="solid" >Hola mundo</Button>
      </main>
    </HeroUIProvider>
  );
}
