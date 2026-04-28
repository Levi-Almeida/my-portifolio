import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "React", "NodeJs", "Typescript", "Javascript", "Git", "HTML", "CSS", ".Net", "AWS", "RPA", "Oracle SQL", "Automation"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" sx={{ pt: 5, mb: 3 }}>
                    <Typography sx={{ color: (theme) => theme.palette.primary.main, pb: 2 }} variant="h2" align="center" >About me</Typography>
                </Box>
                <Grid container spacing={3} sx={{ display: "flex", justifyContent: "center", pb: 3 }}>
                    <Grid size={{ xs: 8, md: 3 }}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography sx={{ textAlign: "center", fontWeight: 600 }}>Experience</Typography>
                                <Typography sx={{ textAlign: "center" }}>2 years</Typography>
                                <Typography sx={{ textAlign: "center" }}>Tecnology Intern</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>

                    <Grid size={{ xs: 8, md: 3 }}>
                        <StyledCard variant="outlined">
                            <WorkspacePremiumIcon />
                            <Typography sx={{ textAlign: "center", fontWeight: 600 }}>Experience</Typography>
                            <Typography sx={{ textAlign: "center" }}>1 year</Typography>
                            <Typography sx={{ textAlign: "center" }}>Software Developer Jr</Typography>
                        </StyledCard>

                    </Grid>

                    <Grid size={{ xs: 8, md: 3 }}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography sx={{ textAlign: "center", fontWeight: 600 }}>Education</Typography>
                                <Typography sx={{ textAlign: "center" }}>Bachelors Degree</Typography>
                                <Typography sx={{ textAlign: "center" }}>Systems Analysis</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>


                </Grid>
                <Box sx={{ pb: 3 }}>
                    <Typography>
                        Analista de Sistemas Full Stack com experiência no desenvolvimento de aplicações utilizando React, Node.js e .NET, além de integração com APIs RESTful e bancos de dados relacionais. Atuo na construção de soluções escaláveis e de fácil manutenção.
                        Tenho vivência em automação de processos (RPA) e participação em todo o ciclo de desenvolvimento. Também possuo experiência com ServiceNow, atuando na gestão de incidentes e suporte a operações de TI.
                        Familiaridade com metodologias ágeis e desenvolvimento de interfaces modernas e responsivas.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" sx={{ pt: 1, mb: 3 }}>
                    <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 300 }}>Skills</Typography>
                </Box>
                <Box sx={{ mb: 5 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {skillsSet.map((skill, index) => (
                            <Grid key={index} size={{ xs: 2, sm: 4, md: 2 }}>
                                <StyledCard variant="outlined" >
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection