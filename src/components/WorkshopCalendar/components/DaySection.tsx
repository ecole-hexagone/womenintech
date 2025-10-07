import type { Workshop } from "../types";
import { WorkshopRow } from "./WorkshopRow";
import { formatDate, getDayOfWeek } from "../utils/dateUtils";

interface DaySectionProps {
  day: string;
  workshops: Workshop[];
  isExpanded: boolean;
  selectedWorkshop: string | null;
  onToggleExpansion: (day: string) => void;
  onWorkshopSelect: (id: string | null) => void;
}

export const DaySection: React.FC<DaySectionProps> = ({
  day,
  workshops,
  isExpanded,
  selectedWorkshop,
  onToggleExpansion,
  onWorkshopSelect,
}) => {
  const firstWorkshop = workshops[0];

  if (!firstWorkshop) {
    return null;
  }

  return (
    <div
      className={`border-2 ${
        day === "jour2" ? "border-secondary" : "border-primary"
      } rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden`}
    >
      <div
        className={`${
          day === "jour2"
            ? "bg-gradient-to-r from-secondary-dark via-secondary to-secondary-light"
            : "bg-gradient-to-r from-primary-dark via-primary to-primary-light"
        } text-white p-3 md:p-4 flex items-center justify-between cursor-pointer`}
        onClick={() => onToggleExpansion(day)}
      >
        <div className="flex items-center flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6 mr-2"
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
          <h4 className="text-lg md:text-xl font-bold">
            {getDayOfWeek(firstWorkshop.date)} {formatDate(firstWorkshop.date)}
          </h4>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 ${
            isExpanded ? "transform rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isExpanded ? (
        <div
          className="p-3 md:p-4 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')] overflow-x-auto"
          style={{ scrollbarWidth: "thin" }}
        >
          {workshops.length > 0 ? (
            <div>
              <h4 className="font-bold text-primary mb-3 flex items-center text-base md:text-lg">
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
                Programme de la journée
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-blue-50 text-primary">
                      <th className="py-2 md:py-3 px-2 md:px-4 text-left border-b border-blue-100 font-bold w-1/4 text-sm md:text-base">
                        Horaire
                      </th>
                      <th className="py-2 md:py-3 px-2 md:px-4 text-left border-b border-blue-100 font-bold w-1/2 text-sm md:text-base">
                        Activité
                      </th>
                      {/*<th className="py-2 md:py-3 px-2 md:px-4 text-left border-b border-blue-100 font-bold w-1/4 text-sm md:text-base">
                        Intervenant(e)
                      </th>*/}
                    </tr>
                  </thead>
                  <tbody>
                    {workshops.map((workshop, index) => (
                      <WorkshopRow
                        key={workshop.id}
                        workshop={workshop}
                        selectedWorkshop={selectedWorkshop}
                        onWorkshopSelect={onWorkshopSelect}
                        bgColor={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              Aucun atelier planifié pour cette journée.
            </div>
          )}
        </div>
      ) : (
        <div
          className="p-4 text-center text-gray-500 py-6 md:py-10 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')] cursor-pointer"
          onClick={() => onToggleExpansion(day)}
        >
          <p className="flex items-center justify-center text-sm md:text-base">
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
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Cliquez pour voir le programme détaillé
          </p>
        </div>
      )}
    </div>
  );
};
