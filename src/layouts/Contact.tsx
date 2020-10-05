import React from 'react'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Style from '@/styles'
import IconMap from '@/components/IconMap'

interface Prop {
    id?: string
}

export default function Contact(props: Prop): React.ReactElement {
    const classes = Style()
    return (
        <section id={props.id}>
            <Container maxWidth="sm" className={classes.section}>
                <Grid container className={classes.contactBody}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <h1 className={classes.title}>Contact</h1>
                        </Grid>
                        <Grid item>
                            <h2 className={classes.head}>Kyoungjun Min</h2>
                            <Divider
                                orientation="horizontal"
                                className={classes.dividerHorizontal}
                            />
                        </Grid>
                        <Grid item>
                            <IconMap name="MailOutlined" />
                        </Grid>
                        <Grid item>
                            <p className={classes.email}>kjmin.kr@gmail.com</p>
                            <p className={classes.email}>kjmin@kjmin.io</p>
                            <Divider
                                orientation="horizontal"
                                className={classes.dividerHorizontal}
                            />
                        </Grid>
                        <Grid item>
                            <IconMap name="Github" />
                        </Grid>
                        <Grid item>
                            <a href="https://github.com/schnellehand">
                                github/schnellehand
                            </a>
                            <Divider
                                orientation="horizontal"
                                className={classes.dividerHorizontal}
                            />
                        </Grid>
                        <Grid item>
                            <IconMap name="LinkedIn" />
                        </Grid>
                        <Grid item>
                            <a href="https://www.linkedin.com/in/schnellehand/">
                                linkedin/schnellehand
                            </a>
                            <Divider
                                orientation="horizontal"
                                className={classes.dividerHorizontal}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            {/*
            <h1>Kyoungjun Min(kjmin)</h1>
            <h2>Contact</h2>
            <span>kjmin.kr@gmail.com</span>
            <span>kjmin@kjmin.io</span>
            <span>
                <a href="https://github.com/schnellehand">
                    github/schnellehand
                </a>
            </span>
            <span>
                <a href="https://www.linkedin.com/in/schnellehand/">
                    linkedin/schnellehand
                </a>
            </span>
            <span></span>
            */}
        </section>
    )
}
