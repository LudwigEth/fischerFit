import Contact from './Contact'

const Footer = ({ idName }) => {
  return (
    <footer className="flex flex-col">
      <Contact idName={idName} />
      <div className="flex flex-col items-center bg-white px-8 py-8 text-center text-xs">
        <div className="flex max-w-screen-md flex-col items-center gap-2">
          <span className="flex gap-2">
            <a className="hover:underline" href="">
              Impressum
            </a>
            <span className="-mt-0.5">|</span>
            <a className="hover:underline" href="">
              Datenschutz
            </a>
          </span>
          <span>&copy; Marc Fischer 2024</span>
          <p>
            This site is not a part of the Facebook website or Facebook Inc.
            Additionally, This site is NOT endorsed by Facebook in any way.
            FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
