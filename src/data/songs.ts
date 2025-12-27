export interface Song {
  id: string;
  name: string;
  image: string;
  albumID: string;
  // artistID: string
}

export const songs: Song[] = [
  { id:"1", name:"Get Lucky", image:"https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937", albumID:"1"},
  { id:"2", name:"ENLIGHTMENT", image:"https://i.scdn.co/image/ab67616d0000b2735126a755d588072df4b9b5bc", albumID:"2"},
  { id:"3", name:"Ohms", image:"https://media.pitchfork.com/photos/5f7208b29c52ebb23ff66518/master/pass/ohms_deftones.jpg", albumID:"3"},
  { id:"4", name:"Moral After All", image:"https://i1.sndcdn.com/artworks-0yGwMiGuFwhz-0-t500x500.png", albumID:"4"},
  { id:"5", name:"DarkSiDe", image:"https://i.scdn.co/image/ab67616d0000b273df51a3d66223e5b01813e0c4", albumID:"5"},
  { id:"6", name:"Where the Flowers Never Grow", image:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/79/ac/b1/79acb1e6-6935-3b8e-7ddc-a786f97a9e89/810129812015.jpg/1200x630bf-60.jpg", albumID:"6"},
  { id:"7", name:"The Seventh Circle", image:"https://i1.sndcdn.com/artworks-0yGwMiGuFwhz-0-t500x500.png", albumID:"4"},
  { id:"8", name:"The Death We Seek", image:"https://www.metalepidemic.com/wp-content/uploads/2023/05/Currents.jpg", albumID:"7"},
  { id:"9", name:"Death Is Not Defeat", image:"https://i1.sndcdn.com/artworks-0yGwMiGuFwhz-0-t500x500.png", albumID:"4"},
  { id:"10", name:"All out", image:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/79/ac/b1/79acb1e6-6935-3b8e-7ddc-a786f97a9e89/810129812015.jpg/1200x630bf-60.jpg", albumID:"6"},
  { id:"11", name:"Royal Beggars", image:"https://i1.sndcdn.com/artworks-0yGwMiGuFwhz-0-t500x500.png", albumID:"4"},
  { id:"12", name:"Cure me", image:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/79/ac/b1/79acb1e6-6935-3b8e-7ddc-a786f97a9e89/810129812015.jpg/1200x630bf-60.jpg", albumID:"6"},
  { id:"13", name:"Damnation", image:"https://i1.sndcdn.com/artworks-0yGwMiGuFwhz-0-t500x500.png", albumID:"4"},
  { id:"14", name:"Everybody Knows", image:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/79/ac/b1/79acb1e6-6935-3b8e-7ddc-a786f97a9e89/810129812015.jpg/1200x630bf-60.jpg", albumID:"6"},
  { id:"15", name:"Hereafter", image:"https://i1.sndcdn.com/artworks-0yGwMiGuFwhz-0-t500x500.png", albumID:"4"},
  { id:"16", name:"Eyes", image:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/79/ac/b1/79acb1e6-6935-3b8e-7ddc-a786f97a9e89/810129812015.jpg/1200x630bf-60.jpg", albumID:"6"},
  { id:"17", name:"Modern Misery", image:"https://i1.sndcdn.com/artworks-0yGwMiGuFwhz-0-t500x500.png", albumID:"4"},
  { id:"18", name:"A Wasted Hymn", image:"https://i1.sndcdn.com/artworks-0yGwMiGuFwhz-0-t500x500.png", albumID:"4"},
  { id:"19", name:"Holy Hell", image:"https://i1.sndcdn.com/artworks-0yGwMiGuFwhz-0-t500x500.png", albumID:"4"},
  { id:"20", name:"Vengeance", image:"https://www.metalepidemic.com/wp-content/uploads/2023/05/Currents.jpg", albumID:"7"},
  { id:"21", name:"Dying To Heal", image:"https://i1.sndcdn.com/artworks-0yGwMiGuFwhz-0-t500x500.png", albumID:"4"},
  { id:"22", name:"Contact", image:"https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937", albumID:"1"},
  { id:"23", name:"Unfamiliar", image:"https://www.metalepidemic.com/wp-content/uploads/2023/05/Currents.jpg", albumID:"7"},
  { id:"24", name:"For you", image:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/79/ac/b1/79acb1e6-6935-3b8e-7ddc-a786f97a9e89/810129812015.jpg/1200x630bf-60.jpg", albumID:"6"},
  { id:"25", name:"My Paradise", image:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/79/ac/b1/79acb1e6-6935-3b8e-7ddc-a786f97a9e89/810129812015.jpg/1200x630bf-60.jpg", albumID:"6"},
  { id:"26", name:"Ritual", image:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/79/ac/b1/79acb1e6-6935-3b8e-7ddc-a786f97a9e89/810129812015.jpg/1200x630bf-60.jpg", albumID:"6"},
  { id:"27", name:"So Low", image:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/79/ac/b1/79acb1e6-6935-3b8e-7ddc-a786f97a9e89/810129812015.jpg/1200x630bf-60.jpg", albumID:"6"},
  { id:"28", name:"That Same Place", image:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/79/ac/b1/79acb1e6-6935-3b8e-7ddc-a786f97a9e89/810129812015.jpg/1200x630bf-60.jpg", albumID:"6"},
  { id:"29", name:"The Silence", image:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/79/ac/b1/79acb1e6-6935-3b8e-7ddc-a786f97a9e89/810129812015.jpg/1200x630bf-60.jpg", albumID:"6"},
  { id:"30", name:"Living in Tragedy", image:"https://www.metalepidemic.com/wp-content/uploads/2023/05/Currents.jpg", albumID:"7"},

  // Random Access Memory (IDs nuevos 31-43)
  { id:"31", name:"Doin' It Right", image:"https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937", albumID:"1"},
  { id:"32", name:"Fragments of Time", image:"https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937", albumID:"1"},
  { id:"33", name:"Motherboard", image:"https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937", albumID:"1"},
  { id:"34", name:"The Game of Love", image:"https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937", albumID:"1"},
  { id:"35", name:"Touch", image:"https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937", albumID:"1"},
  { id:"36", name:"Within", image:"https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937", albumID:"1"},
  { id:"37", name:"Give Life Back to Music", image:"https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937", albumID:"1"},
  { id:"38", name:"Lose Yourself to Dance", image:"https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937", albumID:"1"},
  { id:"39", name:"Instant Crush", image:"https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937", albumID:"1"},
  { id:"40", name:"Giorgio by Moroder", image:"https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937", albumID:"1"},
  { id:"41", name:"Beyond", image:"https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937", albumID:"1"},
  { id:"42", name:"Contact", image:"https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937", albumID:"1"},
  { id:"43", name:"Motherboard", image:"https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937", albumID:"1"},

  { id:"44", name:"Midnight at Mcguffin's", image:"https://boolintunes.com/wp-content/uploads/2025/09/DGDReviewBanner.png", albumID:"8"},

  // Restantes en The Death We Seek
  { id:"45", name:"Guide Us Home", image:"https://www.metalepidemic.com/wp-content/uploads/2023/05/Currents.jpg", albumID:"7"},
  { id:"46", name:"So Alone", image:"https://www.metalepidemic.com/wp-content/uploads/2023/05/Currents.jpg", albumID:"7"},

  // Holy Hell extra final
  { id:"48", name:"A Wasted Hymn", image:"https://i1.sndcdn.com/artworks-0yGwMiGuFwhz-0-t500x500.png", albumID:"4"},

  // Flowers faltantes
  { id:"47", name:"Wave", image:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/79/ac/b1/79acb1e6-6935-3b8e-7ddc-a786f97a9e89/810129812015.jpg/1200x630bf-60.jpg", albumID:"6"},

  // Final The Death We Seek
  { id:"49", name:"Over And Over", image:"https://www.metalepidemic.com/wp-content/uploads/2023/05/Currents.jpg", albumID:"7"},
  { id:"50", name:"Beyond This Road", image:"https://www.metalepidemic.com/wp-content/uploads/2023/05/Currents.jpg", albumID:"7"},
  { id:"51", name:"Gone Astray", image:"https://www.metalepidemic.com/wp-content/uploads/2023/05/Currents.jpg", albumID:"7"},
  { id:"52", name:"Remember Me", image:"https://www.metalepidemic.com/wp-content/uploads/2023/05/Currents.jpg", albumID:"7"},
  { id:"53", name:"The Sky Behind The Rain", image:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/79/ac/b1/79acb1e6-6935-3b8e-7ddc-a786f97a9e89/810129812015.jpg/1200x630bf-60.jpg", albumID:"6"},
  { id:"54", name:"Wave", image:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/79/ac/b1/79acb1e6-6935-3b8e-7ddc-a786f97a9e89/810129812015.jpg/1200x630bf-60.jpg", albumID:"6"},
  { id:"55", name:"Lose Yourself to Dance", image:"https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937", albumID:"1"},

  { id:"56", name:"Tsunami Seas", image:"https://f4.bcbits.com/img/a1464416425_16.jpg", albumID:"9"}
];

