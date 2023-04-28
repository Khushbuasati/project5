export default function themePalette(theme: any) {
    return {
        mode: theme?.customization?.navType,
        common: {
            black: theme.colors?.darkPaper,
        },
        primary: {
            light: theme.colors?.primaryLight,
            main: theme.colors?.primaryMain,
            dark: theme.colors?.primaryDark,
            200: theme.colors?.primary200,
            800: theme.colors?.primary800
        },
        secondary: {
            light: theme.colors?.secondaryLight,
            main: theme.colors?.secondaryMain,
            dark: theme.colors?.secondaryDark,
            200: theme.colors?.secondary200,
            800: theme.colors?.secondary800
        },
        success: {
            light: theme.colors?.successLight,
            200: theme.colors?.success200,
            main: theme.colors?.successMain,
            dark: theme.colors?.successDark
        },
        background: {
            paper: theme.paper,
            default: theme.colors.background
        },
        error: {
            main: theme.colors.error,
            light: theme.colors.errorLight
        },
        blue: {
            main: theme.colors?.blue500
        },
        purple: {
            main: theme.colors?.purple500
        }
    };
}