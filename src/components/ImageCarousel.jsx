import img1 from '../assets/mff-carousel-1.png'
import img2 from '../assets/mff-carousel-2.png'
import img3 from '../assets/mff-carousel-3.png'
import img4 from '../assets/mff-carousel-4.png'
import img5 from '../assets/mff-carousel-5.png'
import img6 from '../assets/mff-carousel-6.png'

const ImageCarousel = ({ className }) => {
  return (
    <div
      className={`${className} grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3`}
    >
      <img className="rounded-xl" src={img1} alt="" />
      <img className="rounded-xl" src={img2} alt="" />
      <img className="rounded-xl" src={img3} alt="" />
      <img className="rounded-xl" src={img4} alt="" />
      <img className="rounded-xl" src={img5} alt="" />
      <img className="rounded-xl" src={img6} alt="" />
    </div>
  )
}

export default ImageCarousel
