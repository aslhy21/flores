const canvas=document.getElementById("estrellas"),ctx=canvas.getContext("2d");
let w,h,stars=[];
function resize(){w=canvas.width=innerWidth;h=canvas.height=innerHeight;stars=Array.from({length:260},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.8+.2,a:Math.random(),s:Math.random()*.018+.004}))}
function draw(){ctx.clearRect(0,0,w,h);for(const s of stars){s.a+=s.s;if(s.a>1||s.a<.15)s.s*=-1;ctx.beginPath();ctx.fillStyle=`rgba(255,240,90,${s.a})`;ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill()}requestAnimationFrame(draw)}
addEventListener("resize",resize);resize();draw();

const modal=document.getElementById("modal"),titulo=document.getElementById("titulo"),mensaje=document.getElementById("mensaje");
function abrir(t="Mi amor 💛",m="Estas flores amarillas son como tú: brillantes, radiantes y llenas de alegría."){titulo.textContent=t;mensaje.textContent=m;modal.classList.add("on");explosion()}
function cerrar(){modal.classList.remove("on")}
document.querySelectorAll(".flor").forEach(f=>f.onclick=()=>abrir(f.dataset.titulo,f.dataset.msg));
document.getElementById("cartaBtn").onclick=()=>abrir();
document.getElementById("cerrar").onclick=cerrar;document.getElementById("cerrar2").onclick=cerrar;
modal.onclick=e=>{if(e.target===modal)cerrar()};

const lluvia=document.getElementById("lluvia");
function particula(extra=false){let p=document.createElement("span");p.className="particula";p.textContent=(extra?["🌻","🌼","💛","✨"]:["🌼","✨","💛"])[Math.floor(Math.random()*(extra?4:3))];p.style.left=Math.random()*100+"vw";p.style.fontSize=(10+Math.random()*18)+"px";p.style.setProperty("--x",(-120+Math.random()*240)+"px");let d=5+Math.random()*7;p.style.animationDuration=d+"s";lluvia.appendChild(p);setTimeout(()=>p.remove(),d*1000)}
setInterval(()=>particula(),330);
function explosion(){for(let i=0;i<45;i++)setTimeout(()=>particula(true),i*35)}