'use strict';

const quizQuestions = [{
        question: 'Las finanzas es todo dinero que se mueve entre empresas, estado y personas.',
        answers: [
            '<img src="imagenes/captura_tilde.png" width="70px"> SI', '<img src="imagenes/captura_mal.png" width="80px"> NO'
        ],
        correctAnswer: '<img src="imagenes/captura_tilde.png" width="70px"> SI'
    },
    {
        question: 'Son parte de la finanzas tener una cuenta en el banco, conseguir tarjeta de créditos y saber ahorrar.',
        answers: [
            '<img src="imagenes/captura_tilde.png" width="70px"> SI', '<img src="imagenes/captura_mal.png" width="80px"> NO'
        ],
        correctAnswer: '<img src="imagenes/captura_tilde.png" width="70px"> SI'
    },
    {
        question: 'El dinero puede ser en efectivo, billetes.',
        answers: [
            '<img src="imagenes/captura_tilde.png" width="70px"> SI', '<img src="imagenes/captura_mal.png" width="80px"> NO'
        ],
        correctAnswer: '<img src="imagenes/captura_tilde.png" width="70px"> SI'
    },
    {
        question: 'La tarjeta es otra forma de pagar.',
        answers: [
            '<img src="imagenes/captura_tilde.png" width="70px"> SI', '<img src="imagenes/captura_mal.png" width="80px"> NO'
        ],
        correctAnswer: '<img src="imagenes/captura_tilde.png" width="70px"> SI'
    },
    {
        question: 'Cuando trabajo ingresa dinero.',
        answers: [
            '<img src="imagenes/captura_tilde.png" width="70px"> SI', '<img src="imagenes/captura_mal.png" width="80px"> NO'
        ],
        correctAnswer: '<img src="imagenes/captura_tilde.png" width="70px"> SI'
    },
    {
        question: 'Si me regalan plata no ingresa dinero, es un gasto.',
        answers: [
            '<img src="imagenes/captura_tilde.png" width="70px"> SI', '<img src="imagenes/captura_mal.png" width="80px"> NO'
        ],
        correctAnswer: '<img src="imagenes/captura_mal.png" width="80px"> NO'
    },
    {
        question: 'Si compro algo no es un gasto.',
        answers: [
            '<img src="imagenes/captura_tilde.png" width="70px"> SI', '<img src="imagenes/captura_mal.png" width="80px"> NO'
        ],
        correctAnswer: '<img src="imagenes/captura_mal.png" width="80px"> NO'
    },
    {
        question: 'Pagar el alquiler y las cuentas son gastos.',
        answers: [
            '<img src="imagenes/captura_tilde.png" width="70px"> SI', '<img src="imagenes/captura_mal.png" width="80px"> NO'
        ],
        correctAnswer: '<img src="imagenes/captura_tilde.png" width="70px"> SI'
    },
    {
        question: 'Guardar un poco de dinero cada mes es ahorrar',
        answers: [
            '<img src="imagenes/captura_tilde.png" width="70px"> SI', '<img src="imagenes/captura_mal.png" width="80px"> NO'
        ],
        correctAnswer: '<img src="imagenes/captura_tilde.png" width="70px"> SI'
    },
    {
        question: 'Las cuentas bancarias se pueden abrir en el banco o por internet.',
        answers: [
            '<img src="imagenes/captura_tilde.png" width="70px"> SI', '<img src="imagenes/captura_mal.png" width="80px"> NO'
        ],
        correctAnswer: '<img src="imagenes/captura_tilde.png" width="70px"> SI'
    }
];

let questionIndex = 0;
let answersCorrect = 0;
let answersIncorrect = 0;

function renderTitle() {
    $('div.content-box').append(`
		<header role='banner' class='quiz-name'>
		</header>
		<main role='main'></main>
	`);
}

function renderStartScreen() {
    $('main').append(`
	<h1 class='the-quiz-header'>El cuestionario a partir de la lectura de "Finanzas para mortales"</h1>
		<div id="centrado" class='start-screen'>
		<img src="imagenes/portadaFinanzas.png" width="30%"><br/><br/>
		<a href="imagenes/finanzasparamortales.pdf" download><button type="button" class="btn btn-primary btn-lg"><i class="fa fa-download"></i>Descargar archivo</button></a>
			</div>
			<br/>
			<div id="centrado2" class='start-screen'>
		<button class='start btn btn-primary btn-lg'>Comenzar el cuestionario <i class="fas fa-arrow-right"></i></button>
		</div>
	`);
}

function handleStartClick() {
    $('main').on('click', '.start', event => {
        event.preventDefault();
        renderQuestions();
    });
}

function renderQuestions() {
    const questionNumber = parseInt([questionIndex]) + 1;
    const quizForm = `
    <div class='question-box'>
     <p class='question-number'>Pregunta ${questionNumber} de ${quizQuestions.length}</p>
     <form>
        <fieldset>
          <legend class='question'>${quizQuestions[questionIndex].question}</legend>
          <button class='answer' value='${quizQuestions[questionIndex].answers[0]}'>${quizQuestions[questionIndex].answers[0]}</button>
          <button class='answer' value='${quizQuestions[questionIndex].answers[1]}'>${quizQuestions[questionIndex].answers[1]}</button>
        </fieldset>
     </form>
   <p class='current-score'>Tenes ${answersCorrect} correctas y ${answersIncorrect} incorrectas.</p>
  </div>
  `;
    $('main').html(quizForm);
}

function handleAnswerClick() {
    $('main').on('click', '.answer', event => {
        event.preventDefault();
        let answerButton = event.target.value;
        if (answerButton == quizQuestions[questionIndex].correctAnswer) {
            answersCorrect++;
            renderCorrectFeedBack();
            handleProgressButton();
        } else {
            answersIncorrect++;
            renderIncorrectFeedBack();
            handleProgressButton();
        }

    });
}

function renderCorrectFeedBack() {
    const feedback = `
		<div class='feedback'>
			<img src='imagenes/captura_tilde.png' alt='bien" text' class='feedback-image'/>
			<p class='feedback-text'>Correcto!</p>
			<p class='feedback-score'>Tenes ${answersCorrect} correctas y ${answersIncorrect} incorrectas.</p>
		</div>
		`;
    $('main').html(feedback);
}

function renderIncorrectFeedBack() {
    const feedback = `
		<div class='feedback'>
			<img src='imagenes/captura_mal.png' alt='mal' class='feedback-image'/></a>
			<p class='feedback-text'>Incorrecto! La respuesta correcta es "${quizQuestions[questionIndex].correctAnswer}"</p>
			<p class='feedback-score'>Tenes ${answersCorrect} correctas y ${answersIncorrect} incorrectas.</p>
		</div>
		`;
    $('main').html(feedback);
}

function handleProgressButton() {
    if (questionIndex + 1 < quizQuestions.length) {
        $('.feedback').append(`
		<button id="btn-grad" class='next-question'> Siguiente </button>
		`);
    } else {
        $('.feedback').append(`
			<button class='final-score'>Ver puntaje final</button>
		`);
    }
}

function handleProgressClick() {
    $('main').on('click', '.next-question', event => {
        event.preventDefault();
        questionIndex++;
        renderQuestions();
    });
    $('main').on('click', '.final-score', event => {
        event.preventDefault();
        questionIndex++;
        renderEndScreen();
    });
}

function renderEndScreen() {
    const endScreen = `
		<div class='end-screen'>
			<img src='imagenes/bien.gif' alt='gif muy bien' class='end-gif'/>   		
			<p class='end-score'>Respondiste ${answersCorrect} de ${quizQuestions.length} correctamente!</p>
      		<button id="btn-grad" class='play-again'>Jugar de nuevo</button>
    	</div>
    `;
    $('main').html(endScreen);
}

function handlePlayAgainClick() {
    $('main').on('click', '.play-again', event => {
        event.preventDefault();
        questionIndex = 0;
        answersCorrect = 0;
        answersIncorrect = 0;
        renderQuestions();
    });
}

function handleQuiz() {
    renderTitle();
    renderStartScreen();
    handleStartClick();
    handleAnswerClick();
    handleProgressClick();
    handlePlayAgainClick();
}

$(handleQuiz);