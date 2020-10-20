import React from 'react'
import Scrollchor from 'react-scrollchor'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Style from '@/styles/Main'
import ScrollTop from '@/components/ScrollTop'
import Nav from '@/components/Nav'

interface Prop {
    id?: string
}

export default function Layout(props: Prop): React.ReactElement {
    const classes = Style()
    return (
        <>
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
        </>
    )
}
