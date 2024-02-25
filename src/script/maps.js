"use strict"


async function searchMap() { //Funktion
    let inputtedText = document.getElementById("searchText").value;
    let addressSearched = "https://nominatim.openstreetmap.org/search.php?q="+ inputtedText + "&format=jsonv2" //Länk med texten som skrivs in

      
    const response = await fetch(addressSearched)//Hämtar datan
    const data = await response.json(); // JSON


      for (let x of data) {
        let latitude = parseFloat(x.lat); //Ändrar till tal 
        let longitude = parseFloat(x.lon);  
        
        
        let searchAPI = "https://www.openstreetmap.org/export/embed.html?bbox=" + (longitude - 0.01) + "," + (latitude - 0.01) + "," + (longitude + 0.01) + "," + (latitude + 0.01) + "&layer=mapnik&marker=" + latitude + "," + longitude; //Sätter kartan med hjälp av latitude och longitude 
        
        console.log(searchAPI)
        let iFrame = document.getElementById("iFrameID"); //Väljer iframen med dess ID
        iFrame.src = searchAPI; //Sätter iframens src till searchAPI.
      }
    }

document.getElementById("searchButton").addEventListener("click", searchMap) //På klick körs funktionen