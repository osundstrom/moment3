"use strict"

/*-----------------------------Diagram-------------------------------------------*/

let diagramFetch = "https://studenter.miun.se/~mallar/dt211g/" // sätter diagramFecth till länken

getData(); //Kör funktion

async function getData() { //skapar funktion
    const response = await fetch(diagramFetch)//Hämtar datan
    const data = await response.json(); // JSON
    data.sort ((a,b) => b.applicantsTotal - a.applicantsTotal); //sorterar efter antal sökande


    let courses = data.slice(0, 6);//bara 6 första i datan (högst antal ansökningar)

    let names = []; //top array
    let applicants = []; // tom array

    for (let x = 0; x < courses.length; x++) {
        names.push(courses[x].name); //Lägger till namn
        applicants.push(courses[x].applicantsTotal); // Lägger till ansökning
    }

   
    let stapelDiagram = document.getElementById("diagramOne") //Väljer element

    new Chart(stapelDiagram, { //ny chart
    type: "bar", //bar chart
    data: {
        labels: names, //Rubrikerna på varje stapel från names arrayen
        datasets: [{
        label: "Totala ansökningar", //Rubrik, text ovan diagram
        data: applicants, //Datan från applicants arrayen
        borderWidth: 1
        }]},
            options: {
            scales: {
            y: {
                beginAtZero: true}, //Börjar på 0, y axel

                x: {
                    ticks: {
                        autoSkip: false,
                        fontSize: 1,
                    }
                    
        }}}})};


        
