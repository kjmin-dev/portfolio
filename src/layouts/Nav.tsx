import React from 'react'
import Scrollchor from 'react-scrollchor'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'

import DrawerMenu from '@/components/DrawerMenu'
import { ANCHOR } from '@/lib/constant'
import { MENUS } from '@/lib/constant'

import Common from '@/styles'
import Style from '@/styles/Nav'

export default function Nav(): React.ReactElement {
    const common = Common()
    const classes = Style()
    const [state, setState] = React.useState({
        [ANCHOR]: false,
    })
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }
        setState({ ...state, [anchor]: open })
    }
    return (
        <AppBar position="sticky" color="primary" className={classes.root}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Menu"
                    className={classes.appButton}
                    edge="start"
                    onClick={toggleDrawer(ANCHOR, true)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="body1"
                    color="inherit"
                    className={classes.appTitle}
                >
                    Kyoungjun Min
                </Typography>
                {MENUS.map((route) => (
                    <Button
                        color="inherit"
                        component={Scrollchor}
                        to={route.target}
                        className={clsx(classes.menus, common.materialLink)}
                    >
                        {route.text}
                    </Button>
                ))}
                <Drawer
                    anchor={ANCHOR}
                    open={state[ANCHOR]}
                    onClose={toggleDrawer(ANCHOR, false)}
                >
                    <DrawerMenu />
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}
