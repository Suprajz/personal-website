interface Props {
  id: number;
  description: string;
  title: string;
  director: string;
  year: string;
  country: string;
  image: {
    src: string;
    width: number;
    height: number;
    format: "jpg" | "png" | "jpeg" | "webp";
  };
  movie: string;
  autoplay?: boolean;
  mute?: boolean;
  watchLink: string;
}
import sevenSamurai from "../assets/seven_samurai.png";
import metropolis from "../assets/metropolis.png";
import fifthElement from "../assets/fifth_element.png";
import ikiru from "../assets/ikiru.png";
import strangelove from "../assets/strangelove.png";
import nostalgia from "../assets/nostalgia.png";
import varljivoLeto from "../assets/varljivo_leto.png";
import balkanskiSpijun from "../assets/balkanski_spijun.png";

const movieData: Props[] = [
  {
    id: 1,
    description:
      "Rice farmers hire a band of samurai to defend them against marauding  bandits in Akira Kurosawa’s influential epic, a touchstone for action  movies ever since. Ranked at number 20 in Sight & Sound’s 2022 Greatest Films of All Time critics’ poll, Akira Kurosawa  followed the breakthrough international acclaim for Rashomon (1950) and  Ikiru (1952) with this three-and-a-half-hour jidaigeki (period drama)  set during Japan’s turbulent 16th century. ",
    title: "Sedam Samuraja",
    director: "Akira Kurosawa",
    year: "1954",
    country: "Japan",
    image: sevenSamurai as any,
    movie: "https://www.youtube.com/embed/RsRN65PlaIM?si=U_YJaReOhrFueSMy",
    watchLink: "https://www.justwatch.com/us/movie/seven-samurai",
  },
  {
    id: 2,
    description:
      "In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working-class prophet who predicts the coming of a savior to mediate their differences.",
    title: "Metropolis",
    director: "Fritz Lang",
    year: "1927",
    country: "German Reich",
    image: metropolis as any,
    movie: "https://www.youtube.com/embed/gdtZv3XROnc?si=HqAebzCgf3L9W2YL",
    watchLink: "https://youtu.be/eNW9yo9IRBk?si=-QRkrmMDIXfm39Qb",
  },
  {
    id: 3,
    description:
      "In 2257, a taxi driver is unintentionally given the task of saving a young girl who is part of the key that will ensure the survival of humanity.",
    title: "Peti Element",
    director: "Luc Besson",
    year: "1997",
    country: "France",
    image: fifthElement as any,
    movie: "https://www.youtube.com/embed/Gg9nzOFVwtQ?si=75YhFn8esAyQStgI",
    watchLink: "https://www.justwatch.com/us/movie/the-fifth-element",
  },
  {
    id: 4,
    description:
      "Kanji Watanabe is a middle-aged man who has worked in the same monotonous bureaucratic position for decades. Learning he has cancer, he starts to look for the meaning of his life.",
    title: "Ikiru",
    director: "Akira Kurosawa",
    year: "1952",
    country: "Japan",
    image: ikiru as any,
    movie: "https://www.youtube.com/embed/geKhyNerWM8?si=3e59_tkgF268LANX",
    watchLink: "https://www.justwatch.com/us/movie/to-live",
  },
  {
    id: 5,
    description:
      "After the insane General Jack D. Ripper initiates a nuclear strike on the Soviet Union, a war room full of politicians, generals and a Russian diplomat all frantically try to stop the nuclear strike.",
    title: "Dr. Strangelove",
    director: "Stanley Kubrick",
    year: "1964",
    country: "United Kingdom",
    movie: "https://www.youtube.com/embed/jPU1AYTxwg4?si=UzTtoNHWiozLs3AV",
    watchLink:
      "https://www.justwatch.com/us/movie/dr-strangelove-or-how-i-learned-to-stop-worrying-and-love-the-bomb",
    image: strangelove as any,
  },
  {
    id: 6,
    description:
      "A Russian poet, Andrei and his interpreter, Eugenia travel to Italy to research the life of an 18th-century composer.",
    title: "Nostalgia",
    director: "Andrei Tarkovsky",
    year: "1983",
    country: "Soviet Union",
    image: nostalgia as any,
    movie: "https://www.youtube.com/embed/vMy-T5GI7Z0?si=Y41bOiC_QGDEyUff",
    watchLink: "https://www.justwatch.com/us/movie/nostalghia",
  },
  {
    id: 7,
    description:
      "For the young man who lives in Serbian province town, the maturing coincides with the turbulent political events of the year 1968.",
    title: "Varljivo Leto '68",
    director: "Goran Paskaljevic",
    year: "1984",
    country: "Yugoslavia",
    image: varljivoLeto as any,
    movie: "https://www.youtube.com/embed/rZFQMpkM5NE?si=EnepBoTKRA9l8_wP",
    watchLink: "https://mubi.com/en/rs/films/the-elusive-summer-of-68",
  },
  {
    id: 8,
    description:
      "Convinced that his subtenant is a spy and an enemy of the state, a man falls into deep paranoia which leads to absurd and destructive chain of events.",
    title: "Balkanski Spijun",
    director: "Dusan Kovacevic",
    year: "1984",
    country: "Yugoslavia",
    image: balkanskiSpijun as any,
    movie: "https://www.youtube.com/embed/gzL_iRpM67A?si=v7wR2bCRcgIJGgZk",
    watchLink: "https://mubi.com/en/rs/films/balkan-spy",
  },
];

export default movieData;
