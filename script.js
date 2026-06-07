const topics = [
"Arrays",
"Strings",
"Linked List",
"Stack",
"Queue",
"Recursion",
"Tree",
"Binary Search Tree",
"Heap",
"Graph",
"Greedy",
"Dynamic Programming"
];

const topicContainer =
document.getElementById("topics");

function loadTopics() {

let completed =
JSON.parse(
localStorage.getItem("completed")
) || [];

topicContainer.innerHTML = "";

topics.forEach(topic => {

const div =
document.createElement("div");

div.className = "topic";

div.innerHTML = `
<input
type="checkbox"
${completed.includes(topic)
? "checked"
: ""}
onchange="toggleTopic('${topic}')">

${topic}
`;

topicContainer.appendChild(div);

});

updateProgress();
}

function toggleTopic(topic){

let completed =
JSON.parse(
localStorage.getItem("completed")
) || [];

if(completed.includes(topic)){

completed =
completed.filter(
t => t !== topic
);

}else{

completed.push(topic);

}

localStorage.setItem(
"completed",
JSON.stringify(completed)
);

updateProgress();
}

function updateProgress(){

let completed =
JSON.parse(
localStorage.getItem("completed")
) || [];

let percentage =
(completed.length /
topics.length) * 100;

document.getElementById(
"progressBar"
).style.width =
percentage + "%";

document.getElementById(
"progressText"
).innerText =
`Progress: ${percentage.toFixed(0)}%`;
}

function saveGoal(){

let solved =
document.getElementById(
"solved"
).value;

let target =
document.getElementById(
"target"
).value;

if(target == 0){
return;
}

let percent =
(solved/target)*100;

localStorage.setItem(
"solved",
solved
);

localStorage.setItem(
"target",
target
);

document.getElementById(
"goalStatus"
).innerText =
`Goal Progress:
${percent.toFixed(1)}%`;
}

loadTopics();
