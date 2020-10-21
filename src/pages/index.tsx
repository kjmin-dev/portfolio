import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from '@material-ui/core/styles'
import 'normalize.css'
import '@/styles/css/global.css'
import Layout from '@/layouts/Layout'
import About from '@/layouts/About'
//import Education from '@/layouts/Education'
//import Skill from '@/layouts/Skill'
import Contact from '@/layouts/Contact'
//import Footer from '@/layouts/Footer'
import { Theme } from '@/styles'

export default function Index(): React.ReactElement {
    return (
        <ThemeProvider theme={Theme}>
            <Helmet>
                <title>Kyoungjun Min(kjmin)</title>
            </Helmet>
            <Layout id="home">
                {
                <About id="about" />
                //<Education id="education" />
                //<Skill id="skill" />
                }
                <Contact id="contact" />
                {
                //<Footer />
                }
            </Layout>
        </ThemeProvider>
    )
}
