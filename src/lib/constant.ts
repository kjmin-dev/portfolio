interface Menu {
    target: string
    text: string
    icon: string
}

export const ANCHOR = 'bottom'
export const MENUS: Array<Menu> = [
    { target: '#home', text: 'Home', icon: 'HomeOutlined' },
    { target: '#about', text: 'About', icon: 'InfoOutlined' },
    { target: '#education', text: 'Education', icon: 'SchoolOutlined' },
    { target: '#skill', text: 'Skill', icon: 'PeopleOutlined' },
    { target: '#contact', text: 'Contact', icon: 'PhoneOutlined' },
]
