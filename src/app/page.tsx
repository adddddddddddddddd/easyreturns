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
            text: "Commencer dès maintenant",
            url: "http://localhost:3000/app",
          },
          secondary: {
            text: "Regarder la démo",
            url: "http://localhost:3000/app",
          },
        }}
        image={{
          src: "/auth/hand-drawn-doodle-return-package-or-order-illustration-vector.jpg",
          alt: "Hero image",
        }}
      ></Hero1>
      <Feature166></Feature166>
      <Cta11></Cta11>
    </div>
  );
}
