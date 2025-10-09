import HeroSection from "../components/HeroSection";
import WorkshopCalendar from "../components/WorkshopCalendar/index";

const Home: React.FC = () => {
  return (
    <div className="">
      <HeroSection
        title="Rejoignez un parcours de deux jours pour découvrir, comprendre et échanger autour de l'IA, de la cybersécurité et du rôle des femmes dans la tech."
        backgroundImage="home-hero.webp"
        paragraphEmphasized1=""
        paragraph1=" Au programme : "
        paragraphEmphasized2="rencontres avec des femmes passionnées, ateliers pratiques en cybersécurité, IA et data, et échanges autour des métiers du numérique."
        paragraph2="Une expérience unique pour oser l’informatique, découvrir ses opportunités et se projeter dans un avenir digital."
        buttonText="Je m'inscris"
        buttonLink="/programme"
        date="Le 27 & 28 Novembre 2025"
      />
      <WorkshopCalendar />
    </div>
  );
};

export default Home;
