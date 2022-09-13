const desktopQuerie = '800px'

const component1 =
    `
    <!-- HEADER MOBILE -->
    <header>

        
        
        <nav class="navbar navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span> <img id="bando-offcanvas-toggler" src="./fotos ODP/icons8-bandoneón-90.png" alt="bando-offcanvas-toggler"></span>
                </button>                
                <a class="navbar-brand navFont" href="./index.html">ORQUESTA DI PASCUALE</a>                
                <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header navFont">
                        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">ODP</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body navLat">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#bio">BIO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#musica">Música</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#videos">Videos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#form">Contacto</a>
                    </li>
                </ul>
                    </div>
                </div>
            </div>
        </nav>
        
    <!--                 
            <nav class="navbar navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span> <img id="bando-offcanvas-toggler" src="./fotos ODP/icons8-bandoneón-90.png" alt="bando-offcanvas-toggler"></span>
                    </button>                
                    <a class="navbar-brand navFont" href="./index.html">ORQUESTA DI PASCUALE</a>                
                    <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
                        aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header navFont">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">ODP</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body navLat">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="./pages/bio.html">BIO</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./pages/musica.html">Música</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./pages/videos.html">Videos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./pages/contacto.html">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav> -->

    </header>

    
   

    <main>


    <!-- LANDING -->
    <h1>ORQUESTA DI PASCUALE</h1>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../fotos ODP/Julio - Hasta Trilce (100).png" class="d-block w-100" alt="foto1">
            </div>
            <!--<div class="carousel-item">
                <img src="../fotos ODP/CUERDA SOLISTA, ESTA TIENE QUE ESTAR.jpg" class="d-block w-100" alt="foto2">
            </div>-->
            <div class="carousel-item">
                <img src="../fotos ODP/BANDONEONES 4.jpg" class="d-block w-100" alt="foto3">
            </div>
            <div class="carousel-item">
                <img src="../fotos ODP/6.png" class="d-block w-100" alt="foto4">
            </div>
            <div class="carousel-item">
                <img src="../fotos ODP/DSC07581.png" class="d-block w-100" alt="foto4">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

        <!-- BIO -->
        <section id="bio">
            <p class="bio-titulo">HISTORIA</p> 
            <img  src="./fotos ODP/banner.png" class=" wow slideInLeft banner d-block w-100" alt="banner">
            <p>
                La Orquesta Típica Di Pasquale se forma a comienzos del año 2019 con el propósito de aportar producciones propias y arreglos de tangos contemporáneos en un formato tan emblemático como lo fue la Orquesta Típica.
            </p>
            <p>
                Conformada por 4 bandoneones, 4 violines, viola, violoncello, piano, contrabajo, y cantor/a, la Típica Di Pasquale se dedica a aportar al corpus del tango nuevas composiciones y arreglos de tangos instrumentales, canción, valses, milongas, zambas, candombes, buscando en ellas una continuidad con la tradición de producción, tal como ha sido históricamente en la época dorada del género
            </p>
            <p>
                La Orquesta se ha presentado en destacadas salas, teatros, milongas y festivales de Buenos Aires, tales como el CCK, CAFF, Hasta Trilce! entre otros, compartiendo escenario con referentes de la música popular argentina.
            </p>
            <p>
                Actualmente se encuentra proxima a lanzar su primer material discográfico grabado en 2021 en Estudios Fort por el reconocido Jorge “Portugués” Da Silva, en colaboración con la cantora y letrista Victoria Di Raimondo.
            </p>
            <p>
                En sus filas se encuentran prestigiosos musicos, docentes, sesionistas, solistas de orquestas sinfonicas y diversos proyectos de musica popuplar, que han realizado numerosas giras nacionales e internacionales.
            </p>
        
        



    <!-- INTEGRANTES -->

    <div class="container">
        <div class="item">
            <h2>VIOLINES</h2>
            <ul>
                <li><a href="#">Octavio Bianchi Godoy</a></li>
                <li><a href="#">Ariadna Bruschini</a></li>
                <li><a href="#">Laura Tagle</a></li>
                <li><a href="#">Hilen Alves</a></li>
                <li><a href="#">Noelia Saldaña</a></li>
            </ul>
            <img src="./fotos ODP/icons8-violin-64.png" alt="ico-violin">
        </div>
        <div class="item">
            <h2>VIOLA</h2>
            <ul>
                <li>
                    <a href="#">Maite Unzurrunzaga</a>
                </li>
            </ul>
            <img src="./fotos ODP/icons8-violin-64.png" alt="ico-violin">
        </div>
        <div class="item">
            <h2>VIOLONCHELO</h2>
            <ul>
                <li>
                    <a href="#">Regina Manfredi</a>
                </li>
            </ul>
            <img src="./fotos ODP/icons8-violonchelo-50.png" alt="ico-violonchelo">
        </div>
        <div class="item">
            <h2>BANDONEON</h2>
            <ul>
                <li><a href="#">Joaquín Sterman</a></li>
                <li><a href="#">Tomás Muir</a></li>
                <li><a href="#">Tito Pellecchia</a></li>
                <li><a href="#">Lautaro Pons</a></li>
            </ul>
            <img src="./fotos ODP/icons8-bandoneón-90.png" alt="ico-bando">
        </div>
        <div class="item">
            <h2>CONTRABAJO</h2>
            <ul>
                <li><a href="#">Diego Vázquez</a></li>
            </ul>
            <img src="./fotos ODP/icons8-violonchelo-50.png" alt="ico-violonchelo">
        </div>
        <div class="item">
            <h2 class="fs-6">PIANO DIRECCION Y COMPOSICION</h2>
            <ul>
                <li><a href="#">Juan Ignacio Di Pasquale</a></li>
            </ul>
            <img src="./fotos ODP/icons8-piano-64.png" alt="ico-piano">
            <img src="./fotos ODP/icons8-director-de-orquesta-50.png" alt="ico-piano">
            <img src="./fotos ODP/icons8-musicalmente-48.png" alt="ico-piano">
        </div>
    </div>

    <!-- MUSICA Y VIDEOS -->

    <section class="musica" id="musica">
    <h2 class="p-4">Música</h2>
    <article class="spotify">
        <iframe src="https://open.spotify.com/embed/album/5FAoWgJBCmuYK9pFw6g5XE?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </article>
    </section>
 
    <section class="videos" id="videos">       
    <h2 class="p-4">Videos</h2>
    <section class="videos">
      <h2 class="d-flex justify-content-center">Corto</h2>
      <article>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1">
            </button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2">
            </button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3">
            </button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <iframe width="560" height="380" src="https://www.youtube.com/embed/s6WTvT2KjSs" class="d-block w-100"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
            <div class="carousel-item">
              <iframe width="560" height="380" src="https://www.youtube.com/embed/rfx0oaE8bjU" class="d-block w-100"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
            <div class="carousel-item">
              <iframe width="560" height="380" src="https://www.youtube.com/embed/9aBJKcUAYRM" class="d-block w-100"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </article>

      <h2 class="mb-2 mt-4 d-flex justify-content-center"> Canciones</h2>

      <article>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner mt-4">
            <div class="carousel-item active">
              <iframe width="560" height="380" src="https://www.youtube.com/embed/A9TKMk3Ya7c" class="d-block w-100"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
            <div class="carousel-item">
              <iframe width="560" height="380" src="https://www.youtube.com/embed/yFHCvXmu89U" class="d-block w-100"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
            <div class="carousel-item">
              <iframe width="560" height="380" src="https://www.youtube.com/embed/PBvgZuswZ0g" class="d-block w-100"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </article>

      <h2 class="mb-2 mt-4 d-flex justify-content-center">Orquesta Típica en el CCK</h2>
      <a href="https://www.youtube.com/embed/E5bj1bqciko" target="_blank">

        <img src="../fotos ODP/cck1.jpeg" class="imgCck" alt="">

      </a>

    </section>
    </section>

    <section id="form">
    <div class="container-md mt-4 mb-4">
    <img src="../fotos ODP/ORQUESTA ENTERA 2.jpg" class="imgContacto mt-4" alt="foto contacto">
    <h1 class="form d-flex justify-content-center">Contacto</h1>
    <form action="https://formsubmit.co/acavieneun@mail.com " method="post"> 
        <!-- orquestatipicadipasquale@gmail.com // cambiar a este mail cuando se sube a la pagina final -->
        <div class="form-group">
            <div class="form-row">
                <div class="form-floating col">
                    <input type="text" class="form-control" id="floatingName" placeholder="Nombre y Apellido" name="Nombre y Apellido" required>
                    <label for="floatingName">Nombre y Apellido</label>
                </div>
                <div class="form-floating col">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Dirección de E-mail" name="Dirección de E-mail" required>
                    <label for="floatingInput">Dirección de E-mail</label>
                </div>
            </div>
            </div>
            <div class="form-group">
                <div class="form-floating mb-2">
                    <textarea class=" form-control" id="floatingTextarea" placeholder="Dejanos tu comentario" name="mensaje" required style="height: 10rem;"></textarea>
                    <label for="floatingTextarea">Dejanos tu comentario</label>
                </div>
            </div>
            <button type="submit" class=" rounded-1 btn btn-lg btn-dark btn-block">Enviar</button>
            <button type="reset" class=" rounded-1 btn btn-lg btn-dark btn-block">Limpiar</button>
    </form>
    </div>
    </section>

    </main>



    <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
        </ul>
    <p class="text-center text-muted">© 2022 Company, Inc</p>
    </footer>
  `;


// <section class="redes">
//     <ul>
//         <li><a href="https://api.whatsapp.com/send/?phone=5491140333125"><i class="fa-brands fa-whatsapp"></i></a></li>
//         <li><a href="https://www.facebook.com/Orquesta-T%C3%ADpica-Di-Pasquale-108168401875322"><i class="fa-brands fa-facebook-f"></i></a></li>
//         <li><a href="https://www.instagram.com/orquestatipicadipasquale/"><i class="fa-brands fa-instagram"></i></a></li>
//         <li><a href="https://www.youtube.com/channel/UCBNVVmwPhj9Bdr9k2AiEE3w"><i class="fa-brands fa-youtube"></i></a></li>
//     </ul>
// </section>

const component2 =
    `
   <main class="desktop">
        <section class="link" >
          <a href="./pages/bio.html">Orquesta Típica Di Pasquale</a>
          <img id="bando-offcanvas-toggler" class="bandoIndex aniBando" src="./fotos ODP/icons8-bandoneón-90.png" alt="bando-offcanvas-toggler">
         </section>
       <section class="hero-img">
          <img src="./fotos ODP/ORQUESTA ENTERA 1.jpg" class="aniImg" >
        </section>
    </main>
  `;

function setBodyInnerHtml(html) {
    const body = document.querySelector('body');
    body.innerHTML = html;
}

const mql = window.matchMedia(`(max-width: ${desktopQuerie})`);
let mobileView = mql.matches;

if (mobileView) {
    setBodyInnerHtml(component1);
} else {
    setBodyInnerHtml(component2);
}

mql.addEventListener('change', (e) => {
    let mobileView = e.matches;
    if (mobileView) {
        setBodyInnerHtml(component1);
    } else {
        setBodyInnerHtml(component2);
    }
})
