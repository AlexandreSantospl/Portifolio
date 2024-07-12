import { Avatar, Box, Button, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { useAppThemeContext, useDrawerContext } from "../../contexts";
import { useCallback } from "react";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";


export interface IListItemLinkProps {
    label?: string;
    icon?: string;
    to: string;
    onClick?: (() => void) | undefined;
}

export const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {

    const navigate = useNavigate()

    const resolvedPath = useResolvedPath(to);

    const match = useMatch({ path: resolvedPath.pathname, end: false })

    const handleClick = () => {
        onClick?.();
        navigate(to)
    }

    return (
        <ListItemButton selected={!!match} onClick={handleClick} >
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    )
}

export const MenuLateral: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const theme = useTheme();

    const { themeName, toggleTheme } = useAppThemeContext();
    
    const themeLight = useCallback(() => {
        if (themeName === "light") return true;
        return false;
    }, [themeName])
    
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    
    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toggleDrawerOpen}>
                <Box height="100%" width={theme.spacing(28)} display="flex" flexDirection="column">


                    <Box width="100%" height={theme.spacing(20)} display="flex" justifyContent="center" alignItems="center">
                        <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} src="https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/436363297_818210166907305_1542087175055048044_n.jpg?ccb=11-4&oh=01_Q5AaINBaYiI96uR69NAOTCpiPZAF-KzM-EdpmUmFn-4_Qa5P&oe=6693E450&_nc_sid=e6ed6c&_nc_cat=109" />
                    </Box>

                    <Divider />

                    <Box height={theme.spacing(10)} marginLeft="10%" width="80%" display="flex" justifyContent="center" alignItems="center">
                        <Button variant="contained" color="secondary" size="large" fullWidth onClick={toggleTheme}>
                            <Icon>{themeLight() ? "bedtime" : "circle"}</Icon>
                        </Button>
                    </Box>

                    <Divider />

                    <Box flex={1} >
                        <List component="nav">
                            {drawerOptions.map(drawerOptions => (
                                <ListItemLink
                                    key={drawerOptions.path}
                                    icon={drawerOptions.icon}
                                    label={drawerOptions.label}
                                    to={drawerOptions.path}
                                    onClick={smDown ? toggleDrawerOpen : undefined} />
                            ))}
                        </List>
                    </Box>

                </Box>
            </Drawer>


            <Box height="100vh" width={smDown ? 0 : theme.spacing(20)}>
                {children}
            </Box>
        </>
    )
}
