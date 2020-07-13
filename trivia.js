const triviaQuestions = [
  {
    questionId: 1,
    category: "TV Sitcoms",
    question: "What was Kramer's first name on the TV show Seinfeld?",
    answer1: "Newman",
    answer2: "Kevin",
    answer3: "Roswell",
    answer4: "Cosmo",
    correctAnswer: 4,
  },
  {
    questionId: 2,
    category: "TV Sitcoms",
    question:
      "On the TV show Friends, what is the name of the song that Phoebe often sang at the Coffee House?",
    answer1: "Alley Cat",
    answer2: "Silly Cat",
    answer3: "Smelly Cat",
    answer4: "Jelly Cat",
    correctAnswer: 3,
  },

  {
    questionId: 3,
    category: "Literature",
    question:
      "In a famous 19th century novel, who or what did the captain and crew of the ship Pequod hunt for?",
    answer1: "Frankenstein",
    answer2: "The white whale, Moby Dick",
    answer3: "A Great White shark",
    answer4: "Captain Nemo",
    correctAnswer: 2,
  },
  {
    questionId: 4,
    category: "literature",
    question: "Who was the group of people who followed Robin Hood?",
    answer1: "The Mighty Men",
    answer2: "The Happy Hooligans",
    answer3: "The Goofy Guys",
    answer4: "The Merry Men",
    correctAnswer: 4,
  },
  {
    questionId: 5,
    category: "Astronomy",
    question: "What is the average distance between the Earth and Sun?",
    answer1: "93 million miles",
    answer2: "238,000 miles",
    answer3: "241 million miles",
    answer4: "1 light year",
    correctAnswer: 1,
  },
  {
    questionId: 6,
    category: "Astronomy",
    question:
      "In the northern hemisphere, the best known constellation in the sky is probably Ursa Major. By what name do we commonly call this constellation?",
    answer1: "The Big Dipper",
    answer2: "The Northern Lights",
    answer3: "The Milky Way",
    answer4: "Andromeda",
    correctAnswer: 1,
  },
  {
    questionId: 7,
    category: "Sports",
    question:
      "What baseball player still holds the record for most at bats, most hits and most games played in a career?",
    answer1: "Lou Gehrig",
    answer2: "Cal Ripken Jr.",
    answer3: "Pete Rose",
    answer4: "Steve Garvey",
    correctAnswer: 3,
  },
  {
    questionId: 8,
    category: "Basic Civics",
    question:
      "Article 1 of the US Constitution defines the powers of what branch of the US government?",
    answer1: "The Legislative branch",
    answer2: "The Executive branch",
    answer3: "The Militiary branch",
    answer4: "The Judicial branch",
    correctAnswer: 1,
  },
  {
    questionId: 9,
    category: "Movies",
    question:
      "Name the movie with this famous quote: 'Open the pod bay doors, HAL'.",
    answer1: "Titanic",
    answer2: "Star Wars",
    answer3: "2001: A Space Odyssey",
    answer4: "Gone With The Wind",
    correctAnswer: 3,
  },
  {
    questionId: 10,
    category: "Science",
    question:
      "Geological Eras are measured in millions of years. In what geological era did the dinosaurs live?",
    answer1: "Paleozoic Era",
    answer2: "Mesozoic Era",
    answer3: "Cenozoic Era",
    answer4: "Precambrian Era",
    correctAnswer: 2,
  },
  {
    questionId: 11,
    category: "Geography",
    question:
      "Ten of the 12 countries in South America border an ocean. Which of these countries is completely landlocked?",
    answer1: "Ecuador",
    answer2: "Columbia",
    answer3: "Guyana",
    answer4: "Bolivia",
    correctAnswer: 4,
  },
  {
    questionId: 12,
    category: "Music",
    question:
      "In 1956, Elvis Presley said he found a new place to dwell. What was its name?",
    answer1: "Heartbreak Hotel",
    answer2: "Blueberry Hill",
    answer3: "Viva Las Vegas",
    answer4: "Jailhouse Rock",
    correctAnswer: 1,
  },
  {
    questionId: 13,
    category: "Astronomy",
    question: "What planet has 2 moons named Phobos and Deimos?",
    answer1: "Jupiter",
    answer2: "Mars",
    answer3: "Pluto",
    answer4: "Venus",
    correctAnswer: 2,
  },
  {
    questionId: 14,
    category: "Astronomy",
    question: "What is the Large Magellanic Cloud?",
    answer1: "A nebula made of of gas and debris",
    answer2: "An asteroid belt in our Solar System",
    answer3: "A small galaxy near the Milky Way",
    answer4: "A cluster of galaxies in the constellation Virgo",
    correctAnswer: 3,
  },
  {
    questionId: 15,
    category: "Sports",
    question: "Who was the last baseball player to bat over .400 for a season?",
    answer1: "Ty Cobb",
    answer2: "Joe DiMaggio",
    answer3: "Shoeless Joe Jackson",
    answer4: "Ted Williams",
    correctAnswer: 4,
  },
  {
    questionId: 16,
    category: "History",
    question:
      "How many US Presidents have been removed from office through the impeachemt process?",
    answer1: "Zero",
    answer2: "1",
    answer3: "2",
    answer4: "3",
    correctAnswer: 1,
  },
  {
    questionId: 17,
    category: "Canadian Trivia",
    question:
      "If a Canadian gives you a Loonie, what would you likely do with it?",
    answer1: "Catch a fish with it",
    answer2: "Spend it",
    answer3: "Eat it",
    answer4: "Drink it",
    correctAnswer: 2,
  },
  {
    questionId: 18,
    category: "Science",
    question: "In what field of science would you use a sling psychrometer?",
    answer1: "Meteorology",
    answer2: "Geology",
    answer3: "Particle physics",
    answer4: "Astronomy",
    correctAnswer: 1,
  },
  {
    questionId: 19,
    category: "Movies",
    question:
      "What movie has this quote: 'You keep saying that word. I do not think it means what you think it means.'?",
    answer1: "Raiders of the Lost Ark",
    answer2: "Back to the Future",
    answer3: "The Princess Bride",
    answer4: "Butch Cassidy and the Sundance Kid",
    correctAnswer: 3,
  },
  {
    questionId: 20,
    category: "History",
    question:
      "In what year did the first commercial television station broadcast?",
    answer1: "1918",
    answer2: "1928",
    answer3: "1938",
    answer4: "1948",
    correctAnswer: 2,
  },
  {
    questionId: 21,
    category: "Vocabulary",
    question: "What is the literal translaton of the French term cul-de-sac?",
    answer1: "Dead end",
    answer2: "Circle",
    answer3: "Turn around",
    answer4: "Bottom of the bag",
    correctAnswer: 4,
  },
  {
    questionId: 22,
    category: "History",
    question: "Who was the first US president to die while in office?",
    answer1: "William Henry Harrison",
    answer2: "Abraham Lincoln",
    answer3: "James Garfield",
    answer4: "Zachary Taylor",
    correctAnswer: 1,
  },
  {
    questionId: 23,
    category: "Basic Civics",
    question:
      "Which of these is a promise you make when you become a United States citizen?",
    answer1: "To vote in every election",
    answer2: "To give up loyalty to other countries",
    answer3: "To never travel outside the United States",
    answer4: "To run for office",
    correctAnswer: 2,
  },
  {
    questionId: 24,
    category: "Basic Civics",
    question:
      "Many rights apply to everyone within the United States. Which of these apply ONLY to US citizens?",
    answer1: "The right to free speech",
    answer2: "The right to practice any or no religion",
    answer3: "The right to vote",
    answer4: "The right to petition the government",
    correctAnswer: 3,
  },
  {
    questionId: 25,
    category: "Basic Civics",
    question:
      "What do we call the constitution guarantee that a defendant will receive a fair and impartial trial?",
    answer1: "Common Law",
    answer2: "Habeas Corpus",
    answer3: "Burden of proof",
    answer4: "Due process of law",
    correctAnswer: 4,
  },

  {
    questionId: 26,
    category: "History",
    question:
      "In what year did the first commercial airline flight occur carrying passengers from one city to another?",
    answer1: "1914",
    answer2: "1920",
    answer3: "1926",
    answer4: "1932",
    correctAnswer: 1,
  },
  {
    questionId: 27,
    category: "History",
    question:
      "What scientist and inventor first created the AC (alternating current) motor and developed technology to generate and transmit AC electricity?",
    answer1: "Thomas Edison",
    answer2: "Nikola Tesla",
    answer3: "Ben Franklin",
    answer4: "Albert Einstein",
    correctAnswer: 2,
  },
  {
    questionId: 28,
    category: "Sports",
    question:
      "What baseball team had a 108 year gap between World Series championships?",
    answer1: "Cleveland Indians",
    answer2: "Cincinnati Reds",
    answer3: "Chicago Cubs",
    answer4: "Milwaukee Brewers",
    correctAnswer: 3,
  },
  {
    questionId: 29,
    category: "Geography",
    question:
      "According to the US Geological Service, what is the longest river in the United States at 2540 miles?",
    answer1: "The Mississippi",
    answer2: "The Colorado",
    answer3: "The Columbia",
    answer4: "The Missouri",
    correctAnswer: 4,
  },
  {
    questionId: 30,
    category: "Movies",
    question:
      "Name the movie with this quote: 'Are you crying? There's no crying in baseball!'",
    answer1: "A League of Their Own",
    answer2: "When Harry Met Sally",
    answer3: "The Pride of the Yankees",
    answer4: "Sleepless in Seattle",
    correctAnswer: 1,
  },
  {
    questionId: 31,
    category: "Movies",
    question: "Which movie had this quote? 'Leave the gun. Take the Cannoli.'",
    answer1: "Goodfellas",
    answer2: "The Godfather",
    answer3: "Casino",
    answer4: "The Irishman",
    correctAnswer: 2,
  },
  {
    questionId: 32,
    category: "Movies",
    question:
      "Which movie had this quote? 'I do wish we could chat longer but I'm having an old friend for dinner.'",
    answer1: "Taxi Driver",
    answer2: "Psycho",
    answer3: "Silence of the Lambs",
    answer4: "Jaws",
    correctAnswer: 3,
  },
  {
    questionId: 33,
    category: "Movies",
    question:
      "By what other name do we know the movie star who was born Marian Morrison in Winterset, Iowa?",
    answer1: "Tom Hanks",
    answer2: "William Shatner",
    answer3: "Clint Eastwood",
    answer4: "John Wayne",
    correctAnswer: 4,
  },
  {
    questionId: 34,
    category: "History",
    question:
      "'Remember the Maine' was the motto that called Americans to fight in what war?",
    answer1: "The Spanish-American War",
    answer2: "The Civil War",
    answer3: "The Mexican-American War",
    answer4: "World War I",
    correctAnswer: 1,
  },
  {
    questionId: 35,
    category: "Sports",
    question: "In what year did the NFL require players to wear helmets?",
    answer1: "1923",
    answer2: "1933",
    answer3: "1943",
    answer4: "1953",
    correctAnswer: 3,
  },
  {
    questionId: 36,
    category: "Presidential Quotes",
    question:
      "What president said 'My choice in life was to either be a piano player in a whorehouse or a politician. And to tell the truth, there's hardly any difference'?",
    answer1: "Bill Clinton",
    answer2: "Harry Truman",
    answer3: "Ronald Reagan",
    answer4: "Richard Nixon",
    correctAnswer: 2,
  },
  {
    questionId: 37,
    category: "US History",
    question: "Who was the first US president to win the Nobel Peace Prize?",
    answer1: "Woodrow Wilson",
    answer2: "Barack Obama",
    answer3: "Jimmy Carter",
    answer4: "Theodore Roosevelt",
    correctAnswer: 4,
  },
  {
    questionId: 38,
    category: "Science",
    question: "Which word means the study of insects?",
    answer1: "Entomology",
    answer2: "Ornithology",
    answer3: "Etymology",
    answer4: "Immunology",
    correctAnswer: 1,
  },
  {
    questionId: 39,
    category: "The Animal Kingdom",
    question:
      "In Yellowstone National Park, which species of animal injures the most people?",
    answer1: "Wolves",
    answer2: "Buffalo",
    answer3: "Bears",
    answer4: "Porcupines",
    correctAnswer: 2,
  },
  {
    questionId: 40,
    category: "Word Definitions",
    question: "Which word means the second to last in a series?",
    answer1: "Bilateral",
    answer2: "Ultimate",
    answer3: "Penultimate",
    answer4: "Quintessential",
    correctAnswer: 3,
  },
];
let triviaArray = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
];
