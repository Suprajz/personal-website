import{c as g,u as w}from"./close.B10lgWDl.js";const v={src:"/_astro/seven_samurai.CleB-8jx.png",width:1440,height:810,format:"png"},f={src:"/_astro/metropolis.tJmQNATG.png",width:1440,height:810,format:"png"},y={src:"/_astro/fifth_element.BVb5eHuM.png",width:1440,height:810,format:"png"},b={src:"/_astro/ikiru.DCh5Ycxh.png",width:1440,height:810,format:"png"},k={src:"/_astro/strangelove.CyaiHzUE.png",width:1440,height:810,format:"png"},L={src:"/_astro/nostalgia.BtdfQBIs.png",width:1440,height:810,format:"png"},I={src:"/_astro/varljivo_leto.DI9FXd78.png",width:1440,height:810,format:"png"},M={src:"/_astro/balkanski_spijun.Css2i1AK.png",width:1440,height:810,format:"png"},e=[{id:1,description:"Rice farmers hire a band of samurai to defend them against marauding  bandits in Akira Kurosawa’s influential epic, a touchstone for action  movies ever since. Ranked at number 20 in Sight & Sound’s 2022 Greatest Films of All Time critics’ poll, Akira Kurosawa  followed the breakthrough international acclaim for Rashomon (1950) and  Ikiru (1952) with this three-and-a-half-hour jidaigeki (period drama)  set during Japan’s turbulent 16th century. ",title:"Sedam Samuraja",director:"Akira Kurosawa",year:"1954",country:"Japan",image:v,movie:"https://www.youtube.com/embed/RsRN65PlaIM?si=U_YJaReOhrFueSMy",watchLink:"https://www.justwatch.com/us/movie/seven-samurai"},{id:2,description:"In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working-class prophet who predicts the coming of a savior to mediate their differences.",title:"Metropolis",director:"Fritz Lang",year:"1927",country:"German Reich",image:f,movie:"https://www.youtube.com/embed/gdtZv3XROnc?si=HqAebzCgf3L9W2YL",watchLink:"https://youtu.be/eNW9yo9IRBk?si=-QRkrmMDIXfm39Qb"},{id:3,description:"In 2257, a taxi driver is unintentionally given the task of saving a young girl who is part of the key that will ensure the survival of humanity.",title:"Peti Element",director:"Luc Besson",year:"1997",country:"France",image:y,movie:"https://www.youtube.com/embed/Gg9nzOFVwtQ?si=75YhFn8esAyQStgI",watchLink:"https://www.justwatch.com/us/movie/the-fifth-element"},{id:4,description:"Kanji Watanabe is a middle-aged man who has worked in the same monotonous bureaucratic position for decades. Learning he has cancer, he starts to look for the meaning of his life.",title:"Ikiru",director:"Akira Kurosawa",year:"1952",country:"Japan",image:b,movie:"https://www.youtube.com/embed/geKhyNerWM8?si=3e59_tkgF268LANX",watchLink:"https://www.justwatch.com/us/movie/to-live"},{id:5,description:"After the insane General Jack D. Ripper initiates a nuclear strike on the Soviet Union, a war room full of politicians, generals and a Russian diplomat all frantically try to stop the nuclear strike.",title:"Dr. Strangelove",director:"Stanley Kubrick",year:"1964",country:"United Kingdom",movie:"https://www.youtube.com/embed/jPU1AYTxwg4?si=UzTtoNHWiozLs3AV",watchLink:"https://www.justwatch.com/us/movie/dr-strangelove-or-how-i-learned-to-stop-worrying-and-love-the-bomb",image:k},{id:6,description:"A Russian poet, Andrei and his interpreter, Eugenia travel to Italy to research the life of an 18th-century composer.",title:"Nostalgia",director:"Andrei Tarkovsky",year:"1983",country:"Soviet Union",image:L,movie:"https://www.youtube.com/embed/vMy-T5GI7Z0?si=Y41bOiC_QGDEyUff",watchLink:"https://www.justwatch.com/us/movie/nostalghia"},{id:7,description:"For the young man who lives in Serbian province town, the maturing coincides with the turbulent political events of the year 1968.",title:"Varljivo Leto '68",director:"Goran Paskaljevic",year:"1984",country:"Yugoslavia",image:I,movie:"https://www.youtube.com/embed/rZFQMpkM5NE?si=EnepBoTKRA9l8_wP",watchLink:"https://mubi.com/en/rs/films/the-elusive-summer-of-68"},{id:8,description:"Convinced that his subtenant is a spy and an enemy of the state, a man falls into deep paranoia which leads to absurd and destructive chain of events.",title:"Balkanski Spijun",director:"Dusan Kovacevic",year:"1984",country:"Yugoslavia",image:M,movie:"https://www.youtube.com/embed/gzL_iRpM67A?si=v7wR2bCRcgIJGgZk",watchLink:"https://mubi.com/en/rs/films/balkan-spy"}],A={src:"/_astro/arrow-left.DKaePJRD.png",width:48,height:48,format:"png"},_={src:"/_astro/arrow-right.p8Xq06Tf.png",width:48,height:48,format:"png"},R=()=>{const[n,o,l]=w(null);l(t=>{const i=document.getElementById("modal");if(t===null)return;if(!i){console.error("Modal element not found.");return}i.innerHTML="";const s=document.createElement("div");s.id="modal-content",s.innerHTML=`
      <div id="movie-modal" class="p-md-5 p-3">
        <div id="movie-modal-header">
          <div>
            <button id="prev" class="btn-transparent" />
            <button id="next" class="btn-transparent"/>
          </div>
            <button id="close" class="btn-transparent"/>
        </div>
        <div id="movie-modal-body">
          <div id="movie-modal-body-info" class="p-md-3 p-2">
            <h2>${e[t].title.toUpperCase()}</h2>
            <div class="d-flex gap-2 flex-row">
              <p>${e[t].director.toUpperCase()}</p>
              <p>${e[t].year.toUpperCase()}</p> 
              <p>${e[t].country.toUpperCase()}</p>
            </div>
            <p>${e[t].description}</p>
            <a class="btn btn-light" href="${e[t].watchLink}" target="_blank">GLEDAJ</a>
          </div>
          <iframe id="movie-modal-yt" src="${e[t].movie}" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </div>
    `,i.appendChild(s),i.style.display="block",i.style.background=`url(${e[t].image.src}) no-repeat center center / cover`;const a=document.getElementById("prev"),r=document.getElementById("next"),c=document.getElementById("close");a&&(a.onclick=d,a.style.opacity=t===0?"0.25":"1",a.innerHTML=`<img src="${A.src}" alt="Previous Movie" style="width:32px; height:32px;"/>`),r&&(r.onclick=h,r.style.opacity=t===e.length-1?"0.25":"1",r.innerHTML=`<img src="${_.src}" alt="Next Movie" style="width:32px; height:32px;"/>`);const p=()=>{m(),i.style.display="none",i.innerHTML=""};c&&(c.onclick=p,c.innerHTML=`<img src="${g.src}" alt="Close Modal" style="width:32px; height:32px;"/>`)});const u=()=>{const t=n();return t!==null?e[t]:null},h=()=>{const t=n();typeof t=="number"&&t<e.length-1&&o(t+1)},d=()=>{const t=n();typeof t=="number"&&t>0&&o(t-1)},m=()=>{o(null)};return{activeIndex:n,activeMovie:u,setActiveIndex:o,onNext:h,onPrev:d,onShow:t=>{o(t-1)},onClose:m,movieData:e,subscribeActiveIndex:l}},S=R();export{S as movieHook};
