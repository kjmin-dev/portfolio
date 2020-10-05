import React from 'react'
import Scrollchor from 'react-scrollchor'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Style from '@/styles/Main'
import ScrollTop from '@/components/ScrollTop'
import Nav from '@/components/Nav'

interface Prop {
    children: React.ReactNode
    id?: string
}
/*
<section id={props.id} className={classes.home}>
                <Container maxWidth='md'>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        style={{ backgroundColor: '#fff', height: '100vh' }}
                    >
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            style={{ backgroundColor: '#cfe8fc', height: '30vh' }}
                        >zz</Grid>
                    </Grid>
                </Container>
            </section>
            */
export default function Main(props: Prop): React.ReactElement {
    const classes = Style()
    return (
        <>
            <CssBaseline />
            <section id={props.id} className={classes.home}>
                <Container maxWidth="md">
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className={classes.container}
                    >
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            className={classes.intro}
                        >
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.textCenter}
                                >
                                    <h1>Kyoungjun Min</h1>
                                    <h4>kjmin.io</h4>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.textCenter}
                                >
                                    <h2>Test</h2>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Scrollchor to="#about">
                            <Button variant="outlined" color="secondary">
                                Explore
                            </Button>
                        </Scrollchor>
                    </Grid>
                </Container>
            </section>
            <Nav />
            {props.children}
            <ScrollTop {...props}>
                <Fab
                    color="primary"
                    size="small"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    )
}
