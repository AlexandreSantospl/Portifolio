import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes";
import { MenuLateral } from "./shared/components/menu-lateral/MenuLateral";

export const App = () => {
  return (
    <BrowserRouter>
      <MenuLateral>
        <AppRoutes />
      </MenuLateral>
    </BrowserRouter>
  );
}

