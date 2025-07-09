// hay que crear un script para eso jaja saludos 

  const toggleBtn = document.getElementById("toggleModo");
  let modoClaro = false;

  toggleBtn.addEventListener("click", () => {
    modoClaro = !modoClaro;

    if (modoClaro) {
      // Modo Claro
      document.documentElement.style.setProperty('--oxford-blue', '#ffffff');      // fondo principal blanco
document.documentElement.style.setProperty('--space-cadet', '#dbe2ef');      // gris azulado muy claro
document.documentElement.style.setProperty('--yinmn-blue', '#a9bcd0');       // azul pálido
document.documentElement.style.setProperty('--jordy-blue', '#5dade');       // azul suave (botones/títulos)
document.documentElement.style.setProperty('--lavender', '#a9cce3');         // fondo secundario
document.body.style.color = "#1e1e1e";                                       // texto oscuro para contraste

    } else {
      // Modo Oscuro (valores originales)
      document.documentElement.style.setProperty('--oxford-blue', '#0A192F');
      document.documentElement.style.setProperty('--space-cadet', '#1D2D50');
      document.documentElement.style.setProperty('--yinmn-blue', '#2E5984');
      document.documentElement.style.setProperty('--jordy-blue', '#8AB6D6');
      document.documentElement.style.setProperty('--lavender', '#E0BBE4');
      document.body.style.color = "white";
    }
  })  ;

  
