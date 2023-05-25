import { ThemeProvider} from '@emotion/react'
import { CssBaseline,createTheme } from '@mui/material'
import React from 'react'
import Header from './Header'
import {Outlet} from "react-router-dom"
// import 

const theme = createTheme({
    palette:{
        mode:"light",
    },
})

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
        <main>
        <Outlet/>
        </main>
        <footer></footer>
    </ThemeProvider>
  )
}
