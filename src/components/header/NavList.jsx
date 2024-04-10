import NavListItem from './NavListItem'

const NavList = ({ liHref, listItems, className, toggleMenu, menuOpened }) => {
  return (
    <ul
      className={`${className} flex w-full flex-col items-center gap-6 transition-opacity duration-[150ms] md:flex-row md:gap-2`}
    >
      {listItems.map((liText, index) => (
        <NavListItem
          key={liText}
          liText={liText}
          liHref={liHref[index]}
          delay={`${index === 0 ? '100ms' : index * 60 + 100 + 'ms'}`}
          toggleMenu={toggleMenu}
          menuOpened={menuOpened}
          className={`w-full cursor-pointer rounded-lg font-semibold text-zinc-200 hover:text-white md:text-[0.75rem]`}
        />
      ))}
    </ul>
  )
}

export default NavList
