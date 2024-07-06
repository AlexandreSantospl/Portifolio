import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface IBoxOn {
    widthX?: string;
    heightY?: string;
    titulo?: string;
    texto1?: string;
    lista?: string[];
    buttonName?: string;
    to: string;
    color: string;
    exibirButton?: boolean;
    top?: string;
    itemWidth?: string;
}

export const BoxOn: React.FC<IBoxOn> = ({ titulo, texto1, lista, buttonName, to, color, exibirButton, top = '3vh', widthX = '70vh', heightY = '50vh', itemWidth = '60%'}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        if (to.startsWith('http')) {
            window.location.href = to;
        } else {
            navigate(to);
        }
    };

    return (
        <Box component={Paper} variant="outlined" display={"flex"} flexDirection={"column"} alignItems={'center'} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', width: widthX , height: heightY, marginTop: '10vh' }}>
            <Typography variant="h4" color={color} sx={{ marginTop: '4vh' }}>
                {titulo}
            </Typography>

            <Typography variant='h5' color={color} sx={{ textAlign: 'center', marginTop: top, width: '70%' }}>
                {texto1}
            </Typography>

            <Box display={'flex'} flexDirection={"row"} flexWrap="wrap" alignItems={'center'} justifyContent={'center'} gap={2} sx={{ width: itemWidth }}>
                {lista && lista.map((item, index) => (
                    <Box 
                    component={Paper} 
                    variant="elevation" 
                    key={index} 
                    display={'flex'} 
                    flexDirection={"column"} 
                    alignItems={'center'} 
                    justifyContent={'center'} 
                    sx={{ width: '9vh', height: '7vh', border: 'solid', borderRadius: '120px', bgcolor: '#302b63'}}>
                        
                        <Typography sx={{ textAlign: 'center', color: '#f5f5f5', textShadow: '1px 1px 5px black'}}>{item}</Typography>
                    
                    </Box>
                ))}
            </Box>

           
            {exibirButton && <Box display="flex" flex={1} justifyContent="center" alignItems="flex-end" width="100%" sx={{ mb: '2vh', marginBottom: '6vh' }}>
                <Button variant="contained" sx={{ width: '15vh', height: '5vh', bgcolor: '#5be9b9', color: 'black' }} onClick={handleClick}>
                    {buttonName}
                </Button>
            </Box>}
        </Box>
    )
}
