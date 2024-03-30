import ButtonCta from "../ButtonCta"
import Logo from "../Logo"
import ButtonMobileMenu from "./ButtonMobileMenu"
import NavList from "./NavList"

const Navbar = (props) => {
    return (
        <nav>
            <Logo logoSrc={props.logoSrc}
                  logoName={props.logoName}
            />
            <NavList listItems={props.listItems} />
            <ButtonCta faIconClass={props.faIconClass}
                       ctaText={props.ctaText}
            />
            <ButtonMobileMenu />
        </nav>
    )
}

export default Navbar