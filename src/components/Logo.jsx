import logoDark from '../assets/mff-logo-dark.png'
import logoLight from '../assets/mff-logo-light.png'

const Logo = ({ classNames, dark = false }) => {
  return (
    <a href="#" className={`${classNames} flex h-fit items-center gap-1.5`}>
      <img
        className="h-[2rem]"
        src={`${dark ? logoDark : logoLight}`}
        alt="Logo image"
      />
      <h1
        className={`${dark ? 'flex flex-col text-center text-lg text-black' : 'flex flex-col text-center text-lg text-white'}`}
      >
        MARC&nbsp;FISCHER
        <span className="-mt-1 text-[0.5rem]/3 tracking-[0.25rem]">
          FITNESS
        </span>
      </h1>
    </a>
  )
}

export default Logo
