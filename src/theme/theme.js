import { createTheme } from "@mui/material/styles"

export function theme(){

    const primaryColor = '#3F5177'
    const secondaryColor = 'rgba(0,0,0,0)'
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
      });

    return res 
}