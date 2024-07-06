import { useState } from "react"
import { BoxOn } from "./BoxOn";
import { Box, Button, Icon, useMediaQuery, useTheme } from "@mui/material";

interface ISingleBoxDev {
    smWidth?: string;
    mdWidth?: string;
}

const conhecimentos = [{
    linguagens: ['Typescript', 'Javascript', 'Html', 'Css', 'Python', 'Java', 'Git'],
    titulo: 'Linguagens',
    color: "black"
},
{
    linguagens: ['Material UI', 'Bootstrap', 'Tailwind CSS', 'VS Code', 'GitHub', 'Pycharm'],
    titulo: 'Dev Tools',
    color: "black"
},
{
    linguagens: ['React', 'NodeJs', 'Express.Js'],
    titulo: 'Frameworks',
    color: "black"
},
{
    linguagens: ['MongoDb', 'Sql', 'Json-Server', 'Bcrypt', 'Passport', 'Handlebars'],
    titulo: 'Bancos e Outros',
    color: "black"
}]

export const SingleBoxDev: React.FC<ISingleBoxDev> = ({mdWidth, smWidth}) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + conhecimentos.length) % conhecimentos.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % conhecimentos.length);
    };

    const currentConhecimentos = conhecimentos[currentIndex];

    const theme = useTheme();

    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <Box display='flex' sx={{ width: (smDown ? smWidth : mdWidth) }}>
                <Button onClick={handlePrev} sx={{ color: 'black', maxHeight: 500, marginTop: '10vh' }}>
                    <Icon>arrow_backIos</Icon>
                </Button>

                <BoxOn
                    titulo={currentConhecimentos.titulo}
                    lista={currentConhecimentos.linguagens}
                    color="black"
                    to=""></BoxOn>

                <Button onClick={handleNext} sx={{ color: 'black', maxHeight: 500, marginTop: '10vh' }}>
                    <Icon>arrow_forwardIos</Icon>
                </Button>
            </Box>
        </>
    )
}