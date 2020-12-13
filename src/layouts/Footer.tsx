import React from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import clsx from 'clsx'
import { Bounce } from 'react-awesome-reveal'

import IconMap from '@/components/IconMap'
import Common from '@/styles'
import Style from '@/styles/Footer'

interface Item {
    color?: 'inherit' | 'primary' | 'secondary' | 'default' | undefined
    className?: string
    href: string
    icon: string
}

interface FooterListProp {
    items: ReadonlyArray<Item>
}

interface Prop {
    id?: string
}

function FooterList(props: FooterListProp): React.ReactElement {
    return (
        <>
            {props.items.map((item) => {
                return (
                    <Button
                        color={item.color}
                        className={item.className}
                        target="_blank"
                        href={item.href}
                    >
                        <IconMap name={item.icon} />
                    </Button>
                )
            })}
        </>
    )
}

export default function Footer(props: Prop): React.ReactElement {
    const common = Common()
    const classes = Style()
    const items: ReadonlyArray<Item> = [
        {
            color: 'secondary',
            className: classes.buttonHover,
            href: 'mailto:kjmin.kr@gmail.com',
            icon: 'Email',
        },
        {
            color: 'secondary',
            className: classes.buttonHover,
            href: 'https://github.com/schnellehand',
            icon: 'Github',
        },
        {
            color: 'secondary',
            className: classes.buttonHover,
            href: 'https://linkedin.com/in/schnellehand',
            icon: 'LinkedIn',
        },
    ]
    return (
        <footer
            id={props.id}
            className={clsx(common.textCenter, classes.footerContainer)}
        >
            <Container maxWidth="md">
                <Bounce>
                    <FooterList items={items} />
                    <p className={classes.footerText}>Kyoungjun Min ©2020</p>
                </Bounce>
            </Container>
        </footer>
    )
}
