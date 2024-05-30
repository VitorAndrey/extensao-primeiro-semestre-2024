import Link from "next/link";
import { Button } from "./ui/button";

export const estado_rs_gov =
  "https://www.estado.rs.gov.br/governo-reativa-canal-de-doacoes-via-pix-para-auxilio-as-vitimas-das-enchentes";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-center px-6">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <h1 className="text-lg font-semibold text-emerald-500 md:text-2xl">
          AjudeRS
        </h1>

        <nav className="hidden gap-20 md:flex">
          <Link href="#doacoes" className="font-semibold">
            Doações
          </Link>
          <Link href="#noticias" className="font-semibold">
            Notícias
          </Link>

          <Link target="_blank" href={estado_rs_gov}>
            <Button className="rounded-full border-2 border-emerald-500 bg-transparent font-semibold text-emerald-500 transition-all duration-300  hover:bg-emerald-500 hover:text-white">
              Doar Agora!
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
