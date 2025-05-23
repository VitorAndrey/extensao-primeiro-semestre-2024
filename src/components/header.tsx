import Link from "next/link";
import { Button } from "./ui/button";

export const donate =
  "https://commission.europa.eu/topics/eu-solidarity-ukraine/helping-ukrainians-how-you-can-donate-and-engage_en";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-center px-6">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <h1 className="text-lg font-semibold text-yellow-500 md:text-2xl">
          Save<span className="text-blue-500">Ukraine</span>
        </h1>

        <nav className="hidden gap-20 md:flex">
          <Link href="#doacoes" className="font-semibold">
            Doações
          </Link>
          <Link href="#noticias" className="font-semibold">
            Notícias
          </Link>

          <Link target="_blank" href={donate}>
            <Button className="rounded-full border-2 border-blue-500 bg-transparent font-semibold text-blue-500 transition-all duration-300  hover:bg-blue-500 hover:text-white">
              Doar Agora!
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
