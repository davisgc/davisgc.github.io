function postScript(){
    // TODO
    // Actually, I have no idea what I need to do here.
    let title = document.getElementsByClassName("leftMenuItem");
    let workspace = document.getElementsByClassName("menuSubItem");
    title[0].innerHTML = 'I don\'t even know.';
    title[0].innerHTML += '<div class="menuSubItem">\n';
    workspace[0].innerText = "Seriously, I've been trying for hours. What am I even doing?";
    ItemSeven();
}

function progLang(){
    let title = document.getElementsByClassName("leftMenuItem");
    let workspace = document.getElementsByClassName("menuSubItem");
    title[0].innerHTML = 'Programming Languages';
    title[0].innerHTML += '<div class="menuSubItem">\n';
    workspace[0].innerText = "I have several years of experience in C, C++, and Python.";
}

function WorkXP(){
    let title = document.getElementsByClassName("leftMenuItem");
    let workspace = document.getElementsByClassName("menuSubItem");
    title[0].innerHTML = 'Work Experience';
    title[0].innerHTML += '<div class="menuSubItem">\n';
    workspace[0].innerText = "I worked a couple of menial jobs throughout high school, leaving on good terms. I have been tutoring mathematics for UIndy since my Freshman year of college.";
}

function Interests(){
    let title = document.getElementsByClassName("leftMenuItem");
    let workspace = document.getElementsByClassName("menuSubItem");
    title[0].innerHTML = 'Interests';
    title[0].innerHTML += '<div class="menuSubItem">\n';
    workspace[0].innerText = "I've had an interest in algebraic math since middle school, and originally planned on majoring in it before suddenly gaining an interest in programmming in high school.\n\nI enjoy automating tasks on my computer, such as creating an application that would roll stats for my DnD character. This also extends to my interest in video games, two of my favorites being Satisfactory and Factorio, two games about automating tasks.";
}