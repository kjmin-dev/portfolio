import React from 'react'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import CssBaseline from '@material-ui/core/CssBaseline'

import ScrollTop from '@/components/ScrollTop'
import Main from '@/layouts/Main'
import Nav from '@/layouts/Nav'
import Footer from '@/layouts/Footer'

import Common from '@/styles'

interface Prop {
    children: React.ReactNode
    id?: string
}

export default function Layout(props: Prop): React.ReactElement {
    const { materialLink } = Common()
    return (
        <>
            <CssBaseline />
            <Main id={props.id} />
            <Nav />
            {props.children}
            <Footer id="footer" />
            <ScrollTop {...props}>
                <Fab
                    color="primary"
                    size="small"
                    aria-label="scroll back to top"
                    className={materialLink}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    )
}
