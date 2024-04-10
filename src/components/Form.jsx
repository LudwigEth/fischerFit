import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'

const Form = ({ formOpened, toggleForm }) => {
  const modalRef = useRef(null)
  const formRef = useRef(null)
  const closeFormButtonRef = useRef(null)

  const [anrede, setAnrede] = useState('')
  const [vorname, setVorname] = useState('')
  const [nachname, setNachname] = useState('')
  const [ziele1, setZiele1] = useState(false)
  const [ziele2, setZiele2] = useState(false)
  const [ziele3, setZiele3] = useState(false)
  const [ziele4, setZiele4] = useState(false)
  const [probleme1, setProbleme1] = useState(false)
  const [probleme2, setProbleme2] = useState(false)
  const [probleme3, setProbleme3] = useState(false)
  const [probleme4, setProbleme4] = useState(false)
  const [emsErfahrung1, setEmsErfahrung1] = useState(false)
  const [emsErfahrung2, setEmsErfahrung2] = useState(false)
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [erreichbar, setErreichbar] = useState('')
  const [datenschutz, setDatenschutz] = useState(false)

  const [formProgress, setFormProgress] = useState(0)
  const [formValidity, setFormValidity] = useState(false)

  const [formInputState, setFormInputState] = useState([
    [anrede, vorname, nachname],
    [ziele1, ziele2, ziele3, ziele4],
    [probleme1, probleme2, probleme3, probleme4],
    [emsErfahrung1, emsErfahrung2],
    [email],
    [phoneNumber],
    [erreichbar],
    [datenschutz],
  ])

  useEffect(() => {
    if (formOpened) {
      closeFormButtonRef.current.focus()
      const formElements = formRef.current.querySelectorAll(
        'input, select, button'
      )
      formElements.forEach((element) => {
        element.tabIndex = 0
      })
    } else {
      const formElements = formRef.current.querySelectorAll(
        'input, select, button'
      )
      formElements.forEach((element) => {
        element.tabIndex = -1
      })
    }
  }, [formOpened, formProgress])

  useEffect(() => {
    setFormInputState([
      [anrede, vorname, nachname],
      [ziele1, ziele2, ziele3, ziele4],
      [probleme1, probleme2, probleme3, probleme4],
      [emsErfahrung1, emsErfahrung2],
      [email],
      [phoneNumber],
      [erreichbar],
      [datenschutz],
    ])
  }, [
    anrede,
    vorname,
    nachname,
    ziele1,
    ziele2,
    ziele3,
    ziele4,
    probleme1,
    probleme2,
    probleme3,
    probleme4,
    emsErfahrung1,
    emsErfahrung2,
    email,
    phoneNumber,
    erreichbar,
    datenschutz,
  ])

  useEffect(() => {
    if (formProgress < 8) {
      const hasEmptyString = formInputState[formProgress].some(
        (inputState) => inputState === '' || typeof inputState === 'boolean'
      )
      const hasTrueBoolean = formInputState[formProgress].some(
        (inputState) => inputState === true && typeof inputState === 'boolean'
      )

      const isFormValid = formRef.current.checkValidity()

      const checkFormValidity = () => {
        if (!hasEmptyString && isFormValid) {
          console.log(true + 'helo')
          setFormValidity(true)
        } else if (hasTrueBoolean && isFormValid) {
          console.log(true + 'melo')
          setFormValidity(true)
        } else {
          setFormValidity(false)
        }
      }

      checkFormValidity()
    }
  }, [formInputState, formProgress])

  const closeModal = () => {
    toggleForm()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const progressForm = () => {
    if (formValidity) {
      setFormProgress(formProgress + 1)
    }
  }

  const stepBackForm = () => {
    setFormProgress(formProgress - 1)
  }

  const handleInputChange = (setState, e) => {
    setState(e.target.value)
  }

  const handleCheckboxInput = (setState, e) => {
    setState(e.target.checked)
  }

  return (
    <dialog
      ref={modalRef}
      open={formOpened}
      className={`${formOpened ? 'opacity-100' : 'pointer-events-none opacity-0'} fixed bottom-0 z-50 flex h-dvh w-full flex-col items-center justify-end bg-zinc-800/50 backdrop-blur-sm transition-all duration-300 ease-in-out md:justify-center`}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action="#"
        className={`${formOpened ? 'translate-y-0' : 'translate-y-full'} relative flex w-full max-w-screen-md flex-col gap-6 rounded-tl-xl rounded-tr-xl bg-zinc-50/90 p-10 pb-16 backdrop-blur-sm transition-all duration-300 ease-in-out md:rounded-xl md:pb-10`}
      >
        <button
          ref={closeFormButtonRef}
          id="closeFormButton"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200"
          type="button"
          onClick={closeModal}
        >
          <span className="absolute h-0.5 w-6 -rotate-45 transform rounded border-zinc-900 bg-zinc-900 transition-all duration-[125ms] ease-in-out"></span>
          <span className="absolute h-0.5 w-6 rotate-45 transform rounded border-zinc-900 bg-zinc-900 transition-all duration-[125ms] ease-in-out"></span>
        </button>
        <Logo classNames={'flex-col gap-0 pointer-events-none'} dark={true} />
        <div className="text-center">
          <h1 className="text-lg font-bold">
            {formProgress === 8
              ? 'Vielen Danke für dein Interesse!'
              : 'Dein kostenloses Probetraining'}
          </h1>
          <p>
            {formProgress === 8
              ? 'Ich werde mir dein Formular persönlich genau ansehen und überprüfen, ob und vor allem wie ich dir weiterhelfen kann. Falls ja, dann werde ich mich i.d.R. werktags innerhalb von 48 Stunden bei dir melden!'
              : 'Bitte fülle dieses kurze Formular aus, damit ich weiß, wie ich dir helfen kann:'}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className={`${formProgress === 0 ? 'flex-col' : 'hidden'}`}>
            <div>
              <label className="font-semibold" htmlFor="anrede">
                Anrede:
              </label>
              <select
                onChange={(e) => handleInputChange(setAnrede, e)}
                id="anrede"
                className="w-full cursor-pointer rounded-lg border border-zinc-300 p-2"
                required={formProgress === 0 && true}
              >
                <option className="" value="">
                  Bitte wählen
                </option>
                <option value="Herr">Herr</option>
                <option value="Frau">Frau</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="vorname">
                Vorname:
              </label>
              <input
                onChange={(e) => handleInputChange(setVorname, e)}
                className="cursor-pointer rounded-lg border border-zinc-300 p-2"
                type="text"
                id="vorname"
                required={formProgress === 0 && true}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="nachname">
                Nachname:
              </label>
              <input
                onChange={(e) => handleInputChange(setNachname, e)}
                className="cursor-pointer rounded-lg border border-zinc-300 p-2"
                type="text"
                id="nachname"
                required={formProgress === 0 && true}
              />
            </div>
          </div>

          <div className={`${formProgress === 1 ? 'flex' : 'hidden'}`}>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold">
                Was sind deine persönlichen Fitnessziele?
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row-reverse items-center justify-end gap-2">
                  <label className="cursor-pointer" htmlFor="ziele1">
                    Fett verbrennen
                  </label>
                  <input
                    onChange={(e) => handleCheckboxInput(setZiele1, e)}
                    onKeyDown={(e) => handleCheckboxInput(setZiele1, e)}
                    className="h-4 w-4 cursor-pointer"
                    id="ziele1"
                    type="checkbox"
                    value=""
                  />
                </div>
                <div className="flex flex-row-reverse items-center justify-end gap-2">
                  <label className="cursor-pointer" htmlFor="ziele2">
                    Muskeln aufbauen
                  </label>
                  <input
                    onChange={(e) => handleCheckboxInput(setZiele2, e)}
                    className="h-4 w-4 cursor-pointer"
                    id="ziele2"
                    type="checkbox"
                    value=""
                  />
                </div>
                <div className="flex flex-row-reverse items-center justify-end gap-2">
                  <label className="cursor-pointer" htmlFor="ziele3">
                    Gelenke stärken
                  </label>
                  <input
                    onChange={(e) => handleCheckboxInput(setZiele3, e)}
                    className="h-4 w-4 cursor-pointer"
                    id="ziele3"
                    type="checkbox"
                  />
                </div>
                <div className="flex flex-row-reverse items-center justify-end gap-2">
                  <label className="cursor-pointer" htmlFor="ziele4">
                    Fitter im Alltag werden
                  </label>
                  <input
                    onChange={(e) => handleCheckboxInput(setZiele4, e)}
                    className="h-4 w-4 cursor-pointer"
                    id="ziele4"
                    type="checkbox"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={`${formProgress === 2 ? 'flex' : 'hidden'}`}>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold">Was bereitet dir noch Probleme?</h1>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row-reverse items-center justify-end gap-2">
                  <label className="cursor-pointer" htmlFor="probleme1">
                    Ich finde keine Zeit für Sport
                  </label>
                  <input
                    onChange={(e) => handleCheckboxInput(setProbleme1, e)}
                    className="h-4 w-4 cursor-pointer"
                    id="probleme1"
                    type="checkbox"
                  />
                </div>
                <div className="flex flex-row-reverse items-center justify-end gap-2">
                  <label className="cursor-pointer" htmlFor="probleme2">
                    Ich weiß nicht wie ich mich ernähren soll
                  </label>
                  <input
                    onChange={(e) => handleCheckboxInput(setProbleme2, e)}
                    className="h-4 w-4 cursor-pointer"
                    id="probleme2"
                    type="checkbox"
                  />
                </div>
                <div className="flex flex-row-reverse items-center justify-end gap-2">
                  <label className="cursor-pointer" htmlFor="probleme3">
                    Bei mir scheitert es oft an der Motivation
                  </label>
                  <input
                    onChange={(e) => handleCheckboxInput(setProbleme3, e)}
                    className="h-4 w-4 cursor-pointer"
                    id="probleme3"
                    type="checkbox"
                  />
                </div>
                <div className="flex flex-row-reverse items-center justify-end gap-2">
                  <label className="cursor-pointer" htmlFor="probleme4">
                    Ich brauche ein Training für mein Leistungsniveau
                  </label>
                  <input
                    onChange={(e) => handleCheckboxInput(setProbleme4, e)}
                    className="h-4 w-4 cursor-pointer"
                    id="probleme4"
                    type="checkbox"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={`${formProgress === 3 ? 'flex' : 'hidden'}`}>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold">
                Hast du schon Erfahrung mit EMS-Training gemacht?
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row-reverse items-center justify-end gap-2">
                  <label className="cursor-pointer" htmlFor="erfahrung1">
                    Ja
                  </label>
                  <input
                    onChange={(e) => handleCheckboxInput(setEmsErfahrung1, e)}
                    className="h-4 w-4 cursor-pointer"
                    id="erfahrung1"
                    type="checkbox"
                  />
                </div>
                <div className="flex flex-row-reverse items-center justify-end gap-2">
                  <label className="cursor-pointer" htmlFor="erfahrung2">
                    Nein
                  </label>
                  <input
                    onChange={(e) => handleCheckboxInput(setEmsErfahrung2, e)}
                    className="h-4 w-4 cursor-pointer"
                    id="erfahrung2"
                    type="checkbox"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={`${formProgress === 4 ? 'flex' : 'hidden'}`}>
            <div className="flex w-full flex-col gap-4">
              <h1 className="font-bold">Wie lautet deine E-Mail Adresse?</h1>
              <div className="flex flex-col gap-2">
                <div className="flex w-full flex-col justify-end gap-2">
                  <label hidden htmlFor="email1">
                    Email:
                  </label>
                  <input
                    onChange={(e) => handleInputChange(setEmail, e)}
                    className="w-full cursor-pointer rounded-lg border border-zinc-300 p-2"
                    id="email1"
                    type="email"
                    placeholder="deine@mail.com"
                    required={formProgress === 4 && true}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={`${formProgress === 5 ? 'flex' : 'hidden'}`}>
            <div className="flex w-full flex-col gap-4">
              <h1 className="font-bold">Wie lautet deine Handynummer?</h1>
              <div className="flex flex-col gap-2">
                <div className="flex w-full flex-col justify-end gap-2">
                  <label hidden htmlFor="handy1">
                    Handynummer:
                  </label>
                  <input
                    onChange={(e) => handleInputChange(setPhoneNumber, e)}
                    className="w-full cursor-pointer rounded-lg border border-zinc-300 p-2"
                    id="handy1"
                    type="tel"
                    placeholder="0123 456789"
                    required={formProgress === 5 && true}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={`${formProgress === 6 ? 'flex' : 'hidden'}`}>
            <div className="flex w-full flex-col gap-4">
              <h1 className="font-bold">
                Wann bist du in den nächsten 48 Stunden erreichbar?
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex w-full flex-col justify-end gap-2">
                  <label hidden htmlFor="erreichbar1">
                    Wann bist du erreichbar?
                  </label>
                  <input
                    onChange={(e) => handleInputChange(setErreichbar, e)}
                    className="w-full cursor-pointer rounded-lg border border-zinc-300 p-2"
                    id="erreichbar1"
                    type="text"
                    placeholder="z.B. 17:00 oder 'Morgen nachmittags' "
                    required={formProgress === 6 && true}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={`${formProgress === 7 ? 'flex' : 'hidden'}`}>
            <div className="flex w-full flex-col gap-4">
              <h1 className="font-bold">
                Wir verwenden deine persönlichen Daten nur, damit wir das
                kostenlose Probetraining durchführen können. Durch deine
                Zustimmung versicherst du, dass du unsere{' '}
                <a className="text-sky-700 underline" href="">
                  Datenschutzerklärung
                </a>
                &nbsp;zur Kenntnis genommen und akzeptiert hast.
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex w-full flex-row-reverse items-center justify-end gap-2">
                  <label className="cursor-pointer" htmlFor="datenschutz1">
                    Ja, ich stimme zu und möchte an dem kostenlosen Training
                    teilnehmen{' '}
                  </label>
                  <input
                    onChange={(e) => handleCheckboxInput(setDatenschutz, e)}
                    className="flex h-4 w-4 cursor-pointer flex-row-reverse items-center justify-end gap-2"
                    id="datenschutz1"
                    type="checkbox"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${formProgress === 8 ? 'invisible' : 'visible'} flex gap-4 font-bold`}
        >
          <button
            className={`${formProgress >= 1 ? 'block' : 'hidden'} -ml-4 rounded-xl px-4 text-zinc-800`}
            onClick={stepBackForm}
            type="button"
          >
            Zurück
          </button>
          <button
            type="submit"
            onClick={progressForm}
            className={`${formValidity === true ? 'bg-sky-400' : 'bg-zinc-400'} w-full rounded-xl  py-4 text-white`}
          >
            Weiter →
          </button>
        </div>
      </form>
    </dialog>
  )
}

export default Form
