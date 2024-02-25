"use strict"

/*-----------------------------Diagram stapel-------------------------------------------*/

let diagramFetch = "https://studenter.miun.se/~mallar/dt211g/" // sätter diagramFecth till länken

getData(); //Kör funktion

async function getData() { //skapar funktion
    const response = await fetch(diagramFetch)//Hämtar datan
    const data = await response.json(); // JSON

    for (let x = 0; x < data.length; x++) { //loopar över all data.

        let programX = data[x]

        if (programX.type === "Program") { //Kollar efter värdet/namnet "Program" i programX.
            delete data[x] //Tar bort från data
        }
    }

    data.sort((a, b) => b.applicantsTotal - a.applicantsTotal); //sorterar efter antal sökande



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
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                } //Börjar på 0, y axel

            }
        }
    })
};





/*-----------------------------Diagram cirkel-------------------------------------------*/


getData2();


async function getData2() { //skapar funktion
    const response = await fetch(diagramFetch)//Hämtar datan
    const data = await response.json(); // JSON

    for (let x = 0; x < data.length; x++) { //loopar över all data.

        let kursX = data[x]

        if (kursX.type === "Kurs") { //Kollar efter värdet/namnet "Kurs" i programX.
            delete data[x] //Tar bort från data
        }
    }




    data.sort((a, b) => b.applicantsTotal - a.applicantsTotal); //sorterar efter antal sökande


    let courses = data.slice(0, 5);//bara 5 första i datan (högst antal ansökningar)

    let names = []; //tom array
    let applicants = []; // tom array

    for (let x = 0; x < courses.length; x++) {
        names.push(courses[x].name); //Lägger till namn
        applicants.push(courses[x].applicantsTotal); // Lägger till ansökning
    }

    let circleDiagram = document.getElementById("diagramTwo")

    new Chart(circleDiagram, { //ny chart
        type: "pie", //Cirkel diagram/pie chart
        data: {
            labels: names, //Rubrikerna på varje pajbit från names arrayen
            datasets: [{
                data: applicants, //Datan från applicants arrayen
                borderWidth: 1
            }]
        },

    })
};

