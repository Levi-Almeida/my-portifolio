import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/foto-perfil.jpeg"
import { Box, Container, Grid, Typography } from "@mui/material"


import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StytledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

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

    return (
        <>
            <StyledHero>
                <Container sx={{ maxWidth: "lg" }}>
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
                            <Typography sx={{ color: (theme) => theme.palette.primary.contrastText }} variant="h2" align="center">I'm a Software Engineer</Typography>

                            <Grid container spacing={3} sx={{ display: "flex", justifyContent: "center", pt: 3 }}>
                                <Grid size={{ xs: 12, md: 4 }}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}>
                                    <StyledButton>
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
                                    <StyledButton>
                                        <EmailIcon />
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
