import HeroSection from "../components/HeroSection";
import SpeakersSection from "../components/SpeakersSection";
import WorkshopCalendar from "../components/WorkshopCalendar/index";

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-bg-white via-bg-white to-bg-tertiary">
      <HeroSection
        title="Plongez au cœur du monde de l’IT avec deux journées inspirantes à l’École Hexagone !"
        backgroundImage="home-hero.webp"
        paragraphEmphasized1=""
        paragraph1=" Au programme : "
        paragraphEmphasized2="rencontres avec des femmes passionnées, ateliers pratiques en cybersécurité, IA et data, et échanges autour des métiers du numérique."
        paragraph2="Une expérience unique pour oser l’informatique, découvrir ses opportunités et se projeter dans un avenir digital."
        buttonText="Réservez vos sessions"
        buttonLink="/programme"
        date="Le 27 & 28 Novembre 2025"
      />
      <WorkshopCalendar />
      <section id="speakers">
        <SpeakersSection />
      </section>
    </div>
  );
};

export default Home;
