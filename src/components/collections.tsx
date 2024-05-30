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

const donations_news =
  "https://www.cnnbrasil.com.br/nacional/defesa-civil-divulga-relatorio-de-doacoes-ao-rs-veja-a-lista/";

export function Collections() {
  return (
    <section
      id="doacoes"
      className="mx-auto flex min-h-[calc(100svh-(16px*4))] w-full max-w-6xl flex-col items-center justify-center px-2 py-10"
    >
      <h2 className="px-4 text-center text-2xl font-semibold lg:text-3xl">
        Doações recebidas
      </h2>
      <p className=" max-w-3xl self-center px-4 py-6 text-center  text-zinc-500">
        Nesta sexta-feira (24/05/2024), a Defesa Civil do estado divulgou um
        relatório sobre as doações recebidas e encaminhadas pelo órgão a 165
        municípios atingidos. Confira na lista abaixo os itens mais doados e
        distribuídos pela Defesa Civil aos municípios atingidos:
      </p>
      <div className="mb-6 flex w-full flex-col items-center justify-center gap-4 p-4 child:flex-1 lg:flex-row lg:items-start lg:gap-0 lg:p-8">
        <ul className="flex flex-col gap-4 child:flex child:items-center child:gap-2">
          <li>
            <DropletIcon color="#10b981" size={20} /> Água: 1.538.133 Litros
          </li>
          <li>
            <AppleIcon color="#10b981" size={20} /> Alimentos: 355,97 toneladas
          </li>
          <li>
            <BedSingleIcon color="#10b981" size={20} /> Cobertores e roupas de
            cama: 115.670 itens
          </li>
          <li>
            <BedIcon color="#10b981" size={20} /> Colchões: 21.458 unidades
          </li>
          <li>
            <BabyIcon color="#10b981" size={20} /> Fraldas: 40.183
          </li>
        </ul>
        <ul className="flex flex-col gap-4 child:flex child:items-center child:gap-2">
          <li>
            <MilkIcon color="#10b981" size={20} /> Materiais de Higiene e
            Limpeza: 138.515 itens
          </li>
          <li>
            <ShowerHeadIcon color="#10b981" size={20} /> Materiais de Higiene
            Pessoal: 240.939 kits
          </li>
          <li>
            <PawPrintIcon color="#10b981" size={20} /> Ração animal: 61.908
            sacos
          </li>
          <li>
            <ShirtIcon color="#10b981" size={20} /> Roupas: 363.863 kits
          </li>
        </ul>
      </div>

      <Link href={donations_news} target="_blank">
        <Button className="self-center rounded-full border-2 border-emerald-500 bg-transparent font-semibold text-emerald-500 transition-all duration-300  hover:bg-emerald-500 hover:text-white">
          Saiba Mais!
        </Button>
      </Link>
    </section>
  );
}
