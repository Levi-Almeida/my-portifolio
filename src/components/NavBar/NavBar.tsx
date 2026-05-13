import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { MenuList, styled } from '@mui/material';

export const StyledNavLink = styled("a")(() => ({
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer"

}));

export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        display: "flex",
        justifyContent: "end"
    },
    [theme.breakpoints.up('md')]: {
        display: "none",
    },
}));

export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        display: "none",
    },
    [theme.breakpoints.up('md')]: {
        display: "flex",
        justifyContent: "space-evenly",
    },
    height: "80px",
}));

export default function Navbar() {

    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSmoothScroll = (id: string) => {
        const element = document.getElementById(id);

        if (element) {
            const navbarHeight = 80;
            if (id != "hero") {

                const elementPosition =
                    element.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({
                    top: elementPosition - navbarHeight,
                    behavior: "smooth",
                });
                handleClose();
            } else {
                element.scrollIntoView({ behavior: "smooth" });
                handleClose();
            }
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed' sx={{
                background: scrolled
                    ? "rgba(20,20,20,0.7)"
                    : "transparent",

                backdropFilter: scrolled
                    ? "blur(10px)"
                    : "none",

                WebkitBackdropFilter: scrolled
                    ? "blur(10px)"
                    : "none",

                boxShadow: scrolled
                    ? "0 4px 20px rgba(0,0,0,0.3)"
                    : "none",

                borderBottom: scrolled
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid transparent",

                transition: "all 0.3s ease",
            }}>
                <StyledMobileToolbar>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuList onClick={() => handleSmoothScroll("hero")}>
                            <StyledNavLink>Home</StyledNavLink>
                        </MenuList>
                        <MenuList onClick={() => handleSmoothScroll("about")}>
                            <StyledNavLink>About</StyledNavLink>
                        </MenuList>
                        <MenuList onClick={() => handleSmoothScroll("skills")}>
                            <StyledNavLink>Skills</StyledNavLink>
                        </MenuList>
                        <MenuList onClick={() => handleSmoothScroll("projects")}>
                            <StyledNavLink>Projects</StyledNavLink>
                        </MenuList>
                    </Menu>
                </StyledMobileToolbar>
                <StyledDesktopToolbar variant="regular">
                    <MenuList onClick={() => handleSmoothScroll("hero")}>
                        <StyledNavLink>Home</StyledNavLink>
                    </MenuList>
                    <MenuList onClick={() => handleSmoothScroll("about")}>
                        <StyledNavLink>About</StyledNavLink>
                    </MenuList>
                    <MenuList onClick={() => handleSmoothScroll("skills")}>
                        <StyledNavLink>Skills</StyledNavLink>
                    </MenuList>
                    <MenuList onClick={() => handleSmoothScroll("projects")}>
                        <StyledNavLink>Projects</StyledNavLink>
                    </MenuList>
                </StyledDesktopToolbar>
            </AppBar>
        </Box >
    );
}