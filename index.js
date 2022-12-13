const desktopQuerie = '800px'

const component1 = 
    `  
    <!-- HEADER MOBILE -->
        <header id="top">
            <nav class="navbar navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span>
                            <img id="bando-offcanvas-toggler" src="./odp-vert-mob/new-logo.png" alt="bando-offcanvas-toggler">
                        </span>
                    </button>
                    <a class="navbar-brand navFont" href="#top">ORQUESTA TIPICA DI PASQUALE</a>
                    <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header navFont">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">ORQUESTA TIPICA DI PASQUALE</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body navLat">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#bio">BIO</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#musica">MUSICA</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#videos">VIDEOS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#form">CONTACTO</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    
        <main>
    
            <!-- LANDING -->
    
    
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="./odp-vert-mob/vert3.jpg" alt="First slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="./odp-vert-mob/vert2.jpg" alt="Second slide">
                  </div>
                  <div class="carousel-item">
                        <img src="./odp-vert-mob/vert5.jpg" class="d-block w-100" alt="foto2">
                    </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="./odp-vert-mob/vert6.png" alt="Third slide">
                  </div>
                </div>
            </div>
              
    
    
            <!-- BIO -->
    
            <section id="bio">
                <p class="bio-titulo">HISTORIA</p> 
                <img  src="./fotos ODP/banner.png" class=" wow slideInLeft banner d-block w-100" alt="banner">
                
                <div class="bio-container"><p>
                La Orquesta Típica Di Pasquale se forma a comienzos del año 2019 con el propósito de continuar con la tradición de aportar producciones propias y arreglos de tangos (entre otras músicas populares) contemporáneos tal como ha sido históricamente en la época dorada del género y en un formato tan emblemático como lo fue la Orquesta Típica.
                </p></div>
    
                <div class="bio-container"><p>
                Conformada por 4 bandoneones, 4 violines, viola, violoncello, piano, contrabajo, y cantor/a, la Típica Di Pasquale se dedica a aportar al corpus del tango nuevas composiciones y arreglos de tangos instrumentales, canción, valses, milongas, zambas, candombes.
                </p></div>
    
                <div class="bio-container"><p>
                    La Orquesta se ha presentado en destacadas salas, teatros, milongas y festivales de Buenos Aires, tales como el CCK, CAFF, Hasta Trilce! entre otros, compartiendo escenario con referentes de la música popular argentina.
                </p></div>
    
                <div class="bio-container"><p>
                    Actualmente se encuentra proxima a lanzar su primer material discográfico grabado en 2021 en Estudios Fort por el reconocido Jorge “Portugués” Da Silva, en colaboración con la cantora y letrista Victoria Di Raimondo.
                </p></div>
    
                <div class="bio-container"><p>
                    En sus filas se encuentran prestigiosos musicos, docentes, sesionistas, solistas de orquestas sinfonicas y diversos proyectos de musica popuplar, que han realizado numerosas giras nacionales e internacionales.
                </p></div>
    
            </section>


            <div class="container-integrantes px-4 py-5" id="icon-grid">
                <h3 class="pb-2 border-bottom">PRENSA</h3>

                <ul class="">
                    <li class="bio-container">
                        <a href="https://www.cck.gob.ar/events/milonga-federal-abierta-atipica-y-plural-13/ ">CCK  | Milonga Federal. Abierta, atípica y plural
                            (12.05.2022) Orquesta Típica Di Pasquale + Victoria Di Raimondo</a>
                    </li>
                    <li class="mt-1 bio-container">
                        <a href="https://www.lanacion.com.ar/cartelera-de-teatro/obra/orquesta-tipica-di-pasquale-flor-bobadilla-ol-ob30577">LA NACION | Cartelera de teatro
                            (21.07.2022) Orquesta Típica Di Pasquale + Flor Bobadilla Oliva</a>
                    </li>
                    <li class="mt-1 bio-container">
                        <a href="https://www.telam.com.ar/notas/202208/601415-musica-teatro-agenda.html"> Télam | ESPECTÁCULOS
                            (11.08.2022)  Orquesta Tipica Di Pasquale + Nacho Moze Septeto</a>
                    </li>
                    <li class="mt-1 bio-container">
                        <a href="https://www.pagina12.com.ar/389592-el-sur-es-el-arrabal-de-la-actualidad">Página 12 | CULTURA Y ESPECTÁCULOS
                            (16.12.2021) Orquesta Típica Di Pasquale + Victoria Di Raimondo en el  Festival de Tango en Movimiento.</a>
                    </li>   
                    <li class="mt-1 bio-container">
                        <a href="https://www.pagina12.com.ar/438887-el-festival-toca-dak-y-mas-shows-para-el-fin-de-semana">Página 12 | Secciones y suplementos 
                            (21.07.2022) Orquesta Típica Di Pasquale + Flor Bobadilla Oliva + Nicolás Lugangioli</a>
                    </li>
                </ul>
            
                
            </div>
    
    
    
            <!-- INTEGRANTES -->
            <section class="integrantes">
                <p class="integrantes-titulo" >INTEGRANTES</p>
                <img src="./fotos ODP/banner-integrantes.png" class=" d-block w-100" alt="">
    
    
                <div class="container">
                    <div class="item">
                        <h2>VIOLINES</h2>
                        <ul>
                            <li><a href="#">Octavio Bianchi Godoy</a></li>
                            <li><a href="#">Ariadna Bruschini</a></li>
                            <li><a href="#">Laura Tagle</a></li>
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
                        <h2>BANDONEONES</h2>
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
            </section>    
    
    
            <!-- MUSICA Y VIDEOS -->
    
            <section class="musica" id="musica">
                <p class="musica-titulo"> MUSICA </p>
                <img src="./fotos ODP/originales/6.jpg"  class=" d-block w-100" alt="">
    
                    
    
                <article class="spotify">
                    <iframe src="https://open.spotify.com/embed/album/5FAoWgJBCmuYK9pFw6g5XE?utm_source=generator&theme=0" width="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </article>
            </section>
    
            
    
            <section class="videos" id="videos">       
            <p class="videos-titulo" >VIDEOS</p>    
            <img src="./fotos ODP/banner-musica.png"  class=" d-block w-100" alt="">
    
            
    
                <!-- <section class="videos">
                 <p class="d-flex justify-content-center corto-titulo">CORTO</p> -->
    
    
    
    <!-- PROXIMAMENTE CARD -->
                 <div class="container">

                <a href="https://www.youtube.com/embed/fzGDTseB2jY" autoplay>
                    <img src="./fotos ODP/img-proximamente.jpg" alt="Avatar" class="image" style="width:100%">
                    <div class="middle">
                      <div class="text">TRAILER</div>
                    </div>
                  </div>      
                </a>


                  
    

                  
    
            <section id="form">
                <div class="container-md mt-4 mb-4">
                    <img src="../fotos ODP/piano odp.jpeg" class="imgContacto mt-4" alt="foto contacto">
    
    
                    <div class="contacto-titulo">
                        <p class="d-flex justify-content-center">CONTACTO</p>
                    </div>
    
    
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
                <li class="nav-item">
                  <a href="https://api.whatsapp.com/send/?phone=5491140333125"><img src="../fotos ODP/footer-icons/wasap.png" alt=""></a>
                </li>
                <li class="nav-item">
                  <a href="https://www.facebook.com/Orquesta-T%C3%ADpica-Di-Pasquale-108168401875322"><img src="../fotos ODP/footer-icons/face.png" alt=""></a>
                </li>
                <li class="nav-item">
                   <a href="https://www.instagram.com/orquestatipicadipasquale/"> <img src="../fotos ODP/footer-icons/insta.png" alt=""></a>
                </li>
                <li class="nav-item">
                   <a href="https://www.youtube.com/channel/UCBNVVmwPhj9Bdr9k2AiEE3w"><img src="../fotos ODP/footer-icons/yt.png" alt=""></a>
                </li>   
            </ul>
            <p class="text-center text-muted"> &COPY; 2022 ORQUESTA DI PASQUALE</p>
        </footer>
    
        <!-- BOOTSTRAP -->

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous">
        </script>
        <script src="./index.js"></script>
 
    
    `;

const component2 =
    `
   

    <main class="desktop">

        <section class="link" >
          <a href="./pages/bio.html">ORQUESTA TIPICA DI PASQUALE</a>
        </section>

        <section class="hero-img">
          <img src="./fotos ODP/ORQUESTA ENTERA 1.jpg" class="aniImg" >
        </section>

    </main>    

    <!-- BOOTSTRAP -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous">
</script>

    <!-- Javascript -->
    <script src="./index.js" > </script>


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

// cerrar offcanvas -- NO TOCAR

let offcanvasItems = document.querySelectorAll("div.offcanvas-body li.nav-item")
let offcanvasButton = document.querySelector("div.offcanvas-header button")

offcanvasItems.forEach(item =>{
    item.addEventListener('click',()=>{
        setTimeout(()=>{
            offcanvasButton.click();
        },750)
    })
})