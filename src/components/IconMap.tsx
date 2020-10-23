import React from 'react'

import HomeOutlined from '@material-ui/icons/HomeOutlined'
import InfoOutlined from '@material-ui/icons/InfoOutlined'
import PeopleOutlined from '@material-ui/icons/PeopleOutlined'
import PhoneOutlined from '@material-ui/icons/PhoneOutlined'
import SchoolOutlined from '@material-ui/icons/SchoolOutlined'
import MailOutlined from '@material-ui/icons/MailOutlined'
import NotInterestedOutlined from '@material-ui/icons/NotInterestedOutlined'
import Github from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import CPP from '@/icons/cplusplus.svg'
import Javascript from '@/icons/javascript.svg'
import Typescript from '@/icons/typescript.svg'
import Nodejs from '@/icons/nodejs.svg'
import Vuejs from '@/icons/vuejs.svg'
import Reactjs from '@/icons/reactjs.svg'
import Html5 from '@/icons/html5.svg'
import Css3 from '@/icons/css3.svg'
import Electron from '@/icons/electron.svg'
import Notion from '@/icons/notion.svg'
import Vercel from '@/icons/vercel.svg'

const Style = makeStyles((theme) => ({
    default_icon: {
        width: '24px',
        height: '24px',
    },
}))

interface ExtendProp {
    name?: string
    className?: string
}

interface Prop {
    name?: string
    color?:
        | 'inherit'
        | 'disabled'
        | 'action'
        | 'primary'
        | 'secondary'
        | 'error'
    fontSize?: 'small' | 'inherit' | 'default' | 'large'
    style?: any
    component?: React.ElementType<any>
    className?: string
}

export default function IconMap(
    props: Prop,
): React.FunctionComponentElement<Prop> {
    const icons = {
        Home: <HomeOutlined {...props} />,
        Info: <InfoOutlined {...props} />,
        People: <PeopleOutlined {...props} />,
        Phone: <PhoneOutlined {...props} />,
        School: <SchoolOutlined {...props} />,
        Email: <MailOutlined {...props} />,
        NotInterested: <NotInterestedOutlined {...props} />,
        Github: <Github {...props} />,
        LinkedIn: <LinkedIn {...props} />,
    }
    return icons[props.name || 'NotInterested']
}

export function ExtendedIconMap(props: ExtendProp) {
    const { default_icon } = Style()
    const className = clsx(default_icon, props.className)
    const icons = {
        CPP: <CPP className={ className } />,
        JavaScript: <Javascript className={ className } />,
        TypeScript: <Typescript className={ className } />,
        Nodejs: <Nodejs className={ className } />,
        Vue: <Vuejs className={ className } />,
        React: <Reactjs className={ className } />,
        HTML5: <Html5 className={ className } />,
        CSS3: <Css3 className={ className } />,
        Electron: <Electron className={ className } />,
        Notion: <Notion className={ className } />,
        Vercel: <Vercel className={ className } />,
    }
    if (props.name === undefined) return icons['NotInterested']
    return icons[props.name]
}