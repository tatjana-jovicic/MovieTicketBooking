import F_Annette from "../assets/movies/f_annette.jpg";
import F_Ava from "../assets/movies/f_ava.jpg";
import F_SeaBeast from "../assets/movies/f_sea_beast.webp";
import F_FindingADory from "../assets/movies/f_finding_dory.jpg";
import F_HorrorInForest from "../assets/movies/f_horror_in_forest.jpg";
import F_FaultInOurStars from "../assets/movies/f_fault_in_our_stars.webp";
import F_IdeaOfYou from "../assets/movies/f_idea_of_you.jpg";
import F_WildRobot from "../assets/movies/f_wild_robot.jpg";
import F_RedNotice from "../assets/movies/f_red_notice.jpg";
import F_ArtOfLove from "../assets/movies/f_art_of_love.jpg";
import F_MrMalcolmsList from "../assets/movies/f_mr_malcolms_list.jpg";
import F_HalloweenEnds from "../assets/movies/f_halloween_ends.jpg";
import F_VikingWolf from "../assets/movies/f_viking_wolf.jpg";
import F_Aquaman from "../assets/movies/f_aquaman.webp";
import F_Uncharted from "../assets/movies/f_uncharted.jpg";
import F_MonkeyKing from "../assets/movies/f_monkey_king.jpg";
import F_Lift from "../assets/movies/f_lift.jpg";
import F_FamilySwitch from "../assets/movies/f_family_switch.jpg";
import F_Players from "../assets/movies/f_players.jpg";

export const movies = [
  {
    id: 1,
    name: "Annette",
    image: F_Annette,
    description:
      "A stand-up comedian and his opera singer wife have a two-year-old daughter with a surprising gift.",
    time: "2h 21m",
    rating: 3,
    genre: "Romance",
    starring: "Adam Driver, Marion Cotillard, Simon Helberg",
    group: "new",
    video: "https://www.youtube.com/embed/dRuKrWbSzLA?si=gphRThGu_4LFVTRn",
    availableDates: {
      "2024-07-25": [
        { time: "5:00 PM", hall: "A2", type: "2D", price: 13 },
        { time: "8:00 PM", hall: "A2", type: "2D", price: 13 },
        { time: "12:00 AM", hall: "A2", type: "2D", price: 13 },
      ],
      "2024-07-26": [
        { time: "4:00 PM", hall: "A3", type: "2D", price: 13 },
        { time: "4:30 PM", hall: "A2", type: "3D", price: 15 },
        { time: "8:00 PM", hall: "A1", type: "3D", price: 15 },
      ],
      "2024-07-27": [
        { time: "3:00 PM", hall: "A2", type: "standard", price: 10 },
        { time: "6:00 PM", hall: "A2", type: "standard", price: 10 },
        { time: "7:00 PM", hall: "B3", type: "standard", price: 10 },
      ],
    },
  },

  {
    id: 2,
    name: "Ava",
    image: F_Ava,
    description:
      "Ava is a deadly assassin who works for a black ops organization, traveling the globe specializing in high profile hits. When a job goes dangerously wrong she is forced to fight for her own survival.",
    time: "1h 36m",
    rating: 5,
    genre: "Action",
    starring: "Jessica Chastain, John Malkovich",
    group: "new",
    video: "https://www.youtube.com/embed/oRKQAk2Kwbg?si=BbM_KFXrLadpTBrQ",
    availableDates: {
      "2024-07-24": [
        { time: "7:00 PM", hall: "A1", type: "standard", price: 10 },
        { time: "9:00 PM", hall: "A1", type: "standard", price: 10 },
        { time: "11:00 PM", hall: "A1", type: "standard", price: 10 },
      ],
      "2024-07-25": [
        { time: "5:00 PM", hall: "A3", type: "standard", price: 10 },
        { time: "6:00 PM", hall: "A2", type: "standard", price: 10 },
        { time: "6:10 PM", hall: "A1", type: "standard", price: 10 },
      ],
      "2024-07-27": [
        { time: "3:00 PM", hall: "A1", type: "standard", price: 10 },
        { time: "8:30 PM", hall: "A3", type: "standard", price: 10 },
        { time: "10:00 PM", hall: "B3", type: "standard", price: 10 },
      ],
    },
  },
  {
    id: 3,
    name: "The Sea Beast",
    image: F_SeaBeast,
    description:
      "When a young girl stows away on the ship of a legendary sea monster hunter, they launch an epic journey into uncharted waters - and make history to boot.",
    time: "1h 55m",
    rating: 4,
    genre: "Animation",
    starring: "Karl Urban, Zaris-Angel Hator",
    group: "new",
    video: "https://www.youtube.com/embed/P-E-IGQCsPo?si=CuMvOJhCh6YbntqX",
    availableDates: {
      "2024-07-25": [
        { time: "4:45 PM", hall: "A3", type: "2D", price: 13 },
        { time: "7:00 PM", hall: "A3", type: "2D", price: 13 },
        { time: "10:15 PM", hall: "A3", type: "2D", price: 13 },
      ],
      "2024-07-26": [
        { time: "4:00 PM", hall: "B1", type: "3D", price: 15 },
        { time: "4:30 PM", hall: "B1", type: "3D", price: 15 },
        { time: "8:00 PM", hall: "B1", type: "3D", price: 15 },
      ],
      "2024-07-27": [
        { time: "8:00 PM", hall: "B2", type: "3D", price: 15 },
        { time: "8:10 PM", hall: "A2", type: "3D", price: 15 },
        { time: "8:15 PM", hall: "B3", type: "2D", price: 13 },
      ],
    },
  },
  {
    id: 4,
    name: "Finding Dory",
    image: F_FindingADory,
    description:
      "Friendly but forgetful blue tang Dory begins a search for her long-lost parents and everyone learns a few things about the real meaning of family along the way.",
    time: "1h 37m",
    rating: 3,
    genre: "Animation",
    starring: "Bob Peterson, Andrew Stanton",
    group: "new",
    video: "https://www.youtube.com/embed/3JNLwlcPBPI?si=g0X-LWULr3PaDBXx",
    availableDates: {
      "2024-07-23": [
        { time: "3:00 PM", hall: "B3", type: "3D", price: 15 },
        { time: "3:45 PM", hall: "A3", type: "3D", price: 15 },
        { time: "6:00 PM", hall: "A3", type: "3D", price: 15 },
      ],
      "2024-07-24": [
        { time: "3:00 PM", hall: "B1", type: "3D", price: 15 },
        { time: "3:40 PM", hall: "A1", type: "3D", price: 15 },
        { time: "7:00 PM", hall: "A1", type: "3D", price: 15 },
      ],
      "2024-07-28": [
        { time: "5:00 PM", hall: "A2", type: "3D", price: 15 },
        { time: "8:10 PM", hall: "A2", type: "3D", price: 15 },
        { time: "8:00 PM", hall: "B3", type: "3D", price: 15 },
      ],
    },
  },

  {
    id: 5,
    name: "Horror In The Forest",
    image: F_HorrorInForest,
    description:
      "The curse of Rudwick Forest awaits three fearless paranormal investigators, delving into the long history of its unexplained missing persons cases, said to be the work of a vengeful witch.",
    time: "1h 20m",
    rating: 5,
    genre: "Horror",
    starring: "Dylan DeVane, Tatum Bates ",
    group: "new",
    video: "https://www.youtube.com/embed/qmGxKLyBtl0?si=qVyp1cFfM5TKrVbl",
    availableDates: {
      "2024-07-23": [
        { time: "8:00 PM", hall: "B1", type: "standard", price: 10 },
        { time: "9:30 PM", hall: "A2", type: "standard", price: 10 },
        { time: "10:00 PM", hall: "A3", type: "standard", price: 10 },
      ],
      "2024-07-26": [
        { time: "8:00 PM", hall: "B3", type: "standard", price: 10 },
        { time: "9:45 PM", hall: "B3", type: "standard", price: 10 },
        { time: "12:00 AM", hall: "B3", type: "standard", price: 10 },
      ],
      "2024-07-30": [
        { time: "7:00 PM", hall: "A2", type: "standard", price: 10 },
        { time: "9:10 PM", hall: "A2", type: "standard", price: 10 },
        { time: "11:00 PM", hall: "A1", type: "standard", price: 10 },
      ],
    },
  },
  {
    id: 6,
    name: "The Fault In Our Stars",
    image: F_FaultInOurStars,
    description:
      "Hazel and Gus are teenagers who meet at a cancer support group and fall in love. They both share the same acerbic wit and a love of books, especially 'An Imperial Affliction', so they embark on a journey to visit an author in Amsterdam.",
    time: "2h 6m",
    rating: 5,
    genre: "Romance",
    starring: "Shailene Woodley, Ansel Elgort, Nat Wolff",
    // group: "recommended",
    video: "https://www.youtube.com/embed/9ItBvH5J6ss?si=wC9wD-jjWkFAw8g3",
    availableDates: {
      "2024-07-22": [
        { time: "5:00 PM", hall: "B2", type: "standard", price: 10 },
        { time: "5:30 PM", hall: "A3", type: "standard", price: 10 },
        { time: "6:00 PM", hall: "A1", type: "standard", price: 10 },
      ],
      "2024-07-23": [
        { time: "8:00 PM", hall: "B2", type: "standard", price: 10 },
        { time: "8:45 PM", hall: "B1", type: "standard", price: 10 },
        { time: "11:00 PM", hall: "B1", type: "standard", price: 10 },
      ],
      "2024-07-24": [
        { time: "4:00 PM", hall: "A1", type: "standard", price: 10 },
        { time: "7:00 PM", hall: "A1", type: "standard", price: 10 },
        { time: "10:20 PM", hall: "A1", type: "standard", price: 10 },
      ],
    },
  },
  {
    id: 7,
    name: "The Idea Of You",
    image: F_IdeaOfYou,
    description:
      "Solène, a 40-year-old single mom, begins an unexpected romance with 24-year-old Hayes Campbell, the lead singer of August Moon, the hottest boy band on the planet.",
    time: "1h 55m",
    rating: 4,
    genre: "Romance",
    starring: "Anne Hathaway, Nicholas Galitzine ",
    group: "new",
    video: "https://www.youtube.com/embed/sef6dNsKxeA?si=7xiew1t1Y7ZUa9dU",
    availableDates: {
      "2024-07-22": [
        { time: "5:00 PM", hall: "B2", type: "standard", price: 10 },
        { time: "5:30 PM", hall: "A2", type: "standard", price: 10 },
        { time: "6:00 PM", hall: "A3", type: "standard", price: 10 },
      ],
      "2024-07-24": [
        { time: "8:00 PM", hall: "B2", type: "standard", price: 10 },
        { time: "8:45 PM", hall: "B1", type: "standard", price: 10 },
        { time: "10:30 PM", hall: "B2", type: "standard", price: 10 },
      ],
      "2024-07-25": [
        { time: "7:00 PM", hall: "A1", type: "standard", price: 10 },
        { time: "7:00 PM", hall: "A3", type: "standard", price: 10 },
        { time: "7:10 PM", hall: "A2", type: "standard", price: 10 },
      ],
    },
  },
  {
    id: 8,
    name: "The Wild Robot",
    image: F_WildRobot,
    description:
      "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
    time: "1h 24m",
    rating: 3,
    genre: "Animation",
    starring: "Lupita Nyong'o, Pedro Pascal ",
    group: "new",
    video: "https://www.youtube.com/embed/67vbA5ZJdKQ?si=y_yiPYZaTh6kRI_9",
    availableDates: {
      "2024-07-26": [
        { time: "5:00 PM", hall: "B2", type: "2D", price: 13 },
        { time: "5:45 PM", hall: "A2", type: "2D", price: 13 },
        { time: "6:15 PM", hall: "A3", type: "2D", price: 13 },
      ],
      "2024-07-27": [
        { time: "6:00 PM", hall: "B2", type: "2D", price: 13 },
        { time: "8:10 PM", hall: "B1", type: "2D", price: 13 },
        { time: "8:30 PM", hall: "B2", type: "2D", price: 13 },
      ],
      "2024-07-28": [
        { time: "5:00 PM", hall: "A1", type: "2D", price: 13 },
        { time: "7:00 PM", hall: "A3", type: "2D", price: 13 },
        { time: "7:10 PM", hall: "A2", type: "2D", price: 13 },
      ],
    },
  },
  {
    id: 9,
    name: "Red Notice",
    image: F_RedNotice,
    description:
      "An Interpol agent successfully tracks down the world's most wanted art thief with help from a rival thief. But nothing is as it seems as a series of double-crosses ensues.",
    time: "1h 58m",
    rating: 5,
    genre: "Comedy",
    starring: "Dwayne Johnson, Ryan Reynolds, Gal Gadot ",
    // group: "recommended",
    video: "https://www.youtube.com/embed/Pj0wz7zu3Ms?si=nAC50riJdhX-HyC9",
    availableDates: {
      "2024-07-26": [
        { time: "5:00 PM", hall: "A2", type: "standard", price: 10 },
        { time: "7:30 PM", hall: "A2", type: "standard", price: 10 },
        { time: "6:15 PM", hall: "A1", type: "standard", price: 10 },
      ],
      "2024-07-27": [
        { time: "6:00 PM", hall: "B2", type: "standard", price: 10 },
        { time: "8:00 PM", hall: "B3", type: "standard", price: 10 },
        { time: "8:20 PM", hall: "B2", type: "standard", price: 10 },
      ],
      "2024-07-28": [
        { time: "6:00 PM", hall: "A1", type: "standard", price: 10 },
        { time: "8:10 PM", hall: "A1", type: "standard", price: 10 },
        { time: "10:30 PM", hall: "A1", type: "standard", price: 10 },
      ],
    },
  },
  {
    id: 10,
    name: "Art of Love",
    image: F_ArtOfLove,
    description:
      "After learning that the art thief she has been chasing is her ex-lover, an officer working for Interpol concocts a plan to catch him red-handed.",
    time: "1h 39m",
    rating: 3,
    genre: "Romance",
    starring: "Birkan Sokullu, Esra Bilgiç, Firat Taniş",
    group: "recommended",
    video: "https://www.youtube.com/embed/f77agh-CZ-c?si=hkr5KsyJIapCAHYp",
    availableDates: {
      "2024-07-23": [
        { time: "9:00 PM", hall: "A3", type: "standard", price: 10 },
        { time: "11:00 PM", hall: "A3", type: "standard", price: 10 },
        { time: "10:15 PM", hall: "A1", type: "standard", price: 10 },
      ],
      "2024-07-24": [
        { time: "10:00 PM", hall: "A3", type: "standard", price: 10 },
        { time: "8:00 PM", hall: "A2", type: "standard", price: 10 },
        { time: "10:00 PM", hall: "A2", type: "standard", price: 10 },
      ],
      "2024-07-27": [
        { time: "9:00 PM", hall: "B2", type: "standard", price: 10 },
        { time: "11:00 PM", hall: "B2", type: "standard", price: 10 },
        { time: "10:30 PM", hall: "B3", type: "standard", price: 10 },
      ],
    },
  },
  {
    id: 11,
    name: "Mr. Malcolm's List",
    image: F_MrMalcolmsList,
    description:
      "A young woman rebuffed by London's most selective bachelor enlists her childhood friend to assume the role of his ideal mate — solely to break his heart.",
    time: "1h 57m",
    rating: 5,
    genre: "Comedy",
    starring: "Freida Pinto, Ṣọpẹ Dìrísù, Oliver Jackson-Cohen",
    // group: "recommended",
    video: "https://www.youtube.com/embed/4ONCEOWbl4s?si=3fDYo8uTH14X9EsC",
    availableDates: {
      "2024-07-23": [
        { time: "10:00 PM", hall: "A2", type: "standard", price: 10 },
        { time: "11:00 PM", hall: "A1", type: "standard", price: 10 },
        { time: "12:15 AM", hall: "A2", type: "standard", price: 10 },
      ],
      "2024-07-24": [
        { time: "10:00 PM", hall: "A2", type: "standard", price: 10 },
        { time: "8:00 PM", hall: "A1", type: "standard", price: 10 },
        { time: "10:20 PM", hall: "A1", type: "standard", price: 10 },
      ],
      "2024-07-27": [
        { time: "9:00 PM", hall: "B3", type: "standard", price: 10 },
        { time: "9:00 PM", hall: "B1", type: "standard", price: 10 },
        { time: "9:30 PM", hall: "B2", type: "standard", price: 10 },
      ],
    },
  },
  {
    id: 12,
    name: "Halloween Ends",
    image: F_HalloweenEnds,
    description:
      "Attempting to build a new life with her granddaughter, Laurie Strode suspects a new round of mysterious deaths is linked to masked killer Michael Myers.",
    time: "1h 50m",
    rating: 2,
    genre: "Horror",
    starring: "Jamie Lee Curtis, Andi Matichak, Rohan Campbell ",
    group: "recommended",
    video: "https://www.youtube.com/embed/i_mAWKyfj6c?si=N3TUACQZC6zCZqBz",
    availableDates: {
      "2024-07-27": [
        { time: "7:30 PM", hall: "A1", type: "standard", price: 10 },
        { time: "9:40 PM", hall: "A1", type: "standard", price: 10 },
        { time: "11:50 PM", hall: "A1", type: "standard", price: 10 },
      ],
      "2024-07-28": [
        { time: "7:30 PM", hall: "A2", type: "standard", price: 10 },
        { time: "9:40 PM", hall: "A2", type: "standard", price: 10 },
        { time: "11:50 PM", hall: "A2", type: "standard", price: 10 },
      ],
      "2024-07-29": [
        { time: "9:00 PM", hall: "B3", type: "standard", price: 10 },
        { time: "10:00 PM", hall: "B1", type: "standard", price: 10 },
        { time: "12:15 AM", hall: "B1", type: "standard", price: 10 },
      ],
    },
  },
  {
    id: 13,
    name: "Viking Wolf",
    image: F_VikingWolf,
    description:
      "After witnessing a grotesque murder at a party in her new town, a teenager starts having strange visions and bizarre desires.",
    time: "1h 38m",
    rating: 4,
    genre: "Horror",
    starring: "Elli Müller Osborne, Liv Mjönes, Arthur Hakalahti",
    group: "recommended",
    video: "https://www.youtube.com/embed/6sxnOLRGkhw?si=_CGlPfBlHgUvgh5O",
    availableDates: {
      "2024-07-29": [
        { time: "7:30 PM", hall: "B3", type: "standard", price: 10 },
        { time: "9:30 PM", hall: "B2", type: "standard", price: 10 },
        { time: "11:30 PM", hall: "B2", type: "standard", price: 10 },
      ],
      "2024-07-30": [
        { time: "12:00 AM", hall: "A2", type: "standard", price: 10 },
        { time: "9:40 PM", hall: "A1", type: "standard", price: 10 },
        { time: "11:50 PM", hall: "A1", type: "standard", price: 10 },
      ],
      "2024-07-31": [
        { time: "9:00 PM", hall: "B1", type: "standard", price: 10 },
        { time: "10:00 PM", hall: "B3", type: "standard", price: 10 },
        { time: "12:00 AM", hall: "B3", type: "standard", price: 10 },
      ],
    },
  },
  {
    id: 14,
    name: "Aquaman",
    image: F_Aquaman,
    description:
      "Amphibious superhero Arthur Curry learns what it means to be Aquaman when he must stop the king of Atlantis from waging war against the surface world.",
    time: "2h 23m",
    rating: 5,
    genre: "Action",
    starring: "Jason Momoa, Amber Heard, Willem Dafoe",
    // group: "recommended",
    video: "https://www.youtube.com/embed/2wcj6SrX4zw?si=8sTWC-9BCXE807OE",
    availableDates: {
      "2024-07-29": [
        { time: "7:30 PM", hall: "B1", type: "standard", price: 10 },
        { time: "6:30 PM", hall: "B2", type: "standard", price: 10 },
        { time: "9:00 PM", hall: "B2", type: "standard", price: 10 },
      ],
      "2024-07-31": [
        { time: "9:00 PM", hall: "A3", type: "standard", price: 10 },
        { time: "9:40 PM", hall: "A1", type: "standard", price: 10 },
        { time: "12:30 PM", hall: "A3", type: "standard", price: 10 },
      ],
      "2024-08-01": [
        { time: "9:00 PM", hall: "B1", type: "standard", price: 10 },
        { time: "10:00 PM", hall: "B2", type: "standard", price: 10 },
        { time: "11:20 PM", hall: "B3", type: "standard", price: 10 },
      ],
    },
  },
  {
    id: 15,
    name: "Uncharted",
    image: F_Uncharted,
    description:
      "Street-smart treasure hunter Nathan Drake and his renegade mentor Sully set out on a dangerous adventure across the globe to find Magellan's lost gold.",
    time: "1h 56m",
    rating: 3,
    genre: "Action",
    starring: "Tom Holland, Mark Wahlberg, Antonio Banderas",
    group: "recommended",
    video: "https://www.youtube.com/embed/4wCH1K-ckZw?si=roLfOqfiq-H9qVXg",
    availableDates: {
      "2024-07-29": [
        { time: "6:30 PM", hall: "B2", type: "standard", price: 10 },
        { time: "7:30 PM", hall: "B3", type: "standard", price: 10 },
        { time: "9:00 PM", hall: "B1", type: "standard", price: 10 },
      ],
      "2024-07-31": [
        { time: "9:00 PM", hall: "A2", type: "standard", price: 10 },
        { time: "11:15 PM", hall: "A2", type: "standard", price: 10 },
        { time: "10:30 PM", hall: "A1", type: "standard", price: 10 },
      ],
      "2024-08-01": [
        { time: "8:00 PM", hall: "B3", type: "standard", price: 10 },
        { time: "10:10 PM", hall: "B3", type: "standard", price: 10 },
        { time: "11:15 PM", hall: "B2", type: "standard", price: 10 },
      ],
    },
  },
  {
    id: 16,
    name: "The Monkey King",
    image: F_MonkeyKing,
    description:
      "A stick-wielding monkey teams with a young girl on an epic quest for immortality, battling demons, dragons, gods — and his own ego — along the way.",
    time: "1h 36m",
    rating: 4,
    genre: "Animation",
    starring: "Jimmy O. Yang, Bowen Yang, Jolie Hoang-Rappaport",
    group: "recommended",
    video: "https://www.youtube.com/embed/-Ao79QJNE-s?si=n2U-8PXNvtjOtluj",
    availableDates: {
      "2024-07-30": [
        { time: "6:30 PM", hall: "B1", type: "3D", price: 15 },
        { time: "6:30 PM", hall: "B2", type: "3D", price: 15 },
        { time: "8:10 PM", hall: "B2", type: "standard", price: 10 },
      ],
      "2024-08-01": [
        { time: "5:00 PM", hall: "A1", type: "standard", price: 10 },
        { time: "6:50 PM", hall: "A1", type: "3D", price: 15 },
        { time: "8:15 PM", hall: "A3", type: "3D", price: 15 },
      ],
      "2024-08-02": [
        { time: "8:00 PM", hall: "B2", type: "3D", price: 15 },
        { time: "9:50 PM", hall: "B2", type: "2D", price: 13 },
        { time: "10:15 PM", hall: "B1", type: "2D", price: 13 },
      ],
    },
  },
  {
    id: 17,
    name: "Lift",
    image: F_Lift,
    description:
      "A professional thief and his expert crew attempt the ultimate heist: stealing $500 million in gold from a vault on a plane — 40,000 feet in the air.",
    time: "1h 46m",
    rating: 5,
    genre: "Action",
    starring: "Kevin Hart, Gugu Mbatha-Raw, Vincent D'Onofrio",
    // group: "recommended",
    video: "https://www.youtube.com/embed/m2L-Sa_6MU0?si=obhGVs8X2vf7wJWF",
    availableDates: {
      "2024-07-30": [
        { time: "7:30 PM", hall: "A1", type: "standard", price: 10 },
        { time: "8:30 PM", hall: "A2", type: "standard", price: 10 },
        { time: "9:00 PM", hall: "B2", type: "standard", price: 10 },
      ],
      "2024-07-31": [
        { time: "6:00 PM", hall: "B1", type: "standard", price: 10 },
        { time: "8:50 PM", hall: "A1", type: "standard", price: 10 },
        { time: "10:15 PM", hall: "A3", type: "standard", price: 10 },
      ],
      "2024-08-02": [
        { time: "11:00 PM", hall: "A2", type: "standard", price: 10 },
        { time: "11:30 PM", hall: "B3", type: "standard", price: 10 },
        { time: "10:15 PM", hall: "B1", type: "standard", price: 10 },
      ],
    },
  },
  {
    id: 18,
    name: "Family Switch",
    image: F_FamilySwitch,
    description:
      "A family descends into chaos days before Christmas when a rare cosmic event causes the parents to swap bodies with their teenage kids.",
    time: "1h 45m",
    rating: 4,
    genre: "Comedy",
    starring: "Jennifer Garner, Ed Helms, Emma Myers",
    group: "recommended",
    video: "https://www.youtube.com/embed/SWh4c9EVqGM?si=J89v4ih_QXdyjQgk",
    availableDates: {
      "2024-07-25": [
        { time: "7:00 PM", hall: "A2", type: "standard", price: 10 },
        { time: "8:50 PM", hall: "A1", type: "standard", price: 10 },
        { time: "9:00 PM", hall: "B1", type: "standard", price: 10 },
      ],
      "2024-07-27": [
        { time: "11:00 PM", hall: "B2", type: "standard", price: 10 },
        { time: "8:00 PM", hall: "A3", type: "standard", price: 10 },
        { time: "10:00 PM", hall: "A3", type: "standard", price: 10 },
      ],
      "2024-07-28": [
        { time: "12:00 AM", hall: "A1", type: "standard", price: 10 },
        { time: "9:00 PM", hall: "B3", type: "standard", price: 10 },
        { time: "11:10 PM", hall: "B3", type: "standard", price: 10 },
      ],
    },
  },
  {
    id: 19,
    name: "Players",
    image: F_Players,
    description:
      "A New York sports writer with a playbook of clever hookup schemes unexpectedly falls for a fling. Can she go from playing the field to playing for keeps?",
    time: "1h 45m",
    rating: 3,
    genre: "Comedy",
    starring: "Gina Rodriguez, Damon Wayans Jr., Tom Ellis",
    group: "recommended",
    video: "https://www.youtube.com/embed/8gH6AEBwEAw?si=7Xg4UliaLHr2iLcG",
    availableDates: {
      "2024-07-26": [
        { time: "7:00 PM", hall: "A2", type: "standard", price: 10 },
        { time: "8:00 PM", hall: "A3", type: "standard", price: 10 },
        { time: "9:00 PM", hall: "B2", type: "standard", price: 10 },
      ],
      "2024-07-27": [
        { time: "11:00 PM", hall: "B2", type: "standard", price: 10 },
        { time: "8:00 PM", hall: "A1", type: "standard", price: 10 },
        { time: "10:00 PM", hall: "A1", type: "standard", price: 10 },
      ],
      "2024-07-31": [
        { time: "11:00 PM", hall: "A2", type: "standard", price: 10 },
        { time: "9:00 PM", hall: "B2", type: "standard", price: 10 },
        { time: "11:10 PM", hall: "B2", type: "standard", price: 10 },
      ],
    },
  },
];

export const getAllMovies = () => {
  return movies;
};
