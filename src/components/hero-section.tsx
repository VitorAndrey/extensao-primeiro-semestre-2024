import Image from "next/image";
import hero_image from "../../public/hero-section.svg";
import { Button } from "./ui/button";
import { HeartFilledIcon } from "@radix-ui/react-icons";

export function HeroSection() {
  return (
    <section className="flex flex-col lg:gap-0 gap-8 text-center md:text-left lg:flex-row items-center justify-center w-full mx-auto max-w-6xl min-h-[calc(100svh-(16px*4))] md:min-h-[80svh] md:px-10">
      <div className="lg:flex-1">
        <h1 className="md:p-0 p-4 font-semibold text-4xl md:text-5xl lg:text-6xl max-w-xs md:max-w-xl mb-6 md:mt-10 lg:mt-0">
          Doe, O <span className="text-rose-500">Rio Grande do Sul </span>{" "}
          Precisa de Você!
        </h1>
        <Button className="rounded-full bg-rose-500 hover:bg-rose-500 md:text-md md:px-7 md:py-5 lg:text-lg lg:px-8 lg:py-6 hover:scale-[1.01] active:scale-[0.99]">
          Quero Ajudar
          <HeartFilledIcon className="ml-2 scale-110" />
        </Button>
      </div>
      <Image
        src={hero_image}
        alt="Pessoas doando"
        className="lg:flex-1 max-w-sm md:max-w-lg lg:max-w-xl w-full"
      />
    </section>
  );
}
