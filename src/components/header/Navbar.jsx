import Logo from '../Logo'
import ButtonMobileMenu from './ButtonMobileMenu'
import NavList from './NavList'
import ButtonCta from '../ButtonCta'

const Navbar = ({ toggleMenu, menuOpened, listItems, liHref, toggleForm }) => {
  return (
    <nav
      style={{ backgroundColor: 'rgba(24, 24, 27, 0.95)' }}
      className={`${menuOpened ? 'max-h-[100dvh] md:max-h-[4rem]' : 'max-h-[4rem]'} relative z-50 flex h-dvh w-full flex-col items-center px-4 py-2 backdrop-blur-sm transition-[max-height] duration-[325ms] ease-in-out md:flex-row md:justify-center`}
    >
      <div className="flex max-h-16 w-full max-w-screen-lg flex-col md:flex-row">
        <div className="flex w-full items-center justify-between">
          <Logo />
          <ButtonMobileMenu toggleMenu={toggleMenu} menuOpened={menuOpened} />
        </div>
        <div
          className={`flex w-full flex-auto flex-col justify-items-center gap-[2rem] ${menuOpened ? 'visible' : 'invisible'} md:visible md:flex`}
        >
          <div
            className={`mt-[25%] flex flex-col gap-8 md:mt-0 md:flex-row md:gap-4`}
          >
            <NavList
              listItems={listItems}
              liHref={liHref}
              menuOpened={menuOpened}
              toggleMenu={toggleMenu}
            />
            <ButtonCta
              style={{ backgroundColor: 'rgba(56, 189, 248, 1)' }}
              ctaText={'Probetraining buchen'}
              className={`${menuOpened ? 'opacity-100 delay-[200ms]' : 'opacity-0 delay-0'} self-center overflow-hidden rounded-xl p-3 text-[1rem] font-semibold text-white transition-opacity duration-[150ms] ease-in-out md:px-4 md:py-2 md:text-xs md:opacity-100 md:delay-0`}
              toggleForm={toggleForm}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
