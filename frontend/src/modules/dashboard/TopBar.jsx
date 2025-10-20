import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Avatar,
    Stack,
    Tooltip,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useUser } from '../context/UserProvider';
import { useNavigate, useLocation } from 'react-router-dom';

const TopBar = () => {
    const { user, logout } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            logout();
        }
    };

    const handleGoBack = () => {
        navigate(-1); // go back one page in history
    };

    const canGoBack = location.key && location.pathname !== "/dashboard";

    return (
        <AppBar
            position="static"
            elevation={2}
            sx={{
                background: "linear-gradient(90deg, #1A5276, #154360)",
                color: "#fff",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minHeight: 60,
                    px: 1,
                }}
            >
                <Stack direction="row" alignItems="center" spacing={1.5}>
                    {/* Previous Page Button */}
                    {canGoBack && (
                        <Tooltip title="Go Back">
                            <IconButton
                                color="inherit"
                                onClick={handleGoBack}
                                sx={{
                                    mr: 1,
                                    transition: "0.3s",
                                    "&:active": { transform: "scale(0.9)" },
                                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                                }}
                            >
                                <ArrowBackIcon />
                            </IconButton>
                        </Tooltip>
                    )}

                    <Avatar
                        alt={user?.username}
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.username}&backgroundType=gradientLinear&backgroundColor=b79c70,8c7a5a&fontWeight=700`}
                        sx={{
                            width: 42,
                            height: 42,
                            border: "2px solid rgba(255,255,255,0.6)",
                            boxShadow: "0 0 12px rgba(255,255,255,0.2)",
                        }}
                    />
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 600,
                            letterSpacing: 0.4,
                            color: "#fff",
                            fontSize: "1rem",
                        }}
                    >
                        {user?.username}
                    </Typography>
                </Stack>

                {/* Logout Icon */}
                <IconButton
                    color="inherit"
                    onClick={handleLogout}
                    sx={{
                        transition: "0.3s",
                        "&:active": { transform: "scale(0.9)" },
                        "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                    }}
                >
                    <LogoutIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;
