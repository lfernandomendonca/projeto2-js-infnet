document.getElementById("site").innerHTML = "Nintendando";

const slickCarroselElement = document.querySelector(".your-class")
const modalLabel = document.querySelector("#exampleModalLabel");
const modalBody = document.querySelector(".modal-body");

class card {
    imagemPrincipal;
    titulo;
    descricao;
    imagens;

    constructor(imagemPrincipal, titulo, descricao, imagens){
        this.imagemPrincipal = imagemPrincipal;
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagens = imagens;
    }
    buildMainImage(index){
        return`<img class="img-fluid px-2" src="${this.imagemPrincipal}" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick="handleClickImage(${index})"/>`;
        
    }
}

const listCards = [
    new card (
        "https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg",
        "titulo",
        "descrição",
        [`https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`, `https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`]
        
    ),
    new card (
        "https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg",
        "titulo",
        "descrição",
        [`https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`, `https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`]
        
    ),
    new card (
        "https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg",
        "titulo",
        "descrição",
        [`https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`, `https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`]
        
    ),
    new card (
        "https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg",
        "titulo",
        "descrição",
        [`https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`, `https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`]
        
    ),
    new card (
        "https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg",
        "titulo",
        "descrição",
        [`https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`, `https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`]
        
    ),
    new card (
        "https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg",
        "titulo",
        "descrição",
        [`https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`, `https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`]
        
    ),
    new card (
        "https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg",
        "titulo",
        "descrição",
        [`https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`, `https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`]
        
    ),
    new card (
        "https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg",
        "titulo",
        "descrição",
        [`https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`, `https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`]
        
    ),
    new card (
        "https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg",
        "titulo",
        "descrição",
        [`https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`, `https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`]
        
    ),
    new card (
        "https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg",
        "titulo",
        "descrição",
        [`https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`, `https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`]
        
    ),
    new card (
        "https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg",
        "titulo",
        "descrição",
        [`https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`, `https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`]
        
    ),
    new card (
        "https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg",
        "titulo",
        "descrição",
        [`https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`, `https://www.mobygames.com/images/covers/l/683536-the-legend-of-zelda-a-link-to-the-past-new-nintendo-3ds-front-cover.jpg`]
        
    ),
]

listCards.forEach((card, index) => {
	const div = document.createElement("div");
	div.innerHTML = card.buildMainImage(index);
    
	slickCarroselElement.appendChild(div);
});

function handleClickImage(index) {
	const card = listCards[index];
    modalLabel.innerHTML = `<span class="placeholder col-6"></span>`;
	modalBody.innerHTML = `<p class="placeholder-glow">
    <span class="placeholder col-12"></span>
  </p>`;
	setTimeout(() => {
		modalLabel.innerHTML = card.titulo;
		modalBody.innerHTML = `
            <img src="${card.imagemPrincipal}" />
            <p>${card.descricao}</p>
        `;
	}, 1500);
}

//spinner e placeholder

const preloadWrapper = document.querySelector(".preload-wrapper");

setTimeout(()=>{
    preloadWrapper.style.display = "none";
}, 1000);

// carrosel

$('.your-class').slick({
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 5300,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });