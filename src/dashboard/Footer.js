import { format } from "date-fns";

const Footer = () => {
  const time = format(new Date(), "yyyy");

  return (
    <footer className="bg-gray-100 text-purple-900 py-2 px-2 divide-white-900">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Comité scientifique</h3>
          <ul>
            <li>B. Bourgeois</li>
            <li>M. Castillo</li>
            <li>D. Folscheid</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Comité de lecture</h3>
          <ul>
            <li>Moukala Ndoumou</li>
            <li>P. Ndong Meye</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Administration</h3>
          <p>Directeur: P. Nzinzi</p>
          <p>Secrétariat: T. Ekogha, Massima Mouwoungou</p>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex justify-between">
        <p>&copy; {time} Tous droits réservés Exchroresis</p>
        <p>Numéro ISBN: [Insérez le numéro ISBN]</p>
      </div>
    </footer>
  );
};

export default Footer;
