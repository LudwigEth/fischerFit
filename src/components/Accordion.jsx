import { useState } from 'react'

const Accordion = ({ summary, text }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="rounded-xl bg-white text-black">
      <div>
        <details onClick={toggleOpen} className="group peer">
          <summary className="flex cursor-pointer items-center px-4 py-2">
            <i
              className={`fa fa-arrow-right mr-2 origin-center self-baseline text-lg text-sky-500 transition-transform duration-[250ms] ease-in-out group-open:rotate-90`}
            ></i>
            <h2 className="text-left font-semibold">{summary}</h2>
          </summary>
        </details>
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[250ms] ease-in-out peer-open:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p
              className={`${isOpen ? 'translate-y-0' : '-translate-y-3'} group-open:border-t-1 mx-4 border-t border-zinc-200 py-3 text-left text-zinc-600 transition-all duration-[250ms] ease-in-out`}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
