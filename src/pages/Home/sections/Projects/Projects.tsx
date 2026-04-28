import styled from "@emotion/styled"
import theme from "../../../../theme"
import { Box, Container, Grid, Typography } from "@mui/material"
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard"
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent"
import image from "../../../../assets/images/LevShopp_image.png"
import authAppImage from "../../../../assets/images/Auth App.jpeg"

const Projects = () => {

    const StyledProjects = styled("div")(() => ({
        backgroundColor: theme.palette.primary.main,
        paddingBottom: "3rem"

    }))

    const projects = [{
        title: "LevShopp",
        subtitle: "Dez 2025",
        srcImg: image,
        description: "LeviShop é uma aplicação front-end de e-commerce desenvolvida em React que consome a API pública DummyJSON para exibição de produtos em formato de vitrine, com foco em uma experiência moderna, fluida e próxima de um e-commerce real.",
        technologies: "Technologies: React, HTML, CSS, APIs",
        websiteURL: "https://produtos-react-nine.vercel.app/",
        codeURL: "https://github.com/Levi-Almeida/LevShopp",
    },
    {
        title: "JWT Node - React",
        subtitle: "May 2025",
        srcImg: authAppImage,
        description: "Sistema de autenticação com JWT, desenvolvido com Node.js (Fastify, Prisma) e React. Permite cadastro, login e acesso a rotas protegidas, com validação de dados no back-end e gerenciamento de autenticação no front-end. Utiliza SQLite, bcrypt para segurança de senhas e Zod para validação.",
        technologies: "Technologies: NodeJs, Prisma, SQLite, React",
        websiteURL: "https://github.com/Levi-Almeida/JWT-Authentication-API---Node.js-Prisma",
        codeURL: "https://github.com/Levi-Almeida/JWT-Authentication-API---Node.js-Prisma",
    },]

    return (
        <>
            <StyledProjects>
                <Container>
                    <Box id="projects" sx={{ pt: 5, mb: 3 }}>
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
