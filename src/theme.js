import {createContext, useMemo, useState} from "react";
import {createTheme} from "@mui/material/styles";

export const tokens = (mode) => ({
    grey: {
        100: mode === "dark" ? "#e0e0e0" : "#141414",
        200: mode === "dark" ? "#c2c2c2" : "#292929",
        300: mode === "dark" ? "#a3a3a3" : "#3d3d3d",
        400: mode === "dark" ? "#858585" : "#525252",
        500: "#666666",
        600: mode === "dark" ? "#525252" : "#858585",
        700: mode === "dark" ? "#3d3d3d" : "#a3a3a3",
        800: mode === "dark" ? "#292929" : "#c2c2c2",
        900: mode === "dark" ? "#141414" : "#e0e0e0",
    },
    primary: {
        100: mode === "dark" ? "#d0d1d5" : "#040509",
        200: mode === "dark" ? "#a1a4ab" : "#080b12",
        300: mode === "dark" ? "#727681" : "#0c101b",
        400: mode === "dark" ? "#1F2A40" : "#f2f0f0",
        500: "#141b2d",
        600: mode === "dark" ? "#101624" : "#1F2A40",
        700: mode === "dark" ? "#0c101b" : "#727681",
        800: mode === "dark" ? "#080b12" : "#a1a4ab",
        900: mode === "dark" ? "#040509" : "#d0d1d5",
    },
    greenAccent: {
        100: mode === "dark" ? "#dbf5ee" : "#0f2922",
        200: mode === "dark" ? "#b7ebde" : "#1e5245",
        300: mode === "dark" ? "#94e2cd" : "#2e7c67",
        400: mode === "dark" ? "#70d8bd" : "#3da58a",
        500: "#4cceac",
        600: mode === "dark" ? "#3da58a" : "#70d8bd",
        700: mode === "dark" ? "#2e7c67" : "#94e2cd",
        800: mode === "dark" ? "#1e5245" : "#b7ebde",
        900: mode === "dark" ? "#0f2922" : "#dbf5ee",
    },
    redAccent: {
        100: mode === "dark" ? "#f8dcdb" : "#2c100f",
        200: mode === "dark" ? "#f1b9b7" : "#58201e",
        300: mode === "dark" ? "#e99592" : "#832f2c",
        400: mode === "dark" ? "#e2726e" : "#af3f3b",
        500: "#db4f4a",
        600: mode === "dark" ? "#af3f3b" : "#e2726e",
        700: mode === "dark" ? "#832f2c" : "#e99592",
        800: mode === "dark" ? "#58201e" : "#f1b9b7",
        900: mode === "dark" ? "#2c100f" : "#f8dcdb",
    },
    blueAccent: {
        100: mode === "dark" ? "#e1e2fe" : "#151632",
        200: mode === "dark" ? "#c3c6fd" : "#2a2d64",
        300: mode === "dark" ? "#a4a9fc" : "#3e4396",
        400: mode === "dark" ? "#868dfb" : "#535ac8",
        500: "#6870fa",
        600: mode === "dark" ? "#535ac8" : "#868dfb",
        700: mode === "dark" ? "#3e4396" : "#a4a9fc",
        800: mode === "dark" ? "#2a2d64" : "#c3c6fd",
        900: mode === "dark" ? "#151632" : "#e1e2fe",
    },
});

export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.primary[500],
                    },
                }
                : {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: "#fcfcfc",
                    },
                }),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};

export const ColorModeContext = createContext({
    toggleColorMode: () => {
    },
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};