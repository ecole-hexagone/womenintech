import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MentionsLegales from "../pages/MentionsLegales";
import PolitiqueConfidentialite from "../pages/PolitiqueConfidentialite";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route
        path="/politique-de-confidentialite"
        element={<PolitiqueConfidentialite />}
      />
    </Routes>
  );
}
