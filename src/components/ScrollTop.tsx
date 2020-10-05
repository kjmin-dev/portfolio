import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Zoom from '@material-ui/core/Zoom'
import Scrollchor from 'react-scrollchor'

interface Prop {
    children: React.ReactNode
}

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}))

export default function ScrollTop(props: Prop): React.ReactElement {
    const { children } = props
    const classes = useStyles()
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 150,
    })

    return (
        <Zoom in={trigger}>
            <Scrollchor to="#home" className={classes.root}>
                {children}
            </Scrollchor>
        </Zoom>
    )
}
