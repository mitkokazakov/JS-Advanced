function solve() {

  const currentAnswer = document.getElementsByClassName('answer-wrap');
  const hiddenDivs = document.getElementsByClassName('hidden');
  const resultText = document.querySelector('.results-inner > h1');
  const resultDiv = document.querySelector('.results-inner');

  const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

  for (let i = 0; i < currentAnswer.length; i++) {

    currentAnswer[i].addEventListener('click', onClick);

  }


  let counter = 0;
  let counterRight = 0;

  function onClick(e) {

    counter++;

    const currentTarget = e.target;
    const answer = currentTarget.textContent;

    if (rightAnswers.includes(answer)) {
      counterRight++;
    }

    if(counter <= 2 ){
      currentTarget.parentElement.parentElement.parentElement.style.display = 'none';
      let nextQuestion = hiddenDivs[counter - 1];
      nextQuestion.style.display = 'block';
    }
    else{
      currentTarget.parentElement.parentElement.parentElement.style.display = 'none';
    }
    
    if (counter === 3) {

      
      document.querySelector('#results').style.display = 'block';
      resultDiv.style.display = 'block';
      

      if(counterRight === 3){
        resultText.textContent = "You are recognized as top JavaScript fan!";
      }
      else{
        resultText.textContent = `You have ${counterRight} right answers.`;
      }
    }
  }
}
