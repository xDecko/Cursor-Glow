
//CURSOR LIGHT

window.onpointermove = event => {
    const { clientX, clientY } = event;
  
    glow.style.left = `${clientX}px`; /* Utiliza 'style.left' en lugar de 'animate' */
    glow.style.top = `${clientY}px`; /* Utiliza 'style.top' en lugar de 'animate' */
  };
  
  //LIGHT EFFECTS
  
  function changeGlowColor() {
    var glow = document.getElementById("glow");
    glow.classList.add("hover");
  }
  
  function resetGlowColor() {
    var glow = document.getElementById("glow");
    glow.classList.remove("hover");
  }
  
  