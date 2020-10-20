import React from 'react'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import CssBaseline from '@material-ui/core/CssBaseline'

import ScrollTop from '@/components/ScrollTop'
import Nav from '@/components/Nav'
import Main from '@/layouts/Main'

interface Prop {
    children: React.ReactNode
    id?: string
}

export default function Layout(props: Prop): React.ReactElement {
    return (
        <>
            <CssBaseline />
            <Main id={props.id} />
            <Nav />
            {props.children}
            <ScrollTop {...props}>
                <Fab
                    color="primary"
                    size="small"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    )
}