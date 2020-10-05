import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    nav: {
        backgroundColor: '#1b242f',
    },
    appButton: {
        [theme.breakpoints.up('sm')]: { display: 'none' },
    },
    menus: {
        [theme.breakpoints.down('xs')]: { display: 'none' },
        [theme.breakpoints.down('sm')]: { marginRight: '10px' },
        marginRight: '17.5px',
    },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    navigation: {},
    toggleDrawer: {},
    appTitle: {
        flexGrow: 1,
    },
}))
