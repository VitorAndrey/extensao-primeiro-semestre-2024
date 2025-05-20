import {
  AppleIcon,
  BabyIcon,
  BedIcon,
  BedSingleIcon,
  DropletIcon,
  MilkIcon,
  PawPrintIcon,
  ShirtIcon,
  ShowerHeadIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const color = "blue";

const donations_news =
  "https://www.unicef.org/ukraine/en/winterization-assistance-2024-2025";

export function Collections() {
  return (
    <section
      id="doacoes"
      className="mx-auto flex min-h-[calc(100svh-(16px*4))] w-full max-w-6xl flex-col items-center justify-center px-2 py-10"
    >
      <h2 className="px-4 text-center text-2xl font-semibold lg:text-3xl">
        Apoio Humanitário na Ucrânia
      </h2>
      <p className="max-w-3xl self-center px-4 py-6 text-center text-zinc-500">
        Com a intensificação do conflito e a chegada do inverno rigoroso,
        milhões de ucranianos enfrentam desafios extremos. Organizações como a
        UNICEF e parceiros internacionais têm mobilizado recursos para fornecer
        assistência vital. Abaixo, destacamos alguns dos principais esforços
        realizados até o final de 2024:
      </p>
      <div className="mb-6 flex w-full flex-col items-center justify-center gap-4 p-4 child:flex-1 lg:flex-row lg:items-start lg:gap-0 lg:p-8">
        <ul className="flex flex-col gap-4 child:flex child:items-center child:gap-2">
          <li>
            <DropletIcon color={color} size={20} /> Acesso à água potável para
            5,8 milhões de pessoas
          </li>
          <li>
            <AppleIcon color={color} size={20} /> Distribuição de alimentos e
            assistência nutricional para famílias vulneráveis
          </li>
          <li>
            <BedSingleIcon color={color} size={20} /> Entrega de cobertores e
            roupas de cama para 50.000 famílias
          </li>
          <li>
            <BedIcon color={color} size={20} /> Fornecimento de combustível
            sólido para aquecimento doméstico
          </li>
          <li>
            <BabyIcon color={color} size={20} /> Apoio a 79.000 crianças com
            assistência financeira e suprimentos essenciais
          </li>
        </ul>
        <ul className="flex flex-col gap-4 child:flex child:items-center child:gap-2">
          <li>
            <MilkIcon color={color} size={20} /> Distribuição de kits de higiene
            para famílias deslocadas
          </li>
          <li>
            <ShowerHeadIcon color={color} size={20} /> Reabilitação de sistemas
            de saneamento e fornecimento de kits de higiene pessoal
          </li>
          <li>
            <PawPrintIcon color={color} size={20} /> Assistência a abrigos e
            cuidados para animais de estimação afetados
          </li>
          <li>
            <ShirtIcon color={color} size={20} /> Fornecimento de roupas de
            inverno para crianças em idade escolar
          </li>
        </ul>
      </div>

      <Link href={donations_news} target="_blank">
        <Button className="self-center rounded-full border-2 border-blue-500 bg-transparent font-semibold text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white">
          Saiba Mais!
        </Button>
      </Link>
    </section>
  );
}
