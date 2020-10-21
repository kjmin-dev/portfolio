import React from 'react'
import Divider from '@material-ui/core/Divider'
import { Fade } from 'react-awesome-reveal'
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
    const items: Array<Item> = [
        {
            fade: true,
            component: (
                <section className={clsx(common.textLeft, classes.missonBlock)}>
                    <h2 className={common.pTitle}>About Me</h2>
                    <h3>Who am I?</h3>
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
                    <h3>Web Technology Lover</h3>
                    <p>
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
                    <h3>Up-to-Date knowledge</h3>
                    <p>I'm always learning the latest technology trends</p>
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
                    <h3>SmallTitle</h3>
                    <p>Desc</p>
                </section>
            ),
        },
    ]
    /*
    <Fade direction="up">
        <img src="/images/kjmin02.jpg" className={ classes.profile } />
        <h1>Kyoungjun Min</h1>
        <Divider />
    </Fade>
    */
    return (
        <section
            id={props.id}
            className={clsx(common.section, common.textCenter)}
        >
            <CrossFadeContainer start="left" items={items} />
            {/*
            <Fade direction="left" className={clsx(common.textLeft, classes.missonBlock)}>
                <h2 className={common.pTitle}>About Me</h2>
                <h3>Kyoungjun Min</h3>
                <p className={common.pDescription}>I'm a Kyoungjun Min, Web developer</p>
            </Fade>
            <Fade direction="right" className={clsx(common.textRight, classes.missonBlock)}>
                <h2 className={common.pTitle}>Implement everything in the web</h2>
                <h3>Web Technology Lover</h3>
                <p>I believe that web applications will replace all client application technologies.</p>
            </Fade>
            <Fade direction="left" className={clsx(common.textLeft, classes.missonBlock)}>
                <h2 className={common.pTitle}>Implement everything in the web</h2>
                <h3>SmallTitle</h3>
                <p>Desc</p>
            </Fade>
            <Fade direction="right" className={clsx(common.textRight, classes.missonBlock)}>
                <h2 className={common.pTitle}>Implement everything in the web</h2>
                <h3>SmallTitle</h3>
                <p>Desc</p>
            </Fade>
            */}
        </section>
    )
}
