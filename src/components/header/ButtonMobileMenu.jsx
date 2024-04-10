import { useEffect, useRef, useState } from 'react'

const ButtonMobileMenu = ({ toggleMenu, menuOpened }) => {
  const topBunRef = useRef(null)
  const midBunRef = useRef(null)
  const botBunRef = useRef(null)
  const buttonRef = useRef(null)

  const [buttonOpened, setButtonOpened] = useState(false)

  useEffect(() => {
    if (!menuOpened && buttonOpened) {
      rotateClose()
    }
  }, [menuOpened])

  const toggleBunsY = () => {
    topBunRef.current.classList.toggle('-translate-y-[5px]')
    topBunRef.current.classList.toggle('-translate-y-1/2')
    botBunRef.current.classList.toggle('translate-y-[3px]')
    botBunRef.current.classList.toggle('-translate-y-1/2')
  }

  const rotateBuns = () => {
    topBunRef.current.classList.toggle('-rotate-[135deg]')
    midBunRef.current.classList.toggle('-rotate-45')
    botBunRef.current.classList.toggle('-rotate-[135deg]')
  }

  const handleMenuClick = () => {
    toggleButton()
  }

  const rotateOpen = () => {
    toggleBunsY()
    setTimeout(() => {
      rotateBuns()
    }, 110)
    setButtonOpened(!buttonOpened)
  }

  const rotateClose = () => {
    rotateBuns()
    setTimeout(() => {
      toggleBunsY()
    }, 110)
    setButtonOpened(!buttonOpened)
  }

  const toggleButton = () => {
    if (buttonOpened) {
      rotateClose()
      toggleMenu()
    } else {
      rotateOpen()
      toggleMenu()
    }
    setButtonOpened(!buttonOpened)
  }

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleMenuClick}
        type="button"
        className="relative flex h-12 w-12 md:hidden"
      >
        <span
          ref={topBunRef}
          className="absolute left-1/2 top-1/2 h-[2px] w-1/3 origin-center -translate-x-1/2 -translate-y-[5px] transform rounded bg-white transition-all duration-[125ms] ease-in-out"
        ></span>
        <span
          ref={midBunRef}
          className="absolute left-1/2 top-1/2 h-[2px] w-1/3 origin-center -translate-x-1/2 -translate-y-[1px] transform  rounded bg-white transition-all duration-[125ms] ease-in-out"
        ></span>
        <span
          ref={botBunRef}
          className="absolute left-1/2 top-1/2 h-[2px] w-1/3 origin-center -translate-x-1/2 translate-y-[3px] transform rounded bg-white transition-all duration-[125ms] ease-in-out"
        ></span>
      </button>
    </>
  )
}

export default ButtonMobileMenu
