import { createTheme } from '@mui/material/styles';
import {colors} from '../assets/scss/colors';
import themePalette from './palette';

export const theme = () => {
    const color = colors;
    const themeOption: any = {
        colors: color,
        heading: color.grey900,
        paper: color.paper,
        backgroundDefault: color.paper,
        background: color.primaryLight,
        darkTextPrimary: color.grey700,
        darkTextSecondary: color.grey500,
        textDark: color.grey900,
        menuSelected: color.secondaryDark,
        menuSelectedBack: color.secondaryLight,
        divider: color.grey200,
        blue: colors.blue500
    };
    const themeOptions: any = {
        direction: 'ltr',
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
    };
    const themes = createTheme(themeOptions);
    return themes;
};

export default theme;