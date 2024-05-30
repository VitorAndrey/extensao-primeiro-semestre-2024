import Link from "next/link";
import { Button } from "./ui/button";

export const info_news =
  "https://www.cnnbrasil.com.br/nacional/quase-75-da-populacao-do-rio-grande-do-sul-foi-afetada-por-enchentes-diz-atlas-cnn/#:~:text=00%201.0x-,Quase%2075%25%20da%20popula%C3%A7%C3%A3o%20do%20Rio%20Grande%20do%20Sul%20foi,quinta%2Dfeira%20(23).";

export function News() {
  return (
    <section
      id="noticias"
      className="mx-auto flex min-h-[calc(100svh-(16px*4))] w-full max-w-4xl flex-col justify-center gap-4 px-2 py-8"
    >
      <h2 className="text-2xl font-semibold lg:text-3xl">
        Por Que Doar? A Crise Não Acabou! – Confira a Real Situação do Rio do
        Grande do Sul
      </h2>
      <div className="aspect-h-9 aspect-w-16">
        <iframe
          src="https://www.youtube.com/embed/CFmZdVgXqXw?si=WlkC6sR8l-XjV9aB"
          frameBorder="0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <p className="text-zinc-500">
        Diante da pergunta “Você foi afetado(a) diretamente pelas enchentes que
        estão ocorrendo no Rio Grande do Sul?”, 74,8% dos entrevistados
        responderam que sim. Outros 25,2% responderam que não sofreram nenhum
        tipo de problema causado pelos alagamentos.
      </p>
      <Link href={info_news} target="_blank">
        <Button className="self-start rounded-full border-2 border-emerald-500 bg-transparent font-semibold text-emerald-500 transition-all duration-300  hover:bg-emerald-500 hover:text-white">
          Saiba Mais!
        </Button>
      </Link>
    </section>
  );
}
