const Contact = ({ idName }) => {
  return (
    <div
      id={idName}
      className="flex items-center justify-center bg-zinc-900 px-8 py-16 text-white"
    >
      <div className="flex w-full max-w-screen-md flex-col gap-8 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Kontakt:</h1>
          <address className="text-sm">
            Marc Fischer Fitness
            <br />
            Steinsetzerstraße 21
            <br />
            28279 Bremen
          </address>
          <div className="text-sm">
            <span className="font-bold">Telefon:</span> 01712998338
            <br />
            <span className="font-bold">E-Mail:</span>{' '}
            kontakt@marcfischerfitness.de
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Öffnungszeiten:</h2>
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <span className="font-bold">Montag:</span> 08:00 - 19:00
            </li>
            <li>
              <span className="font-bold">Dienstag:</span> 08:00 - 19:00
            </li>
            <li>
              <span className="font-bold">Mittwoch:</span> 08:00 - 19:00
            </li>
            <li>
              <span className="font-bold">Donnerstag:</span> 08:00 - 19:00
            </li>
            <li>
              <span className="font-bold">Freitag:</span> 08:00 - 19:00
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
