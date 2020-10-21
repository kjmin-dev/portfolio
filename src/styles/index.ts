import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'

import grey from '@material-ui/core/colors/grey'
import brown from '@material-ui/core/colors/brown'

export const Theme = createMuiTheme({
    palette: {
        //1b242f
        //e31b6d
        primary: {
            main: '#263238',
            dark: '#263238',
            contrastText: '#FFF',
        },
        secondary: {
            main: '#FFF',
            dark: '#666',
            contrastText: '#999',
        },
    },
})

export default makeStyles((theme) => ({
    textCenter: {
        textAlign: 'center',
    },
    textRight: {
        textAlign: 'right',
    },
    textLeft: {
        textAlign: 'left',
    },
    sectionDivider: {
        height: '1.5px',
    },
    title: {
        fontSize: '1.6rem',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            fontSize: '42px',
        },
    },
    head: {
        fontSize: '1.2rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '36px',
        },
    },
    body: {
        fontSize: '0.9rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
        },
    },
    section: {
        minHeight: '100vh',
        //backgroundColor: '#F1F1F1',
        paddingTop: '12.5vh',
        marginBottom: '24px',
    },
    dividerVertical: {
        marginLeft: '12.5px',
        marginRight: '12.5px',
        [theme.breakpoints.up('md')]: {
            marginLeft: '17.5px',
            marginRight: '17.5px',
        },
    },
    dividerHorizontal: {
        marginTop: '12.5px',
        marginBottom: '12.5px',
        [theme.breakpoints.up('md')]: {
            marginTop: '17.5px',
            marginBottom: '17.5px',
        },
    },
    contactBody: {
        height: '75%',
    },
    contactIcons: {
        marginTop: '5px',
    },
    email: {
        width: '165px',
        textAlign: 'center',
    },
    materialLink: {
        textDecoration: 'none',
        '&:visited': {
            color: 'inherit',
        },
        '&:hover': {
            color: '#E91E63',
        },
    },
    materialNavItem: {
        '&:visited': {
            color: 'inherit',
        },
        '&:hover': {
            color: '##e31b6d',
        },
    },
    pTitle: {
        fontSize: '1.75rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '40px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '50px',
        },
    },
    pSubtitle: {
        fontSize: '1.25rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '25px',
        },
    },
    pDescription: {
        fontSize: '1rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '20px',
        },
    },
    pSmalltext: {
        fontSize: '1rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '18px',
        },
    },
}))
