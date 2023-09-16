//QuerySelector () dùng để lựa chọn các phần tử
// Phương thức này trả về một đối tượng có id đã chọn

const number = document.querySelector("#number");
const message = document.querySelector("#message");
const scoreElement = document.querySelector("#score");
const guessInput = document.querySelector("#guess");
const againButton = document.querySelector(".again");

const secretNumber = Math.floor(Math.random() * 100) + 1;

function resetGame() {
  // Khôi phục giá trị ban đầu của biến 'score' và 'secretNumber'
  const score = 0;
  let secretNumber;
  secretNumber = Math.floor(Math.random() * 100) + 1;
  // Khôi phục các điều kiện ban đầu của các trường nhập tin nhắn, số, điểm và đoán
  message.textContent = "";
  number.textContent = "";
  scoreElement.textContent = score;
  guessInput.value = "";
  // khôi phục màu nền ban đầu (#222) và chiều rộng số (15rem)
  number.setAttribute("style", "backgroundColor: #222; width: 15rem;");

  const secretNumberInt = parseInt(secretNumber, 10);
  number.textContent = secretNumberInt;
}

if (againButton) {
  againButton.addEventListener("click", resetGame);
}
