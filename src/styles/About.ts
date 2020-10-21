import { makeStyles } from '@material-ui/core/styles'
export default makeStyles((theme) => ({
    missonBlock: {
        marginTop: '1vh',
        marginBottom: '1vh',
        [theme.breakpoints.up('md')]: {
            marginTop: '2.5vh',
            marginBottom: '2.5vh',
        },
    },
    profile: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '150px',
        height: '200px',
        margin: '0 auto',
        borderRadius: '200px',
    },
}))
