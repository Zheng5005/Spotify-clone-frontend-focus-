import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Song } from "../data/songs";

interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
}

const initialState: PlayerState = {
  currentSong: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
}

const playerSlice= createSlice({
  name: "player",
  initialState,
  reducers: {
    playSong(state, action: PayloadAction<any>) {
      state.currentSong = action.payload
      state.isPlaying = true
    },
    tooglePlay(state) {
      state.isPlaying = !state.isPlaying
    },
    pauseSong(state) {
      state.isPlaying = false
    },
    setTime(state, action) {
      state.currentTime = action.payload
    },
    setDuration(state, action) {
      state.duration = action.payload
    },
    seek(state, action) {
      state.currentTime = action.payload
    }
  }
})

export const { playSong, tooglePlay, pauseSong, setTime, setDuration, seek } = playerSlice.actions
export default playerSlice.reducer
