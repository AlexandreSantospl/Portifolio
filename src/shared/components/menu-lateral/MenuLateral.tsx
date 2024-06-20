import { Avatar, Box, Divider, Drawer, List, useTheme } from "@mui/material"
import { UseListItem } from "./components/ListItem";

export const MenuLateral: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const theme = useTheme();

    return (
        <>
            <Drawer variant="permanent">
                <Box height="100%" width={theme.spacing(28)} display="flex" flexDirection="column">

                    <Box width="100%" height={theme.spacing(20)} display="flex" justifyContent="center" alignItems="center">
                        <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} src="https://scontent.fpoa4-1.fna.fbcdn.net/v/t39.30808-6/358634052_3569224530071408_662008278978389146_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE_0_9IW1SdEPKFbhFd0yGU5biarQ8MvmLluJqtDwy-YmlSodEAyyVgVeaA80x9Q5DN3khUfSoj4yLzGCDM-luR&_nc_ohc=yjIIZC7zapYQ7kNvgGgvaF5&_nc_ht=scontent.fpoa4-1.fna&oh=00_AYAA7hFUskpbBlV67Xq01fUaJ0xlxaVX2BSJsmEwvTE_1Q&oe=667974A7" />
                    </Box>

                    <Divider />

                    <Box>
                        <List component="nav">
                                <UseListItem icone="home" text="Página inicial" />
                                <UseListItem icone="code" text="Sobre" />
                                <UseListItem icone="call" text="Contato" />
                        </List>
                    </Box>

                </Box>
            </Drawer>


            <Box>
                {children}
            </Box>
        </>
    )
}































/* <>
            <Drawer variant="permanent">

                <Box width={theme.spacing(28)} height="100%" display='flex' flexDirection="column" alignItems="center">
                    
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} src="https://scontent.fpoa4-1.fna.fbcdn.net/v/t39.30808-6/358634052_3569224530071408_662008278978389146_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE_0_9IW1SdEPKFbhFd0yGU5biarQ8MvmLluJqtDwy-YmlSodEAyyVgVeaA80x9Q5DN3khUfSoj4yLzGCDM-luR&_nc_ohc=yjIIZC7zapYQ7kNvgGgvaF5&_nc_ht=scontent.fpoa4-1.fna&oh=00_AYBqSB3AFudZ5nUUDmHFQwXmFd3UVHN26etXvbqMPyfukw&oe=66793C67"></Avatar>
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Icon>home</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary={"Página Inicial"} />
                                </ListItemButton>
                            </ListItem>
                        </List>

                    </Box>
                </Box>
            </Drawer>





            <Box height="100vh">
                {children}
            </Box>
        </>
*/