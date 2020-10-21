interface Menu {
    target: string
    text: string
    icon: string
}

export const ANCHOR = 'bottom'
export const MENUS: Array<Menu> = [
    { target: '#home', text: 'Home', icon: 'Home' },
    { target: '#about', text: 'About', icon: 'Info' },
    { target: '#education', text: 'Education', icon: 'School' },
    { target: '#skill', text: 'Skill', icon: 'People' },
    { target: '#contact', text: 'Contact', icon: 'Phone' },
]
