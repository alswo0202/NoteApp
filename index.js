window.onload = function(){ 

    const input = document.querySelector("textarea"),
        saved = document.querySelector("p"),
        setting = document.getElementById("html-setting"),
        title = document.getElementById("title");
        
    // list -bout
    const setList = document.querySelector("li"),
        listTitleName = setList.querySelector(".li-title-name"),
        listTitleColor = setList.querySelector(".li-title-color");

    saved.classList.remove("js-save");
    setList.style.visibility = "hidden";
    input.value = localStorage.getItem('Note')
    listTitleName.value = localStorage.getItem('Title-Name');
    //title.innerText = localStorage.getItem('Title');

    
    document.querySelector("button").onclick = function() { saveNote() };
    setting.onclick = function() { openSets() };
    
    function saveNote(){
        localStorage.setItem('Note', input.value)
        saved.classList.add("js-save")
    }

    function openSets(){
        if (setList.style.visibility === "hidden")
            setList.style.visibility = "visible";
        else
            setList.style.visibility = "hidden";
            localStorage.setItem('Title-Name', listTitleName.value);
            localStorage.setItem('Title-Color', localStorage.color(listTitleColor.value));
            title.innerText = getItem('Title-Name');
            title.style.color = getItem('Title-Color');
    }



}