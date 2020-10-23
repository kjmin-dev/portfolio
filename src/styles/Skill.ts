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
}))
