import { Box, Button, Paper } from "@mui/material";
import { ReactElement } from "react";

export interface IButtonIcon {
    icon: ReactElement;
    label?: string;
    to: string;
}

export interface IButtonIconProps {
    lista: IButtonIcon[];
    widthX?: string;
    itemWidth?: string;
    heightY?: string;
    top?: string;
}


export const ButtonIcon: React.FC<IButtonIconProps> = ({ itemWidth, widthX, heightY, top = "10vh", lista }) => {

    return (
        <Box component={Paper} variant="outlined" display="flex" alignItems='center' justifyContent='center' gap={3} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', width: widthX, height: heightY, marginTop: top }}>

            {lista.map((item, index) => (
                <Button onClick={() => { window.open(item.to, '_blank'); }} key={index} variant="contained" sx={{
                    width: '50px',
                    height: '60px',
                    borderRadius: '50%',
                    padding: 0,
                    bgcolor: '#5be9b9'
                }}>
                    {item.icon}

                </Button >
            ))
            }

        </Box >
    )
}