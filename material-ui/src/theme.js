//We create the our own color scheme or coloe pallete

import { createTheme } from "@mui/material";
export const theme = createTheme({
    palette: {
        primary:{
            main: "#1760a5",
            light: "skyblue"
        },
        secondary: {
            main: "#000"
        },
        otherColor: {
            main: "#999"
        }
    }
})