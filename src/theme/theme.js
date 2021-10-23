import { createTheme } from "@mui/material/styles"

export function theme(){

    const primaryColor = '#2D4DA1'
    const secondaryColor = '#F9CD15'
    const warningColor = '#E92928'


    const res = createTheme({
        palette: {
          primary: {
            main: primaryColor,
          },
          secondary: {
            main: secondaryColor,
          },
        },
        typography: {
          fontFamily: [
            'Inter',
            'sans-serif',
          ].join(','),
        },
      });

    return res 
}