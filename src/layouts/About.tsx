import React from 'react'
import Divider from '@material-ui/core/Divider'
import { Bounce, Fade } from 'react-awesome-reveal'
import clsx from 'clsx'

import CrossFadeContainer, { Item } from '@/components/CrossFadeContainer'
import Common from '@/styles'
import Style from '@/styles/About'

interface Prop {
    id?: string
}

export default function About(props: Prop): React.ReactElement {
    const common = Common()
    const classes = Style()
    const items: ReadonlyArray<Item> = [
        {
            fade: true,
            component: (
                <section className={clsx(common.textLeft, classes.missonBlock)}>
                    <h2 className={common.pTitle}>About Me</h2>
                    <h3 className={common.pSubtitle}>Who am I?</h3>
                    <p className={common.pDescription}>
                        I'm a Kyoungjun Min, Web developer
                    </p>
                </section>
            ),
        },
        {
            fade: true,
            component: (
                <section
                    className={clsx(common.textRight, classes.missonBlock)}
                >
                    <h2 className={common.pTitle}>
                        Implement everything in the web
                    </h2>
                    <h3 className={common.pSubtitle}>Web Technology Lover</h3>
                    <p className={common.pDescription}>
                        I believe that web applications will replace all client
                        application technologies.
                    </p>
                </section>
            ),
        },
        {
            fade: true,
            component: (
                <section className={clsx(common.textLeft, classes.missonBlock)}>
                    <h2 className={common.pTitle}>Lifelong continuing study</h2>
                    <h3 className={common.pSubtitle}>Up-to-Date knowledge</h3>
                    <p className={common.pDescription}>
                        I'm always learning the latest technology trends
                    </p>
                </section>
            ),
        },
        {
            fade: true,
            component: (
                <section
                    className={clsx(common.textRight, classes.missonBlock)}
                >
                    <h2 className={common.pTitle}>
                        Write more code to write less code
                    </h2>
                    <h3 className={common.pSubtitle}>
                        Minimize duplicate codes
                    </h3>
                    <p className={common.pDescription}>
                        I always think about improving the modularity and
                        reusability of my code.
                    </p>
                </section>
            ),
        },
    ]
    return (
        <section
            id={props.id}
            className={clsx(common.section, common.textCenter)}
        >
            <Bounce>
                <img src="/images/kjmin02.jpg" className={classes.profile} />
            </Bounce>
            <Fade direction="up">
                <h1>Kyoungjun Min</h1>
                <Divider />
            </Fade>
            <CrossFadeContainer start="left" items={items} />
        </section>
    )
}
