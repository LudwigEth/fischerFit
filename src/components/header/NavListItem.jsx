const NavListItem = ({ liText, liHref, delay, menuOpened }) => {
  return (
    <li
      className={` transition-all duration-[250ms] ${menuOpened ? 'opacity-100' : 'opacity-0'}`}
      style={menuOpened ? { transitionDelay: delay } : {}}
    >
      <a href={liHref}>{liText}</a>
    </li>
  )
}

export default NavListItem
