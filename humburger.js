let main = document.querySelector("body");
let elm = document.createElement('div');
elm.style.border= "1px solid black";
elm.style.display="flex";
elm.style.justifyContent="space-between";

var img = new Image();
img.src = "LOGO.png"; 
img.width = 110; 
img.height = 45; 
img.style.paddingLeft="2rem";
img.style.paddingTop="1rem";
elm.appendChild(img);

let mainLink = document.createElement("ul");

    var link1 = document.createElement("a");
      link1.innerText = "Home";
      link1.setAttribute("href", "#");
      link1.style.color = "black";
      link1.style.textDecoration = "none";
      link1.style.fontSize = "16px";
      link1.style.paddingRight = "1rem";
      link1.style.fontFamily = "Tahoma";
      mainLink.appendChild(link1);

      var link2 = document.createElement("a");
      link2.innerText = "About";
      link2.setAttribute("href", "#");
      link2.style.color = "black";
      link2.style.textDecoration = "none";
      link2.style.fontSize = "16px";
      link2.style.paddingRight = "1rem";
      link2.style.fontFamily = "Tahoma";
      mainLink.appendChild(link2);

      var link3 = document.createElement("a");
      link3.innerText = "Services";
      link3.setAttribute("href", "#");
      link3.style.color = "black";
      link3.style.textDecoration = "none";
      link3.style.fontSize = "16px";
      link3.style.paddingRight = "1rem";
      link3.style.fontFamily = "Tahoma";
      mainLink.appendChild(link3);

      var link4 = document.createElement("a");
      link4.innerText = "Contact Us";
      link4.setAttribute("href", "#");
      link4.style.color = "black";
      link4.style.textDecoration = "none";
      link4.style.fontSize = "16px";
      link4.style.paddingRight = "1rem";
      link4.style.fontFamily = "Tahoma";
      mainLink.appendChild(link4);
      var icon = document.getElementById("menu");
      mainLink.append(menu);
      icon.style.paddingRight="2rem";
      icon.style.fontSize="2rem";
      icon.style.display="none";

elm.append(mainLink);
main.append(elm);