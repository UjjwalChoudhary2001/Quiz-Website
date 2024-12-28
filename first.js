const questionBank = [
  {
    question: "Who has the most centuries in international cricket?",
    options: [
      "Sachin Tendulkar",
      "Virat Kohli",
      "Ricky Ponting",
      "Jacques Kallis",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Which country won the first ICC Cricket World Cup?",
    options: ["Australia", "England", "West Indies", "India"],
    answer: "West Indies",
  },
  {
    question: "Who is known as the 'God of Cricket'?",
    options: ["Virat Kohli", "Don Bradman", "MS Dhoni", "Sachin Tendulkar"],
    answer: "Sachin Tendulkar",
  },
  {
    question: "What is the highest individual score in ODI cricket?",
    options: ["264", "200", "237", "275"],
    answer: "264",
  },
  {
    question: "Which bowler has taken the most wickets in Test cricket?",
    options: [
      "Muttiah Muralitharan",
      "Shane Warne",
      "James Anderson",
      "Anil Kumble",
    ],
    answer: "Muttiah Muralitharan",
  },
  {
    question: "Which Indian player is known as the 'Hitman'?",
    options: ["Rohit Sharma", "Virat Kohli", "MS Dhoni", "Shikhar Dhawan"],
    answer: "Rohit Sharma",
  },
  {
    question: "Who won the ICC Cricket World Cup 2011?",
    options: ["India", "Sri Lanka", "Australia", "England"],
    answer: "India",
  },
  {
    question: "Who holds the record for the fastest century in ODI cricket?",
    options: ["AB de Villiers", "Chris Gayle", "Shahid Afridi", "Virat Kohli"],
    answer: "AB de Villiers",
  },
  {
    question: "Which country is known as the Proteas in cricket?",
    options: ["South Africa", "Australia", "England", "New Zealand"],
    answer: "South Africa",
  },
  {
    question: "Who has the most sixes in international cricket?",
    options: ["Chris Gayle", "MS Dhoni", "Rohit Sharma", "Shahid Afridi"],
    answer: "Chris Gayle",
  },
  {
    question: "Which team has won the most ICC Cricket World Cups?",
    options: ["Australia", "India", "West Indies", "England"],
    answer: "Australia",
  },
  {
    question:
      "Who is the youngest player to score a century in international cricket?",
    options: [
      "Shahid Afridi",
      "Virat Kohli",
      "Sachin Tendulkar",
      "Rashid Khan",
    ],
    answer: "Shahid Afridi",
  },
  {
    question: "Which cricket stadium is the largest in the world?",
    options: ["Narendra Modi Stadium", "MCG", "Lord's", "Eden Gardens"],
    answer: "Narendra Modi Stadium",
  },
  {
    question: "Who is the fastest bowler in cricket history?",
    options: ["Shoaib Akhtar", "Brett Lee", "Shaun Tait", "Mitchell Starc"],
    answer: "Shoaib Akhtar",
  },
  {
    question: "Which player has the highest batting average in Test cricket?",
    options: [
      "Don Bradman",
      "Steve Smith",
      "Kane Williamson",
      "Jacques Kallis",
    ],
    answer: "Don Bradman",
  },
  {
    question: "Who is the captain of the Indian cricket team in 2023?",
    options: ["Rohit Sharma", "Virat Kohli", "KL Rahul", "Hardik Pandya"],
    answer: "Rohit Sharma",
  },
  {
    question: "Which bowler has the best bowling figures in ODI cricket?",
    options: [
      "Chaminda Vaas",
      "Muttiah Muralitharan",
      "Glenn McGrath",
      "Anil Kumble",
    ],
    answer: "Chaminda Vaas",
  },
  {
    question: "Which country is known as the Black Caps in cricket?",
    options: ["New Zealand", "South Africa", "England", "West Indies"],
    answer: "New Zealand",
  },
  {
    question: "Who is the highest run-scorer in T20 internationals?",
    options: ["Virat Kohli", "Rohit Sharma", "Babar Azam", "Chris Gayle"],
    answer: "Virat Kohli",
  },
  {
    question: "Which cricket ground is known as the 'Home of Cricket'?",
    options: ["Lord's", "MCG", "Eden Gardens", "The Oval"],
    answer: "Lord's",
  },
];

// Creating a function to provide an array of
function randomQuestion() {
  let set = new Set();
  //Till the size of set is not 5
  while (set.size != 5) {
    let index = Math.floor(Math.random() * questionBank.length);
    set.add(questionBank[index]);
  }
  return [...set];
}
// console.log(randomQuestion());

//Object which will contain the answers.
let correct_ans = {};

//Creating the div which will contain the questions
let div_element = document.createElement("div");
div_element.className = "question";

//Selecting the form and inserting all the elements in the form
let form = document.querySelector("form"); //Selects the form
//We get the array of 5 problem objects
let problem = randomQuestion();
problem.forEach((obj, index) => {
  //Creating the answer object
  correct_ans[`q${index + 1}`] = obj["answer"];

  let p = document.createElement("p");
  p.innerText = `${index + 1}.${obj.question}`;
  div_element.appendChild(p);

  //Creating the 4 options
  obj["options"].forEach((data) => {
    let label = document.createElement("label");
    let input = document.createElement("input");

    input.type = "radio";
    input.value = data;
    input.name = `q${index + 1}`;
    label.appendChild(input);
    label.appendChild(document.createTextNode(data));
    div_element.appendChild(label);
    div_element.appendChild(document.createElement("br"));
  });
});

//Appending div_element in form
form.appendChild(div_element);

//Creating and inserting submit button in the form
let btn = document.createElement("button");
btn.type = "submit";
btn.className = "submit-btn";
btn.textContent = "Submit";

form.appendChild(btn);

//Checking the submitted answers
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  console.log(data.keys);
  let result = 0;
  for ([key, value] of data.entries()) {
    if (value === correct_ans[key]) {
      result++;
    }
  }
  let resultElement = document.getElementById("result");
  resultElement.innerText = `The score is ${result}/5 `;
  form.reset();
});