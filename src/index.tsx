import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DesktopNoAi } from "./screens/DesktopNoAi/MainScreen";
import PrivacyPolicyPage from "./screens/PrivacyPolicyPage"; // Import the new page
import NotFoundPage from "./screens/NotFoundPage"; // Import the NotFoundPage

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DesktopNoAi />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
