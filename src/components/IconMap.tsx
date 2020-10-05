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

interface Prop {
    name?: string
}
export default function IconMap(
    props: Prop,
): React.FunctionComponentElement<Prop> {
    const icons = {
        HomeOutlined: <HomeOutlined />,
        InfoOutlined: <InfoOutlined />,
        PeopleOutlined: <PeopleOutlined />,
        PhoneOutlined: <PhoneOutlined />,
        SchoolOutlined: <SchoolOutlined />,
        MailOutlined: <MailOutlined />,
        NotInterestedOutlined: <NotInterestedOutlined />,
        Github: <Github />,
        LinkedIn: <LinkedIn />,
    }
    return icons[props.name || 'NotInterestedOutlined']
}
