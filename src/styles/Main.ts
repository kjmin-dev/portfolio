import { makeStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { Theme } from '@/styles'

export default makeStyles((theme) => ({
    textCenter: {
        textAlign: 'center',
    },
    home: {
        height: '100vh',
        backgroundImage: "url('/images/background01.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    container: {
        color: '#fff',
        height: '100vh',
    },
    intro: {
        height: '35vh',
        [theme.breakpoints.up('sm')]: { height: '27.5vh' },
        backgroundColor: fade('#cfe8fc', 0.15),
    },
}))
