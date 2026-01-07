import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Song } from "../data/songs";

interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
}

const initialState: PlayerState = {
  currentSong: null,
  isPlaying: false,
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
    }
  }
})

export const { playSong, tooglePlay, pauseSong } = playerSlice.actions
export default playerSlice.reducer
