$(document).ready(function () {




});


 function openEl(Name,tabname1,pg,elmnt,color) {
    var i, tabcontent, tablinks,tabname,pgna;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tablinks =document.getElementsByClassName("tablink");
        tablinks[i].style.color = color;
        tabname = document.getElementsByClassName("tabcontent1");
        tabname[i].style.display = "none";
        pgna = document.getElementsByClassName('pags');
        pgna[i].classList.remove('active')





    }
    document.getElementById(Name).style.display = "block";
    elmnt.style.color = "";
    document.getElementById(tabname1).style.display = "block";
    document.getElementById(pg).classList.toggle('active');



}
document.getElementById("defaultOpen").click();



