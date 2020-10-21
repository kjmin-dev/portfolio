import React from 'react'
import Scrollchor from 'react-scrollchor'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Fade } from 'react-awesome-reveal'

import Common from '@/styles'
import Style from '@/styles/Main'

interface Prop {
    id?: string
}

export default function Layout(props: Prop): React.ReactElement {
    const classes = Style()
    const common = Common()

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
                                    <Fade direction="down">
                                        <h1>Kyoungjun Min</h1>
                                        <h4>kjmin.io</h4>
                                    </Fade>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.textCenter}
                                >
                                    <Fade direction="up">
                                        <h2>
                                            Frontend / Backend Web Development
                                        </h2>
                                    </Fade>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Scrollchor to="#about" className={common.materialLink}>
                            <Fade>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={common.materialLink}
                                >
                                    Explore
                                </Button>
                            </Fade>
                        </Scrollchor>
                    </Grid>
                </Container>
            </section>
        </>
    )
}
