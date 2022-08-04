import { useState } from "react/cjs/react.development";
import Theme from "./Templates/Theme";
import Question from "./Templates/Questions";
import Score from "./Templates/Score";
import Response from "./Templates/Response";

const App = () => {
  
      /**
       * FONCTION POUR AFFICHER ET CACHER LES PAGES
       */
      // Theme
      const [activePage, setActivePage] = useState('theme')


      // QUESTIONS
      const Questions = [
            {
            theme: ['Mathmatics', 'Mathématique'],
            data:
            [ // MATH
            {
                  question: ["Guess the retult of this operation : </br> 10 + 2 * 2 / 4 - 5",
                        "Deviner le resultat de cette opération : 10 + 2 * 2 / 4 - 5"],
                  choix: [["19", "6", "-24", "5", "1"],
                        ["19", "6", "-24", "5", "1"]],
                  reponse: ["6","6"]
            },
            {
                  question: [`x + 23 = 70 </br> what will be the value of x ?`,
                        "x + 23 = 70 </br> x vaut combien ?"],
                  choix: [["-93", "93", "57", "3.05", "1610"],
                        ["-93", "93", "57", "3.05", "1610"]],
                  reponse: ["57", "57"]
            },
            {
                  question: ["What is the square root of : </br> 100² + 3² * 2 - 12²",
                        "Quelle est la racine carrée de : </br> 100² + 3² * 2 - 12²"],
                  choix: [["170", "13 225", "-1090", "115", "200"],
                        ["170", "13 225", "-1090", "115", "200"]],
                  reponse: ["115","115"]
            },
            {
                  question: ["🍜 + 🍕 + 🧀 = 20 </br> 🍜 + 🧀 + 🧀 = 25 </br> 🧀 = ?",
                        "🍜 + 🍕 + 🧀 = 20 </br> 🍜 + 🧀 + 🧀 = 30 </br> 🧀 = ?"],
                  choix: [["10", "5", "20", "15", "0"],
                        ["10", "5", "20", "15", "0"]],
                  reponse: ["10", "10"]
            },
            {
                  question: [`x = 2 and y = 4. How much is z if : </br> z = y / x - x + y * x`,
                        `x = 2 and y = 3. Combien vaut z si : </br> z = y / x - x + y * x`],
                  choix: [["8", "10", "12", "0", "-6"],
                        ["8", "10", "12", "0", "-6"]],
                  reponse: ["-6", "-6"]
            }
            ] 
            },
            {
            theme: ['Programming', 'Programmation'],
            data:
            [ // PROGRAMMING
            {
                  question: ["Who invented the first programming langage ?",
                        "Qui a inventé le premier langage de programmation ?"],
                  choix: [["Men", "Women"],
                        ["Homme", "Femme"]],
                  reponse: ["Women", "Femme"]
            },
            {
                  question: [`Who is the creator of the programming language JavaScript ?`,
                        "Qui est le créateur du langage de programmation JavaScript"],
                  choix: [["Denis Ritchie", "Bjarne Stroustrup", "Brendan Eich", "John Backus", "James Gosling"],
                        ["Denis Ritchie", "Bjarne Stroustrup", "Brendan Eich", "John Backus", "James Gosling"]],
                  reponse: ["Brendan Eich", "Brendan Eich"]
            },
            {
                  question: ["Which programming langage is created by Microsoft ?",
                        "Quelle est le langage de programmation crée par Microsoft ?"],
                  choix: [["C#", "C++", "Java", "JavaScript", "Python"],
                        ["C#", "C++", "Java", "JavaScript", "Python"]],
                  reponse: ["C#", "C#"]
            },
            {
                  question: [`How to convert variable string to int in C# ?`,
                        "Comment convertir un variable de type String en int en C# ?"],
                  choix: [["Integer.parse(String)", "String_name.parseInt()", "String.parseInteger()", "int.Parse(String)", "int.ParseInteger(String)"],
                        ["Integer.parse(String)", "String_name.parseInt()", "String.parseInteger()", "int.Parse(String)", "int.ParseInteger(String)"]],
                  reponse: ["int.Parse(String)", "int.Parse(String)"]
            },
            {
                  question: [`Which programming langage dont use semi-column ";" ?`,
                        `Quelle est la langage de programmatinon qui n'utilise pas le ";"`],
                  choix: [["C#", "C++", "Java", "PHP", "Python"],
                        ["C#", "C++", "Java", "PHP", "Python"]],
                  reponse: ["Python", "Python"]
            }
            ]
            },
            {
            theme: ['Politic', 'Politique'],
            data:  
            [ // POLITIC
            {
                  question: ["Who was the first president of United State ?",
                        "Qui était le premier président de l'Etats-Unis ?"],
                  choix: [["Donald Trump", "Barack Obama", "Georges Washington", "Abraham Lincoln", "Pascal"],
                        ["Donald Trump", "Barack Obama", "Georges Washington", "Abraham Lincoln", "Pascal"]],
                  reponse: ["Georges Washington", "Georges Washington"]
            },
            {
                  question: ["Since 1993, among the presidents of the Malagasy people, who is no longer there ?",
                        "Depuis 1993, parmi les présidents du peuple malagasy, celui qui n'est plus la est ?"],
                  choix: [["Ratsiraka D.", "Zafy Albert", "Ravalomanana M.", "Rajoelina A.", "Rajaonarimampianina H."],
                        ["Ratsiraka D.", "Zafy Albert", "Ravalomanana M.", "Rajoelina A.", "Rajaonarimampianina H."]],
                  reponse: ["Zafy Albert", "Zafy Albert"]
            },
            {
                  question: ["Nowdays, Emanuel Macron is the president of : ",
                        "De nos jours, Emanuel Macron est le president de : "],
                  choix: [["United State", "South Corea", "Germany", "France", "Nigeria"],
                        ["L'Etats-Unis", "La Corée du Sud", "L'Allemagne", "La France", "Le Nigeria"]],
                  reponse: ["France", "La France"]
            },
            {
                  question: ["The first Women president in Africa was :",
                        "La première femme présidente en Afrique était :"],
                  choix: [["Ellen Jonhson Sirleaf", "Catherine Samba-Panza", "Ameenah Gurib-Fakim", "Joyce Banda", "Shale-Work Zewde"],
                        ["Ellen Jonhson Sirleaf", "Catherine Samba-Panza", "Ameenah Gurib-Fakim", "Joyce Banda", "Shale-Work Zewde"]],
                  reponse: ["Ellen Jonhson Sirleaf", "Ellen Jonhson Sirleaf"]
            },
            {
                  question: ["Now, the Younger president in this world is : ",
                        "Maintenant, le président le plus jeune dans le monde est : "],
                  choix: [["Louis Michel", "Kim Jong-II", "Andry Rajoelina", "Emmanuel Macron", "Volodymyr Boryssovytch"],
                        ["Louis Michel", "Kim Jong-II", "Andry Rajoelina", "Emmanuel Macron", "Volodymyr Boryssovytch"]],
                  reponse: ["Kim Jong-II", "Kim Jong-II"]
            },
            ]
            },
            {
            theme: ['Science', 'Science'],
            data:    
            [ // SCIENCE
            {
                  question: ["The puberty begins in which age for the boys?",
                        "La puberté commence à quel àge chez les garçons?"],
                  choix: [["6 to 10 years", "11 to 15 years", "16 to 20 years", "21 to 25 years", "26 to 30 years"],
                        ["6 à 10 ans", "11 à 15 ans", "16 à 20 ans", "21 à 25 ans", "26 à 30 ans"]],
                  reponse: ["11 to 15 years", "11 à 15 ans"]
            },
            {
                  question: ["How long does a women's menses last ?",
                        "La régle d'une femme dure combien du jours ?"],
                  choix: [["1 to 6 days", "2 to 7 days", "3 to 8 days", "4 to 9 days", "5 to 10 days"],
                        ["1 à 6 jours", "2 à 7 jours", "3 à 8 jours", "4 à 9 jours", "5 à 10 jours"]],
                  reponse: ["2 to 7 days", "2 à 7 jours"]
            },
            {
                  question: ["The testicules are part of what system ?",
                        "Les testicules font partie de quel appareil ?"],
                  choix: [["Digestive", "Respiratory", "Reproductive", "Dental", "Urinary"],
                        ["Digéstif", "Réspiratoire", "Reproducteur", "Dentaire", "Urinaire"]],
                  reponse: ["Reproductive", "Reproducteur"]
            },
            {
                  question: ["How many days a man's sperm lasts ?",
                        "Le spérmatozoïde d'un homme dure combien de jour ?"],
                  choix: [["12 hours", "24 hours", "72 hours", "12 to 24 hours", "12 to 72 hours"],
                        ["12 heures", "24 heures", "72 heures", "12 à 24 heures", "12 à 72 heures"]],
                  reponse: ["12 to 24 hours", "12 à 24 heures"]
            },
            {
                  question: ["What is the duration of a women's pregnancy ?",
                        "Quelle est la durée de la grossesse d'une femme ? "],
                  choix: [["6 month", "7 month", "8 month", "9 month", "10 month"],
                        ["6 mois", "7 mois", "8 mois", "9 mois", "10 mois"]],
                  reponse: ["9 month", "9 mois"]
            },
            ]
            },
            {
            theme: ['General culture', 'Culture générale'],
            data:
            [ // GENERAL CULTURE
            {
                  question: [`<strong>About illness</strong> :</br> The word "COVID-19" present : `,
                  `<strong>A propos de la maladie</strong> :</br> Le mot "COVID-19" presente : `],
                  choix: [["Ebola", "Hantavirus", "Coronavirus", "AIDS"],
                        ["Ebola", "Hantavirus", "Coronavirus", "SIDA"]],
                  reponse: ["Coronavirus", "Coronavirus"]
            },
            {
                  question: ["<strong>Maths</strong> :</br> What is the double of 360 degree ?",
                        "<strong>Maths</strong> :</br> Quel est le double de 360 degrés ?"],
                  choix: [["180 degree", "1 440 degree", "480 degree", "720 degree", "1080 degree"],
                        ["180 degrés", "1 440 degrés", "480 degrés", "720 degrés", "1080 degrés"]],
                  reponse: ["720 degree", "720 degrés"]
            },
            {
                  question: [`<strong>Geographie</strong> : </br> What is the capital of United State ?`,
                        [`<strong>Géographie</strong> : </br> Quel est la capitale de l'Etats-Unis ?`]],
                  choix: [["New York" , "San Francisco", "San Andreas" , "Cognac", "Washington"],
                        ["New York" , "San Francisco", "San Andreas" , "Cognac", "Washington"]],
                  reponse: ["New York", "New York"]
            },
            {
                  question: [`<strong>French</strong> : </br> Which of these words is masculin </br> "arcade - lampe - pétale - maison - neige" ?`,
                        [`<strong>Français</strong> : </br> Lequel de ces mots est masculin </br> "arcade - lampe - pétale - maison - neige" ?`]],
                  choix: [["arcade", "lampe", "pétale", "maison", "neige"],
                        ["arcade", "lampe", "pétale", "maison", "neige"]],
                  reponse: ["pétale", "pétale"]
            },
            {
                  question: [`<strong>Story of art</strong> : </br> On which year Victor Hugo is dead ?`,
                        [`<strong>Histoire de l'art</strong> : </br> En quelle année est mort Victor Hugo ?`]],
                  choix: [["1879", "1884", "1887", "1885", "1889"],
                        ["1879", "1884", "1887", "1885", "1889"]],
                  reponse: ["1885", "1885"]
            },
            {
                  question: [`<strong>Football</strong> : </br> Who is the player known by the name "LM10" ?`,
                        [`<strong>Football</strong> : </br> Qui est le joueur qui est connu par le nom "LM10" ?`]],
                  choix: [["Louis Suarez", "Lorris", "Lionel Messi", "Cristiano Ronaldo", "Neymar jr"],
                        ["Louis Suarez", "Lorris", "Lionel Messi", "Cristiano Ronaldo", "Neymar jr"]],
                  reponse: ["Lionel Messi", "Lionel Messi"]
            }
            ]
            },
            {
            theme: ['Sport', 'Sport'],
            data: 
            [ // SPORT
            {
                  question: ["How many players consists the basketball's team ?",
                  "Combien de joueurs se compose une équipe de basketball ?"],
                  choix: [["3", "4", "5", "6", "7"], 
                        ["3", "4", "5", "6", "7"]],
                  reponse: ["5", "5"]
            },
            {
                  question: ["In judo, what color is the belt of the highest rank ?",
                        "Au judo, quel est le grade le plus élevé parmi ces ceintures ?"],
                  choix: [["Black", "Green", "Marron", "Blue", "Red"],
                        ["Noire", "Verte", "Marron", "Bleue", "Rouge"]],
                  reponse: ["Blue", "Bleue"]
            },
            {
                  question: ["What is the height of the football's goal ?",
                        "Quelle est la largeur d'un but de football"],
                  choix: [["5,32 m", "6,32 m", "7,32 m", "8m", "8,32m"],
                        ["5,32 m", "6,32 m", "7,32 m", "8m", "8,32m"]],
                  reponse: ["7,32 m", "7,32 m"]
            },
            {
                  question: ["Which sport should we play for 2 halves of 40 minutes ?",
                        "A quel sport doit-on jouer pendant 2 mi-temps de 40 minutes ?"],
                  choix: [["Rugby", "Volley ball", "Basketball", "Football", "Handball"],
                        ["Rugby", "Volley-ball", "Basket-ball", "Foot-ball", "Hand-ball"]],
                  reponse: ["Rugby", "Rugby"]
            },
            {
                  question: ["What discipline requires the wearing of gloves about 200 grams and a shell ?",
                        "Quelle discipline nécessite le port de gants endiron de 200 grames et de coquille ?"],
                  choix: [["Taekwondo", "Kick boxing", "Boxe", "Judo", "Karate"],
                        ["Le Taekwondo", "Le Kick boxing", "La Boxe", "Le Judo", "La Karate"]],
                  reponse: ["Boxe", "La Boxe"]
            },
            ]
            },
            ]     
      const [getQuestions, setQuestions] = useState(Questions)
      const [getLangue, setLangue] = useState(1) // frs
      
      // getters setters pour le themes
      const [getThemes, setThemes] = useState(
            Questions.map((item) => item.theme)
      )
      // score
      const [getScore, setScore] = useState(0)

            
      // SELECTIONNER UN THEME
      const selectTheme = (params) => {
            // filter
            setQuestions(Questions.filter((item) => item.theme[getLangue] === params))
            
            setActivePage('question')
      }

      // SELECTIONNER UNE QUESTION
      const selectReponse = (score) => {
            // augmenter score
            setScore(getScore + score)
      }

      // AFFICHER LA PAGE SCORE
      const displayScore = () => {
            setActivePage('score')
      }

      const retry = (params) => {
            setActivePage('question')
            setScore(0); // reinit score
      }

      const displayResponses = (params) => {
            setActivePage('response')
      }

      const backToMenu = (params) => {
            setActivePage('theme')
            setScore(0); // reinit score
      }

      // QUITTER LES SOLUTIONS OU REPONSES
      const leaveResponse = (params) => {
            setActivePage('score');
      }

      // CHANGE LE LANGUAGE
      const changeLangue = (params) => {
            setLangue(params)
            console.log(params);
            setThemes(Questions.map((item) => item.theme))
      }

      const randomChoice = (params) => {
            setTimeout(() => {
                  selectTheme(params);    
            }, 800);
      }

      return (
      <div className="quiz-container">
            <div className="quiz-box">
            { activePage === 'theme' && <Theme themes={getThemes} onClick={selectTheme} langue={getLangue} onChangeLangue={changeLangue} onRandom={randomChoice} />}
            { activePage === 'question' && <Question questions={getQuestions} onSelectChoix={selectReponse} langue={getLangue} onFinish={displayScore} />}
            { activePage === 'score' && <Score score={getScore} total={getQuestions[0].data.length} langue={getLangue} onRetry={retry} onShowResponses={displayResponses} onMenu={backToMenu} />}
            { activePage === 'response' && <Response questions={getQuestions[0]} onLeave={leaveResponse} langue={getLangue} />}
            </div>
      </div>
      );
}

export default App;
