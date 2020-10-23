import React from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import clsx from 'clsx'
import IconMap from '@/components/IconMap'

import Common from '@/styles'
import Style from '@/styles/Footer'

interface Prop {
    id?: string
}

export default function Footer(props: Prop): React.ReactElement {
    const common = Common()
    const classes = Style()
    return (
        <footer id={ props.id } className={clsx(common.textCenter, classes.footerContainer)}>
            <Container maxWidth="md">
                <Button
                    color="secondary"
                    className={classes.buttonHover}
                    target="_blank"
                    href="mailto:kjmin.kr@gmail.com"
                >
                    <IconMap name="Email" />
                </Button>
                <Button
                    color="secondary"
                    className={classes.buttonHover}
                    target="_blank"
                    href="https://github.com/schnellehand"
                >
                    <IconMap name="Github" />
                </Button>
                <Button
                    color="secondary"
                    className={classes.buttonHover}
                    target="_blank"
                    href="https://linkedin.com/in/schnellehand"
                >
                    <IconMap name="LinkedIn" />
                </Button>
                <p className={classes.footerText}>Kyoungjun Min ©2020</p>
            </Container>
        </footer>
    )
}
