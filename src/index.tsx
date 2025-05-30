import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DesktopNoAi } from "./screens/DesktopNoAi/MainScreen";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DesktopNoAi />
  </StrictMode>,
);
