import { makeStyles } from '@material-ui/core/styles'
export default makeStyles(() => ({
    //#E91E63
    footerContainer: {
        height: '140px',
        paddingTop: '40px',
        paddingBottom: '40px',
        backgroundColor: '#263238',
    },
    buttonHover: {
        '&:hover': {
            color: '#f06292',
            backgroundColor: '#455a64',
        },
    },
    footerText: {
        color: '#BBB',
        fontSize: '16px',
    },
}))
