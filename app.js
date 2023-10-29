const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");


arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
      const ratio = Math.floor(window.innerWidth / 270);
      clickCounter++;
      if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
        movieLists[i].style.transform = `translateX(${
          movieLists[i].computedStyleMap().get("transform")[0].x.value - 200
        }px)`;
      } else {
        movieLists[i].style.transform = "translateX(0)";
        clickCounter = 0;
      }
    });
  
    console.log(Math.floor(window.innerWidth / 270));
  });

  const ball = document.querySelector(".toggle-ball");
  const items = document.querySelectorAll(".container,.movie-list-title,.navbar,.navbar-container,.toggle,.toggle-icon,.search-bar,.search-bar button,.featured-desc,.arrow");

  ball.addEventListener("click",()=>{
      items.forEach(item=>{
          item.classList.toggle("active")
      })
      ball.classList.toggle("active")
  })

  const classicsContainer = document.getElementById('classics');
  const comedyContainer = document.getElementById('comedy');
  const fantasyContainer = document.getElementById('fantasy');
  
  const classicsList = document.getElementById('movie-list-classics');
  const comedyList = document.getElementById('movie-list-comedy');
  const fantasyList = document.getElementById('movie-list-fantasy');
  
  function addScrollListener(container, list) {
      let scrollPosition = 0;
      
      container.addEventListener('wheel', (event) => {
          const scrollAmount = event.deltaY;
          const scrollSpeed = 100;
  
          scrollPosition += scrollAmount > 0 ? scrollSpeed : -scrollSpeed;
          scrollPosition = Math.min(
              Math.max(scrollPosition, 0),
              list.scrollWidth - container.clientWidth
          );
  
          list.style.transform = `translateX(-${scrollPosition}px)`;
  
          // Evitar que la página se desplace hacia arriba o hacia abajo
          event.preventDefault();
      });
  }
  
  addScrollListener(classicsContainer, classicsList);
  addScrollListener(comedyContainer, comedyList);
  addScrollListener(fantasyContainer, fantasyList);
  

  // Obtén el elemento de entrada de búsqueda y la lista de elementos a buscar
const searchInput = document.querySelector('.search-bar input');
const movieItems = document.querySelectorAll('.movie-list-item-title');

// Agrega un evento de entrada para la búsqueda
searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();

    // Itera a través de los elementos y muestra u oculta según la búsqueda
    movieItems.forEach((item) => {
        const title = item.textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            item.parentElement.style.display = 'block';
        } else {
            item.parentElement.style.display = 'none';
        }
    });
});

function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth' // Esta propiedad activa el desplazamiento suave
  });
}

window.addEventListener('scroll', function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('scroll-button').style.display = 'block';
  } else {
    document.getElementById('scroll-button').style.display = 'none';
  }
});
