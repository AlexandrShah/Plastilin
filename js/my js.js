 function openEl(Name,tabname1,elmnt,color) {
    var i, tabcontent, tablinks,tabname;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tablinks =document.getElementsByClassName("tablink");
        tablinks[i].style.color = "";
        tabname = document.getElementsByClassName("tabcontent1");
        tabname[i].style.display = "none";

    }
    document.getElementById(Name).style.display = "block";
    elmnt.style.color = color;
    document.getElementById(tabname1).style.display = "block";

}

document.getElementById("defaultOpen").click();


