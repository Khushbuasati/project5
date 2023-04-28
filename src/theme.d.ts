import { ThemeOptions } from "@mui/material/styles";
import React from "react";

declare module '@mui/material/styles' {
    interface Palette {
        blue: {
            main: React.CSSProperties['color'],
        },
        purple: {
            main: React.CSSProperties['color'],
        }
    }
}