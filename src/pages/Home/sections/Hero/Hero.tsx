import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/foto-perfil.jpeg"
import { Box, Container, Grid, Typography } from "@mui/material"


import DownloadIcon from '@mui/icons-material/Download';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StyledButton from "../../../../components/StytledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import CV from "../../../../assets/files/Levi_Full-Stack.pdf";
import Typewriter from "../../../../components/TypeWriter/TypeWriter";

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0px"
        }
    }))

    const StyledImg = styled("img")(() => ({
        width: "75%",
        borderRadius: "50%",

        border: `1px solid ${theme.palette.primary.contrastText}`,

    }))


    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = CV;
        link.download = "Levi-Almeida-CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const handleWhatsApp = () => {
        const message = encodeURIComponent(
            "Olá Levi, vi seu portfólio e gostaria de conversar!"
        );

        window.open(`https://wa.me/5511914898784?text=${message}`, "_blank");
    };

    return (
        <>
            <StyledHero id="hero">
                <Container  sx={{ maxWidth: "lg" }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box sx={{ position: "relative", pb: 3 }}>

                                <Box sx={{ position: "absolute", width: "150%", top: -100, right: 0 }} >
                                    <AnimatedBackground />
                                </Box>
                                <Box sx={{ textAlign: "center", position: "relative" }} >
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>

                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography sx={{ color: (theme) => theme.palette.primary.contrastText, pb: 2 }} variant="h1" align="center">Levi Almeida</Typography>
                            <Typewriter text="I'm a Software Developer" delay={120} variant="h3" color="primary.contrastText" />

                            <Grid container spacing={3} sx={{ display: "flex", justifyContent: "center", pt: 3 }}>
                                <Grid size={{ xs: 12, md: 4 }}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}>
                                    <StyledButton onClick={() => handleDownload()}>
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}>
                                    <StyledButton onClick={handleWhatsApp}>
                                        <WhatsAppIcon />
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>

            </StyledHero>

        </>
    )
}

export default Hero
