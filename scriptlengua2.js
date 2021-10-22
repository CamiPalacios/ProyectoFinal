'use strict';

const quizQuestions = [{
        question: '¿Que animal camina con el hombre arriba hasta Buenos aires?',
        answers: [
            '<img src="imagenes/mono.png" width="60px"> el mono', '<img src="imagenes/serpiente.png" width="60px"> la serpiente', '<img src="imagenes/flamenco.png" width="60px"> el flamenco', '<img src="imagenes/tortuga.png" width="60px"> la tortuga'
        ],
        correctAnswer: '<img src="imagenes/tortuga.png" width="60px"> la tortuga'
    },
    {
        question: '¿Quienes organizaron un gran baile para los animales de la selva?',
        answers: [
            '<img src="imagenes/flamenco.png" width="60px"> los flamencos', '<img src="imagenes/sapo.png" width="60px"> los sapos', '<img src="imagenes/serpiente.png" width="60px"> las viboras', '<img src="imagenes/yacare.png" width="60px"> los yacares'
        ],
        correctAnswer: '<img src="imagenes/serpiente.png" width="60px"> las viboras'
    },
    {
        question: '¿Con que animales se enojaron las viboras? ?',
        answers: [
            '<img src="imagenes/flamenco.png" width="60px"> los flamencos', '<img src="imagenes/pez.png" width="60px"> los peces', '<img src="imagenes/sapo.png" width="60px"> los sapos', '<img src="imagenes/yacare.png" width="60px"> los yacares'
        ],
        correctAnswer: '<img src="imagenes/flamenco.png" width="60px"> los flamencos'
    },
    {
        question: '¿Donde ponen las patas los flamencos para calmar el dolor?',
        answers: [
            '<img src="imagenes/fuego.png" width="60px"> en el fuego', '<img src="imagenes/tierra.png" width="60px"> en la tierra', '<img src="imagenes/agua.png" width="60px"> en el agua', '<img src="imagenes/pasto.png" width="60px"> en el pasto'
        ],
        correctAnswer: '<img src="imagenes/agua.png" width="60px"> en el agua'
    },
    {
        question: '¿Cual es el alimento de las abejas?',
        answers: [
            '<img src="imagenes/pasto.png" width="60px"> el pasto', '<img src="imagenes/agua.png" width="60px"> el agua', '<img src="imagenes/pan.png" width="60px"> el pan', '<img src="imagenes/miel.png" width="60px"> la miel'
        ],
        correctAnswer: '<img src="imagenes/miel.png" width="60px"> la miel'
    },
    {
        question: 'La abeja haragana sabia mucho de..',
        answers: [
            '<img src="imagenes/plantas.png" width="60px"> plantas', '<img src="imagenes/videojuegos.png" width="60px">videojuegos', '<img src="imagenes/serpiente.png" width="60px"> viboras', '<img src="imagenes/lengua_icono.png" width="60px"> libros'
        ],
        correctAnswer: '<img src="imagenes/plantas.png" width="60px"> plantas'
    },
    {
        question: '¿Quien le arranco las plumas a Pedrito el loro?',
        answers: [
            '<img src="imagenes/tigre.png" width="60px"> el tigre', '<img src="imagenes/yacare.png" width="60px"> el yacare', '<img src="imagenes/serpiente.png" width="60px"> la vibora', '<img src="imagenes/leon.png" width="60px"> el leon'
        ],
        correctAnswer: '<img src="imagenes/tigre.png" width="60px"> el tigre'
    },
    {
        question: '¿Porque se quedo ciega la gamita?',
        answers: [
            '<img src="imagenes/abeja.png" width="60px"> las abejas le picaron los ojos', '<img src="imagenes/fuego.png" width="60px"> se quemo los ojos', '<img src="imagenes/paloma.png" width="60px"> las palomas le picaron los ojos', '<img src="imagenes/mosquito.png" width="60px"> le pico un mosquito'
        ],
        correctAnswer: '<img src="imagenes/abeja.png" width="60px"> las abejas le picaron los ojos'
    },
    {
        question: 'Los hombre malos tiraban en el rio...',
        answers: [
            '<img src="imagenes/bomba.png" width="60px"> bombas', '<img src="imagenes/palo.png" width="60px"> palos de madera', '<img src="imagenes/papel.png" width="60px"> papel', '<img src="imagenes/bolsas.png" width="60px"> bolsas'
        ],
        correctAnswer: '<img src="imagenes/bomba.png" width="60px"> bombas'
    },
    {
        question: '¿Que fruta comio el coaiti del medio?',
        answers: [
            '<img src="imagenes/sandia.png" width="60px"> sandias', '<img src="imagenes/kiwi.png" width="60px"> kiwis', '<img src="imagenes/naranja.png" width="60px"> naranjas', '<img src="imagenes/manzana.png" width="60px"> manzanas'
        ],
        correctAnswer: '<img src="imagenes/naranja.png" width="60px"> naranjas'
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
	<h1 class='the-quiz-header'>El cuestionario a partir de la lectura de "Cuentos de la selva"</h1>
		<div id="centrado" class='start-screen'>
		<img src="imagenes/portadalibro.jpg" width="30%"><br/><br/>
		<a href="imagenes/cuentosdelaselva.pdf" download><button type="button" class="btn btn-primary btn-lg"><i class="fa fa-download"></i>Descargar cuento</button></a>
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
          <button class='answer' value='${quizQuestions[questionIndex].answers[2]}'>${quizQuestions[questionIndex].answers[2]}</button>
          <button class='answer' value='${quizQuestions[questionIndex].answers[3]}'>${quizQuestions[questionIndex].answers[3]}</button>
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