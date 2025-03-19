const ramens = [
   { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
   { id: 2, name: "Kojiro Ramen", restaurant: "Menya", image: "kojiro.jpg", rating: 4, comment: "Very flavorful!" },
   { id: 3, name: "Nirvana Ramen", restaurant: "Ramen-ya", image: "nirvana.jpg", rating:3, comment: "Luxx Quality!"},
   {id: 4, name: "gyukotsu Ramen", restorant: "Ichiran", image:"gyukotsu.jpg", rating: 5, comment: "Yummy never Gummy!"},
   {id: 5, name: "ChapoFruits Ramen", restorant: "Menya", image: "kenyan-food-chapati.jpg", rating: 4, comment: "Chapo zinaSlap!"},
   {id: 6, name: "Naruto Ramen", restaurant: "Ichiran", image: "naruto.jpg", rating: 5, comment: "What a tastefull dish!"},
   {id: 7, name: "Beef Ramen", restaurant: "Menya", image: "ugali-nyama-choma.jpg", rating: 5, comment: "Posho na nyama is always a blast!"},
];

function displayRamens(ramens) {
   const ramenmenu = document.getElementById("ramen-menu");
   console.log(ramenmenu)

   ramens.forEach(ramen => {
      const figureElement = document.createElement("figure")
      const figCaptionElement = document.createElement("figcaption")
      const imgElement = document.createElement("img");
      
      figCaptionElement.textContent = `${ramen.name} - ${ramen.restaurant}`

      imgElement.src = ramen.image;
      imgElement.id = `ramen-${ramen.id}`;

      figureElement.appendChild(imgElement);
      figureElement.appendChild(figCaptionElement)
      ramenmenu.appendChild(figureElement);
   });
}

displayRamens(ramens);



function addSubmitListener() {
   const form = document.getElementById("postform");
   form.addSubmitListener("submit", function (event) {
      event.preventDefault();

      const postform = document.querySelector("postform");
      console.log(btn)
      function triggerfn(){
         console.log("I have been clicked")
      };
      btn.addSubmitListener('click', triggerfn);

      const newRamen = {
         id: ramens.length + 1,
         name: form.elements["name"].value,
         restaurant: form.elements["restaurant"].value,
         image: form.elements["image"].value,
         rating: form.elements["rating"].value,
         comment: form.elements["comment"].value
      };
     


      addSubmitListener(newRamen);
   });
}
const form = document.querySelector("form");
form.addSubmitListener("submit",(event)=>{
   e.preventDefault
   console.log(e)
   console.log("event has happened")
})
addSubmitListener();

// break down things into a roadmap

// html forms
// html forms with images
// listen for the submit event on the form
// reading html form in js
// reading images in js
// append to ramens array the form output