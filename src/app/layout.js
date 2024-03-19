import Footer from "@/dashboard/Footer";
import Header from "@/dashboard/Header";
import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

export const metadata = {
  title: "Exchoresis",
  description: "Revue Africaine de Philosophie",
};

export default function RootLayout({ children }) {
  return (
    <Fragment>
      <Head>
        <title>Exchoresis</title>
        <meta
          name="description"
          content="Revue africaine de philosophie - Trimestrielle créée en 2002 avec le soutien de l'Auf"
        />
        <meta
          name="keywords"
          content="Revue Exchoresis, Philosophie, Afrique, CERF, UOB, Omar Bongo, Auf"
        />
        <meta name="author" content="Votre Nom" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Intégration des polices Google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* <link rel="canonical" href="https://www.votresite.com/" /> */}
      </Head>
      <html lang="fr">
        <body>
          <div className="flex flex-col min-h-screen px-8">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </Fragment>
  );
}
