const question = document.getElementById('question')
const map = document.querySelectorAll('#map path')
const choices = Array.from(document.querySelectorAll('.choice-container'))
const progressText = document.getElementById('progressText')
const game = document.getElementById('game')
const scoreText = document.getElementById('score')
const progressBarFull = document.getElementById('progressBarFull')

let isEasy
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let counter = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2
    },
    {
        question: 'The tallest building in the world is located in which city?',
        choice1: 'Dubai',
        choice2: 'New York',
        choice3: 'Shanghai',
        choice4: 'None of the above',
        answer: 1
    },
    {
        question:
            'What percent of American adults believe that chocolate milk comes from brown cows?',
        choice1: '20%',
        choice2: '18%',
        choice3: '7%',
        choice4: '33%',
        answer: 3
    },
    {
        question:
            'Approximately what percent of U.S. power outages are caused by squirrels?',
        choice1: '10-20%',
        choice2: '5-10%',
        choice3: '15-20%',
        choice4: '30%-40%',
        answer: 1
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2
    },
    {
        question: 'The tallest building in the world is located in which city?',
        choice1: 'Dubai',
        choice2: 'New York',
        choice3: 'Shanghai',
        choice4: 'None of the above',
        answer: 1
    },
    {
        question:
            'What percent of American adults believe that chocolate milk comes from brown cows?',
        choice1: '20%',
        choice2: '18%',
        choice3: '7%',
        choice4: '33%',
        answer: 3
    },
    {
        question:
            'Approximately what percent of U.S. power outages are caused by squirrels?',
        choice1: '10-20%',
        choice2: '5-10%',
        choice3: '15-20%',
        choice4: '30%-40%',
        answer: 1
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2
    },
    {
        question: 'The tallest building in the world is located in which city?',
        choice1: 'Dubai',
        choice2: 'New York',
        choice3: 'Shanghai',
        choice4: 'None of the above',
        answer: 1
    },
    {
        question:
            'What percent of American adults believe that chocolate milk comes from brown cows?',
        choice1: '20%',
        choice2: '18%',
        choice3: '7%',
        choice4: '33%',
        answer: 3
    },
    {
        question:
            'Approximately what percent of U.S. power outages are caused by squirrels?',
        choice1: '10-20%',
        choice2: '5-10%',
        choice3: '15-20%',
        choice4: '30%-40%',
        answer: 1
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2
    },
    {
        question: 'The tallest building in the world is located in which city?',
        choice1: 'Dubai',
        choice2: 'New York',
        choice3: 'Shanghai',
        choice4: 'None of the above',
        answer: 1
    },
    {
        question:
            'What percent of American adults believe that chocolate milk comes from brown cows?',
        choice1: '20%',
        choice2: '18%',
        choice3: '7%',
        choice4: '33%',
        answer: 3
    },
    {
        question:
            'Approximately what percent of U.S. power outages are caused by squirrels?',
        choice1: '10-20%',
        choice2: '5-10%',
        choice3: '15-20%',
        choice4: '30%-40%',
        answer: 1
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2
    },
    {
        question: 'The tallest building in the world is located in which city?',
        choice1: 'Dubai',
        choice2: 'New York',
        choice3: 'Shanghai',
        choice4: 'None of the above',
        answer: 1
    },
    {
        question:
            'What percent of American adults believe that chocolate milk comes from brown cows?',
        choice1: '20%',
        choice2: '18%',
        choice3: '7%',
        choice4: '33%',
        answer: 3
    },
    {
        question:
            'Approximately what percent of U.S. power outages are caused by squirrels?',
        choice1: '10-20%',
        choice2: '5-10%',
        choice3: '15-20%',
        choice4: '30%-40%',
        answer: 1
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2
    },
    {
        question: 'The tallest building in the world is located in which city?',
        choice1: 'Dubai',
        choice2: 'New York',
        choice3: 'Shanghai',
        choice4: 'None of the above',
        answer: 1
    },
    {
        question:
            'What percent of American adults believe that chocolate milk comes from brown cows?',
        choice1: '20%',
        choice2: '18%',
        choice3: '7%',
        choice4: '33%',
        answer: 3
    },
    {
        question:
            'Approximately what percent of U.S. power outages are caused by squirrels?',
        choice1: '10-20%',
        choice2: '5-10%',
        choice3: '15-20%',
        choice4: '30%-40%',
        answer: 1
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2
    },
    {
        question: 'The tallest building in the world is located in which city?',
        choice1: 'Dubai',
        choice2: 'New York',
        choice3: 'Shanghai',
        choice4: 'None of the above',
        answer: 1
    },
    {
        question:
            'What percent of American adults believe that chocolate milk comes from brown cows?',
        choice1: '20%',
        choice2: '18%',
        choice3: '7%',
        choice4: '33%',
        answer: 3
    },
    {
        question:
            'Approximately what percent of U.S. power outages are caused by squirrels?',
        choice1: '10-20%',
        choice2: '5-10%',
        choice3: '15-20%',
        choice4: '30%-40%',
        answer: 1
    },
    {
        question:
            'What percent of American adults believe that chocolate milk comes from brown cows?',
        choice1: '20%',
        choice2: '18%',
        choice3: '7%',
        choice4: '33%',
        answer: 3
    },
    {
        question:
            'Approximately what percent of U.S. power outages are caused by squirrels?',
        choice1: '10-20%',
        choice2: '5-10%',
        choice3: '15-20%',
        choice4: '30%-40%',
        answer: 1
    }
]
const SCORE_POINTS = 100

const chooseDifficulty = (evt, fast) => {
    console.log(fast)
    if (fast) {
        isEasy = true
    } else {
        isEasy = false
    }
    difficulty.classList.add('hide')
    game.classList.remove('hide')
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
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
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
            incrementScore(SCORE_POINTS)
            colorMap('#29e86f')
        } else {
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
