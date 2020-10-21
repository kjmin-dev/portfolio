import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Fade } from 'react-awesome-reveal'
import clsx from 'clsx'

import { ExtendedIconMap } from '@/components/IconMap'
import LinearProgress from '@/components/ProgressBarLinear'
import CrossFadeContainer, {
    Item as _Item,
} from '@/components/CrossFadeContainer'
import Common from '@/styles'
import Style from '@/styles/Skill'

interface Prop {
    id?: string
}

interface Item {
    name: string
    icon: string
    value: number
    direction?:
        | 'left'
        | 'right'
        | 'bottom-left'
        | 'bottom-right'
        | 'down'
        | 'top-left'
        | 'top-right'
        | 'up'
        | undefined
}

function ItemWrapper(props: Item): React.ReactElement {
    const classes = Style()
    return (
        <Grid item xs={12} sm={6} lg={4}>
            <Fade direction={props.direction}>
                <div className={classes.tile}>
                    <p className={classes.skillTitle}>
                        {props.name}
                        <ExtendedIconMap
                            name={props.icon}
                            className={classes.skillIcon}
                        />
                    </p>
                    <LinearProgress color="primary" value={props.value} />
                </div>
            </Fade>
        </Grid>
    )
}

export default function Skill(props: Prop): React.ReactElement {
    const common = Common()
    const classes = Style()
    const items: Array<_Item> = [
        {
            fade: false,
            component: (
                <ItemWrapper
                    name="Node.js"
                    icon="Nodejs"
                    value={90}
                    direction="left"
                />
            ),
        },
        {
            fade: false,
            component: (
                <ItemWrapper
                    name="TypeScript"
                    icon="TypeScript"
                    value={90}
                    direction="right"
                />
            ),
        },
        {
            fade: false,
            component: (
                <ItemWrapper
                    name="React.js"
                    icon="React"
                    value={80}
                    direction="left"
                />
            ),
        },
        {
            fade: false,
            component: (
                <ItemWrapper
                    name="HTML 5"
                    icon="HTML5"
                    value={80}
                    direction="right"
                />
            ),
        },
        {
            fade: false,
            component: (
                <ItemWrapper
                    name="CSS 3"
                    icon="Nodejs"
                    value={80}
                    direction="left"
                />
            ),
        },
        {
            fade: false,
            component: (
                <ItemWrapper
                    name="Electron.js"
                    icon="Electron"
                    value={75}
                    direction="right"
                />
            ),
        },
        {
            fade: false,
            component: (
                <ItemWrapper
                    name="Vue.js"
                    icon="Vue"
                    value={75}
                    direction="left"
                />
            ),
        },
        {
            fade: false,
            component: (
                <ItemWrapper
                    name="C/C++"
                    icon="CPP"
                    value={70}
                    direction="right"
                />
            ),
        },
    ]
    return (
        <section id={props.id} className={common.section}>
            <Fade direction="up">
                <h1 className={clsx(common.textCenter, common.pTitle)}>
                    Skill
                </h1>
            </Fade>
            <CrossFadeContainer
                start="left"
                grid={true}
                container={true}
                spacing={3}
                items={items}
            />
        </section>
    )
}

// <CrossFadeContainer start='left' items={ items } />
/*
<Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={4}>
                        <div className={classes.tile}>
                            <p className={classes.skillTitle}>
                                Node.js
                                <ExtendedIconMap name="Nodejs" className={classes.skillIcon} />
                            </p>
                            <LinearProgress color="primary" value={100} />
                        </div>
                    </Grid>
                    <ItemWrapper name="Node.js2" icon="Nodejs" value={100} />
                    <ItemWrapper name="Node.js2" icon="Nodejs" value={100} />
                    <Grid item xs={12} sm={6} lg={4}>
                        <div className={classes.tile}>
                            <p className={classes.skillTitle}>
                                Node.js
                                <ExtendedIconMap name="Nodejs" className={classes.skillIcon} />
                            </p>
                            <LinearProgress color="primary" value={100} />
                        </div>
                    </Grid>
                </Grid>
*/
