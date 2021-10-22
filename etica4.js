'use strict';

const quizQuestions = [{
        question: '¿La licencia de conducir es obligatoria para manejar?',
        answers: [
            '<img src="imagenes/captura_tilde.png" width="70px"> SI', '<img src="imagenes/captura_mal.png" width="80px"> NO'
        ],
        correctAnswer: '<img src="imagenes/captura_tilde.png" width="70px"> SI'
    },
    {
        question: 'No debemos cumplir las reglas de transito',
        answers: [
            '<img src="imagenes/captura_tilde.png" width="70px"> VERDADERO', '<img src="imagenes/captura_mal.png" width="80px"> FALSO'
        ],
        correctAnswer: '<img src="imagenes/captura_mal.png" width="80px"> FALSO'
    },
    {
        question: '¿Que son las sendas peatonales?',
        answers: [
            'Las líneas blancas pintadas en las esquinas de las calles.', 'Por donde los autos cruzan, son lineas rojas.'
        ],
        correctAnswer: 'Las líneas blancas pintadas en las esquinas de las calles.'
    },
    {
        question: 'Las personas que van caminando son peatones.',
        answers: [
            '<img src="imagenes/captura_tilde.png" width="70px"> VERDADERO', '<img src="imagenes/captura_mal.png" width="80px"> FALSO'
        ],
        correctAnswer: '<img src="imagenes/captura_tilde.png" width="70px"> VERDADERO'
    },
    {
        question: '¿Que es la bicisenda?',
        answers: [
             'El lugar donde se arreglan las bicicletas.', 'El espacio de la calle donde solo pueden andar bicicletas.'
        ],
        correctAnswer: 'El espacio de la calle donde solo pueden andar bicicletas.'
    },
    {
        question: 'Cuando vamos en bicicleta tenemos que usar casco, ropa clara o chalecos que brillan a la luz.',
        answers: [
            '<img src="imagenes/captura_tilde.png" width="70px"> VERDADERO', '<img src="imagenes/captura_mal.png" width="80px"> FALSO'
        ],
        correctAnswer: '<img src="imagenes/captura_tilde.png" width="70px"> VERDADERO'
    },
    {
        question: '¿Que es la patente?',
        answers: [
            'Un objeto que se mantiene en oculto dentro del auto.','Una combinación de letras y números que sirve para identificar el auto. Se debe tener en un lugar visible.'
        ],
        correctAnswer: 'Una combinación de letras y números que sirve para identificar el auto. Se debe tener en un lugar visible.'
    },
    {
        question: 'Las balizas portátiles son triángulos de plástico rojo que brillan con la luz. Sirven para avisarle al resto de los autos que tuviste un problema',
        answers: [
            '<img src="imagenes/captura_tilde.png" width="70px"> VERDADERO', '<img src="imagenes/captura_mal.png" width="80px"> FALSO'
        ],
        correctAnswer: '<img src="imagenes/captura_tilde.png" width="70px"> VERDADERO'
    },
    {
        question: '¿La cedula verde y la cedula azul son obligatorias para manejar un auto?',
        answers: [
            '<img src="imagenes/captura_tilde.png" width="70px"> SI', '<img src="imagenes/captura_mal.png" width="80px"> NO'
        ],
        correctAnswer: '<img src="imagenes/captura_tilde.png" width="70px"> SI'
    },
    {
        question: '¿Que NO hay que hacer cuando manejas?',
        answers: [
            'Usar el cinturon, tener todos los papeles que se deben.', 'Usar el celular, tomar bebidas alcoholicas y parar sobre las sendas peatonales o rampas.'
        ],
        correctAnswer: 'Usar el celular, tomar bebidas alcoholicas y parar sobre las sendas peatonales o rampas.'
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
	<h1 class='the-quiz-header'>El cuestionario sobre La Seguridad Vial</h1>
		<div id="centrado" class='start-screen'>
		<img src="imagenes/seguridadport.png" width="60%"><br/><br/>
		<a href="imagenes/seguridadvial.pdf" download><button type="button" class="btn btn-primary btn-lg"><i class="fa fa-download"></i>Descargar archivo</button></a>
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