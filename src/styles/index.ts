import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'

import grey from '@material-ui/core/colors/grey'
import brown from '@material-ui/core/colors/brown'
import { CenterFocusStrong } from '@material-ui/icons'

export const Theme = createMuiTheme({
    palette: {
        primary: {
            main: brown[600],
            dark: brown[400],
            contrastText: grey[50],
        },
        secondary: {
            main: grey[50],
            dark: brown[600],
        },
        /*
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        }
        */
    },
})

export default makeStyles((theme) => ({
    textCenter: {
        textAlign: 'center',
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
        height: '100vh',
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
}))
