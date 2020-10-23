import { makeStyles } from '@material-ui/core/styles'
export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    tile: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    skillTitle: {
        fontSize: '1.25rem',
        margin: '3px',
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '25px',
        },
    },
    skillIcon: {
        width: '18px',
        height: '18px',
        marginLeft: '7.5px',
        [theme.breakpoints.up('md')]: {
            width: '20px',
            height: '20px',
        },
        [theme.breakpoints.up('lg')]: {
            width: '22px',
            height: '22px',
        },
    }
}))
