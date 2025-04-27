import { Routes, Route, useNavigate } from "react-router-dom";
import Tabs from "../components/layout/tabs/Tabs";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-6 ml-60">
        <Routes>
          <Route path="/task" element={<Tabs />} />
          <Route path="/calendar" element={<div>✅ Ini konten Calendar</div>} />
          <Route
            path="/sticky-wall"
            element={<div>⚙️ Ini konten Sticky Wall</div>}
          />
        </Routes>
      </div>
    </>
  );
}
