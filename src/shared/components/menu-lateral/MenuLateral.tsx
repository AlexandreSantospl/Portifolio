import { Avatar, Box, Button, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { useAppThemeContext, useDrawerContext } from "../../contexts";
import { useCallback } from "react";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";


interface IListItemLinkProps {
    label: string;
    icon: string;
    to: string;
    onClick: (() => void) | undefined;
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
        <ListItemButton selected={!!match} onClick={handleClick}>
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

    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const themeLight = useCallback(() => {
        if (themeName === 'light') return true;
        return false;
    }, [themeName])


    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toggleDrawerOpen}>
                <Box height="100%" width={theme.spacing(28)} display="flex" flexDirection="column">


                    <Box width="100%" height={theme.spacing(20)} display="flex" justifyContent="center" alignItems="center">
                        <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} src="https://scontent.fpoa4-1.fna.fbcdn.net/v/t39.30808-6/358634052_3569224530071408_662008278978389146_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE_0_9IW1SdEPKFbhFd0yGU5biarQ8MvmLluJqtDwy-YmlSodEAyyVgVeaA80x9Q5DN3khUfSoj4yLzGCDM-luR&_nc_ohc=yjIIZC7zapYQ7kNvgGgvaF5&_nc_ht=scontent.fpoa4-1.fna&oh=00_AYAA7hFUskpbBlV67Xq01fUaJ0xlxaVX2BSJsmEwvTE_1Q&oe=667974A7" />
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
                                onClick={smDown? toggleDrawerOpen : undefined}/>
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
