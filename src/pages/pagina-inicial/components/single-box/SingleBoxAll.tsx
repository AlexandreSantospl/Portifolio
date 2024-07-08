import { useState } from "react"
import { BoxOn } from "../box-on/BoxOn";
import { Box, Button, Icon, useMediaQuery, useTheme } from "@mui/material";

interface ISingleBoxAll {
    smWidth?: string;
    mdWidth?: string;
    object: {
        lista?: string[];
        titulo?: string;
        texto?: string;
        button?: string;
        link: string;
        img?: string;
        mostrarTitulo?: boolean;
        mostrarTexto?: boolean;
        mostrarButton?: boolean;
        mostrarImg?: boolean;
        mostrarLista?: boolean;
        white?: boolean
    }[];
}


export const SingleBoxAll: React.FC<ISingleBoxAll> = ({ mdWidth, smWidth, object }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + object.length) % object.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % object.length);
    };

    const currentObject = object[currentIndex];

    const theme = useTheme();

    const smDown = useMediaQuery(theme.breakpoints.down('sm'))


    return (
        <>
            <Box display={'flex'} sx={{ width: (smDown ? smWidth : mdWidth) }}>
                <Button onClick={handlePrev} sx={{ color: (currentObject.white ? 'white' : 'black'), maxHeight: 500, marginTop: '10vh' }}>
                    <Icon>arrow_backIos</Icon>
                </Button>

                <BoxOn
                    titulo={currentObject.mostrarTitulo ? currentObject.titulo : undefined}
                    texto1={currentObject.mostrarTexto ? currentObject.texto : undefined}
                    lista={currentObject.mostrarLista ? currentObject.lista : undefined}
                    imagem={currentObject.mostrarImg ? currentObject.img : undefined}
                    buttonName={currentObject.mostrarButton ? currentObject.button : undefined}
                    to={currentObject.link}
                    exibirButton={currentObject.mostrarButton ? true : false}
                    mostrarImagem={currentObject.mostrarImg ? true : false}
                    color={currentObject.white ? 'white' : 'black'}
                    top='3vh'></BoxOn>


                <Button onClick={handleNext} sx={{ color: (currentObject.white ? 'white' : 'black'), maxHeight: 500, marginTop: '10vh' }}>
                    <Icon>arrow_forwardIos</Icon>
                </Button>
            </Box>
        </>
    )
}