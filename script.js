let name = "";

const questions = [
"Abhi bhi naraz hooo mereseeee? 🥺",
"Do you remember our stupid laughs? 😭",
"Who will tolerate me agar aap nhi karogeee? 😔",
"You know you're my all time favourite human right? 💖",
"Can we go back to being us again? 🌸",
"I really miss talking to you…",
"Mujhee maa krdogiiii? Bass thoda saaa, jaraaa saaaa? Pleaseeee 🥹"
];

let index = 0;

function start() {
    name = document.getElementById("nameInput").value;

    if(name === "") {
        alert("Please type your name 😤");
        return;
    }

    document.getElementById("nameScreen").classList.add("hidden");
    document.getElementById("questionScreen").classList.remove("hidden");

    document.getElementById("greeting").innerText = "Hi " + name + " 💕";
    document.getElementById("question").innerText = questions[index];
}

function nextQuestion() {
    index++;

    if(index < questions.length){
        document.getElementById("question").innerText = questions[index];
    } else {
        document.getElementById("question").innerHTML =
        "Okay last question...<br><br>Can we be besties again? 💌<br><br>I promise to annoy you forever.";
    }
}
