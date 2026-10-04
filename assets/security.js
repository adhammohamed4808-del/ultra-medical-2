/* ULTRA MEDICAL CENTER LLC — shared corrections. */
document.addEventListener("contextmenu",e=>e.preventDefault());
document.addEventListener("keydown",e=>{const k=e.key.toUpperCase();if(e.key==="F12"||(e.ctrlKey&&e.shiftKey&&["I","J","C"].includes(k))||(e.ctrlKey&&["U","S","P"].includes(k)))e.preventDefault()});

document.addEventListener("DOMContentLoaded",()=>{
  const phone="03 7625552",contactPhone="+971 3 762 5552",tel="tel:+97137625552",email="connect@umc-alain.ae";
  const has=(el,terms)=>terms.some(t=>(el.textContent||"").replace(/\s+/g," ").trim().toLowerCase().includes(t));
  const removeHeading=terms=>document.querySelectorAll("h1,h2,h3").forEach(h=>{if(has(h,terms)){const b=h.closest("section")||h.closest("article")||h.closest(".panel")||h.parentElement;if(b)b.remove()}});

  document.querySelectorAll(".doh-approval").forEach(e=>e.remove());
  document.querySelectorAll("a[href*='patients-visitors.html']").forEach(a=>{a.href="blogs.html";a.textContent="Blogs (Coming Soon)";a.classList.remove("active")});
  document.querySelectorAll("a[href*='health-packages.html'],a[href*='package-']").forEach(e=>e.remove());

  document.querySelectorAll("a[href^='tel:']").forEach(a=>a.href=tel);
  document.querySelectorAll("a[href^='mailto:']").forEach(a=>a.href="mailto:"+email);
  const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),nodes=[];while(w.nextNode())nodes.push(w.currentNode);
  nodes.forEach(n=>{n.nodeValue=n.nodeValue.replace(/\+971\s*3\s*884\s*2222/g,contactPhone).replace(/\+971\s*50\s*470\s*2948/g,contactPhone).replace(/03\s*884\s*2222/g,phone).replace(/[A-Z0-9._%+-]+@(?:ultramedicalcenter|ultra-medical-center|umc-alain)\.[A-Z.]+/gi,email)});

  document.querySelectorAll(".footer-links").forEach(nav=>{
    if(nav.querySelector("[data-careers-email]"))return;
    const careers=document.createElement("a");
    careers.href="mailto:info@umc-alain.ae?subject=Career%20Application%20-%20ULTRA%20MEDICAL%20CENTER%20LLC";
    careers.textContent="Careers";
    careers.setAttribute("data-careers-email","");
    nav.appendChild(careers);
  });

  document.querySelectorAll(".whatsapp-link,.chat-card,.chat-fab,.chat-panel,button[onclick*='openChat'],a[href*='wa.me']:not([data-official-whatsapp]),a[href*='whatsapp']:not([data-official-whatsapp])").forEach(e=>e.remove());
  removeHeading(["featured doctors","featured departments","health packages","download our app","download the app"]);
  const unavailable=["pre-approval","pre approval","billing enquiries","billing inquiries","payment processing","patient guide","visitor information"];
  document.querySelectorAll("a,button,.quick-card,.guide-card,.service-card,.side-card,.insurance-box").forEach(e=>{if(has(e,unavailable))e.remove()});

  document.querySelectorAll("a,button").forEach(c=>{
    const actionText=c.textContent.replace(/\s+/g," ").trim().toLowerCase();
    if(!has(c,["book appointment","book an appointment","book now","request appointment"])&&!/^book\b/.test(actionText))return;
    if(c.classList.contains("quick-card")){c.href=tel;c.removeAttribute("onclick");c.removeAttribute("aria-disabled");const title=c.querySelector("b"),description=c.querySelector("div span");if(title)title.textContent="Call Us";if(description)description.textContent=phone;return}
    if(c.tagName==="BUTTON"){const a=document.createElement("a");a.className=c.className;a.href=tel;a.textContent="Call "+phone;c.replaceWith(a)}
    else{c.href=tel;c.removeAttribute("onclick");c.removeAttribute("aria-disabled");c.removeAttribute("tabindex");c.classList.remove("is-disabled-link");c.textContent="Call "+phone}
  });

  const grid=document.querySelector(".doctors-grid");
  if(grid){
    let form=document.querySelector(".doctor-search");if(form){const clean=form.cloneNode(true);form.replaceWith(clean);form=clean;form.querySelectorAll(".filter-field").forEach((f,i)=>{if(i>0)f.remove()});form.querySelectorAll("button").forEach(b=>b.textContent="Search");const input=form.querySelector("input");if(input)input.placeholder="Search by doctor name"}
    document.querySelectorAll(".result-count,.sort-box,.specialty-heading span").forEach(e=>e.remove());
    const wrongAtef=document.getElementById("dr-atef-abdellatif");if(wrongAtef){wrongAtef.id="dr-ayman-alsayed";wrongAtef.querySelector("img").alt="Dr. Ayman Alsayed";wrongAtef.querySelector("h3").textContent="Dr. Ayman Alsayed"}
    const additions=[
      ["dr-atef-hassan","Dr. Atef Hassan","Ophthalmology","Ophthalmology","assets/doctor-atef-hassan.png"],
      ["dr-gesma","Dr. Gesma","Otolaryngology","ENT","assets/character-dr-gesma.png"],
      ["ms-youstina","Ms. Youstina","Physiotherapist","Physiotherapy","assets/physio-youstina.jpg"],
      ["ms-neli-ahmed","Ms. Neli Ahmed","Physiotherapist","Physiotherapy","assets/physio-neli.jpg"],
      ["mr-manickaraja","Mr. Manickaraja","Physiotherapist","Physiotherapy","assets/physio-manickaraja.jpg"],
      ["ms-sreemol-ashokan","Ms. Sreemol Ashokan","Physiotherapist","Physiotherapy","assets/physio-sreemol.jpg"],
      ["mr-siva","Mr. Siva","Physiotherapist","Physiotherapy","assets/physio-siva.jpg"]
    ];
    additions.forEach(d=>{if(document.getElementById(d[0]))return;const c=document.createElement("article");c.className="doctor-card";c.id=d[0];c.innerHTML='<div class="card-top"><img src="'+d[4]+'" alt="'+d[1]+'"></div><div class="doctor-body"><h3>'+d[1]+'</h3><div class="doctor-title">'+d[2]+'</div><div class="doctor-info"><span class="department-row">Department: '+d[3]+'</span><span>Languages: English &amp; Arabic</span><span>Experience: Clinical experience</span></div><div class="card-actions"><a class="btn btn-soft" href="#'+d[0]+'">View Doctor</a><a class="btn btn-red" href="'+tel+'">Call</a></div></div>';grid.appendChild(c)});
    const updatedPhotos={"dr-suha-badr":"assets/doctor-suha-badr.png","ms-neli-ahmed":"assets/physio-neli.jpg","ms-sreemol-ashokan":"assets/physio-sreemol.jpg"};Object.keys(updatedPhotos).forEach(id=>{const img=document.querySelector("#"+id+" img");if(img)img.src=updatedPhotos[id]});
    // Keep all ear, nose and throat doctors in ENT only, never in Dental.
    document.querySelectorAll(".doctor-card").forEach(c=>{
      const title=(c.querySelector(".doctor-title")?.textContent||"").toLowerCase();
      if(c.id==="dr-ahmed-shaker"||c.id==="dr-gesma"||title.includes("otolaryng")||title.includes("ent specialist")){
        const department=c.querySelector(".department-row");
        if(department)department.textContent="Department: ENT";
      }
    });
    document.querySelectorAll(".doctor-card").forEach(c=>{c.removeAttribute("data-availability");const info=c.querySelector(".doctor-info");if(info&&!has(info,["languages:"]))info.insertAdjacentHTML("beforeend","<span>Languages: English &amp; Arabic</span>");if(info&&!has(info,["experience:"]))info.insertAdjacentHTML("beforeend","<span>Experience: Clinical experience</span>");c.querySelectorAll("a,button").forEach(x=>{const label=x.textContent.trim().toLowerCase();if(label==="book"||label==="call"){x.textContent="Call "+phone;x.href=tel}})});
    const cards=Array.from(grid.querySelectorAll(".doctor-card"));
    const render=()=>{
      const input=form&&form.querySelector("input"),query=(input&&input.value||"").trim().toLowerCase();
      const requested=new URLSearchParams(location.search).get("specialty");
      grid.innerHTML="";
      const groups=new Map();
      cards.forEach(c=>{
        const name=(c.querySelector("h3")?.textContent||"").toLowerCase();
        const departmentText=c.querySelector(".department-row")?.textContent||"Department: Other";
        const department=departmentText.replace(/^Department:\s*/i,"").trim();
        const matchName=!query||name.includes(query);
        const requestedDepartment=(requested||"").toLowerCase().replace("dentistry","dental").replace("obstetrics & gynecology","gynecology").replace("general practice","general practitioner");
        const matchSpecialty=!requested||department.toLowerCase()===requestedDepartment;
        if(matchName&&matchSpecialty){if(!groups.has(department))groups.set(department,[]);groups.get(department).push(c)}
      });
      Array.from(groups.keys()).sort((a,b)=>a.localeCompare(b)).forEach(department=>{
        const heading=document.createElement("div");heading.className="specialty-heading";heading.innerHTML="<h3>"+department+"</h3>";grid.appendChild(heading);
        groups.get(department).forEach(c=>{c.style.display="";grid.appendChild(c)});
      });
      if(!groups.size){const empty=document.createElement("div");empty.className="doctors-empty";empty.textContent="No doctors match this name.";grid.appendChild(empty)}
    };
    if(form){form.addEventListener("submit",e=>{e.preventDefault();render()});form.querySelector("input")?.addEventListener("input",render)}render();
  }

  document.querySelectorAll(".speciality-card[data-specialty]").forEach(c=>{c.href="doctors.html?specialty="+encodeURIComponent(c.dataset.specialty)});
  document.querySelectorAll(".filter-chip").forEach(c=>{if(has(c,["supportive care"]))c.remove()});
  document.querySelectorAll(".home-insurance-track").forEach(e=>e.classList.add("umc-moving-logos"));

  const footer=document.querySelector(".site-footer");if(footer&&!document.querySelector(".footer-accreditations")){const badges=[["assets/badge-jawda-tasneef.jpeg","JAWDA Data Certification"],["assets/badge-iaf.jpeg","IAF Recognition Arrangement"],["assets/badge-scc-cb-ms.jpeg","SCC Accredited CB-MS"]],s=document.createElement("section");s.className="footer-accreditations";s.setAttribute("aria-label","Accreditations");s.innerHTML='<div class="container footer-accreditations__inner"><p class="footer-accreditations__title">Accreditations</p>'+badges.map(b=>'<div class="footer-accreditation"><img class="footer-accreditation__certificate" src="'+b[0]+'" alt="'+b[1]+'"><span class="footer-accreditation__text"><strong>'+b[1]+'</strong></span></div>').join("")+'</div>';footer.parentNode.insertBefore(s,footer)}
});
