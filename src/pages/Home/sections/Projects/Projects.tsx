import styled from "@emotion/styled"
import theme from "../../../../theme"
import { Box, Container, Grid, Typography } from "@mui/material"
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard"
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent"

const Projects = () => {

    const StyledProjects = styled("div")(() => ({
        backgroundColor: theme.palette.primary.main,
        paddingBottom: "3rem"

    }))

    const projects = [{
        title: "Project Exemple",
        subtitle: "Jul 2023 - Dez 2023",
        srcImg: "/src/assets/images/project-trello.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
        technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
        websiteURL: "https://trello.com/",
        codeURL: "https://github.com/",
    },
    {
        title: "Project Exemple",
        subtitle: "Jul 2023 - Dez 2023",
        srcImg: "/src/assets/images/project-financas.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
        technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
        websiteURL: "https://trello.com/",
        codeURL: "https://github.com/",
    },]

    return (
        <>
            <StyledProjects>
                <Container>
                    <Box id="about" sx={{ pt: 5, mb: 3 }}>
                        <Typography sx={{ color: (theme) => theme.palette.primary.contrastText, pb: 2 }} variant="h2" align="center" >Projects</Typography>
                    </Box>

                    <Grid container spacing={5}>
                        {projects.map((project: ProjectCardProps, index: number) => (
                            <Grid size={{md:6}}   key={index}>
                                <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                    <ProjectCard
                                        title={project.title}
                                        subtitle={project.subtitle}
                                        srcImg={project.srcImg}
                                        description={project.description}
                                        technologies={project.technologies}
                                        websiteURL={project.websiteURL}
                                        codeURL={project.codeURL}
                                    />
                                </AnimationComponent>
                            </Grid>
                        ))}
                    </Grid>

                </Container>
            </StyledProjects>
        </>
    )
}

export default Projects
