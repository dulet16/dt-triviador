const question = document.getElementById('question')
const map = document.querySelectorAll('svg path')
const choices = Array.from(document.querySelectorAll('.choice-container'))
const progressText = document.getElementById('progressText')
const game = document.getElementById('game')
const scoreText = document.getElementById('score')
const progressBarFull = document.getElementById('progressBarFull')
// SOUNDS
const clickSound = new Audio('audio/click.wav')
const successSound = new Audio('audio/success.wav')
const errorSound = new Audio('audio/error.wav')

let isEasy
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let counter = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Koji sport na svetu ima najviše registrovanih članova?',
        choice1: 'Skijanje',
        choice2: 'Ribolov',
        choice3: 'Fudbal',
        choice4: 'Tenis',
        answer: 2
    },
    {
        question: 'U kom gradu se nalazi najviša zgrada na svetu?',
        choice1: 'Dubai',
        choice2: 'Njujork',
        choice3: 'Šangaj',
        choice4: 'Pariz',
        answer: 1
    },
    {
        question:
            'Kako se zove faza dubokog sna u kojoj se nalaze medvedi tokom zimskih meseci?',
        choice1: 'Hiperbolacija',
        choice2: 'Hipertenzija',
        choice3: 'Hibernacija',
        choice4: 'Hipotermija',
        answer: 3
    },
    {
        question:
            'Kao mladi kralj, Dušan se posebno istakao u bici kod?',
        choice1: 'Velbužda',
        choice2: 'Stefanije',
        choice3: 'Dimotike',
        choice4: 'Rusokrasta',
        answer: 1
    },
    {
        question: 'Koja planeta je najtoplija u sunčevom sistemu?',
        choice1: 'Mars',
        choice2: 'Venera',
        choice3: 'Zemlja',
        choice4: 'Jupiter',
        answer: 2
    },
    {
        question: 'Autor epa "Enejida" je?',
        choice1: 'Vergilije',
        choice2: 'Homer',
        choice3: 'Horacije',
        choice4: 'Ovidije',
        answer: 1
    },
    {
        question:
            'Koji organ u ljudskom telu ima dve komore i dve pretkomore?',
        choice1: 'Pluća',
        choice2: 'Bubreg',
        choice3: 'Srce',
        choice4: 'Jetra',
        answer: 3
    },
    {
        question:
            'Koja je najduža reka na svetu?',
        choice1: 'Nil',
        choice2: 'Amazon',
        choice3: 'Jangcekjang',
        choice4: 'Misisipi',
        answer: 1
    },
    {
        question: 'Koji je najviši vrh na svetu?',
        choice1: 'Akonkagva',
        choice2: 'Mont Everest',
        choice3: 'Kilimandžaro',
        choice4: 'Denali',
        answer: 2
    },
    {
        question: 'Glavni grad Holandije je?',
        choice1: 'Amsterdam',
        choice2: 'Roterdam',
        choice3: 'Hag',
        choice4: 'Groningen',
        answer: 1
    },
    {
        question:
            'Glavni grad Norveške je?',
        choice1: 'Narvik',
        choice2: 'Olesund',
        choice3: 'Oslo',
        choice4: 'Molde',
        answer: 3
    },
    {
        question:
            'Sa kojom ekipom je Maradona 1989. godine osvojio Kup UEFA?',
        choice1: 'Napoli',
        choice2: 'Barselona',
        choice3: 'Sevilja',
        choice4: 'Nije osvojio kup UEFA te godine',
        answer: 1
    },
    {
        question: 'Muziku za balet u dva čina "Krcko Oraščić" napisao je?',
        choice1: 'Ludvig Van Betoven',
        choice2: 'Petar Ilič Čajkovski',
        choice3: 'Stevan Mokranjac',
        choice4: 'Frederik Fransoa Šopen',
        answer: 2
    },
    {
        question: 'Koje godine se desio prvi uspešan prolet ljudske sonde pored Marsa?',
        choice1: '1965',
        choice2: '1968',
        choice3: '1975',
        choice4: '1971',
        answer: 1
    },
    {
        question:
            'Prilep se nalazi u?',
        choice1: 'Sloveniji',
        choice2: 'Srbiji',
        choice3: 'Severnoj Makedoniji',
        choice4: 'Crnoj Gori',
        answer: 3
    },
    {
        question:
            'Veliki požari su krajem 2019. i početkom 2020. zahvatili jedan kontinent?',
        choice1: 'Australiju',
        choice2: 'Evropu',
        choice3: 'Afriku',
        choice4: 'Aziju',
        answer: 1
    },
    {
        question: 'Najveći grad u Južnoafričkoj Republici je?',
        choice1: 'Kejptaun',
        choice2: 'Johanesburg',
        choice3: 'Durban',
        choice4: 'Pretorija',
        answer: 2
    },
    {
        question: 'U kojoj državi se nalazi Nant?',
        choice1: 'Francuska',
        choice2: 'Italija',
        choice3: 'Nemačka',
        choice4: 'Švajcarska',
        answer: 1
    },
    {
        question:
            'Sa kojom od navedenih država ne graniči Rusija?',
        choice1: 'Estonija',
        choice2: 'Moldavija',
        choice3: 'Finska',
        choice4: 'Ništa od ponuđenog',
        answer: 2
    },
    {
        question:
            'Koje godine se odigrala čuvena Bitka na Kozari, poznata još i kao Kozarska ofanziva?',
        choice1: '1942',
        choice2: '1941',
        choice3: '1940',
        choice4: '1943',
        answer: 1
    },
    {
        question: 'Najveće jezero na Balkanskom poluostrvu je?',
        choice1: 'Skadarsko jezero',
        choice2: 'Ohridsko jezero',
        choice3: 'Prespansko jezero',
        choice4: 'Đerdapsko jezero',
        answer: 1
    },
    {
        question: 'Najduža rijeka Azijskog kontinenta je?',
        choice1: 'Ind',
        choice2: 'Huanghe',
        choice3: 'Lena',
        choice4: 'Jangcekjang',
        answer: 4
    },
    {
        question:
            'U Andrićevom romanu, Omer-paša Latas je bio oženjen Said hanumom, koja je poreklom bila?',
        choice1: 'Grkinja',
        choice2: 'Austrijanka',
        choice3: 'Ruskinja',
        choice4: 'Turkinja',
        answer: 2
    },
    {
        question:
            'Koji američki predsednik se nalazi na novčanici od 20 dolara?',
        choice1: 'Abraham Linkoln',
        choice2: 'Endru Džekson',
        choice3: 'Bendžamin Frenklin',
        choice4: 'Džejms Medison',
        answer: 2
    },
    {
        question: 'Koje godine je rođen Mahatma Gandi?',
        choice1: '1901',
        choice2: '1869',
        choice3: '1889',
        choice4: '1876',
        answer: 2
    },
    {
        question: 'Koja gradska opština Beograda je površinom najveća?',
        choice1: 'Barajevo',
        choice2: 'Čukarica',
        choice3: 'Grocka',
        choice4: 'Palilula',
        answer: 4
    },
    {
        question:
            'Vlada koje zemlje je 1952. godine ponudila Albertu Ajnštajnu da preuzme dužnost predsednika?',
        choice1: 'Švajcarska',
        choice2: 'Izrael',
        choice3: 'Austrija',
        choice4: 'Nemačka',
        answer: 2
    },
    {
        question:
            'Glavni grad Madagaskara je?',
        choice1: 'Antananarivo',
        choice2: 'Toliara',
        choice3: 'Toamasina',
        choice4: 'Mahajanga',
        answer: 1
    },
    {
        question:
            'Koji je kubni koren broja 729?',
        choice1: '11',
        choice2: '7',
        choice3: '9',
        choice4: '8',
        answer: 3
    },
    {
        question:
            'Koja od ovih reka je najkraća po dužini?',
        choice1: 'Misisipi',
        choice2: 'Jangcekjang',
        choice3: 'Amazon',
        choice4: 'Nil',
        answer: 1
    }
]
const SCORE_POINTS = 100

const chooseDifficulty = (evt, fast) => {
    clickSound.play()
    if (fast) {
        isEasy = true
    } else {
        isEasy = false
    }
    difficulty.classList.add('is-hidden')
    game.classList.remove('is-hidden')
    startGame()
}
const startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

const getNewQuestion = () => {
    const MAX_QUESTIONS = isEasy ? questions.length / 3 : questions.length

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Pitanje ${questionCounter} od ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach((choice) => {
        const number = choice.lastElementChild.dataset.number
        choice.lastElementChild.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.currentTarget
        const selectedAnswer = selectedChoice.firstElementChild.dataset['number']

        let classToApply =
            selectedAnswer == currentQuestion.answer? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            successSound.play()
            incrementScore(SCORE_POINTS)
            colorMap('#29e86f')
        } else {
            errorSound.play()
            colorMap('red')
        }

        selectedChoice.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})
const colorMap = (color) => {
    const sections = isEasy ? 3 : 1

    for (let i = 0; i < sections; i++) {
        map[counter].style.fill = color
        counter++
    }
}
const incrementScore = (num) => {
    score += num
    scoreText.innerText = score
}
