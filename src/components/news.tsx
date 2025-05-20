import Link from "next/link";
import { Button } from "./ui/button";

export const info_news =
  "https://www.cnnbrasil.com.br/internacional/russia-x-ucrania-trump-e-putin-devem-conversar-nesta-segunda-feira-19/";

export function News() {
  return (
    <section
      id="noticias"
      className="mx-auto flex min-h-[calc(100svh-(16px*4))] w-full max-w-4xl flex-col justify-center gap-4 px-2 py-8"
    >
      <h2 className="text-2xl font-semibold lg:text-3xl">
        Atualização sobre a Guerra na Ucrânia – Conversas entre Trump e Putin
      </h2>
      <div className="aspect-h-9 aspect-w-16">
        <iframe
          src="https://www.youtube.com/embed/qEWN-nmKx1M?si=wwYz2i8CWKLidvIk"
          frameBorder="0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <p className="text-zinc-500">
        Em 19 de maio de 2025, o presidente dos Estados Unidos, Donald Trump, e
        o presidente da Rússia, Vladimir Putin, realizaram uma conversa
        telefônica de duas horas para discutir a guerra na Ucrânia. Embora Trump
        tenha descrito a conversa como &quot;excelente&quot;, Putin rejeitou a
        proposta de um cessar-fogo incondicional de 30 dias, que já havia sido
        aceita pela Ucrânia. Putin expressou disposição para negociações de paz,
        mas manteve exigências rigorosas, incluindo a desmilitarização da
        Ucrânia e limitações à sua soberania. Enquanto isso, o presidente
        ucraniano, Volodymyr Zelensky, reafirmou a prontidão de Kiev para
        negociar, mas se opôs a quaisquer concessões territoriais e pediu
        sanções adicionais à Rússia caso as hostilidades continuem.
      </p>
      <Link href={info_news} target="_blank">
        <Button className="self-start rounded-full border-2 border-blue-500 bg-transparent font-semibold text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white">
          Saiba Mais!
        </Button>
      </Link>
    </section>
  );
}
