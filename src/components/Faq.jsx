import Accordion from './Accordion'

const Faq = () => {
  const faqs = [
    {
      summary: 'Wie Sind deine Preise?',
      text: 'Es kommt ganz darauf an, was dein langfristiges Fitnessziel ist und wie viel Veränderung es braucht, um dein Ziel nachhaltig zu erreichen. Ich biete unterschiedliche Pakete an und möchte bestmöglich auf deine Wünsche und Vorstellungen eingehen. Gerne beraten ich dich dazu ganz persönlich in einem unverbindlichen Probetraining.',
    },
    {
      summary: 'Wie lange gehen deine Laufzeiten?',
      text: 'Da habe ich auch verschiedene Pakete, z.B. kürzere, flexiblere Programme und auch längerfristige Programme. Welches am besten zu deiner aktuellen Situation und Zielsetzung passt, finden wir am besten in einem kostenlosen Probetraining heraus.',
    },
    {
      summary: 'Was ist EMS-Training?',
      text: 'EMS-Training steht für Elektromyostimulationstraining. Es ist eine effektive Fitnessmethode, bei der elektrische Impulse dazu verwendet werden, Muskelkontraktionen auszulösen, während Übungen durchgeführt werden. Dies ermöglicht ein intensives Ganzkörpertraining.',
    },
    {
      summary: 'Ist EMS-Training sicher?',
      text: 'Ja, EMS-Training ist sicher, wenn es von zertifizierten Fachleuten durchgeführt wird und hochwertige Ausrüstung verwendet wird. Die Sicherheit und Qualität des Trainings stehen an erster Stelle.',
    },
    {
      summary: 'Wer kann von EMS-Training profitieren?',
      text: 'EMS-Training ist für eine breite Palette von Menschen geeignet, einschließlich solcher, die ihre Fitness verbessern, Muskeln aufbauen, Verletzungen rehabilitieren oder effiziente Workouts suchen. Programme können an verschiedene Fitnesslevel und Ziele angepasst werden.',
    },
    {
      summary: 'Wie lange dauert eine EMS-Trainingssitzung?',
      text: 'Eine typische EMS-Sitzung dauert etwa 20-30 Minuten. Trotz der kurzen Dauer sind die Muskelkontraktionen während des EMS-Trainings intensiv und effektiv.',
    },
    {
      summary: 'Wie oft sollte ich EMS-Training machen?',
      text: 'Die empfohlene Häufigkeit für EMS-Trainingssitzungen liegt normalerweise bei 1-2 Mal pro Woche. Dies gibt den Muskeln ausreichend Zeit zur Erholung und Anpassung.',
    },
    {
      summary: 'Hilft EMS-Training beim Abnehmen?',
      text: 'EMS-Training kann die Gewichtskontrolle unterstützen, indem es die Muskelmasse erhöht und den Stoffwechsel ankurbelt. Effektiver Gewichtsverlust erfordert jedoch eine ausgewogene Ernährung und ein umfassendes Trainingsprogramm.',
    },
    {
      summary:
        'Kann ich EMS-training trotz medizinischer Probleme durchführen?',
      text: 'EMS-Training kann oft an individuelle Bedürfnisse und Verletzungen angepasst werden, sollte jedoch immer unter Aufsicht von Fachleuten erfolgen. Vorherige Rücksprache mit einem Arzt ist ratsam.',
    },
  ]
  return (
    <ul className="flex max-w-screen-md flex-col gap-4">
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          name={`faq${index}`}
          summary={faq.summary}
          text={faq.text}
        />
      ))}
    </ul>
  )
}

export default Faq
