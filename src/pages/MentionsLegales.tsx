const MentionsLegales: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-12 pt-28 md:pt-48 max-w-4xl">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">
        Mentions Légales
      </h1>

      <div className="space-y-8">
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4 text-gray-700">
            <p>
              Le respect des dispositions légales en matière de protection des
              données constitue un enjeu particulièrement important pour
              l’École Hexagone.
            </p>
            <p>
              La présente politique de protection des données vise à vous
              informer en tant qu’utilisateur sur la nature, la portée et les
              finalités du traitement des données à caractère personnel ainsi
              que sur les droits qui sont les vôtres.
            </p>
          </div>
        </section>

        {/* Propriété intellectuelle */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Propriété intellectuelle et droits d’auteurs
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Les contenus de ce site (structure, design, texte, image,
              animation, logo) sont la propriété exclusive d’École Hexagone.
              Toute reproduction ou représentation totale ou partielle de ce
              site est interdite, sauf autorisation préalable, écrite et
              expresse de l’École Hexagone.
            </p>
            <p>
              Les informations recueillies sur ce site font l’objet d’un
              traitement informatique destiné à communiquer et répondre aux
              clients de l’École Hexagone. Ces données ne sauraient être cédées
              ou louées à des tiers.
            </p>
            <p>
              L’entité responsable de ce site et du traitement de vos données
              est l’Association École Hexagone, dont le siège social est situé :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                12 parvis du Colonel Arnaud Beltrame, 78000 Versailles, France
              </li>
              <li>
                Téléphone :{" "}
                <a
                  href="tel:+33188883290"
                  className="text-primary hover:underline"
                >
                  +33 1 88 88 32 90
                </a>
              </li>
              <li>
                Courriel :{" "}
                <a
                  href="mailto:bonjour@ecole-hexagone.com"
                  className="text-primary hover:underline"
                >
                  bonjour@ecole-hexagone.com
                </a>
              </li>
              <li>Hébergement du site : Scaleway SAS</li>
            </ul>
          </div>
        </section>

        {/* Protection des données */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Protection des données
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Nous traitons vos données à caractère personnel en toute
              confidentialité et conformément aux prescriptions légales en
              matière de protection des données et à cette déclaration de
              confidentialité.
            </p>
            <p>
              Différentes informations à caractère personnel sont collectées
              lorsque vous utilisez ce site Internet. Les données à caractère
              personnel correspondent à des données qui permettent de vous
              identifier personnellement. La présente déclaration de
              confidentialité explique quelles sont les données que nous
              collectons et à quelle fin nous les utilisons. Elle explique
              également comment et dans quel but cette opération est réalisée.
            </p>
            <p>
              Nous attirons l’attention sur le fait que la transmission des
              données sur Internet (par exemple lors d’échanges de courriels)
              peut présenter des failles en matière de sécurité. Aucune
              protection absolue des données contre les accès par des tiers
              n’est possible.
            </p>
          </div>
        </section>

        {/* Saisie des données */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Saisie des données sur notre site web
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Le traitement des données sur ce site Internet est assuré par
              l’École Hexagone.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Comment saisissons-nous vos données ?
              </h3>
              <p>Vos données sont collectées lorsque vous nous les communiquez.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dans quel but utilisons-nous vos données ?
              </h3>
              <p>
                Une partie des données est collectée afin de garantir une mise à
                disposition irréprochable du site Internet.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Quels sont vos droits concernant vos données ?
              </h3>
              <p>
                Vous avez en tout temps le droit de demander gratuitement des
                informations sur l’origine, le destinataire et le but de vos
                données à caractère personnel enregistrées. Vous pouvez également
                demander la rectification, le blocage ou la suppression de ces
                données. Vous disposez en outre d’un droit de réclamation auprès
                de l’autorité de surveillance compétente.
              </p>
            </div>
          </div>
        </section>

        {/* Révocation */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Révocation de votre consentement
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              De nombreuses opérations de traitement des données ne sont
              possibles qu’avec votre consentement exprès. Vous pouvez en tout
              temps révoquer un consentement déjà accordé.
            </p>
            <p>
              Il vous suffit pour cela de nous adresser un e-mail à{" "}
              <a
                href="mailto:bonjour@ecole-hexagone.com"
                className="text-primary hover:underline"
              >
                bonjour@ecole-hexagone.com
              </a>{" "}
              ou un courrier à École Hexagone, 12 parvis du Colonel Arnaud
              Beltrame, 78000 Versailles, France. La légalité du traitement des
              données réalisé jusqu’à la révocation n’est pas affectée par la
              révocation.
            </p>
          </div>
        </section>

        {/* Chiffrement SSL */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Chiffrement SSL
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Pour des raisons de sécurité et pour la protection de la
              transmission des contenus confidentiels, par exemple les commandes
              ou les demandes que vous nous envoyez, ce site utilise un
              chiffrement SSL.
            </p>
            <p>
              Vous reconnaissez une connexion cryptée au fait que la ligne
              d’adresse du navigateur passe de{" "}
              <code className="bg-gray-100 px-1 rounded">http://</code> à{" "}
              <code className="bg-gray-100 px-1 rounded">https://</code> et au
              symbole de cadenas dans votre navigateur. Si le chiffrement SSL est
              activé, les données que vous nous transmettez ne peuvent pas être
              lues par des tiers.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MentionsLegales;
