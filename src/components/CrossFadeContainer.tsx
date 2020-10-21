import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { Fade } from 'react-awesome-reveal'

import ConditionalWrapper from '@/components/ConditionalWrapper'

interface Prop {
    // Grid options
    grid?: boolean
    container?: boolean
    spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined

    start?: 'left' | 'right'
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
    className?: string
    items: Array<Item>
}

export interface Item {
    // Enable-Fade flag
    fade?: boolean
    // Fade direction
    direction?:
        | 'up'
        | 'bottom-left'
        | 'bottom-right'
        | 'down'
        | 'left'
        | 'right'
        | 'top-left'
        | 'top-right'
    component: React.ReactElement
}

export default function CrossFadeContainer(props: Prop): React.ReactElement {
    // direction===true: left, direction===false: right
    let direction = props.start === 'left' || true

    const _generated = props.items.map((elem) => {
        return (
            <ConditionalWrapper
                condition={elem.fade === true}
                wrapper={(children) => {
                    if (elem.direction === undefined) {
                        // if the direction option is empty, set automatically
                        elem.direction = direction ? 'left' : 'right'
                    }
                    // reverse flag
                    direction = elem.direction !== 'left'
                    return <Fade direction={elem.direction}>{children}</Fade>
                }}
            >
                {elem.component}
            </ConditionalWrapper>
        )
    })

    return (
        <ConditionalWrapper
            condition={props.grid === true}
            wrapper={(children) => {
                return (
                    <Grid container={props.container} spacing={props.spacing}>
                        {children}
                    </Grid>
                )
            }}
            fail={(children) => {
                return (
                    <Container
                        maxWidth={props.maxWidth}
                        className={props.className}
                    >
                        {children}
                    </Container>
                )
            }}
        >
            {_generated}
        </ConditionalWrapper>
    )
}
