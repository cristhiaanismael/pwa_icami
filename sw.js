self.addEventListener('install', event=>{
  const cacheprom=   caches.open('cache-1').then(cache => {
        return cache.addAll(['./index.html',
                    './blank-page.html',
                  './alerts.html',
                  './notification.html',
              './settings.html',
            './invenet.html',
            './form-elements2.html',
          './assets/css/bootstrap.min.css',
            './assets/css/lineicons.css',
            './assets/css/materialdesignicons.min.css',
            './assets/css/fullcalendar.css',
            './assets/css/main.css',
            'https://cdn.datatables.net/v/dt/r-2.5.0/datatables.min.css',
            './assets/images/icami.png',
            './assets/images/logo.jpg',
            './assets/images/icamipeqe.png',
            './assets/images/lead/lead-1.png',
            './assets/images/lead/lead-2.png',
            './assets/images/lead/lead-3.png',
            './assets/images/lead/lead-4.png',
            './assets/images/lead/lead-5.png',
            './assets/images/lead/lead-6.png',
            './assets/images/profile/profile-image.png',
            './assets/js/bootstrap.bundle.min.js',
            './assets/js/Chart.min.js',
            './assets/js/dynamic-pie-chart.js',
            './assets/js/moment.min.js',
            './assets/js/fullcalendar.js',
            './assets/js/jvectormap.min.js',
            './assets/js/world-merc.js',
            './assets/js/polyfill.js',
            './assets/js/main.js',
            './assets/js/notify.min.js',
            'https://code.jquery.com/jquery-3.7.0.js',
            'assets/js/jquery.richtext.js',
            './manifest.json',
            'https://cdn.datatables.net/1.13.7/js/dataTables.bootstrap5.min.js',
            './assets/css/site.css',
            './assets/js/richtext.min.css',
            'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js',
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
            './assets/fonts/lineicons.woff',
            './assets/fonts/materialdesignicons-webfont.woff?v=5.9.55',
            './assets/fonts/materialdesignicons-webfont.ttf?v=5.9.55',
            'https://cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js'



         ])
    });
    event.waitUntil(cacheprom);
});


self.addEventListener('fetch', event=>{


  console.log('sw:  ', event.request.url)
  console.log('encontro: ',event.request.url.includes('rest.php'))


      if(event.request.url.includes('rest.php')){
        console.log('entro ',event.request.url);


        let respuestaof= new Response(`{
          "respuesta": "no se pudo guardar"
       }`,
                                {
                                    headers: {'Content-Type': 'application/json'}
                                });


                                const resp=fetch(event.request)
                                .catch(()=>respuestaof)

                                event.respondWith(resp)

      }else if(event.request.url.includes('form-elements.html')){
        console.log(event.request)
        console.log('entro a form')


        let respuestaof2= caches.match('form-elements2.html') ;
        console.log(respuestaof2)



                                const resp2=fetch(event.request)
                                .catch(()=>respuestaof2)

                                event.respondWith(resp2)




       }else{
        console.log('traera d cache')
          event.respondWith(caches.match(event.request) )

      }

//event.respondWith(caches.match(event.request) )
    //  event.respondWith(event.request )
 



});





self.addEventListener('push', event=> {
 console.log('se recibio');
});