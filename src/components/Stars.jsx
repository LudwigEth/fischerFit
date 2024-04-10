const Stars = ({ user }) => {
  return (
    <div className="flex-col">
      <p className="text-sm font-bold">{user}</p>
      <span className="flex gap-1">
        <i className="fa fa-star text-sky-400"></i>
        <i className="fa fa-star text-sky-400"></i>
        <i className="fa fa-star text-sky-400"></i>
        <i className="fa fa-star text-sky-400"></i>
        <i className="fa fa-star text-sky-400"></i>
      </span>
    </div>
  )
}

export default Stars
