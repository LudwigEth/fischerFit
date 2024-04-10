import '@fortawesome/fontawesome-free/css/all.css'
import Header from './components/header/Header'
import { useState } from 'react'
import ButtonCta from './components/ButtonCta'
import Videoplayer from './components/Videoplayer'
import ContentCard from './components/ContentCard'
import About from './components/About'
import MapContainer from './components/MapContainer'
import ImageCarousel from './components/ImageCarousel'
import mfficon3 from './assets/intro.png'
import Faq from './components/Faq'
import Footer from './components/Footer'
import References from './components/References'
import Form from './components/Form'

function App() {
  const listItems = ['Erfahrungen', 'Über Mich', 'Standort', 'FAQ', 'Kontakt']
  const liHref = ['references', 'about', 'location', 'faq', 'contact']
  const [menuOpened, setMenu] = useState(false)
  const [formOpened, setFormOpened] = useState(false)

  const toggleMenu = () => {
    setMenu(!menuOpened)
  }

  const toggleForm = () => {
    setFormOpened(!formOpened)
  }

  return (
    <div className="relative flex h-dvh flex-col scroll-smooth font-sans tracking-wider antialiased">
      <Header
        toggleMenu={toggleMenu}
        menuOpened={menuOpened}
        listItems={listItems}
        liHref={liHref}
        toggleForm={toggleForm}
      />
      <main className="relative">
        <section
          id="home"
          className="flex w-full flex-col items-center bg-[url('./assets/mff-bg-top.png')] bg-cover"
        >
          <div
            className="flex w-full flex-col items-center justify-center px-6 pb-20 pt-32 lg:flex-row"
            style={{ backgroundColor: 'rgba(24, 24, 27, 0.95)' }}
          >
            <div className="flex w-full max-w-screen-sm flex-col items-center gap-6 lg:max-w-screen-lg lg:flex-row">
              <div className="flex w-full flex-col gap-8 ">
                <h1 className=" text-center text-4xl font-semibold text-white lg:text-left">
                  Erreiche deinen Traumkörper mit nur{' '}
                  <span className="text-sky-400">20&nbsp;Minuten</span> Training
                </h1>
                <p className="text-center leading-[1.75rem] text-white/80 lg:text-left">
                  Ich helfe Menschen aus{' '}
                  <span className="underline">Bremen & Umgebung</span> mit
                  EMS-Training,&nbsp;
                  <em className="non-italic font-bold text-white">
                    abzunehmen, Muskeln aufzubauen und fitter zu werden.
                  </em>
                </p>
                <ButtonCta
                  className={'lg:self-start'}
                  ctaText={'Kostenloses Probetraining'}
                  icon={<i className="far fa-calendar-check mr-2"></i>}
                  toggleForm={toggleForm}
                />
              </div>
              <Videoplayer
                className="my-6 max-w-screen-md lg:my-0"
                videoSrc={
                  'https://video.funnelcockpit.com/video/user/S2wH5pv4zkp3dTaAf/video-player/FQZxzpK8HCFNkg7nE/480p.mp4'
                }
                thumbnail={mfficon3}
              />
            </div>
          </div>
        </section>

        <section
          id=""
          className="flex flex-col items-center gap-8 bg-white px-6 py-20"
        >
          <h1 className="text-center text-3xl font-bold leading-tight tracking-wide">
            Hier sind 3 Dinge, die Klienten bei mir schätzen:
          </h1>
          <div className="flex max-w-screen-md flex-col gap-6 lg:max-w-screen-lg lg:flex-row">
            <ContentCard
              className=" justify-center bg-zinc-50 lg:max-w-[50%]"
              figure1={
                <div className="bg-sky flex size-20 items-center justify-center rounded-full bg-sky-50">
                  <i className="fas fa-stopwatch-20 text-[2.5rem] text-sky-400"></i>
                </div>
              }
              title="Wenig Zeitaufwand"
              text="Dank modernster EMS-Technologie, reichen bei mir ein bis zweimal 20 Minuten Training pro Woche aus, um maximale Resultate zu erreichen."
              textClassName="text-zinc-500/90"
            />
            <ContentCard
              className="bg-zinc-50 lg:max-w-[50%]"
              figure1={
                <div className="bg-sky flex size-20 items-center justify-center rounded-full bg-sky-50">
                  <i className="fas fa-hands-helping text-[2.5rem] text-sky-400"></i>
                </div>
              }
              title="Persönliche Betreuung"
              text="Ich führe und motiviere dich bei jedem Training, so machst du jede Übung 100% richtig und effektiv, egal ob du Anfänger oder fortgeschritten bist."
              textClassName="text-zinc-500/90"
            />
            <ContentCard
              className="bg-zinc-50 lg:max-w-[50%]"
              figure1={
                <div className="bg-sky flex size-20 items-center justify-center rounded-full bg-sky-50">
                  <i className="fas fa-child-reaching text-[2.5rem] text-sky-400"></i>
                </div>
              }
              title="Neues Lebensgefühl"
              text="Mit meinem einzigartigen Trainingskonzept wirst du Schwachstellen und Schmerzen los. Du wirst beweglicher, fitter und fühlst dich jünger."
              textClassName="text-zinc-500/90"
            />
          </div>
        </section>

        <section
          id="references"
          className="flex flex-col items-center gap-8 bg-zinc-50 px-6 py-20"
        >
          <h1 className="text-center text-3xl font-semibold leading-tight tracking-wide">
            Das sagen meine Klienten:
          </h1>
          <References />
          <div className="flex flex-col gap-2 pt-8 text-center">
            <ButtonCta
              className={'rounded-xl bg-sky-400 px-8 py-4'}
              ctaText={'Probetraining jetzt vereinbaren'}
              icon={<i className="fa-solid fa-hand-point-right mr-2"></i>}
              toggleForm={toggleForm}
            />
            <span className="text-sm">Jetzt unverbindlich anmelden...</span>
          </div>
        </section>

        <section
          id="about"
          className="flex flex-col items-center bg-zinc-100 pt-16 sm:px-6 sm:py-20"
        >
          <About />
        </section>

        <section
          id="location"
          className="flex items-center justify-center bg-white px-6 py-20 text-center"
        >
          <div className="flex max-w-screen-lg flex-col gap-8">
            <h1 className="text-3xl font-bold leading-tight tracking-wide">
              Wo findet das Training statt?
            </h1>
            <p>
              Das Training findet in meinem EMS-Studio in Bremen Habenhausen an
              der{' '}
              <a
                href="https://www.google.com/maps/place/Marc+Fischer+Fitness+%7C+EMS+Training/@53.0475973,8.8505908,17z/data=!3m2!4b1!5s0x47b0d86c56f85895:0x11b84cf5264cf46c!4m6!3m5!1s0x47b0d86cf95159f5:0x3035a7da1382589!8m2!3d53.0475973!4d8.8505908!16s%2Fg%2F11c3kjm733?hl=de&entry=ttu"
                target="https://www.google.com/maps/place/Marc+Fischer+Fitness+%7C+EMS+Training/@53.0475973,8.8505908,17z/data=!3m2!4b1!5s0x47b0d86c56f85895:0x11b84cf5264cf46c!4m6!3m5!1s0x47b0d86cf95159f5:0x3035a7da1382589!8m2!3d53.0475973!4d8.8505908!16s%2Fg%2F11c3kjm733?hl=de&entry=ttu"
                className="cursor-pointer font-bold text-sky-500 underline"
              >
                Steinsetzerstraße 21, 28279 Bremen
              </a>{' '}
              statt. Das Studio befindet sich in der Fußballhalle &quot;
              <a
                className="underline"
                target="https://www.soccerking-bremen.de/"
                href="https://www.soccerking-bremen.de/"
              >
                Soccer King
              </a>
              &quot;. Parkplätze sind vor Ort vorhanden.
            </p>
            <MapContainer location={{ lat: 51.5074, lng: -0.1278 }} />
            <ImageCarousel />
            <div className="flex flex-col gap-1">
              <ButtonCta
                className={'rounded-xl bg-sky-400 px-8 py-4'}
                ctaText={'Vereinbare ein Probetraining'}
                icon={<i className="fa-solid fa-phone-volume mr-2"></i>}
                toggleForm={toggleForm}
              />
              <span className="text-sm ">
                Jetzt unverbindlich & kostenlos anmelden.
              </span>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center gap-8 bg-white px-6 pb-20 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-wide">
            Wie meldest du dich für ein Probetraining an?
          </h1>
          <div className="flex max-w-screen-lg flex-col items-center gap-6 text-center lg:flex-row">
            <ContentCard
              className="bg-zinc-100 px-6 pb-8 text-start"
              figure1={
                <span className="text-[3rem] font-bold text-sky-500">1.</span>
              }
              title="Du trägst dich hier auf dieser Seite für ein kostenfreies Probetraining ein."
              text="Klicke auf einen der blauen Buttons hier auf der Seite und fülle dann anschließend das kurze Formular aus, damit ich mir einen Überblick über deine aktuelle Situation verschaffen kann."
              textClassName="text-zinc-600"
            />
            <ContentCard
              className="bg-zinc-100 px-6 pb-8 text-start"
              figure1={
                <span className="text-[3rem] font-bold text-sky-500">2.</span>
              }
              title="Ich rufe dich an und werde vorab ein kurzes Gespräch mit dir führen."
              text="Wir besprechen kurz, was du für Trainingsziele hast und ich schaue, ob und wie ich dir dabei helfen kann. Wenn alles passt, vereinbaren wir ein Termin zum Probetraining im Studio."
              textClassName="text-zinc-600"
            />
            <ContentCard
              className="bg-zinc-100 px-6 pb-8 text-start"
              figure1={
                <span className="text-[3rem] font-bold text-sky-500">3.</span>
              }
              title="Ich empfange dich vor Ort und lerne dich in einem kurzen Gespräch persönlich kennen."
              text="Nach einer ausführlichen Anamnese führe ich dich gründlich ins EMS-Training ein, dabei nehme ich mir ausreichend Zeit für all deine Fragen."
              textClassName="text-zinc-600"
            />
          </div>
        </section>
        <section
          id="faq"
          className={`relative flex flex-col items-center gap-8 bg-cover bg-no-repeat  px-6 py-20 text-center`}
        >
          <div className="absolute inset-0 bg-[url('./assets/mff-bg-faq.png')] bg-cover"></div>
          <div className="absolute inset-0 bg-zinc-200 opacity-80"></div>
          <div className="relative flex flex-col gap-8">
            <h1 className="text-3xl font-bold leading-tight tracking-wide text-black">
              Häufig gestellte Fragen:
            </h1>
            <Faq />
            <ButtonCta
              className={'rounded-xl bg-sky-400 px-8 py-4'}
              ctaText={'Jetzt für das Probetraining anmelden'}
              toggleForm={toggleForm}
            />
          </div>
        </section>
        <Form formOpened={formOpened} toggleForm={toggleForm} />
      </main>
      <Footer idName={'contact'} />
    </div>
  )
}

export default App
