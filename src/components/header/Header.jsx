import Navbar from './Navbar'

const Header = ({ toggleMenu, menuOpened, listItems, liHref, toggleForm }) => {
  return (
    <header className="fixed z-10 w-full">
      <Navbar
        toggleMenu={toggleMenu}
        menuOpened={menuOpened}
        listItems={listItems}
        liHref={liHref}
        toggleForm={toggleForm}
      />
    </header>
  )
}

export default Header
