import { useRef, useState } from 'react'

const ButtonMobileMenu = () => {
  const [buttonOpened, setButton] = useState(false)

  const topBunRef = useRef(null)
  const midBunRef = useRef(null)
  const botBunRef = useRef(null)

  const toggleBunsY = () => {
    topBunRef.current.classList.toggle('-translate-y-[5px]')
    topBunRef.current.classList.toggle('-translate-y-1/2')
    botBunRef.current.classList.toggle('translate-y-[3px]')
    botBunRef.current.classList.toggle('-translate-y-1/2')
  }

  const rotateBuns = () => {
    topBunRef.current.classList.toggle('-rotate-45')
    midBunRef.current.classList.toggle('-rotate-[135deg]')
    botBunRef.current.classList.toggle('-rotate-[135deg]')
  }

  const handleClick = () => {
    if (buttonOpened) {
      rotateBuns()
      setTimeout(() => {
        toggleBunsY()
      }, 100)
      setButton(false)
    } else {
      toggleBunsY()
      setTimeout(() => {
        rotateBuns()
      }, 100)
      setButton(true)
    }
  }

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className="relative ml-auto flex h-12 w-12"
      >
        <span
          ref={topBunRef}
          className="absolute left-1/2 top-1/2 h-0.5 w-1/3 origin-center -translate-x-1/2 -translate-y-[5px] transform rounded bg-black transition-all"
        ></span>
        <span
          ref={midBunRef}
          className="absolute left-1/2 top-1/2 h-0.5 w-1/3 origin-center -translate-x-1/2 -translate-y-1/2  transform rounded bg-black transition-all"
        ></span>
        <span
          ref={botBunRef}
          className="absolute left-1/2 top-1/2 h-0.5 w-1/3 origin-center -translate-x-1/2 translate-y-[3px] transform rounded bg-black transition-all"
        ></span>
      </button>
    </>
  )
}

export default ButtonMobileMenu
