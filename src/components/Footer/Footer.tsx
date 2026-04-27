import { Box, Container, IconButton, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {

    return (
        <>
            <Box sx={{pt:2, pb:2}}>
                <Container maxWidth="sm">
                    <Box   sx={{pb:1, display:"flex", alignItems:"center", justifyContent:"space-around"}} >
                        <IconButton onClick={() => window.open("https://github.com/Levi-Almeida")}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/Levi-Almeida/")}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton href="mailto:levi02almeida@gmail.com" target="_blank">
                            <EmailIcon />
                        </IconButton>
                    </Box>
                    <Typography sx={{ textAlign:"center"}}>
                        © 2026 Levi Almeida - All rights reserved
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Footer