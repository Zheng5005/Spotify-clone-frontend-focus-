export interface Album {
  id: string;
  name: string;
  image: string;
  songs: string[];
  artistID: string;
}

export const albums: Album[] = [
  { id: "1", name: "Random Access Memory",
    image:"https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937",
    songs:["1","31","32","33","34","35","36","37","38","39","40","41","42","43"],
    artistID:"1"
  },
  { id: "2", name:"SLEEPS SOCIETY",
    image:"https://i.scdn.co/image/ab67616d0000b2735126a755d588072df4b9b5bc",
    songs:["2"], artistID:"2"
  },
  { id:"3", name:"OHMS",
    image:"https://media.pitchfork.com/photos/5f7208b29c52ebb23ff66518/master/pass/ohms_deftones.jpg",
    songs:["3"], artistID:"3"
  },
  { id:"4", name:"Holy Hell",
    image:"https://i1.sndcdn.com/artworks-0yGwMiGuFwhz-0-t500x500.png",
    songs:["4","7","9","11","13","15","17","19","21","23","25","27","29","30","48"],
    artistID:"4"
  },
  { id:"5", name:"POST HUMAN: NeX GEn",
    image:"https://i.scdn.co/image/ab67616d0000b273df51a3d66223e5b01813e0c4",
    songs:["5"], artistID:"5"
  },
  { id:"6", name:"Flowers",
    image:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/79/ac/b1/79acb1e6-6935-3b8e-7ddc-a786f97a9e89/810129812015.jpg/1200x630bf-60.jpg",
    songs:["6","10","12","14","16","18","20","22","24","26","28","47"],
    artistID:"6"
  },
  { id:"7", name:"The Death We Seek",
    image:"https://www.metalepidemic.com/wp-content/uploads/2023/05/Currents.jpg",
    songs:["8","45","46","49","50","51","52","53","54","55"],
    artistID:"7"
  },
  { id:"8", name:"Pantheon",
    image:"https://boolintunes.com/wp-content/uploads/2025/09/DGDReviewBanner.png",
    songs:["44"], artistID:"8"
  },
  { id:"9", name:"Tsunami Seas",
    image:"https://f4.bcbits.com/img/a1464416425_16.jpg",
    songs:["56"], artistID:"9"
  }
];

