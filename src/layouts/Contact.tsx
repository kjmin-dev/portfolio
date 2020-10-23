import React from 'react'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import IconMap, { ExtendedIconMap } from '@/components/IconMap'
import { Fade } from 'react-awesome-reveal'
import clsx from 'clsx'

import Common from '@/styles'
import Style from '@/styles/Contact'

interface Prop {
    id?: string
}

export default function Contact(props: Prop): React.ReactElement {
    const classes = Style()
    const common = Common()
    const link = {
        email: {
            gmail: 'kjmin.kr@gmail.com',
            kjmin: 'kjmin@kjmin.io',
        },
        github: 'https://github.com/schnellehand',
        linkedin: 'https://www.linkedin.com/in/schnellehand/',
        notion: 'https://www.notion.so/kjmin/Kyoungjun-Min-e5f3645ff67e4f2fac3192a81d7b083b',
    }
    return (
        <section id={props.id} className={common.section}>
            <Grid container className={classes.contactBody}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <Fade direction="up">
                            <h1 className={common.title}>Contact</h1>
                        </Fade>
                    </Grid>
                    <Grid item>
                        <Fade direction="up">
                            <h2 className={common.head}>Kyoungjun Min</h2>
                            <Divider
                                orientation="horizontal"
                                className={common.dividerHorizontal}
                            />
                        </Fade>
                    </Grid>
                    <Fade direction="up">
                        <Grid item>
                            <IconMap name="Email" />
                        </Grid>
                        <Grid item>
                            <p
                                className={clsx(
                                    classes.email,
                                    common.materialLink,
                                )}
                            >
                                {link.email.gmail}
                            </p>
                            <p
                                className={clsx(
                                    classes.email,
                                    common.materialLink,
                                )}
                            >
                                {link.email.kjmin}
                            </p>
                            <Divider
                                orientation="horizontal"
                                className={common.dividerHorizontal}
                            />
                        </Grid>
                    </Fade>
                    <Fade direction="up">
                        <Grid item>
                            <IconMap name="Github" />
                        </Grid>
                        <Grid item>
                            <a
                                href={link.github}
                                className={common.materialLink}
                            >
                                github/schnellehand
                            </a>
                            <Divider
                                orientation="horizontal"
                                className={common.dividerHorizontal}
                            />
                        </Grid>
                    </Fade>
                    <Fade direction="up">
                        <Grid item>
                            <IconMap name="LinkedIn" />
                        </Grid>
                        <Grid item>
                            <a
                                href={link.linkedin}
                                className={common.materialLink}
                            >
                                linkedin/schnellehand
                            </a>
                            <Divider
                                orientation="horizontal"
                                className={common.dividerHorizontal}
                            />
                        </Grid>
                    </Fade>
                    <Fade direction="up">
                        <Grid item>
                            <ExtendedIconMap name="Notion" />
                        </Grid>
                        <Grid item>
                            <a
                                href={link.notion}
                                className={common.materialLink}
                            >
                                Notion Resume
                            </a>
                            <Divider
                                orientation="horizontal"
                                className={common.dividerHorizontal}
                            />
                        </Grid>
                    </Fade>
                </Grid>
            </Grid>
        </section>
    )
}
