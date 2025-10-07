import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import SpeakersSection from "../components/SpeakersSection";
import WorkshopCalendar from "../components/WorkshopCalendar/index";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Plongez au cœur du monde de l’IT avec deux journées inspirantes à l’École Hexagone !"
        backgroundImage="parasol.png"
        paragraphEmphasized1=""
        paragraph1=" Au programme : "
        paragraphEmphasized2="rencontres avec des femmes passionnées, ateliers pratiques en cybersécurité, IA et data, et échanges autour des métiers du numérique."
        paragraph2="Une expérience unique pour oser l’informatique, découvrir ses opportunités et se projeter dans un avenir digital."
        buttonText="Réservez vos sessions"
        buttonLink="/programme"
        date="Du 07 au 09 Juillet"
      />
      <WorkshopCalendar />
      <BenefitsSection />
      <section id="speakers">
        <SpeakersSection />
      </section>
    </>
  );
};

export default Home;
