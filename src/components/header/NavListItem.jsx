const NavListItem = ({liText, liHref}) => {
    return (
        <li>
            <a href={liHref}>{liText}</a>
        </li>
    )
}

export default NavListItem