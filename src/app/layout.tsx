import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const estado_rs_gov =
  "https://www.estado.rs.gov.br/governo-reativa-canal-de-doacoes-via-pix-para-auxilio-as-vitimas-das-enchentes";

export const donations_news =
  "https://www.cnnbrasil.com.br/nacional/defesa-civil-divulga-relatorio-de-doacoes-ao-rs-veja-a-lista/";

export const info_news =
  "https://www.cnnbrasil.com.br/nacional/quase-75-da-populacao-do-rio-grande-do-sul-foi-afetada-por-enchentes-diz-atlas-cnn/#:~:text=00%201.0x-,Quase%2075%25%20da%20popula%C3%A7%C3%A3o%20do%20Rio%20Grande%20do%20Sul%20foi,quinta%2Dfeira%20(23).";

export const metadata: Metadata = {
  title: "Ajude RS",
  description:
    "Você quer doar para o Rio Grande do sul e não sabe como? Estamos aqui para te ajudar a ajudar!",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen w-full flex-col text-zinc-800",
          inter.className,
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
