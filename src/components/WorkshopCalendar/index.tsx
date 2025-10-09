import { useState } from "react";
import workshopData from "../../data/workshops.json";
import type { WorkshopCalendarProps, WorkshopsByDay, Workshop } from "./types";
import { DaySection } from "./components/DaySection";

const WorkshopCalendar: React.FC<WorkshopCalendarProps> = () => {
  const [expandedDays, setExpandedDays] = useState<string[]>(
    Object.keys(
      workshopData.reduce((acc, workshop) => {
        if (!acc[workshop.jour]) {
          acc[workshop.jour] = [];
        }
        acc[workshop.jour].push(workshop);
        return acc;
      }, {} as WorkshopsByDay)
    )
  );
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);

  const toggleDayExpansion = (day: string) => {
    if (expandedDays.includes(day)) {
      setExpandedDays(expandedDays.filter((d) => d !== day));
    } else {
      setExpandedDays([...expandedDays, day]);
    }
  };

  const workshopsByDay = workshopData.reduce((acc, workshop) => {
    if (!acc[workshop.jour]) {
      acc[workshop.jour] = [];
    }
    acc[workshop.jour].push(workshop);
    return acc;
  }, {} as WorkshopsByDay);

  return (
    <section className="bg-transparent w-full md:w-11/12 lg:w-3/4 mx-auto rounded-xl shadow-lg my-10 md:my-20 p-4 md:p-6 mb-8 border-2 overflow-hidden">
      <div className="flex flex-col items-center mb-6">
        <h3 className="w-auto mx-auto text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 md:mb-11 relative inline-block text-center">
          Votre programme
          <div className="absolute -bottom-3 left-0 right-0 h-1 bg-secondary rounded-full transform -rotate-1"></div>
        </h3>
        <p className="text-sm md:text-base text-center px-4">
          Venez enrichir vos compétences sur ces 2 jours conçus pour vous et animés par nos intervenantes aux parcours variés.
Nos expertes d’ACENSI et d’ailleurs ainsi que nos étudiants passionnés partageront retours d’expérience, bonnes pratiques
et visions innovantes. Deux jours d’échanges concrets, de découvertes et d’inspiration au cœur de l’IA, de la cybersécurité et des métiers de la Tech.
        </p>
      </div>
      <article className="space-y-6 md:space-y-10">
        {Object.keys(workshopsByDay).map((day) => {
          const dayWorkshops = workshopsByDay[day];
          if (!dayWorkshops || dayWorkshops.length === 0) return null;

          return (
            <DaySection
              key={day}
              day={day}
              workshops={dayWorkshops as Workshop[]}
              isExpanded={expandedDays.includes(day)}
              selectedWorkshop={selectedWorkshop}
              onToggleExpansion={toggleDayExpansion}
              onWorkshopSelect={setSelectedWorkshop}
            />
          );
        })}
      </article>

      <div className="mt-6 flex justify-center">
        <button
          data-tally-open="mV2xZv" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" className="inline-flex items-center bg-secondary hover:bg-transparent text-white hover:text-tertiary hover:border-solid hover:border-2 border-secondary hover:border-tertiary font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer md:text-xl 2xl:text-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Je m'inscris
        </button>
      </div>
    </section>
  );
};

export default WorkshopCalendar;
