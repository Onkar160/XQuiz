// Sample data
const questions = [
  {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2,
  },
  {
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0,
  },
  {
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0,
  },
  {
    text: "What does HTML stand for?",
    options: [
      "Hyperlink and Text Markup Language",
      "High Technology Modern Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 2,
  },
  {
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2,
  },
  {
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3,
  },
  {
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0,
  },
  {
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2,
  },
  {
    text: "What is the primary use of the Git command 'clone'?",
    options: [
      "To stage changes",
      "To copy a repository",
      "To switch to a different branch",
      "To list all the files in a repository",
    ],
    correct: 1,
  },
  {
    text: "What does API stand for in the context of programming?",
    options: [
      "Apple Pie Interface",
      "Application Programming Interface",
      "Advanced Peripheral Integration",
      "Application Process Integration",
    ],
    correct: 1,
  },
];

const body = document.getElementsByTagName("body")[0];
body.style.background =
  "linear-gradient(to right, #ff7e5f -10%, #8e44ad 50%, #ff7e5f 110%)";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.padding = "50px";

const containerQuiz = document.getElementsByClassName("quiz-container")[0];
containerQuiz.style.backgroundColor = "white";
containerQuiz.style.height = "40vh";
containerQuiz.style.width = "350px";
containerQuiz.style.textAlign = "center";
containerQuiz.style.fontFamily = "'Open Sans', Arial, sans-serif";
containerQuiz.style.padding = "20px";

const question = document.getElementById("question");
question.innerText = questions[0].text;

const ans = document.getElementById("answer-list");
ans.style.listStyle = "none";
ans.style.textAlign = "start";

for (let i = 0; i < 4; i++) {
  const list = document.createElement("li");
  list.style.margin = "5px";
  const input = document.createElement("input");
  input.style.marginRight = "10px";
  input.setAttribute("name", "answer");
  input.setAttribute("value", "option" + i);
  input.setAttribute("type", "radio");
  list.append(input, document.createTextNode(questions[0].options[i]));
  list.addEventListener("mouseover", () => {
    list.style.backgroundColor = "rgb(245, 245, 245)";
    list.style.cursor = "pointer";
  });
  list.addEventListener("mouseout", () => (list.style.backgroundColor = ""));
  ans.append(list);
}

const submitButton = document.getElementById("submit");

const nextButton = document.getElementById("next");
nextButton.style.display = "none";

let score = 0;

let currentQuestion = 0;

submitButton.addEventListener("click", () => {
  // Write the JS code that you want to be executed each time the Submit button is clicked.
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) {
    alert("Please select an answer!");
  } else {
    submitButton.style.display = "none";
    nextButton.style.display = "block";
    nextButton.style.marginLeft = "auto";
    nextButton.style.marginRight = "auto";

    const temp = questions[currentQuestion].correct;
    const value = selectedAnswer.getAttribute("value");
    // console.log(value);
    // console.log(temp);
    if ("option" + temp === value) {
      score++;
    }
    // console.log(score);
    const scoreHighlight = document.querySelector(`input[value=option${temp}]`);
    scoreHighlight.parentNode.style.backgroundColor = "rgb(144, 238, 144)";
    scoreHighlight.parentNode.addEventListener("mouseover", () => {
      scoreHighlight.parentNode.style.backgroundColor = "rgb(144, 238, 144)";
    });
    scoreHighlight.parentNode.addEventListener("mouseout", () => {
      scoreHighlight.parentNode.style.backgroundColor = "rgb(144, 238, 144)";
    });
  }
  // currentQuestion++;

  // console.log(currentQuestion);
});

nextButton.addEventListener("click", () => {
  // Write the JS code that you want to be executed each time the Next button is clicked.
  currentQuestion++;
  // console.log(currentQuestion);
  if (currentQuestion == questions.length) {
    alert(`Quiz finished! Your score is: ${score}/${questions.length}`);
    nextButton.style.display = "block";
    submitButton.style.display = "none";
    nextButton.style.marginLeft = "auto";
    nextButton.style.marginRight = "auto";
    currentQuestion = 0;
    score = 0;
  }
  if (currentQuestion < questions.length) {
    nextButton.style.display = "none";
    submitButton.style.display = "block";
    submitButton.style.marginLeft = "auto";
    submitButton.style.marginRight = "auto";
  }

  if (currentQuestion < questions.length) {
    question.innerText = questions[currentQuestion].text;
    ans.innerHTML = "";
    for (let i = 0; i < 4; i++) {
      const list = document.createElement("li");
      list.style.margin = "5px";
      const input = document.createElement("input");
      input.style.marginRight = "10px";
      input.setAttribute("name", "answer");
      input.setAttribute("value", "option" + i);
      input.setAttribute("type", "radio");
      list.append(
        input,
        document.createTextNode(questions[currentQuestion].options[i])
      );
      list.addEventListener("mouseover", () => {
        list.style.backgroundColor = "rgb(245, 245, 245)";
        list.style.cursor = "pointer";
      });
      list.addEventListener(
        "mouseout",
        () => (list.style.backgroundColor = "")
      );
      ans.append(list);
    }
  }
});
