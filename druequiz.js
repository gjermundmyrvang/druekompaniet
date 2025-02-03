
  
  
  
  
  // --------------------- QUIZ SHIT ---------------------
  
  const startBTN = document.querySelector('.start-btn');
  const popupinfo = document.querySelector('.popup-info');
  
  const exitBTN = document.querySelector('.exit-btn')
  const continueBTN = document.querySelector('.continue-btn')
  
  const main = document.querySelector('.main');
  
  const theQuiz = document.querySelector('.the-quiz')
  const quizBox = document.querySelector('.quiz-box')
  const resultBox = document.querySelector('.result-box')
  
  const tryAgainBTN = document.querySelector('.tryAgain-btn')
  const goHomeBTN = document.querySelector('.goHome-btn')
  
  const totalScore = document.querySelector('.header-score');
  
  const nextBTN = document.querySelector('.next-btn')
  
  const questionOptions = document.querySelector('.option-list')
  
  let questionCount = 0;
  let questionNumber = 1;
  let score = 0;
  
  
  
  startBTN.onclick = () => {
      popupinfo.classList.add('active');
      main.classList.add('active');
  } 
  
  exitBTN.onclick = () => {
    popupinfo.classList.remove('active');
    main.classList.remove('active');
  }
  
  continueBTN.onclick = () => {
    popupinfo.classList.remove('active');
    main.classList.remove('active');
    theQuiz.classList.add('active')
    quizBox.classList.add('active')
  
    showQuestions(0)
    questionCounter(1)
  }
  
  
  
  
  nextBTN.onclick = () => {
    if (questionCount < questions.length - 1) {
      questionCount++
      questionNumber++
      nextBTN.classList.remove('enabled');
      showQuestions(questionCount)
      questionCounter(questionNumber)
    }
    else {
      showResult()
    }
  
  }
  
  tryAgainBTN.onclick = () => {
    quizBox.classList.add('active')
    resultBox.classList.remove('finished')
    nextBTN.classList.remove('enabled')
  
    questionCount = 0;
    questionNumber = 1;
    score = 0;
  
    showQuestions(questionCount)
    questionCounter(questionNumber)
    totalScore.innerHTML = `SCORE ${score} / ${questions.length}`;
  }
  
  
  goHomeBTN.onclick = () => {
    theQuiz.classList.remove('active')
    resultBox.classList.remove('finished')
    nextBTN.classList.remove('enabled')
  
    questionCount = 0;
    questionNumber = 1;
    score = 0;
  
    showQuestions(questionCount)
    questionCounter(questionNumber)
    totalScore.innerHTML = `SCORE ${score} / ${questions.length}`;
  }
  
  
  
  
  
  
  function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    const currentImg = document.querySelector('.quiz-bilde');
  
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;
    totalScore.innerHTML = `SCORE ${score} / ${questions.length}`;
  
    let optionTag = "";
    for (let i = 0; i < questions[index].options.length; i++) {
      optionTag += `<div class="option"><span>${questions[index].options[i]}</span></div>`;
    }                
                                       
    questionOptions.innerHTML = optionTag;
  
    
    if (questions[index].img != null) {
      const codeImg = `${questions[index].img}`
      currentImg.setAttribute("src", `bilder/quiz/${codeImg}`);
    }
  
    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
      option[i].setAttribute('onclick', 'optionSelected(this)');
    }
  }
  
  
  
  
  
  function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = questionOptions.children.length;
    if (userAnswer == correctAnswer) {
      score++
      questionOptions.classList.add('.closed')
      answer.classList.add('correct')
      totalScore.innerHTML = `SCORE ${score} / ${questions.length}`;
    }
    else {
      questionOptions.classList.add('.closed')
      answer.classList.add('incorrect')
  
      for (let i = 0; i < allOptions; i++) {
        if (questionOptions.children[i].textContent == correctAnswer) {
            questionOptions.children[i].setAttribute('class', 'option correct');
        }
      }
    }
  
    for (let i = 0; i < allOptions; i++) {
      questionOptions.children[i].classList.add('disabled');
    }
  
    nextBTN.classList.add('enabled');
  
  }
  
  function questionCounter(index) {
    const questionNumber = document.querySelector('.questions-total');
    questionNumber.textContent = `${index} of ${questions.length} Questions`;
  }
  
  
  function showResult() {
    quizBox.classList.remove('active')
    resultBox.classList.add('finished')
  
    const scoreText = document.querySelector('.score-text')
    scoreText.textContent = `SCORE: ${score} / ${questions.length}`
  
    const circularProgress = document.querySelector('.circular-progress')
    const progressValue = document.querySelector('.progress-value')
  
    let progressStart = -1
    let progressEnd = parseInt((score / questions.length) * 100)
    console.log(progressEnd)
    let speed = 20
    let color = document.querySelector('header')
    let style = color.style.background
  
    let progress = setInterval(() => {
      progressStart++
  
  
      progressValue.textContent = `${progressStart}%`
      circularProgress.style.background = `conic-gradient(${style} ${progressStart * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`
  
  
      if (progressStart == progressEnd) {
        clearInterval(progress)
      }
    }, speed)
  
  }
  
  
  
  
  
  
  
  
  
  