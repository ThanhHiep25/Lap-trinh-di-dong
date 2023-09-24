//QuerySelector () dùng để lựa chọn các phần tử
// Phương thức này trả về một đối tượng có id đã chọn

const againButton = document.querySelector('.again');

againButton.addEventListener('click', () => {
  // Restore the initial values of the score and secretNumber variables.
  score = 0;
  secretNumber = Math.floor(Math.random() * 100) + 1;
  
  // Restore the initial conditions of the message, number, score, and guess input fields.
  messageElement.innerHTML = 'Make a guess!';
  numberElement.innerHTML = secretNumber;
  scoreElement.innerHTML = score;
  guessInputElement.value = '';

  // Restore the original background color and number width.
  document.body.style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
});
