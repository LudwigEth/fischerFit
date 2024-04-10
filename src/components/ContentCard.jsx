const ContentCard = (props) => {
  return (
    <div
      className={`${props.className} flex w-full max-w-screen-lg flex-col items-center gap-4 rounded-xl p-4`}
    >
      {props.figure1 ? props.figure1 : ''}
      <div
        className={`${props.figure2 ? 'lg:max-w-[50%]' : 'items-center'} flex flex-col gap-2`}
      >
        {props.figure2 ? props.figure2 : ''}
        <h2 className="text-lg font-bold">{props.title}</h2>
        <p className={props.textClassName}>{props.text}</p>
      </div>
    </div>
  )
}

export default ContentCard
