function postScript(){
    // TODO
    // Actually, I have no idea what I need to do here.
    let title = document.getElementsByClassName("leftMenuItem");
    let workspace = document.getElementsByClassName("menuSubItem");
    title[0].innerHTML = 'I don\'t even know.';
    title[0].innerHTML += '<div class="menuSubItem">\n';
    workspace[0].innerText = "Seriously, I've been trying for hours. What am I even doing?";
    ItemFive();
}

function progLang(){
    console.log("changed tabs");
    let title = document.getElementsByClassName("leftMenuItem");
    let workspace = document.getElementsByClassName("menuSubItem");
    title[0].innerHTML = 'Programming Languages';
    title[0].innerHTML += '<div class="menuSubItem">\n';
    workspace[0].innerText = "I have several years of experience in C, C++, and Python.";
}

function WorkXP(){
    console.log("changed tabs");
    let title = document.getElementsByClassName("leftMenuItem");
    let workspace = document.getElementsByClassName("menuSubItem");
    title[0].innerHTML = 'Work Experience';
    title[0].innerHTML += '<div class="menuSubItem">\n';
    workspace[0].innerText = "I worked a couple of menial jobs throughout high school, leaving on good terms. I have been tutoring mathematics for UIndy since my Freshman year of college.";
}

function Interests(){
    console.log("changed tabs");
    let title = document.getElementsByClassName("leftMenuItem");
    let workspace = document.getElementsByClassName("menuSubItem");
    title[0].innerHTML = 'Interests';
    title[0].innerHTML += '<div class="menuSubItem">\n';
    workspace[0].innerText = "I've had an interest in algebraic math since middle school, and originally planned on majoring in it before suddenly gaining an interest in programmming in high school.\n\nI enjoy automating tasks on my computer, such as creating an application that would roll stats for my DnD character. This also extends to my interest in video games, two of my favorites being Satisfactory and Factorio, two games about automating tasks.";
}

function Project(){
    console.log("changed tabs");
    let title = document.getElementsByClassName("leftMenuItem");
    let workspace = document.getElementsByClassName("menuSubItem");
    title[0].innerHTML = 'Project';
    title[0].innerHTML += '<div class="menuSubItem">\n';
    workspace[0].innerHTML = "<p ondblclick='dblClickEx()'>Double Click Me</p>";
    workspace[0].innerHTML += "<p oncontextmenu='contextEx()'>Right Click Me</p>";
    workspace[0].innerHTML += "<p id='hoverEx' onmouseover=mouseOverEx() onmouseout='mouseAwayEx()'>Hover Over Me</p>";
    workspace[0].innerHTML += "<p id='keyPressEx' onclick='keyDownEx()'>Shift-Click Me</p>";
    workspace[0].innerHTML += "<p onclick='reloadPage()'>Click This To Reload</p>";
}

function PopCat(){
    console.log("changed tabs");
    let title = document.getElementsByClassName("leftMenuItem");
    let workspace = document.getElementsByClassName("menuSubItem");
    title[0].innerHTML = 'Feed the Cat';
    title[0].innerHTML += '<div class="menuSubItem">\n';
    workspace[0].innerHTML = "<img id='fish' src='./img/fish.jpg' width=128px onmousedown='mouseDownFish()'>";
    workspace[0].innerHTML += "<br><p id='catface'><img src='./img/cat.jpg'></p>";
}

function fixFace(){
    console.log("Fixed face");
    let workspace = document.getElementsByClassName("mugshot");
    workspace[0].innerHTML = '<img src="img/mugshot.png" alt="self-portrait">';
}

function dblClickEx(){
    console.log("made face evil");
    let workspace = document.getElementsByClassName("mugshot");
    workspace[0].innerHTML = '<img src="img/mugstache.png" alt="self-portrait" ondblclick="fixFace()">';
    alert("But nothing happens.");
}

function contextEx(){
    console.log("right click changes the content font size");
    let fonts = ["x-small", "small", "medium", "large", "x-large"];
    let workspace = document.getElementsByClassName("content");
    let r = Math.floor(Math.random() * fonts.length);
    workspace[0].style.fontSize = fonts[r];
    //console.log(r);
}

function mouseOverEx(){
    console.log("mousing over changes the text");
    let workspace = document.getElementById("hoverEx");
    workspace.innerText = "The text changes while you hover over it!";
}

function mouseAwayEx(){
    console.log("mousing away changes the text as well");
    let workspace = document.getElementById("hoverEx");
    workspace.innerText = "And changes back when you move away!";
}

function keyDownEx(){
    console.log("changes the text depending on if shift was held")
    let workspace = document.getElementById("keyPressEx");
    if (event.shiftKey) {
        workspace.innerText = "You clicked this while pressing Shift.";
    } else {
        workspace.innerText = "I said use Shift";
    }
}

function mouseDownFish(){
    console.log("grabbed fish");
    let workspace = document.getElementById("catface");
    workspace.innerHTML = "<br><p id='catface'><img src=./img/pop.jpg onmouseup='mouseUpFish()'></p>";
}

function mouseUpFish(){
    console.log("let go of fish");
    let workspace = document.getElementById("catface");
    workspace.innerHTML = "<br><p id='catface'><img src=./img/averageCat.jpg></p>";
    let del = document.getElementById("fish");
    del.src = "";
}

function reloadPage(){
    location.reload();
}