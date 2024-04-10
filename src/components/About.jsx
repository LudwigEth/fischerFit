import marcFischer from '../assets/marcFischer.png'

const About = () => {
  return (
    <div className="relative w-full max-w-screen-lg  overflow-hidden bg-zinc-900 sm:rounded-xl">
      <img
        className={`absolute bottom-0 right-0 h-auto max-h-full w-auto`}
        src={marcFischer}
      ></img>
      <div className="relative flex flex-col gap-4 overflow-hidden rounded-xl bg-zinc-900/60 p-8 text-white md:bg-zinc-900/0 md:p-16">
        <h1 className="text-3xl font-bold">Über Mich</h1>
        <p className="max-w-xl text-zinc-300">
          Mein Name ist Marc Fischer und ich kenne deine alltäglichen
          Herausforderungen wenn es darum geht, körperlich fit zu sein und ein
          gesundes Leben zu führen...
        </p>
        <ul className="flex flex-col gap-4 md:text-lg">
          <li className="flex gap-2">
            <span className="fas fa-angle-right leading-7 text-sky-500"></span>
            <p className="font-bold">
              Ems-Trainingsspezialist mit über 7 Jahren Erfahrung
            </p>
          </li>
          <li className="flex gap-2">
            <span className="fas fa-angle-right leading-7 text-sky-500"></span>
            <p className="font-bold">
              Seit 2019 selbständig mit eigenem EMS-Studio
            </p>
          </li>
          <li className="flex gap-2">
            <span className="fas fa-angle-right leading-7 text-sky-500"></span>
            <p className="font-bold">
              Hunderte von betreuten Klienten von Anfänger bis Profi
            </p>
          </li>
          <li className="flex gap-2">
            <span className="fas fa-angle-right leading-7 text-sky-500"></span>
            <p className="font-bold">
              Wettkampfsportler im Olympischen Gewichtheben gewesen
            </p>
          </li>
          <li className="flex gap-2">
            <span className="fas fa-angle-right leading-7 text-sky-500"></span>
            <p className="font-bold">
              Studium Sportökonomie an der Universität Bremen
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
