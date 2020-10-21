import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'

import Layout from '@/layouts/Layout'
import About from '@/layouts/About'
import Education from '@/layouts/Education'
import Skill from '@/layouts/Skill'
import Contact from '@/layouts/Contact'
import Common, { Theme } from '@/styles'
export default function Index(): React.ReactElement {
    const common = Common()
    return (
        <ThemeProvider theme={Theme}>
            <Helmet>
                <title>Kyoungjun Min(kjmin)</title>
            </Helmet>
            <Layout id="home">
                <Container>
                    <About id="about" />
                    <Divider className={common.sectionDivider} />
                    <Education id="education" />
                    <Divider className={common.sectionDivider} />
                    <Skill id="skill" />
                    <Divider className={common.sectionDivider} />
                    <Contact id="contact" />
                </Container>
            </Layout>
        </ThemeProvider>
    )
}
