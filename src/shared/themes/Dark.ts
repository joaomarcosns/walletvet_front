import { createTheme } from '@mui/material'
import { brown, grey, indigo } from '@mui/material/colors'

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
      dark: indigo[900],
      light: indigo[300],
      contrastText: '#E3DAD0',
    },
    secondary: {
      main: brown[500],
      dark: brown[800],
      light: brown[300],
      contrastText: grey[50],
    },
    background: {
      default: '#303134',
      paper: '#202124'
    }
  }
})

