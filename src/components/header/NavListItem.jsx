const NavListItem = ({
  liText,
  liHref,
  delay,
  toggleMenu,
  menuOpened,
  className,
}) => {
  return (
    <li
      className={`text-center transition-opacity duration-[250ms] ${className} ${menuOpened ? 'opacity-100' : 'opacity-0'} md:opacity-100`}
      style={menuOpened ? { transitionDelay: delay } : {}}
    >
      <a
        href={`#${liHref}`}
        onClick={toggleMenu}
        className="text-nowrap px-2 py-2"
      >
        {liText}
      </a>
    </li>
  )
}

export default NavListItem
