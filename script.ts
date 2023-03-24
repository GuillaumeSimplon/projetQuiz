const domMenuQuiz1: HTMLElement | null = document.getElementById('menuQuiz1')
const quizSection: Element | null = document.querySelector('.boxQuizPlanete');
const closeBtn: Element | null = document.getElementById('close-btn');
// NE PAS AFFICHER LE QUIZ 1 QUAND ARRIVÉE SUR LA PAGE
// if (quizSection)
//   quizSection.style.display = 'none';

// BOUTON X POUR REMOVE LE QUIZ
if (closeBtn && quizSection)
  closeBtn.addEventListener('click', function () {
    quizSection.remove();
  });

// BOUTON 'Quiz1' POUR APPELER LE QUIZ
if (domMenuQuiz1 && quizSection)
  domMenuQuiz1.addEventListener('click', function () {
    location.reload();
  });




////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//////      TABLEAU D'OBJET : AVEC QUESTIONS ET REPONSES      //////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

const tableQuestions: any[] = [
  // Question 1
  {
    tableQuestion: "Combien y a-t-il de planètes dans notre système solaire ?",
    tableReponses: ["9", "8", "7", "6"],
    tableIndexReponse: "8",
    tableDetailReponse: "Il y a 8 planètes dans le système solaire.",
  },
  // Question 2
  {
    tableQuestion: "Quelle est l'astre le plus grand du système solaire ?",
    tableReponses: ["Jupiter", "Mercure", "Soleil", "Neptune"],
    tableIndexReponse: "Soleil",
    tableDetailReponse: "Le soleil est bien un astre.",
  },
  // Question 3
  {
    tableQuestion: "Quelle est la planète tellurique la plus grosse du système solaire ?",
    tableReponses: ["Venus", "Mars", "Saturne", "la Terre"],
    tableIndexReponse: "la Terre",
    tableDetailReponse: "la Terre est un peu plus grosse que Vénus.",
  },
  // Question 4
  {
    tableQuestion: "Quelle est la température de la surface du soleil ?",
    tableReponses: ["1000°C", "5500°C", "15 000°C", "15 000 000°C"],
    tableIndexReponse: "5500°C",
    tableDetailReponse: "5500°C en surface. Le noyau lui, c'est bien plus chaud...",
  },
  // Question 5
  {
    tableQuestion: "Quelle est la planète la plus éloignée de la Terre ?",
    tableReponses: ["Mercure", "Uranus", "Jupiter", "Neptune"],
    tableIndexReponse: "Neptune",
    tableDetailReponse: "Neptune, à environ 4,5 milliars de km",
  },
  // Question 6
  {
    tableQuestion: "Combien y a-t-il de planètes télluriques dans notre système solaire ?",
    tableReponses: ["4", "5", "3", "6"],
    tableIndexReponse: "4",
    tableDetailReponse: "Il y a 4 planètes télluriques dans le système solaire. Mercure, Venus, la Terre et Mars",
  },
  // Question 7
  {
    tableQuestion: "Combien de temps faut-il environ à la lumière du soleil pour atteindre Neptune ?",
    tableReponses: ["Moins de 5sec", "4mn 30sec", "4h30", "4,5 jours"],
    tableIndexReponse: "4h30",
    tableDetailReponse: "4h30, la vitesse de la lumière dépassant le milliard de km/h",
  },
  // Question 8
  {
    tableQuestion: "Combien mesure une unité astronomique (1au)?",
    tableReponses: ["150 parsecs", "150 millions de milliards de km", "150 années lumière", "150 millions de km"],
    tableIndexReponse: "150 millions de km",
    tableDetailReponse: "150millions de km, c'est la distance Terre/Soleil",
  },
  // Question 9
  {
    tableQuestion: "Quel satellite appartient à Saturne ?",
    tableReponses: ["Io", "Titan", "Ganymède", "Callisto"],
    tableIndexReponse: "Titan",
    tableDetailReponse: "Titan est un des satellite de Saturne. Les autres appartiennent à Jupiter",
  },
  // Question 10
  {
    tableQuestion: "Quel est la planète la plus petite ?",
    tableReponses: ["Mercure", "Venus", "Uranus", "Mars"],
    tableIndexReponse: "Mercure",
    tableDetailReponse: "Mercure est la planète la plus petite du système solaire",
  },
  // Question 11
  {
    tableQuestion: "Qu'est-ce que la magnétosphère ?",
    tableReponses: ["La couche d'ozone protectrice", "Le champ magnétique protecteur", "Le champ électrique conducteur", "Le flux d'air chaud"],
    tableIndexReponse: "Le champ magnétique protecteur",
    tableDetailReponse: "C'est la zone où le champ magnétique d'une planète domine les champs magnétiques externes",
  },
  // Question 12
  {
    tableQuestion: "Sans combinaison, combien de temps peut survivre un humain dans l'espace ?",
    tableReponses: ["0 seconde", "15 secondes", "Tant qu'il retient sa respiration", "2 minutes"],
    tableIndexReponse: "2 minutes",
    tableDetailReponse: "Entre les rayons cosmiques, les températures extrêmes, l'asphyxie et la depression, l'humain ne peut tenir que 2mn mais perdrait connaissance au bout de 15sec",
  },
];





/////////////////////////////////////////////////
/////////////////////////////////////////////////
//////      DECLARATION DES VARIABLES      //////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

const domQuestionNum: HTMLElement | null = document.getElementById('questionNum');
// Question 1/8, Question 2/8, etc

const domQuestion: HTMLElement | null = document.getElementById('question');
// Question posée

const domBoxChoixReponses: HTMLElement | null = document.getElementById('boxChoixReponses');
// Les boites contenants les choix de réponses utilisateur

const domBoxReponse: HTMLElement | null = document.getElementById('boxReponse');
// Boite contenant la réponse de la correction

const domReponse: HTMLElement | null = document.getElementById('reponse');
// Réponse donnée lors de la correction

// const domChoixReponses: HTMLCollectionOf<Element> = document.getElementsByClassName('choixReponses');
const domChoixReponses: NodeListOf<Element> = document.querySelectorAll('.boxChoixReponses > ul > li'); // EN COURS
// Boutons des choix de réponses (il y en a 4)

const domValidBtn: HTMLElement | null = document.getElementById('validBtn');
// Bouton "Valider" pour valider la réponse de l'utilisateur

const domNextQuestionBox: HTMLElement | null = document.getElementById('nextQuestionBox');
// Bouton "Question suivante" pour passer à la question suivante

const domScore: HTMLCollectionOf<Element> = document.getElementsByClassName('scoreIncrementation');
// Score indiqué en bas

const domQuestionNumIncrementation: HTMLElement | null = document.getElementById('questionNumIncrementation');
// Element du dom de la progression des questions

const domScoreIncrementation: HTMLElement | null = document.getElementById('scoreIncrementation');
// Element du dom de la progression du score

const domScoreLevelIncrementation: HTMLElement | null = document.getElementById('scoreLevelIncrementation');
// Element du dom des étapes de progression du score

let domGoodBad: HTMLElement | null = document.getElementById('goodBad');
// Element du dom contenant 'Bien joué !' et 'Eh non...'

let questionCourante: number = 0;
// Variable - Progression de la liste des questions

let reponseCourante: number = 0;
// Variable - Progression de la liste des réponses

let scoreProgression: number = 1;
// Variable - Progression du score indiqué en bas

let scoreLevel: number = 2;
// Variable - Progression des étapes du score indiqué en bas

let NumeroQuestionProgression: number = 2;
// Variable = Progression de la numérotation des question -- / 8

let UserChoice: string




const domCompteReboursDecrementation: HTMLElement | null = document.getElementById('compteReboursDecrementation');
// Element du dom du compte à rebours

let compteRebours: number = 10;
// Variable - Decrementation

let countdown: NodeJS.Timeout;


// Compte à rebours
function decrementCompteRebours() {
  compteRebours--;
  if (domCompteReboursDecrementation) {
    domCompteReboursDecrementation.textContent = compteRebours.toString();
  }
  if (compteRebours === 0) {
    clearInterval(countdown);
    // domCompteReboursDecrementation.innerText = 'T\'es trop long mon poto !';
  }
}

function resetCountdown() {
  clearInterval(countdown);
  compteRebours = 10;
  domCompteReboursDecrementation.innerText = compteRebours.toString();
  countdown = setInterval(decrementCompteRebours, 1000);
}

if (domNextQuestionBox) {
  domNextQuestionBox.addEventListener('click', resetCountdown);
}

countdown = setInterval(decrementCompteRebours, 1000);








////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//////      BOITE DES 4 CHOIX DE RÉPONSES UTILISATEUR     //////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// ETAPE 1 : Afficher les 4 premiers choix de réponse dès le début
if (domChoixReponses.length === 4) {
  for (let i = 0; i < 4; i++) {
    const propositionReponse: HTMLElement | null = domChoixReponses[i] as HTMLElement;

    if (propositionReponse !== null) {
      propositionReponse.innerText = tableQuestions[reponseCourante].tableReponses[i];
    }
  }
}

// ETAPE 2 : Le bouton choix user cliqué change de couleur.
for (let i = 0; i < domChoixReponses.length; i++) {
  const choixReponsesUser = domChoixReponses[i] as HTMLElement;

  choixReponsesUser.addEventListener('click', function (event: Event) {

    if (choixReponsesUser.classList.contains('gradient')) {
      choixReponsesUser.classList.remove('gradient');
      choixReponsesUser.classList.add('green');

      for (let j = 0; j < domChoixReponses.length; j++) {
        const otherChoixReponsesUser = domChoixReponses[j] as HTMLElement;
        if (otherChoixReponsesUser !== choixReponsesUser) {
          otherChoixReponsesUser.classList.remove('green');
          otherChoixReponsesUser.classList.add('gradient');
        }

        // ETAPE 3 : récupérer le choix de réponse de l'utilisateur
        // UserChoice = event.target?.innerText;
        // console.log(event.target?.innerText);
        UserChoice = ((event.target as HTMLElement).innerText);
        console.log((event.target as HTMLElement).innerText);
      }
    }
  });
}





//////////////////////////////////// 
//////////////////////////////////// 
//////      BOUTON VALIDER    //////
//////////////////////////////////// 
//////////////////////////////////// 

if (domValidBtn && domNextQuestionBox) { // Lorsqu'on arrive sur la page
  domNextQuestionBox.style.display = 'none';
  domValidBtn.style.display = "block";

  if (domBoxChoixReponses && domBoxReponse) {
    domBoxReponse.style.display = 'none';
    domBoxChoixReponses.style.display = "";

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // RENDRE VISIBLE LA PREMIÈRE QUESTION    
    if (domQuestion) {
      domQuestion.innerText = tableQuestions[0].tableQuestion;

      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      domValidBtn.addEventListener('click', function (event: Event) {
        // ETAPE 1 : lorsque je clique sur 'Valider', "ce bouton Valider" display : none, puis 'Questions suivante' display : 'block'
        domValidBtn.style.display = "none";
        domNextQuestionBox.style.display = "block";

        // ETAPE 2 : lorsque je clique sur 'Valider', la boite des 4 choix user display : none, puis la boite réponse display : ''
        domBoxChoixReponses.style.display = "none";
        domBoxReponse.style.display = "";

        // ETAPE 2.1 : lorsque je clique sur 'Valider', les éléments choix user réponse sont réinitialisée de leur class
        let greenChoiceUser: HTMLElement | null = null;
        for (let i = 0; i < domChoixReponses.length; i++) {
          const element = domChoixReponses[i] as HTMLElement;
          element.classList.remove('green');
          element.classList.add('gradient');
        }
        greenChoiceUser = null;

        // ETAPE 3 : lorsque je clique sur 'Valider', la réponse s'incrémente de 1 (mais commence à 0 par la 1ère)
        if (domReponse) {
          domReponse.innerHTML = tableQuestions[questionCourante].tableDetailReponse;
          reponseCourante++;
        }

        // ETAPE 4 : Quand je clique 'Valider', si la récupération du choix réponse 'UserChoice' est identique à celle du tableau alors :
        // incrémentation 'domScoreIncrementation' sinon rien.
        // 'domGoodBad' prend la class goodBadGreen et ajoute une string 'Bien joué !'
        // 'domGoodBad' prend la class goodBadRed et ajoute une string 'Eh non...'
        if (domGoodBad && domScoreIncrementation && UserChoice === tableQuestions[questionCourante].tableIndexReponse) {
          console.log('Bien joué !');
          domGoodBad.innerText = 'Bien joué !';

          domGoodBad.classList.remove('goodBadRed');
          domGoodBad.classList.add('goodBadGreen');

          domScoreIncrementation.innerText = scoreProgression.toString();
          scoreProgression++;
        }

        else (domGoodBad) => {
          console.log('Eh non...');
          domGoodBad.innerText = 'Eh non...';

          domGoodBad.classList.remove('goodBadGreen');
          domGoodBad.classList.add('goodBadRed');
        }

        // ETAPE 5 : lorsque je clique sur 'Valider' pour obtenir la dernière réponse du tableau, bouton 'Question suivante' display : none
        if (tableQuestions[reponseCourante - 1].tableDetailReponse === "Entre les rayons cosmiques, les températures extrêmes, l'asphyxie et la depression, l'humain ne peut tenir que 2mn mais perdrait connaissance au bout de 15sec") {
          console.log(reponseCourante);
          console.log('on est arrivé à la dernière');
          domNextQuestionBox.style.display = "none";
        }
      });
    }
  }
}





//////////////////////////////////////////////
//////////////////////////////////////////////
//////      BOUTON QUESTION SUIVANTE    //////
//////////////////////////////////////////////
//////////////////////////////////////////////

if (domValidBtn && domNextQuestionBox && domBoxChoixReponses && domBoxReponse) {
  domNextQuestionBox.addEventListener('click', function () {
    // ETAPE 1 : lorsque je clique sur 'Question suivante', il display : none, puis 'Valider' display : 'block'
    domValidBtn.style.display = "block";
    domNextQuestionBox.style.display = "none";

    // ETAPE 2 : lorsque je clique sur 'Question suivante', la boite réponse display : none, puis la boite des 4 choix user display : ''
    domBoxReponse.style.display = 'none';
    domBoxChoixReponses.style.display = "";

    // ETAPE 3 : lorsque je clique sur 'Question suivante', la question suivante s'incrémente
    if (domQuestion) {
      domQuestion.innerHTML = tableQuestions[reponseCourante].tableQuestion;

      questionCourante++;
    }


    // ETAPE 4 : Afficher les 4 réponses possible dans chacun dans boutons <li> 
    if (domChoixReponses.length === 4) {
      for (let i = 0; i < 4; i++) {
        const propositionReponse: HTMLElement | null = domChoixReponses[i] as HTMLElement;

        if (propositionReponse !== null) {
          propositionReponse.innerText = tableQuestions[reponseCourante].tableReponses[i];
        }
      }
    }

    // ETAPE 5 : lorsque je clique sur 'Question suivante', le paragraphe Question 1/12 s'incrémente ==> Question 2/12
    if (domQuestionNumIncrementation) {
      domQuestionNumIncrementation.innerText = NumeroQuestionProgression.toString();

      NumeroQuestionProgression++;
    }

    // ETAPE 6 : lorsque je clique sur 'Question suivante', l'étape de la progression du score s'incrémente : score 2/3 ==> 2/4
    if (domScoreLevelIncrementation) {
      domScoreLevelIncrementation.innerText = scoreLevel.toString();

      scoreLevel++;
    }
  });
}
