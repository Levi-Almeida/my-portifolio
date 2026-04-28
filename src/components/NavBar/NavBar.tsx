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
}));

export default function Navbar() {
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
            element.scrollIntoView({ behavior: "smooth" });
            handleClose();
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="absolute">
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