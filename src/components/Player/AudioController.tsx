import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function AudioController() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const { currentSong, isPlaying } = useSelector((state: any) => state.player)

  useEffect(() => {
    if (!audioRef.current || !currentSong || !currentSong.audioUrl) return

    audioRef.current.src = currentSong.audioUrl
    if (isPlaying) audioRef.current.play()
  }, [currentSong])

  useEffect(() => {
    if (!audioRef.current) return
    isPlaying ? audioRef.current.play() : audioRef.current.pause()
  }, [isPlaying])

  return <audio ref={audioRef} />
}
