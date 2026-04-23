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
        "Javascript", "Typescript", "React", "Next", "Git", "HTML", "CSS", "Cypress", "AWS", "GCP", "Material UI", "Figma"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" sx={{ pt: 5, mb: 3 }}>
                    <Typography sx={{ variant: "h2", textAlign: "center" }} >About me</Typography>
                </Box>
                <Grid container sx={{ spacing: 2, display: "flex", justifyContent: "center", pb: 3 }}>
                    <Grid sx={{ xs: 8, md: 3 }}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography sx={{ textAlign: "center", fontWeight: 600 }}>Experience</Typography>
                                <Typography sx={{ textAlign: "center" }}>1+ years</Typography>
                                <Typography sx={{ textAlign: "center" }}>Frontend Development</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid sx={{ xs: 8, md: 3 }}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography sx={{ textAlign: "center", fontWeight: 600 }}>Education</Typography>
                                <Typography sx={{ textAlign: "center" }}>Bachelors Degree</Typography>
                                <Typography sx={{ textAlign: "center" }}>Electrical Engineer</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box sx={{ pb: 1 }}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras porta semper velit vel rutrum.
                        Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris.
                        Phasellus a ultrices elit.
                        Curabitur ut diam eu orci auctor pretium.
                        Nullam ultricies erat quam, eget porta velit vehicula sit amet.
                        Nullam sodales iaculis metus, sed vestibulum nisl vulputate at.
                        Integer in pulvinar libero.
                        Donec ornare est quis tortor varius efficitur.
                        Maecenas sed erat quis felis facilisis pellentesque.
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id felis convallis, luctus lorem eget, varius dolor.
                    </Typography>
                </Box>
                <hr />
                <Box sx={{ id: "skills", pt: 1, mb: 3 }}>
                    <Typography sx={{ variant: "h3", textAlign: "center", fontWeight: 300 }}>Skills</Typography>
                </Box>
                <Box sx={{ mb: 5 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {skillsSet.map((skill, index) => (
                            <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                                <StyledCard sx={{ variant: "outlined" }} >
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