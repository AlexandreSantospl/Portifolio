import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { AppThemeProvider } from "./shared/contexts/ThemeContext"
import { DrawerProvider } from "./shared/contexts/DrawerContext"
import { MenuHorizontal } from "./shared/components";



export const App = () => {
    return (
        <AppThemeProvider>
            <DrawerProvider>
                <BrowserRouter>
                    <MenuHorizontal>
                        <AppRoutes />
                    </MenuHorizontal>
                </BrowserRouter>
            </DrawerProvider>
        </AppThemeProvider>
    )
}
