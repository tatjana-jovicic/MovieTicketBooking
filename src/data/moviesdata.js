import F_Annette from "../assets/movies/f_annette.jpg";
import F_Ava from "../assets/movies/f_ava.jpg";
import F_SeaBeast from "../assets/movies/f_sea_beast.webp";
import F_FindingADory from "../assets/movies/f_finding_dory.jpg";
import F_HorrorInForest from "../assets/movies/f_horror_in_forest.jpg";
import F_FaultInOurStars from "../assets/movies/f_fault_in_our_stars.webp";
import F_IdeaOfYou from "../assets/movies/f_idea_of_you.jpg";
import F_WildRobot from "../assets/movies/f_wild_robot.jpg";
import F_RedNotice from "../assets/movies/f_red_notice.jpg";

export const movies = [
  {
    id: 1,
    name: "Annette",
    price: 100,
    image: F_Annette,
    description:
      "A stand-up comedian and his opera singer wife have a two-year-old daughter with a surprising gift.",
    time: "2h 21m",
    rating: 3,
    genre: "Romance",
    starring: "Adam Driver, Marion Cotillard, Simon Helberg",
    group: "new",
    video: "https://www.youtube.com/embed/dRuKrWbSzLA?si=gphRThGu_4LFVTRn",
  },
  {
    id: 2,
    name: "Ava",
    price: 110,
    image: F_Ava,
    description:
      "Ava is a deadly assassin who works for a black ops organization, traveling the globe specializing in high profile hits. When a job goes dangerously wrong she is forced to fight for her own survival.",
    time: "1h 36m",
    rating: 5,
    genre: "Action",
    starring: "Jessica Chastain, John Malkovich",
    group: "new",
    video: "https://www.youtube.com/embed/oRKQAk2Kwbg?si=BbM_KFXrLadpTBrQ",
  },
  {
    id: 3,
    name: "The Sea Beast",
    price: 115,
    image: F_SeaBeast,
    description:
      "When a young girl stows away on the ship of a legendary sea monster hunter, they launch an epic journey into uncharted waters - and make history to boot.",
    time: "1h 55m",
    rating: 4,
    genre: "Animation",
    starring: "Karl Urban, Zaris-Angel Hator",
    group: "new",
    video: "https://www.youtube.com/embed/P-E-IGQCsPo?si=CuMvOJhCh6YbntqX",
  },
  {
    id: 4,
    name: "Finding Dory",
    price: 105,
    image: F_FindingADory,
    description:
      "Friendly but forgetful blue tang Dory begins a search for her long-lost parents and everyone learns a few things about the real meaning of family along the way.",
    time: "1h 37m",
    rating: 3,
    genre: "Animation",
    starring: "Bob Peterson, Andrew Stanton",
    group: "new",
    video: "https://www.youtube.com/embed/3JNLwlcPBPI?si=g0X-LWULr3PaDBXx",
  },
  {
    id: 5,
    name: "Horror In The Forest",
    price: 110,
    image: F_HorrorInForest,
    description:
      "The curse of Rudwick Forest awaits three fearless paranormal investigators, delving into the long history of its unexplained missing persons cases, said to be the work of a vengeful witch.",
    time: "1h 20m",
    rating: 5,
    genre: "Horror",
    starring: "Dylan DeVane, Tatum Bates ",
    group: "new",
    video: "https://www.youtube.com/embed/qmGxKLyBtl0?si=qVyp1cFfM5TKrVbl",
  },
  {
    id: 6,
    name: "The Fault In Our Stars",
    price: 115,
    image: F_FaultInOurStars,
    description:
      "Hazel and Gus are teenagers who meet at a cancer support group and fall in love. They both share the same acerbic wit and a love of books, especially 'An Imperial Affliction', so they embark on a journey to visit an author in Amsterdam.",
    time: "2h 6m",
    rating: 5,
    genre: "Romance",
    starring: "Shailene Woodley, Ansel Elgort, Nat Wolff",
    group: "recommended",
    video: "https://www.youtube.com/embed/9ItBvH5J6ss?si=wC9wD-jjWkFAw8g3",
  },
  {
    id: 7,
    name: "The Idea Of You",
    price: 110,
    image: F_IdeaOfYou,
    description:
      "Solène, a 40-year-old single mom, begins an unexpected romance with 24-year-old Hayes Campbell, the lead singer of August Moon, the hottest boy band on the planet.",
    time: "1h 55m",
    rating: 4,
    genre: "Romance",
    starring: "Anne Hathaway, Nicholas Galitzine ",
    group: "new",
    video: "https://www.youtube.com/embed/sef6dNsKxeA?si=7xiew1t1Y7ZUa9dU",
  },
  {
    id: 8,
    name: "The Wild Robot",
    price: 110,
    image: F_WildRobot,
    description:
      "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
    time: "1h 24m",
    rating: 3,
    genre: "Animation",
    starring: "Lupita Nyong'o, Pedro Pascal ",
    group: "new",
    video: "https://www.youtube.com/embed/67vbA5ZJdKQ?si=y_yiPYZaTh6kRI_9",
  },
  {
    id: 9,
    name: "Red Notice",
    price: 112,
    image: F_RedNotice,
    description:
      "An Interpol agent successfully tracks down the world's most wanted art thief with help from a rival thief. But nothing is as it seems as a series of double-crosses ensues.",
    time: "1h 58m",
    rating: 5,
    genre: "Comedy",
    starring: "Dwayne Johnson, Ryan Reynolds, Gal Gadot ",
    group: "recommended",
    video: "https://www.youtube.com/embed/Pj0wz7zu3Ms?si=nAC50riJdhX-HyC9",
  },
];

export const getAllMovies = () => {
  return movies;
};
