import React, { useState } from 'react';
import { Box, Button, Icon, useMediaQuery, useTheme } from '@mui/material';
import { BoxOn } from './BoxOn';

interface ISingleBox {
    smWidth?: string;
    mdWidth?: string;
}


const boxes = [
    {
        title: "Quem sou",
        texto: "Meu nome é Alexandre, tenho 23 anos e moro em Porto Alegre. Estou sempre em busca de novas oportunidades para aprimorar meus conhecimentos na área.",
        button: "INSTAGRAM",
        link: "https://www.instagram.com/aleexanduarte/"
    },
    {
        title: "Sobre mim",
        texto: "Sou um estudante de Analise e desenvolvimento de sistemas na Unisinos, aprendendo além do curso diversas tecnologias.",
        button: "LINKEDIN",
        link: "https://www.linkedin.com/in/alexandre-silva-duarte-dos-santos-862988202/"
    },
    {
        title: "Objetivo",
        texto: "Buscando criar projetos desafiadores de maneira organizada, estou disposto a trabalhar tanto com Back-End quanto com Front-End.",
        button: "GITHUB",
        link: "https://github.com/AlexandreSantospl"
    }
];

export const SingleBox: React.FC<ISingleBox> = ({ mdWidth, smWidth }) => {

    const theme = useTheme();

    const smDown = useMediaQuery(theme.breakpoints.down('sm'))


    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + boxes.length) % boxes.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % boxes.length);
    };

    const currentBox = boxes[currentIndex];

    return (
        <>
            <Box display={'flex'} sx={{ width: (smDown ? smWidth : mdWidth) }}>
                <Button onClick={handlePrev} sx={{ color: 'white', maxHeight: 500, marginTop: '10vh' }}>
                    <Icon>arrow_backIos</Icon>
                </Button>
                <BoxOn titulo={currentBox.title} texto1={currentBox.texto} buttonName={currentBox.button} to={currentBox.link} exibirButton color='white' top='3vh'></BoxOn>

                <Button onClick={handleNext} sx={{ color: 'white', maxHeight: 500, marginTop: '10vh' }}>
                    <Icon>arrow_forwardIos</Icon>
                </Button>
            </Box>
        </>
    );
};

