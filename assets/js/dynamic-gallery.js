var pictures = [
  {
    filename: "1.jpg",
    title: "Melograno nano",
    description: "Canon EOS 1200D + 18-135mm IS (Photographed by Chiara Corrado)"
  },
  {
    filename: "2.jpg",
    title: "Rosmarino",
    description: "Canon EOS 1200D + 18-135mm IS (Photographed by Chiara Corrado)"
  },
  {
    filename: "3.jpg",
    title: "Cielo e nuvole",
    description: "Canon EOS 1200D + 18-135mm IS (Photographed by Chiara Corrado)"
  },
  {
    filename: "4.jpg",
    title: "Pioggia di luce",
    description: "Canon EOS 1200D + 18-135mm IS (Photographed by Chiara Corrado)"
  },
  {
    filename: "5.jpg",
    title: "Tramonto a Piombino",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  },
  {
    filename: "6.jpg",
    title: "Smile",
    description: "Canon EOS 1200D + 18-135mm IS (Photographed by Simone Locci)"
  },
  {
    filename: "7.jpg",
    title: "Fragola",
    description: "Canon EOS 1200D + 18-135mm IS (Photographed by Simone Locci)"
  },
  {
    filename: "8.jpg",
    title: "Amici controluce",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  },
  {
    filename: "9.jpg",
    title: "Gocce in fiore",
    description: "Canon EOS 1200D + 18-135mm IS (Photographed by Simone Locci)"
  },
  {
    filename: "10.jpg",
    title: "Lava",
    description: "Canon EOS 1200D + 18-135mm IS (Photographed by Simone Locci)"
  },
  {
    filename: "11.jpg",
    title: "Alberi in contrasto",
    description: "Samsung Google Galaxy Nexus GT-i9250 (Photographed by Chiara Corrado)"
  },
  {
    filename: "12.jpg",
    title: "Due cuori e una capanna",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  },
  {
    filename: "13.jpg",
    title: "Nave in tramonto",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  },
  {
    filename: "14.jpg",
    title: "Bambino sulla vetta",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  },
  {
    filename: "15.jpg",
    title: "Man & a dream",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  },
  {
    filename: "16.jpg",
    title: "Arduino car",
    description: "Canon EOS 1200D + 18-135mm IS (Photographed by Simone Locci)"
  },
  {
    filename: "17.jpg",
    title: "Libellula nel verde",
    description: "Canon EOS 1200D + 18-135mm IS (Photographed by Simone Locci)"
  },
  {
    filename: "18.jpg",
    title: "Occhi di gatto",
    description: "Kraun DigitalCAM 3.1Mpx (Photographed by Simone Locci)"
  },
  {
    filename: "19.jpg",
    title: "Rosa arancio",
    description: "Nikon Coolpix S640 (Photographed by Simone Locci)"
  },
  {
    filename: "20.jpg",
    title: "Fasci di luce",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  },
  {
    filename: "21.jpg",
    title: "Fuochi di una luminara",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  },
  {
    filename: "22.jpg",
    title: "Fiori a contrasto",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  },
  {
    filename: "23.jpg",
    title: "Casolare abbandonato",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  },
  {
    filename: "24.jpg",
    title: "Sunset shades",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  },
  {
    filename: "25.jpg",
    title: "L'uomo che medita",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  },
  {
    filename: "26.jpg",
    title: "Ninfa del corbezzolo",
    description: "Nikon Coolpix S640 (Photographed by Simone Locci)"
  },
  {
    filename: "27.jpg",
    title: "Bellis perennis",
    description: "Nikon Coolpix S640 (Photographed by Simone Locci)"
  },
  {
    filename: "28.jpg",
    title: "Ruggine",
    description: "Kraun DigitalCAM 3.1Mpx (Photographed by Simone Locci)"
  },
  {
    filename: "29.jpg",
    title: "Chiara a lavoro",
    description: "Canon EOS 1200D + 18-135mm IS (Photographed by Simone Locci)"
  },
  {
    filename: "30.jpg",
    title: "Le mura",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  },
  {
    filename: "31.jpg",
    title: "Geek boy",
    description: "Nikon Coolpix S640 (Photographed by Simone Locci)"
  },
  {
    filename: "32.jpg",
    title: "Uccelli in volo",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  },
  {
    filename: "33.jpg",
    title: "Barchette a riva",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  },
  {
    filename: "34.jpg",
    title: "TARM",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  },
  {
    filename: "35.jpg",
    title: "Palma in controluce",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  },
  {
    filename: "36.jpg",
    title: "Campania del mio cuore",
    description: "Nikon Coolpix S640 (Photographed by Chiara Corrado)"
  }
];

var numberOfPictures = 4;
var randomIndexUsed = [];

while (randomIndexUsed.length < numberOfPictures)
{
  var randomIndex = Math.floor(Math.random() * pictures.length);

  if (randomIndexUsed.indexOf(randomIndex) === -1)
  {
    var dynamicGallery = $( "#dynamic-gallery" );
    var article = $(document.createElement("article"));
    var divImage = $(document.createElement("div"));
    divImage.addClass("image");
    var image = $(document.createElement("img"));
    image.attr("src", "images/gallery/" + pictures[randomIndex].filename);
    var h3 = $(document.createElement("h3"));
    h3.addClass("major");
    h3.text(pictures[randomIndex].title);
    var p = $(document.createElement("p"));
    p.text(pictures[randomIndex].description);

    divImage.append(image);
    article.append(divImage);
    article.append(h3);
    article.append(p);
    dynamicGallery.append(article);

    randomIndexUsed.push(randomIndex);
  }
}
