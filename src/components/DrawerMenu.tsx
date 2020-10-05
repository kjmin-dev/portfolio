import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { MENUS } from '@/lib/constant'
import IconMap from '@/components/IconMap'
import Scrollchor from 'react-scrollchor'

export default function Drawer(props): React.ReactElement {
    return (
        <List>
            {MENUS.map((route, index) => (
                <ListItem
                    button
                    key={route.text}
                    component={Scrollchor}
                    to={route.target}
                >
                    <ListItemIcon>
                        <IconMap name={route.icon} />
                    </ListItemIcon>
                    <ListItemText primary={route.text} />
                </ListItem>
            ))}
        </List>
    )
}
