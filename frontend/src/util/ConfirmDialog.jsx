import React from "react";
import { Dialog, DialogContent, DialogActions, Button, Typography, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ConfirmDialog = ({ open, onClose, onConfirm, title = "Confirm Action", message = "Are you sure?" }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    borderRadius: 4,
                    minWidth: 350,
                    p: 1,
                    overflow: "hidden",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
                }
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    background: "linear-gradient(90deg, #1A5276, #145A86)",
                    py: 2,
                    px: 3,
                    borderRadius: "12px 12px 0 0",
                    color: "#fff",
                    textAlign: "left",
                    fontWeight: 700,
                    fontSize: "18px",
                    letterSpacing: 0.5,
                }}
            >
                {title}
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 16,
                        top: "50%",                 // center vertically
                        transform: "translateY(-50%)", // perfect vertical alignment
                        color: "#fff",
                        backgroundColor: "rgba(255,255,255,0.2)",
                        "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Box>

            <DialogContent sx={{ mt: 1 }}>
                <Typography variant="body1" color="text.primary" sx={{ textAlign: "center" }}>
                    {message}
                </Typography>
            </DialogContent>

            <DialogActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
                <Button
                    variant="contained"
                    onClick={onConfirm}
                    sx={{
                        background: "linear-gradient(90deg, #C0392B, #E74C3C)",
                        color: "#fff",
                        fontWeight: 600,
                        borderRadius: "12px",
                        "&:hover": { background: "linear-gradient(90deg, #E74C3C, #C0392B)" },
                        minWidth: 120
                    }}
                >
                    Yes
                </Button>

                <Button
                    variant="contained"
                    onClick={onClose}
                    sx={{
                        background: "linear-gradient(90deg, #1A5276, #145A86)",
                        color: "#fff",
                        fontWeight: 600,
                        borderRadius: "12px",
                        "&:hover": { background: "linear-gradient(90deg, #145A86, #0F466B)" },
                        minWidth: 120
                    }}
                >
                    No
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
