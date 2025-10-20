import React from 'react'
import TopBar from '../dashboard/TopBar'
import { Box, Divider, Paper, Typography } from '@mui/material'

const Customerprofile = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "#f4f6f8",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <TopBar />
            <Box
                sx={{
                    flex: 1,
                    px: { xs: 2, sm: 4, md: 6 },
                    py: { xs: 3, sm: 4, md: 5 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    bgcolor: "#f8f9fa",
                }}
            >
                {/* Header Card */}
                <Paper
                    elevation={0}
                    sx={{
                        width: "100%",
                        maxWidth: { xs: 420, sm: 600, md: 720 },
                        p: { xs: 3, sm: 4 },
                        borderRadius: 4,
                        background: "#fff",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                        textAlign: "center",
                        border: "1px solid #e0e0e0",
                    }}
                >
                    <Typography
                        variant="h6"
                        fontWeight={700}
                        gutterBottom
                        sx={{ color: "#1A5276", letterSpacing: 0.5 }}
                    >
                        Customer profile
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ maxWidth: 500, mx: "auto" }}
                    >
                        add new Customer profile information below.
                    </Typography>
                </Paper>

                <Divider
                    sx={{ width: "100%", maxWidth: { xs: 420, sm: 600, md: 720 }, my: 3 }}
                />
                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} MyApp — All Rights Reserved
                </Typography>
            </Box>
        </Box>
    )
}

export default Customerprofile