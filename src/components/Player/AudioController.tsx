import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDuration, setTime } from "../../store/playerSlice";

export default function AudioController() {
  const dispatch = useDispatch()
  const audioRef = useRef<HTMLAudioElement>(null)
  const { currentSong, isPlaying, currentTime } = useSelector((state: any) => state.player)

  useEffect(() => {
    if (!audioRef.current || !currentSong || !currentSong.audioUrl) return

    audioRef.current.src = currentSong.audioUrl
    if (isPlaying) audioRef.current.play()
  }, [currentSong])

  useEffect(() => {
    if (!audioRef.current) return
    isPlaying ? audioRef.current.play() : audioRef.current.pause()
  }, [isPlaying])

  useEffect(() => {
    if (!audioRef.current) return

    const audio = audioRef.current

    const onTimeUpdate = () => {
      dispatch(setTime(audio.currentTime))
    }

    const onLoaded = () => {
      dispatch(setDuration(audio.duration))
    }

    audio.addEventListener("timeupdate", onTimeUpdate)
    audio.addEventListener("loadedmetadata", onLoaded)

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate)
      audio.removeEventListener("loadedmetadata", onLoaded)
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime
    }
  }, [currentTime])

  return <audio ref={audioRef} />
}
