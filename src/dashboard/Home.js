import Head from "next/head";
import "tailwindcss/tailwind.css";

const Home = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <Head>
        <title>Accueil - Exchorésis</title>
        <meta name="description" content="Page d'accueil de Exchorésis" />
      </Head>
      <h1 className="text-3xl font-bold text-center text-purple-900">
        Exchorésis - Revue Africaine de Philosophie
      </h1>
      <p className="container text-center text-sm py-2 px-8 mb-10 italic text-purple-700">
        Trimestrielle créée en 2002 avec le soutien de l&apos;Auf <br />
        Publiée par le CERP de l&apos;Université Omar Bongo
      </p>

      <p className="mb-4 text-justify text-3xl">
        Emprunté au lexique épicurien, exchorésis est écart. D&apos;abord écart
        atomique, appelé autrement clinamen ou déclinaison. Écart ensuite des
        dieux qui vivent dans les « intermondes », loin de la confusion et de
        l&apos;ignorance du monde misérable des hommes. Enfin, écart où voudrait
        aussi se tenir ou plutôt s&apos;élever le philosophe, tendu vers la
        sagesse, en vertu du souci de soi auquel est malheureusement étranger
        l&apos;opinion ou la foule qui en est prisonnière. Être à l&apos;écart
        des autres ne préserve donc nullement ni de l&apos;« inquiétude » ni du
        type de « danger », auquel expose une certaine volonté de penser, qui se
        confond avec ce que l&apos;on appelle « folie ». En effet, le philosophe
        s&apos;y retrouve confronté au « problème de Parménide », contraint de
        cultiver l&apos;« attitude critique universelle », aux postures et
        risques infinis. Exchorésis entend donc être l&apos;expression de cet
        effort de prise et reprise critiques, susceptible de réévaluer autant le
        mythe que la raison elle-même, le geste de Sisyphe que le doute
        cartésien. Apparemment absurde, simplement effrayant, l&apos;écart
        critique s&apos;ouvre ainsi comme lieu où la philosophie interroge le
        monde et elle-même et leur donne un sens.
      </p>
    </div>
  );
};

export default Home;
