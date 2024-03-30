import NavListItem from "./NavListItem"

const NavList = () => {

    const listItems = [
        'Über Mich',
        'Standort',
        'Erfahrungen',
        'FAQ',
        'Kontakt'
    ]

    return (
        <ul>
            {listItems.map(liText => (
            <NavListItem
                key={liText}
                liText={liText}
            />
            ))}
        </ul>
    )
}

export default NavList