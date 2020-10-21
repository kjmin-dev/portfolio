import React from 'react'

import HomeOutlined from '@material-ui/icons/HomeOutlined'
import InfoOutlined from '@material-ui/icons/InfoOutlined'
import PeopleOutlined from '@material-ui/icons/PeopleOutlined'
import PhoneOutlined from '@material-ui/icons/PhoneOutlined'
import SchoolOutlined from '@material-ui/icons/SchoolOutlined'
import MailIcon from '@material-ui/icons/Mail'
import MailOutlined from '@material-ui/icons/MailOutlined'
import NotInterestedOutlined from '@material-ui/icons/NotInterestedOutlined'
import Github from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'
import { CgCPlusPlus } from 'react-icons/cg'
import { IconBaseProps } from 'react-icons'
import {
    SiJavascript,
    SiTypescript,
    SiNodeDotJs,
    SiVueDotJs,
    SiReact,
    SiMysql,
    SiMariadb,
    SiMongodb,
    //
    SiHtml5,
    SiCss3,
    SiElectron,
} from 'react-icons/si/index'

interface ExtendProp extends IconBaseProps {
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
    const icons = {
        CPP: <CgCPlusPlus {...props} />,
        JavaScript: <SiJavascript {...props} />,
        TypeScript: <SiTypescript {...props} />,
        Nodejs: <SiNodeDotJs {...props} />,
        Vue: <SiVueDotJs {...props} />,
        React: <SiReact {...props} />,
        Mysql: <SiMysql {...props} />,
        Mariadb: <SiMariadb {...props} />,
        Mongodb: <SiMongodb {...props} />,
        HTML5: <SiHtml5 {...props} />,
        CSS3: <SiCss3 {...props} />,
        Electron: <SiElectron {...props} />,
    }
    if (props.name === undefined) return icons['NotInterested']
    return icons[props.name]
}
