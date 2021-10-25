var pages = ["Home", "About", "Interact"];

function createNav() {
    var nav = document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);
    document.body.appendChild(nav);

    function createButton(pg){
        var btn = document.createElement("button");
        btn.innerHTML=pg;
        btn.addEventListener("click", function (){
          navigate(pg);
        })
        nav.appendChild(btn);
    }
}

function createSaber(){
    var saber = document.createElement("div");
    saber.classList.add("saber");
    document.body.appendChild(saber);
}

function navigate(pg){
    if (pg === "Home"){
        homePg();
    }else if (pg === "About"){
        aboutPg();
    }else if (pg === "Interact"){
        interactPg();
    }
}

function homePg(){
    var saber = document.body.querySelector(".saber");
    saber.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML = "Home Page";
    saber.appendChild(header);
}

function aboutPg(){
    var saber = document.body.querySelector(".saber");
    saber.innerHTML="";
    var header = document.createElement("h1");
    var name = document.createElement("h3");
    header.innerHTML = "About Page";
    name.innerHTML = "Ben Lynk"
    saber.appendChild(header);
    saber.appendChild(name);
}

function interactPg(){
    var saber = document.body.querySelector(".saber");
    saber.innerHTML = "";
    var header = document.createElement("h1")
    var count = document.createElement("h3")
    header.innerHTML = "Interact Page";
    var c = 0;
    count.innerHTML = "Counter = " + c;
    saber.appendChild(header);
    saber.appendChild(count);
    buttonMaker("Counter");

    function buttonMaker(count){
        var btn = document.createElement("button");
        btn.innerHTML = count;
        btn.addEventListener("click", function (){
            countBtn()
        })
        saber.appendChild(btn);
    }
    function countBtn(){
        c = c + 1;
        count.innerHTML = "Counter = " + c;
    }
}

createNav();
createSaber();
navigate("Home");