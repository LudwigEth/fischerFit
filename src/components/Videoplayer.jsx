import { useRef, useState } from 'react'
import playIcon from '../assets/playIcon.png'

const VideoPlayer = ({ videoSrc, thumbnail, className }) => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = (e) => {
    const video = videoRef.current
    e.preventDefault()
    if (!isPlaying) {
      video.play()
    } else {
      video.pause()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div
      className={`relative flex aspect-video h-auto w-full items-center justify-center overflow-hidden rounded-xl ${className}`}
    >
      <video
        onClick={handlePlay}
        ref={videoRef}
        className="relative w-full"
        controls={isPlaying}
        src={videoSrc}
        alt=""
        preload="none"
      />
      <div
        onClick={handlePlay}
        className={`absolute h-full w-full bg-cover ${isPlaying ? 'hidden' : ''}`}
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>
      <button
        onClick={handlePlay}
        className={`${isPlaying ? 'hidden' : 'flex'} absolute flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-sky-500 opacity-95`}
      >
        <img className="h-[1.5rem] w-auto" src={playIcon} alt="" />
      </button>
    </div>
  )
}

export default VideoPlayer
