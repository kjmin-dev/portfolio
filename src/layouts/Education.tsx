import React from 'react'
import { Fade } from 'react-awesome-reveal'
import clsx from 'clsx'
import LinearProgress from '@material-ui/core/LinearProgress'

import CrossFadeContainer, { Item } from '@/components/CrossFadeContainer'
import LinearProgressBar from '@/components/ProgressBarLinear'
import Common from '@/styles'
import Style from '@/styles/Education'

interface Prop {
    id?: string
}

export default function Education(props: Prop): React.ReactElement {
    const common = Common()
    const classes = Style()
    const items: ReadonlyArray<Item> = [
        {
            fade: true,
            component: (
                <article className={common.textLeft}>
                    <h2 className={common.pSubtitle}>
                        {'Covision Inc., Republic of Korea'}
                    </h2>
                    <p className={common.pDescription}>Backend Developer</p>
                    <p className={common.pSmalltext}>2020.12 ~ Current</p>
                    <LinearProgress />
                </article>
            ),
        },
        {
            fade: true,
            component: (
                <article className={common.textRight}>
                    <h2 className={common.pSubtitle}>
                        Ajou University, Republic of Korea
                    </h2>
                    <p className={common.pDescription}>
                        Master of Computer Engineering
                    </p>
                    <p className={common.pSmalltext}>
                        2018.03 ~ 2020.08 (Graduated)
                    </p>
                    <LinearProgressBar value={100} />
                </article>
            ),
        },
        {
            fade: true,
            component: (
                <article className={common.textLeft}>
                    <h2 className={common.pSubtitle}>
                        Wonkwang University, Republic of Korea
                    </h2>
                    <p className={common.pDescription}>
                        Bachelor of Computer Engineering
                    </p>
                    <p className={common.pSmalltext}>
                        2014.03 ~ 2018.02 (Graduated)
                    </p>
                    <LinearProgressBar value={100} />
                </article>
            ),
        },
    ]
    return (
        <section id={props.id} className={common.section}>
            <Fade direction="up">
                <h1 className={clsx(common.textCenter, common.pTitle)}>
                    Education / Career
                </h1>
            </Fade>
            <CrossFadeContainer
                maxWidth="md"
                className={classes.eduItem}
                start="left"
                items={items}
            />
        </section>
    )
}
