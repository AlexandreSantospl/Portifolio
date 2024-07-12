import { Box, Icon, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import { IListItemLinkProps } from "../menu-lateral/MenuLateral";
import { useNavigate } from "react-router-dom";
import { useAppThemeContext } from "../../contexts";
import { useCallback, useMemo } from "react";




export const ItemsLinkProps: React.FC<IListItemLinkProps> = ({ icon, label, to, onClick }) => {
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        onClick?.();
        if (to.startsWith('#')) {
            const sectionId = to.substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(to);
        }
    };

    const VerificarLabel = useMemo(() => {
        return label !== "x";
    }, [label]);

    const VerificarIcon = useMemo(() => {
        return icon !== undefined;
    }, [icon]);

    const theme = useTheme()

    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box display="flex" alignItems="center">
            {VerificarIcon ? <Icon onClick={handleClick} sx={{ fontSize: '2.5rem', color: 'white' }}>{icon}</Icon> : undefined}
            {VerificarLabel ? (
                <Tab
                    component="a"
                    href={to}
                    label={label}
                    onClick={handleClick}
                    sx={{ fontFamily: "Helvetica", fontSize: smDown? "10px" : mdDown? "12px" : "14px"}}
                />
            ) : undefined}
        </Box>
    );
};

export const MenuHorizontal: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const { themeName, /* toggleTheme */ } = useAppThemeContext()

    const themeLight = useCallback(() => {
        if (themeName === 'light') return true;
        return false;
    }, [themeName])

    return (
        <Box
            width='100%'
            minHeight="100%"
            sx={{
                background: themeLight()
                    ? 'linear-gradient(to bottom right, #0f0c29, #302b63, #24243e)'
                    : 'linear-gradient(to bottom right, #0f0c29, #302b63, #24243e)',
                minWidth: 550
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '80px',
                    padding: '0 16px',
                    position: 'fixed',
                    zIndex: 1100, 
                    background: themeLight()
                        ? 'linear-gradient(to bottom right, #0f0c29, #302b63, #24243e)'
                        : 'linear-gradient(to bottom right, #0f0c29, #302b63, #24243e)',
                }}
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <Tabs sx={{color: "white"}}>
                    <ItemsLinkProps label="Pagina Inicial" to="#pagina-inicial" />
                    <ItemsLinkProps label="Apresentação" to="#apresentacao" />
                    <ItemsLinkProps label="Conhecimentos" to="#conhecimentos" />
                    <ItemsLinkProps label="Projetos" to="#projetos" />
                    <ItemsLinkProps label="Contato" to="#contato" />
                </Tabs>
            </Box>
            <Box sx={{ paddingTop: '80px' }}>
                {children}
            </Box>
        </Box>
    );
};