import Stars from './Stars'
import ContentCard from './ContentCard'
import Videoplayer from './Videoplayer'
import bgRef1 from '../assets/mff-ref-bg-1.jpg'
import bgRef2 from '../assets/mff-ref-bg-2.jpg'
import bgRef3 from '../assets/mff-ref-bg-3.jpg'

const References = () => {
  return (
    <div className="flex max-w-screen-md flex-col gap-8 lg:max-w-screen-lg">
      <ContentCard
        className="relative bg-white lg:flex-row"
        text={
          <span className="font-bold italic">
            &quot;Ich wollte meine Traumfigur erreichen, was ich auch zu 99%
            geschafft habe! Das Training würde ich vor allem alle Mütter
            empfehlen, die die typischen Probleme nach der Schwangerschaft
            haben.&quot;
          </span>
        }
        figure1={
          <Videoplayer
            className="my-6 cursor-pointer lg:my-0"
            videoSrc={
              'https://video.funnelcockpit.com/video/user/S2wH5pv4zkp3dTaAf/video-player/faqAXWhrdxayQjtKy/480p.mp4'
            }
            thumbnail={bgRef1}
          />
        }
        figure2={<Stars user="Vera" />}
      />
      <ContentCard
        className="relative bg-white lg:flex-row"
        text={
          <span className="font-bold italic">
            &quot;Das besondere hier ist, dass es nicht wie normales
            EMS-Training ist, wo man nur in Positionen reingeht, sondern viel
            mehr mit Eigengewicht, Hanteln und funktionellen Übungen trainiert
            wird, was viel mehr Abwechslung bietet.&quot;
          </span>
        }
        figure1={
          <Videoplayer
            className="my-6 cursor-pointer lg:my-0"
            videoSrc={
              'https://video.funnelcockpit.com/video/user/S2wH5pv4zkp3dTaAf/video-player/6LpoTXkFX6ZoddA3F/480p.mp4'
            }
            thumbnail={bgRef2}
          />
        }
        figure2={<Stars user="Anh Duc" />}
      />
      <ContentCard
        className="relative bg-white lg:flex-row"
        text={
          <span className="font-bold italic">
            &quot;Wir hatten uns mehrere Trainingskonzepte angeguckt und fanden
            hier das Training am besten: Viel intensiver, peronenbezogener und
            es wird auch nicht langweilig.&quot;
          </span>
        }
        figure1={
          <Videoplayer
            className="my-6 cursor-pointer lg:my-0"
            videoSrc={
              'https://video.funnelcockpit.com/video/user/S2wH5pv4zkp3dTaAf/video-player/wBhnJXJCzaXkN6KjS/480p.mp4'
            }
            thumbnail={bgRef3}
          />
        }
        figure2={<Stars user="Dorthe & Sven"></Stars>}
      />
    </div>
  )
}

export default References
