import { Avatar, Box, Divider, Paper, Typography, useMediaQuery, useTheme } from "@mui/material"
import { BoxOn } from "./components"
import { RTypography } from "./components/RTypography"
import { SingleBox } from "./components/SingleBox"
import { SingleBoxDev } from "./components/SingleBoxDev"

export const PaginaInicial: React.FC = () => {

    const theme = useTheme()

    const titulo = '< Olá, meu nome é Alexandre />'

    const linguagens = ['Typescript', 'Javascript', 'Html', 'Css', 'Python', 'Java', 'Git']
    const Frameworks = ['React', 'NodeJs', 'Express.Js']
    const outros = ['Material UI', 'GitHub', 'MongoDb', 'Sql', 'Json-Server', 'Bcrypt', 'Passport', 'Bootstrap']

    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

    const lgDown = useMediaQuery(theme.breakpoints.down('lg'))

    const xlDown = useMediaQuery(theme.breakpoints.down('xl'))

    const boxWidth = (xlDown ? '38vh' : '50vh');

    return (

        <>
            {/* Inicial */}
            <Box component={Paper} variant="outlined" display="flex" flexDirection="column" justifyContent='center' alignItems='center' gap={2.5} sx={{ m: 3, width: 'auto', minWidth: 500 }}>

                <RTypography textH="h3" mdTextH="h4" smTextH="h5" WrapX="nowrap" text={titulo} top="2vh" />

                <RTypography textH="h4" mdTextH="h5" smTextH="h6" text="Um Desenvolvedor Frontend" />

                <RTypography textH="h4" mdTextH="h5" smTextH="h6" WrapX="nowrap" text="Desenvolvo de maneira simples e organizada" />

                <Avatar sx={{ height: theme.spacing(smDown ? 20 : mdDown ? 22 : 24), width: theme.spacing(smDown ? 20 : mdDown ? 22 : 24), marginTop: "2vh" }} src="https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/436363297_818210166907305_1542087175055048044_n.jpg?ccb=11-4&oh=01_Q5AaIGpoM61NMIZB7HUVfyLZcecYv048R9d9dKJNTwaB9UIe&oe=669535D0&_nc_sid=e6ed6c&_nc_cat=109" />

                <Box component="img"
                    sx={{
                        height: 250,
                        width: (smDown ? 350 : mdDown ? 400 : 600),
                        maxHeight: { sm: 200, md: 225 },
                        maxWidth: { lg: 600, md: 600 },
                        marginTop: "2vh"
                    }}
                    src="https://mattfarley.ca/img/hero-devices.svg">

                </Box>

                {smDown ? undefined : <Divider sx={{ m: (mdDown ? '0vh 0' : '1vh 0') }} />}
            </Box>

            <Box sx={{ marginTop: "2vh" }}>
                <Divider />
            </Box>

            {/* Sobre mim */}
            <Box component={Paper} variant="outlined" sx={{ m: 3, backgroundColor: 'rgba(0, 0, 0, 0.2)' }} display={'flex'} flexDirection={"column"} justifyContent={'center'} alignItems={'center'} >

                <RTypography textH="h4" smTextH="h4" mdTextH="h4" textColor="white" top="10vh" text="Apresentação" />

                {lgDown
                    ? <SingleBox mdWidth="60vh" smWidth="55vh" />
                    : <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={3} sx={{ width: "150vh" }}>
                        <BoxOn
                            titulo="Quem sou"
                            texto1="Meu nome é Alexandre, tenho 23 anos e moro em Porto Alegre. Estou sempre em busca de
                        novas oportunidades para evoluir."
                            exibirButton
                            buttonName="Instagram"
                            to="https://www.instagram.com/aleexanduarte/"
                            color="white"
                            widthX={boxWidth}></BoxOn>

                        <BoxOn
                            titulo="Sobre mim"
                            texto1="Sou um estudante de Analise e desenvolvimento de sistemas na Unisinos, aprendendo
                        além do curso diversas tecnologias."
                            exibirButton
                            buttonName="Linkedin"
                            to="https://www.linkedin.com/in/alexandre-silva-duarte-dos-santos-862988202/"
                            color="white"
                            widthX={boxWidth}></BoxOn>

                        <BoxOn
                            titulo="Objetivo"
                            texto1="Buscando criar projetos desafiadores de maneira organizada, estou disposto a trabalhar tanto com Back-End quanto com Front-End"
                            exibirButton
                            buttonName="GitHub"
                            to="https://github.com/AlexandreSantospl"
                            color="white"
                            widthX={boxWidth}></BoxOn>
                    </Box>}



                <Box sx={{ marginTop: "10vh" }}>
                    <Divider />
                </Box>
            </Box >

            <Box sx={{ marginTop: "2vh" }}>
                <Divider />
            </Box>

            {/* Conhecimento */}
            <Box component={Paper} variant="outlined" display="flex" flexDirection="column" justifyContent='center' alignItems='center' gap={2.5} sx={{ m: 3, width: 'auto' }}>
                <Typography variant="h4" sx={{ color: 'black', marginTop: '10vh' }}>
                    Conhecimento
                </Typography>

                {lgDown
                    ? <SingleBoxDev mdWidth="60vh" smWidth="55vh" />
                    : <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={3} sx={{ width: "150vh" }}>
                        <BoxOn
                            titulo="Linguagens"
                            lista={linguagens}
                            to="https://www.instagram.com/aleexanduarte/"
                            color="black"
                            widthX={boxWidth}></BoxOn>

                        <BoxOn
                            titulo="Frameworks"
                            lista={Frameworks}
                            to="https://github.com/AlexandreSantospl"
                            color="black"
                            widthX={boxWidth}
                            itemWidth="40%"></BoxOn>

                        <BoxOn
                            titulo="Bancos e Outros"
                            lista={outros}
                            to="https://github.com/AlexandreSantospl"
                            color="black"
                            widthX={boxWidth}></BoxOn>
                    </Box>}



                <Divider sx={{ m: '3vh 0' }} />
            </Box>

            <Box sx={{ marginTop: "2vh" }}>
                <Divider />
            </Box>



        </>
    )
}