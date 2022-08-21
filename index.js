const desktopQuerie = '800px'

const component1 = 
  `
  <header>
  <nav class="navbar navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
          <a class="navbar-brand navFont" href="./index.html">Orquesta di Pascuale</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
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
  </nav>

</header>

<main>
  <h1>ORQUESTA DI PASCUALE</h1>

  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner carouselIndex">
          <div class="carousel-item active">
              <img src="./fotos ODP/DSC07605.png" class="d-block w-100" alt="foto1">
          </div>
          <div class="carousel-item">
              <img src="./fotos ODP/DSC07573.png" class="d-block w-100" alt="foto2">
          </div>
          <div class="carousel-item">
              <img src="./fotos ODP/DSC07581.png" class="d-block w-100" alt="foto3">
          </div>
          <div class="carousel-item">
              <img src="./fotos ODP/Julio - Hasta Trilce (78).png" class="d-block w-100" alt="foto4">
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
</main>

<section class="bio mt-3">
  <h1>Historia</h1>
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

  <h2>Integrantes</h2>

  <ul>
      <li> Violínes
          <ul>
              <li>Octavio Bianchi Godoy</li>
              <li>Ariadna Bruschini</li>
              <li>Laura Tagle</li>
              <li>Hilen Alves</li>
              <li>Noelia Saldaña</li>
          </ul>
      </li>
      <li> Viola
          <ul>
              <li>
                  Maite Unzurrunzaga
              </li>
          </ul>
      </li>
      <li> Violonchelo
          <ul>
              <li>
                  Regina Manfredi
              </li>
          </ul>
      </li>
      <li> Bandoneón
          <ul>
              <li>Joaquín Sterman</li>
              <li>Tomás Muir</li>
              <li>Tito Pellecchia</li>
              <li>Lautaro Pons</li>
          </ul>
      </li>
      <li> Contrabajo
          <ul>
              <li>Diego Vázquez</li>
          </ul>
      </li>
      <li> Piano, dirección y composición
          <ul>
              <li>Juan Ignacio Di Pasquale</li>
          </ul>
      </li>
  </ul>
</section>
<div>
  <img src="./fotos ODP/_05A0051.png" class="d-block w-100" alt="foto5">
</div>

<section class="musica">
  <div>
      <h2 class="mt-4 mb-4">Música</h2>
  </div>
  <article class="spotify">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5FAoWgJBCmuYK9pFw6g5XE?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      <p>aca vendria una lista de ODP cuando la suba</p>
  </article>
</section>
<section class="videos">
  <div>
      <h2 class="mt-4 mb-4">Videos</h2>
  </div>
  <article>
      <iframe class="mt-4 mb-4" width="482" height="315" src="https://www.youtube.com/embed/v8NJlpFC500" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe class="mt-2 mb-4" width="482" height="315" src="https://www.youtube.com/embed/D7ckJ4omRZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>aca vendrian mas videos cuando los suba</p>
  </article>
</section>

<section>
  <div class="container-md mt-4 mb-4">
      <h1 class="form">Dejanos tu comentario</h1>
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
                      <textarea class="form-control" id="floatingTextarea" placeholder="Dejanos tu comentario" name="mensaje" required style="height: 10rem;"></textarea>
                      <label for="floatingTextarea">Dejanos tu comentario</label>
                  </div>
              </div>
              <button type="submit" class="btn btn-lg btn-dark btn-block">Enviar</button>
              <button type="reset" class="btn btn-lg btn-dark btn-block">Limpiar</button>
      </form>
  </div>
</section>

<section class="redes">
  <ul>
      <li><a href="https://api.whatsapp.com/send/?phone=5491140333125"><i class="fa-brands fa-whatsapp"></i></a></li>
      <li><a href="https://www.facebook.com/Orquesta-T%C3%ADpica-Di-Pasquale-108168401875322"><i class="fa-brands fa-facebook-f"></i></a></li>
      <li><a href="https://www.instagram.com/orquestatipicadipasquale/"><i class="fa-brands fa-instagram"></i></a></li>
      <li><a href="https://www.youtube.com/channel/UCBNVVmwPhj9Bdr9k2AiEE3w"><i class="fa-brands fa-youtube"></i></a></li>
  </ul>
</section>
  `;
const component2 = 
  `
  <main class="desktop">
        <section class="hero-img">
            <img src="./fotos ODP/_05A0051.png" >
        </section>
        <section class="link" >
            <a href="./pages/bio.html">Ingresar</a>
        </section>
    </main>
  `;

function setBodyInnerHtml(html) {
  const body = document.querySelector('body');
  body.innerHTML = html;
}

const mql = window.matchMedia(`(max-width: ${desktopQuerie})`);
let mobileView = mql.matches;

if (mobileView){
  setBodyInnerHtml(component1);
} else {
  setBodyInnerHtml(component2);
}

mql.addEventListener('change',(e)=>{
  let mobileView = e.matches;
  if (mobileView) {
    setBodyInnerHtml(component1);
  } else {
    setBodyInnerHtml(component2);
  }
})