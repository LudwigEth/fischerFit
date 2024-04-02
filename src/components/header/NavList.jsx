import NavListItem from './NavListItem'

const NavList = ({ listItems, className, menuOpened }) => {
  return (
    <ul
      className={`${className} flex w-full flex-col items-center gap-2 rounded-bl-2xl rounded-br-2xl transition-all duration-[150ms]`}
    >
      {listItems.map((liText, index) => (
        <NavListItem
          key={liText}
          liText={liText}
          delay={`${index === 0 ? '100ms' : index * 25 + 100 + 'ms'}`}
          menuOpened={menuOpened}
        />
      ))}
    </ul>
  )
}

export default NavList
