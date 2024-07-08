import { Box, Divider, Icon, Tab, Tabs } from "@mui/material";
import { IListItemLinkProps } from "../menu-lateral/MenuLateral";
import {  useNavigate } from "react-router-dom";
import { useAppThemeContext } from "../../contexts";
import { useCallback, useMemo } from "react";




export const ItemsLinkProps: React.FC<IListItemLinkProps> = ({ icon, label, to, onClick }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        onClick?.();
        navigate(to)
    }

    const VerificarLabel = useMemo(() => {
        if(label === "x"){
            return false
        } else{
            return true
        }
    }, [label])

    const VerificarIcon = useMemo(() => {
        if(icon !== undefined){
            return true
        } else{
            return false
        }
    },[icon])
        



    return (
        <Box display="flex">
            {VerificarIcon ? <Icon onClick={handleClick} sx={{ fontSize: '2.5rem', color: 'white'}}>{icon}</Icon> : undefined}
            {VerificarLabel ? <Tab value={to} label={label} onClick={handleClick} sx={{fontFamily: "Helvetica"}}/> : undefined}
        </Box>
    )
}

export const MenuHorizontal: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const { themeName, /* toggleTheme */ } = useAppThemeContext()

    const themeLight = useCallback(() => {
        if (themeName === 'light') return true;
        return false;
    }, [themeName])

    


    return (
        <>
            <Box
                width='100%'
                minHeight="100%"
                sx={{
                    background: !themeLight()
                        ? 'linear-gradient(to bottom right, #0f0c29, #302b63, #24243e)'
                        : 'linear-gradient(to bottom right, #0f0c29, #302b63, #24243e)'
                        , minWidth: 550}}>


                <Box color={themeLight() ? 'white' : 'black'} sx={{ width: "100%", height: "80px" }} display='flex' justifyContent='center' alignItems='center' >
                    <Tabs >
                        <ItemsLinkProps label="Pagina Inicial" to="pagina-inicial" />
                        <ItemsLinkProps label="Apresentação" to="contato" />
                        <ItemsLinkProps label="Conhecimentos" to="contato" />
                        <ItemsLinkProps label="Projetos" to="pagina-inicial" />
                        <ItemsLinkProps label="Contato" to="contato" />
                        <Divider variant="middle" orientation="vertical"/>
                        {/* <ItemsLinkProps onClick={toggleTheme} icon={themeLight() ? "sunny" : "bedtime"} to="" label="x"/> */}
                    </Tabs>
                </Box>


                <Divider />

                <Box flex={1}>{children}</Box>
            </Box>
        </>

    )
}