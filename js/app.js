let carImage = ["images/teslaX.jpg", "images/teslaS.png", "images/mercedesClasseE.jpg", "images/mercedesClasseS.png", "images/mercedesClasseV.jpg", "images/mercedesGLE.png", "images/audiA6.png", "images/audiA8.png", "images/bmwSerie5.jpeg", "images/bmwSerie7.png", "images/rangeRover.jpg"]

let carName = ["Tesla X", "Tesla S", "Mercedes Classe E", "Mercedes Classe S", "Mercedes Class V", "Mercedes GLE", "Audi A6", "Audi A8", "BMW Série 5", "BMW Série 7", "RANGE ROVER"]

let i = 0

    setInterval(function(){
      if (i == 0) {
        document.querySelector('.left').src=carImage[10];
      }
      else {
        document.querySelector('.left').src=carImage[i-1];
      }
      document.querySelector('.center').src=carImage[i];
      document.getElementById('nomVoiture').innerHTML=carName[i];
      if (i == 10) {
        document.querySelector('.right').src=carImage[0];
      }
      else {
        document.querySelector('.right').src=carImage[i+1];
      }
      i++;
      if(i==11) i=0;
    },4000)
