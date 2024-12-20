import{c as C,u as c}from"./close.B10lgWDl.js";const i=[{id:1,question:"Koje godine sam rodjen?",answers:["1995","2002","2000"],correct:0},{id:2,question:"Koji mi je rekord u trcanju na 5km?",answers:["25:04","19:20","20:51"],correct:2},{id:3,question:"Koja je moja omiljena boja?",answers:["Ljubičasta","Mint Zelena","Indigo"],correct:2},{id:4,question:"Koji mi je omiljeni domaći film?",answers:["Maratonci trče počasni krug","Balkanski špijun","Mi nismo anđeli"],correct:1},{id:5,question:"Koji instrument sviram?",answers:["Gitara","Klavir","Violina"],correct:0},{id:6,question:"Koji sport sam trenirao?",answers:["Odbojka","Rukomet","Košarka"],correct:2},{id:7,question:"Koji mi je omiljeni domaći bend?",answers:["Crvena jabuka","Bijelo dugme","Osvajači"],correct:2},{id:8,question:"Koja je moja omiljena hrana?",answers:["Karađorđeva","Plazma i mleko","Pica"],correct:1},{id:9,question:"Koje je moje omiljeno piće?",answers:["Koka kola","Fanta","Kokta"],correct:2},{id:10,question:"Koja je moja omiljena knjiga?",answers:["Alhemičar","1984","Gospodar prstenova"],correct:1}],N=()=>{const[g,d,h]=c(null),M=e=>{localStorage.setItem("results",JSON.stringify(e))},w=()=>{const e=localStorage.getItem("results");return e?JSON.parse(e):[]},[r,b,$]=c(600),[l,m,q]=c([]),[u,f]=c(i.map(()=>null)),[j,k]=c(null);q(e=>{const t=document.getElementById("show-results");t&&(e.length>0?(t.classList.remove("d-none"),t.onclick=()=>E()):t.classList.add("d-none"))});const B=e=>e.sort((t,s)=>t.correctAnswers===s.correctAnswers?t.time-s.time:s.correctAnswers-t.correctAnswers);$(e=>{if(document.getElementById("timer").innerText=`${Math.floor(e/60)<10?"0":""}${Math.floor(e/60)}:${e%60<10?"0":""}${e%60}`,e===0){console.log("time is 0");const t=u().filter(n=>n).length,s=prompt("Unesi ime:");m(B([...l(),{correctAnswers:t,time:e,name:s||"Nepoznati Junak"}]))}}),h(e=>{const t=document.getElementById("modal");if(e===null)return;if(!t){console.error("Modal element not found.");return}t.innerHTML="";const s=document.createElement("div");s.id="modal-content",s.innerHTML=`
      <div id="quiz-modal" class="p-5">
        <div id="quiz-modal-header">
          <div class="indicator-bar">
          ${u().map((o,L)=>`<span data-id=${L} class="indicator ${o===null?"unanswered":o?"correct":"incorrect"}"></span>`).join("")}
          </div>
          <div id="timer">${Math.floor(r()/60)<10?"0":""}${Math.floor(r()/60)}:${r()%60<10?"0":""}${r()%60}</div>
            <button id="close" class="btn btn-dark"/>
        </div>
        <div id="quiz-modal-body">
          <div id="quiz-modal-body-info">
            <h2>${i[e].question.toUpperCase()}</h2>
            <div class="d-flex flex-column">
              ${i[e].answers.map((o,L)=>`<button class="btn btn-primary py-4 border answer">${o.toUpperCase()}</button>`).join("")}
            </div>
            <button id="confirm" class="btn btn-dark py-4 border w-100 ">POTVRDI</button>
        </div>
      </div>
    `,t.appendChild(s),t.style.display="block";const n=document.getElementsByClassName("answer"),y=document.getElementById("confirm"),a=document.getElementById("close");a&&(a.onclick=p,a.innerHTML=`<img src="${C.src}" alt="Close Modal" style="width:32px; height:32px;"/>`),y&&(y.onclick=T);for(let o=0;o<n.length;o++)n[o].onclick=()=>z(o)});const I=()=>{const e=g();return e!==null?i[e]:null},p=()=>{const e=document.getElementById("show-results");e&&e.classList.remove("d-none"),d(null);const t=document.getElementById("modal");clearInterval(v),b(600),f(i.map(()=>null)),console.log("close"),t&&(t.style.display="none",t.innerHTML="")};let v;const A=()=>{d(0),m(w()),v=setInterval(()=>{if(r()===0){clearInterval(v),p();return}b(r()-1)},1e3)},T=()=>{const e=I(),t=j(),s=g();if(typeof t!="number"||s===null){alert("Odaberi prvo odgovor.");return}document.getElementsByClassName("selected")[0].classList.remove("selected"),e&&e.correct===t?(document.getElementsByClassName("answer")[t].classList.add("correct"),document.getElementsByClassName("indicator")[s].classList.remove("unanswered"),document.getElementsByClassName("indicator")[s].classList.add("correct")):(document.getElementsByClassName("answer")[t].classList.add("incorrect"),document.getElementsByClassName("indicator")[s].classList.remove("unanswered"),document.getElementsByClassName("indicator")[s].classList.add("incorrect"));const n=u().slice();n[s]=e?.correct===t,f(n),setTimeout(()=>{if(k(null),typeof s=="number"){if(s===i.length-1){const y=u().filter(o=>o).length,a=prompt("Unesi ime:");m(B([...l(),{correctAnswers:y,time:600-r(),name:a||"Nepoznati Junak"}])),M(l()),p(),clearInterval(v);return}d(s+1)}},1e3)},z=e=>{const t=j();t!==null&&document.getElementsByClassName("answer")[t].classList.remove("selected"),k(e),document.getElementsByClassName("answer")[e].classList.add("selected")},E=()=>{console.log("check");const e=document.getElementById("modal");if(!e){console.error("Modal element not found.");return}e.innerHTML="",e.style.display="block";const t=document.createElement("div");t.id="modal-content",t.innerHTML=`
      <div id="results-modal" class="p-5">
        <div class="p-4" id="results-modal-header">
          <div class="d-flex justify-content-between align-items-center">
            <h2 class="p-0 m-0">TOP 10 REZULTATA</h2>
            <button id="close-results" class="btn btn-transparent"/>
          </div>
        </div>
        <div class="p-4" id="results-modal-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Ime</th>
                <th>Broj Tačnih</th>
                <th>Vreme</th>
              </tr>
            </thead>
            <tbody>
              ${l().slice(0,10).map(n=>`<tr>
                      <td>${n.name}</td>
                      <td>${n.correctAnswers}</td>
                      <td>${Math.floor(n.time/60)}:${n.time%60}</td>
                    </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,e.appendChild(t),e.style.display="block";const s=document.getElementById("close-results");s&&(s.onclick=()=>{e.style.display="none",e.innerHTML=""},s.innerHTML=`<img src="${C.src}" alt="Close Modal" style="width:32px; height:32px;"/>`)},K=()=>m(w());return{activeIndex:g,activeQuiz:I,setActiveIndex:d,onShow:A,onClose:p,subscribeActiveIndex:h,played:l.length>0,onShowResults:E,getInitialResults:K}},H=N();export{H as quizHook};
