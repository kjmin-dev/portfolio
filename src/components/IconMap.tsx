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

const Style = makeStyles((theme) => ({
    svgIcon: {
        width: '17px',
        marginLeft: '7.5px',
        [theme.breakpoints.up('md')]: {
            width: '18px',
        },
        [theme.breakpoints.up('lg')]: {
            width: '20px',
        },
    },
}))

interface ExtendProp {
    name?: string
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
    const classes = Style()
    const icons = {
        CPP: <CPP className={classes.svgIcon} />,
        JavaScript: <Javascript className={classes.svgIcon} />,
        TypeScript: <Typescript className={classes.svgIcon} />,
        Nodejs: <Nodejs className={classes.svgIcon} />,
        Vue: <Vuejs className={classes.svgIcon} />,
        React: <Reactjs className={classes.svgIcon} />,
        HTML5: <Html5 className={classes.svgIcon} />,
        CSS3: <Css3 className={classes.svgIcon} />,
        Electron: <Electron className={classes.svgIcon} />,
        Notion: <Notion className={classes.svgIcon} />,
    }
    if (props.name === undefined) return icons['NotInterested']
    return icons[props.name]
}