import { Hero1 } from "@/components/hero-section";
import { Cta11 } from "@/components/cta";
import { Navbar1 } from "@/components/navbar";
import { Feature166 } from "@/components/features";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar1></Navbar1>
      <Hero1
        badge="🚀 Nouveau!"
        heading="Simplifiez vos Retours Produits"
        description="Gérez facilement vos retours clients avec une interface rapide, intuitive et efficace. Plus de tracas, juste une solution fluide."
        buttons={{
          primary: {
            text: "Demander une Démo Gratuite",
            url: "http://localhost:3000/app",
          },
          secondary: {
            text: "Proposer une fonctionnalité",
            url: "http://localhost:3000/app",
          },
        }}
        image={{
          src: "/images/hands-typing-package-thread-flipped.png",
          alt: "Hero image",
        }}
      ></Hero1>
      <Feature166
        heading="Ayez le contrôle sur vos retours"
        description="Pensée pour les nouveaux commerces, Easy Returns permets enfin d'avoir du contrôle sur ses retours et de les limiter en offrant à ses clients une expérience fiable et agréable pour créer ce lien de confiance qu'il leur manque."
        feature1={{
          title : "Ayez du recul en un coup d'oeil sur vos retours",
          description:"Un dashboard interactif qui vous permet de savoir très rapidement quoi améliorer pour réduire les retours.",
          image:"/images/landing-page/dashboard.png"
        }}
        feature2={{
          title : "Proposez une expérience client fluide",
          description:"Easy Returns s'occupe de tout et accompagne les clients jusqu'à l'envoi du colis.",
          image:"/images/landing-page/portal.png"
        }}
        feature4={{
          title : "Cherchez les raisons les plus coûteuses",
          description:"Easy Returns vous permet de rechercher les motifs qui vous coûtent le plus d'argent avec une liste filtrée.",
          image:"/images/landing-page/return-filter.png"
        }}
        feature3={{
          title : "Comprenez vos clients",
          description:"Des fiches personnalisées sur chaque retour pour comprendre les raisons précises des renvois.",
          image:"/images/landing-page/return-fiche.png"
        }}
      ></Feature166>
      <Cta11
        heading="Simplifiez vos retours de colis dès aujourd’hui !"
        description="Découvrez comment notre solution peut réduire vos coûts et automatiser la gestion des retours. Essayez gratuitement notre MVP en quelques clics !"
        buttons={{
          primary: {
            text: "Demander une Démo Gratuite",
            url: "http://localhost:3000/demo",
          },
          secondary: {
            text: "Proposer une fonctionnalité",
            url: "http://localhost:3000/how-it-works",
          },
        }}
      ></Cta11>
    </div>
  );
}
