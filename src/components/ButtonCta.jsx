const ButtonCta = ({ ctaText, className, style, icon, toggleForm }) => {
  return (
    <button
      className={`${className} rounded-xl bg-sky-400 px-8 py-4 font-bold sm:self-center`}
      style={style}
      onClick={toggleForm}
    >
      <span className="font-bold text-white">
        {icon ? icon : ''}
        {ctaText}
      </span>
    </button>
  )
}

export default ButtonCta
