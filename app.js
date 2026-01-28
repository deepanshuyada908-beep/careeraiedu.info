// app.js - CareerAI Buddy v2
// specific questions, stronger weights, negative weights, top-3 unique careers

const careers = {
  software_engineer:{
    title:"Software Engineer",
    short:"Write code, build apps & systems.",
    desc:"Develop software products: web, mobile, backend. Requires coding, problem solving.",
    path:["12th: PCM/Computer Science (recommended)","B.Tech/B.E. (CS) or BCA/B.Sc CS","Internships, build projects, open-source contributions","Optional: M.Tech or specialized certifications"],
    exams:["JEE Main / JEE Advanced (for IITs)","State CETs, or direct college admissions"],
    colleges:["IITs, NITs, IIITs, BITS Pilani, top private colleges"],
    salary:"₹3–20 LPA",
    demand:"Very high — software roles continue to grow across industries",
    quiz:[{q:"Which is a frontend language?", a:"html"}, {q:"Which language is popular for backend? (example)", a:"python"}]
  },
  data_scientist:{
    title:"Data Scientist",
    short:"Analyze data, build predictive models.",
    desc:"Use stats and ML to extract insights and predictions from data.",
    path:["12th: Maths/PCM","B.Tech/B.Sc in CS/Maths/Stats","Learn Python/R, ML libraries, internships","Optional: M.Tech/MS or specialized courses"],
    exams:["University entrance tests (varies)"],
    colleges:["IISc, IITs, top universities"],
    salary:"₹4–30 LPA",
    demand:"High — across finance, tech, healthcare, startups",
    quiz:[{q:"Which language is common for data science?", a:"python"}]
  },
  doctor:{
    title:"Doctor (MBBS)",
    short:"Clinical physician treating patients.",
    desc:"Study medicine, diagnose & treat patients; requires MBBS & licensing.",
    path:["12th: PCB","NEET-UG → MBBS (5.5 years including internship)","Postgraduate specialization (MD/MS) optional"],
    exams:["NEET-UG"],
    colleges:["AIIMS, top govt & private medical colleges"],
    salary:"₹4–25 LPA",
    demand:"Consistently high; healthcare always in demand",
    quiz:[{q:"Which organ pumps blood?", a:"heart"}]
  },
  nurse:{
    title:"Nurse / Paramedic",
    short:"Patient care & emergency support.",
    desc:"Care for patients, assist doctors, manage wards and emergency care.",
    path:["12th: PCB preferred","Diploma/degree in Nursing (GNM/B.Sc Nursing)","Clinical internships & licensing"],
    exams:["State nursing council exams"],
    colleges:["Nursing colleges, medical colleges"],
    salary:"₹2–8 LPA",
    demand:"High — especially in hospitals and clinics",
    quiz:[{q:"Who provides bedside care in hospitals?", a:"nurse"}]
  },
  cyber_security:{
    title:"Cyber Security Specialist",
    short:"Protect systems & data from attacks.",
    desc:"Identify vulnerabilities, defend systems, conduct security audits.",
    path:["12th: CS/PCM helpful","B.Tech/B.Sc in CS/IT + security courses","Certifications (CEH, CompTIA) & internships"],
    exams:["Certifications (CEH, CompTIA Security+, OSCP)"],
    colleges:["Tech colleges & certification providers"],
    salary:"₹4–20 LPA",
    demand:"Growing fast as cyber threats increase",
    quiz:[{q:"What is phishing?", a:"fraud"}]
  },
  mechanical_engineer:{
    title:"Mechanical Engineer",
    short:"Design machines & mechanical systems.",
    desc:"Work on vehicles, manufacturing, energy systems and product design.",
    path:["12th: PCM","B.Tech/B.E (Mechanical)","Internships in industry; CAD tools"],
    exams:["JEE Main / State CETs"],
    colleges:["IITs, NITs, top engineering colleges"],
    salary:"₹3–12 LPA",
    demand:"Stable across manufacturing & automotive",
    quiz:[{q:"Unit of force is?", a:"newton"}]
  },
  civil_engineer:{
    title:"Civil Engineer",
    short:"Design & build infrastructure.",
    desc:"Plan, design, and supervise construction of roads, buildings and bridges.",
    path:["12th: PCM","B.Tech/B.E (Civil)","Site internships, structural design training"],
    exams:["JEE Main / State CETs"],
    colleges:["IITs, NITs, top civil colleges"],
    salary:"₹3–12 LPA",
    demand:"Steady — infrastructure projects drive need",
    quiz:[{q:"What material binds aggregates in concrete?", a:"cement"}]
  },
  lawyer:{
    title:"Lawyer (LLB)",
    short:"Legal practice, counsel & advocacy.",
    desc:"Represent clients, advise in legal matters, litigation and public law work.",
    path:["12th: any stream","CLAT for 5-year integrated LLB or LLB after graduation","Internships with law firms; bar enrollment"],
    exams:["CLAT, AILET, University law exams"],
    colleges:["NLUs and law schools"],
    salary:"₹3–20 LPA",
    demand:"Strong — corporate, litigation, compliance",
    quiz:[{q:"Who prosecutes a criminal case on behalf of the state?", a:"public prosecutor"}]
  },
  accountant:{
    title:"Chartered Accountant (CA)",
    short:"Accounting, auditing and taxation specialist.",
    desc:"Manage financial records, audits, tax planning; CA is a professional qualification.",
    path:["12th: Commerce helpful","CA Foundation → Intermediate → Articleship → Final","OR B.Com + CA pathway"],
    exams:["ICAI (CA) exams"],
    colleges:["Commerce colleges, ICAI"],
    salary:"₹3–15 LPA",
    demand:"High in finance & corporate roles",
    quiz:[{q:"GST stands for?", a:"goods and services tax"}]
  },
  investment_banker:{
    title:"Investment Banker",
    short:"Corporate finance, M&A & capital markets.",
    desc:"Advise on deals, raise capital, manageIPO and mergers.",
    path:["12th: Commerce/Maths helpful","B.Com/BBA/B.E + finance internships","MBA (finance) often helpful"],
    exams:["University admissions (varies), CAT for top MBA"],
    colleges:["IIMs, top B-schools and finance programs"],
    salary:"₹6–50 LPA",
    demand:"High in finance hubs & top institutions",
    quiz:[{q:"IPO stands for?", a:"initial public offering"}]
  },
  psychologist:{
    title:"Psychologist",
    short:"Mental health, counselling & research.",
    desc:"Assess behaviour, provide counselling and run research projects.",
    path:["12th: any stream","B.A/B.Sc Psychology → M.A/M.Sc → M.Phil/PhD (clinical)","Clinical training & internships"],
    exams:["University entrance tests"],
    colleges:["Psychology departments at universities"],
    salary:"₹2–10 LPA",
    demand:"Growing — mental health awareness increasing",
    quiz:[{q:"What studies the mind and behaviour?", a:"psychology"}]
  },
  graphic_designer:{
    title:"Graphic Designer",
    short:"Visual design, branding & advertising.",
    desc:"Create visual content for digital & print media; requires portfolio.",
    path:["12th any stream","B.Des/Diploma or online bootcamps","Build portfolio and freelance/projects"],
    exams:["NID/NIFT (for design degrees)"],
    colleges:["NID, design institutes"],
    salary:"₹2–8 LPA",
    demand:"High in digital marketing, media & startups",
    quiz:[{q:"Which color with blue makes green?", a:"yellow"}]
  },
  digital_marketer:{
    title:"Digital Marketer",
    short:"Promote brands online using SEO/ads/content.",
    desc:"Plan campaigns, analyze metrics and grow online presence.",
    path:["12th any stream","Certifications (Google/Meta), internships","Build case studies & campaigns"],
    exams:["No formal exam; certifications matter"],
    colleges:["Marketing academies, online courses"],
    salary:"₹2–12 LPA",
    demand:"High — all companies need digital presence",
    quiz:[{q:"What does SEO help improve?", a:"search"}]
  },
  entrepreneur:{
    title:"Entrepreneur",
    short:"Start & run your own business.",
    desc:"Create a product/service, build a team, raise funds and scale.",
    path:["12th any stream","Learn business basics, start small","Join incubators/mentorship","Scale with funding and customers"],
    exams:["No formal exam"],
    colleges:["Business schools optional; practical experience matters"],
    salary:"Highly variable",
    demand:"Opportunities exist but risky",
    quiz:[{q:"MVP in startups stands for?", a:"minimum viable product"}]
  },
  army_officer:{
    title:"Army Officer (NDA / OTA)",
    short:"Serve in Indian Armed Forces as an officer.",
    desc:"Lead troops, serve nation; requires discipline & physical fitness.",
    path:["12th: any stream (for NDA), pass NDA exam","OR graduate + OTA (via CDS)","Training at academy (IMA/OTA)"],
    exams:["NDA, CDS"],
    colleges:["National Defence Academy, Indian Military Academy"],
    salary:"₹6–18 LPA (including perks)","demand":"Government sector; steady need",
    quiz:[{q:"Which exam selects 12th-pass candidates for the NDA?", a:"nda"}]
  }
};

// 12 specific multiple-choice questions
const questions = [
  {id:'q1', q:'Which environment do you enjoy most?', opts:['Hospital / Clinic','Office / Desk','Lab / Research','Workshop / Field','Studio / Creative space']},
  {id:'q2', q:'Which task sounds most fun to you?', opts:['Coding / Building apps','Helping patients / care','Designing visuals','Working with machines','Analysing numbers & reports']},
  {id:'q3', q:'Which skill comes naturally to you?', opts:['Logical thinking','Empathy / communication','Creativity','Mechanical / hands-on','Data & statistics']},
  {id:'q4', q:'Do you like working with people one-to-one (counselling/teaching)?', opts:['Yes, a lot','Sometimes','Prefer solo work']},
  {id:'q5', q:'Do you enjoy solving puzzles and algorithms?', opts:['Yes','Sometimes','No']},
  {id:'q6', q:'Are you comfortable memorizing detailed theory?', opts:['Yes','Somewhat','No']},
  {id:'q7', q:'Do you prefer risk + high reward or steady predictable career?', opts:['High risk / high reward','Steady & predictable','Flexible / depends']},
  {id:'q8', q:'Do you enjoy leading teams and taking responsibility?', opts:['Yes','Sometimes','No']},
  {id:'q9', q:'Do you prefer outdoor / field work or indoor work?', opts:['Outdoor / field','Indoor','Both']},
  {id:'q10', q:'Would you like to start your own venture someday?', opts:['Yes','Maybe','No']},
  {id:'q11', q:'Do you enjoy working extensively with computers & code?', opts:['Yes','Sometimes','No']},
  {id:'q12', q:'Which school subject did you like most?', opts:['Mathematics','Biology','Computer Science','Art / Design','Commerce']},
];

// weight matrix: positive and negative weights to force differentiation
// sparse map: careerKey -> questionId -> option -> weight
const weights = {
  software_engineer: {
    q1: {'Office / Desk':2, 'Lab / Research':1, 'Studio / Creative space':0, 'Hospital / Clinic':-2},
    q2: {'Coding / Building apps':4},
    q3: {'Logical thinking':3, 'Data & statistics':1},
    q5: {'Yes':2},
    q11: {'Yes':3, 'Sometimes':1}
  },
  data_scientist: {
    q1: {'Lab / Research':2, 'Office / Desk':1},
    q2: {'Analysing numbers & reports':4},
    q3: {'Data & statistics':3},
    q11: {'Yes':2},
    q5: {'Yes':1}
  },
  doctor: {
    q1: {'Hospital / Clinic':4},
    q2: {'Helping patients / care':4},
    q3: {'Empathy / communication':2},
    q6: {'Yes':2},
    q12: {'Biology':3}
  },
  nurse: {
    q1: {'Hospital / Clinic':3},
    q2: {'Helping patients / care':3},
    q4: {'Yes, a lot':2},
    q12: {'Biology':2}
  },
  cyber_security: {
    q1: {'Office / Desk':2},
    q2: {'Coding / Building apps':2},
    q3: {'Logical thinking':2},
    q11: {'Yes':2},
    q5: {'Yes':1}
  },
  mechanical_engineer: {
    q1: {'Workshop / Field':3},
    q2: {'Working with machines':4},
    q3: {'Mechanical / hands-on':3},
    q9: {'Outdoor / field':1},
    q12: {'Mathematics':1}
  },
  civil_engineer: {
    q1: {'Workshop / Field':2, 'Outdoor / field':1},
    q2: {'Working with machines':2},
    q3: {'Mechanical / hands-on':2},
    q9: {'Outdoor / field':2}
  },
  lawyer: {
    q2: {'Analysing numbers & reports':1, 'Helping patients / care':0},
    q3: {'Empathy / communication':2},
    q4: {'Yes, a lot':1},
    q8: {'Yes':2},
    q12: {'Commerce':1}
  },
  accountant: {
    q2: {'Analysing numbers & reports':3},
    q3: {'Data & statistics':2},
    q6: {'Yes':1},
    q12: {'Commerce':3}
  },
  investment_banker: {
    q2: {'Analysing numbers & reports':3},
    q7: {'High risk / high reward':3},
    q8: {'Yes':1},
    q12: {'Mathematics':1}
  },
  psychologist: {
    q1: {'Hospital / Clinic':1, 'Studio / Creative space':0},
    q3: {'Empathy / communication':3},
    q4: {'Yes, a lot':2},
    q12: {'Biology':1}
  },
  graphic_designer: {
    q1: {'Studio / Creative space':4},
    q2: {'Designing visuals':4},
    q3: {'Creativity':3},
    q5: {'No':-1},
    q12: {'Art / Design':3}
  },
  digital_marketer: {
    q2: {'Designing visuals':2, 'Analysing numbers & reports':1},
    q3: {'Creativity':2, 'Empathy / communication':1},
    q10: {'Yes':1}
  },
  entrepreneur: {
    q7: {'High risk / high reward':3},
    q10: {'Yes':4},
    q8: {'Yes':2}
  },
  army_officer: {
    q1: {'Workshop / Field':1, 'Outdoor / field':2},
    q8: {'Yes':3},
    q9: {'Outdoor / field':2},
    q12: {'Mathematics':1}
  }
};

// utility helpers
const el = id => document.getElementById(id);
const show = id => { ['page-home','page-test','page-results','page-career','page-quiz'].forEach(p=>el(p).classList.add('hidden')); el(id).classList.remove('hidden'); window.scrollTo(0,0); };

let state = {answers:{}, index:0, scores:{}, activeCareer:null, quizKey:null};
const total = questions.length;

// init UI events
document.addEventListener('DOMContentLoaded', ()=>{
  el('start-btn').addEventListener('click', startTest);
  el('nav-test').addEventListener('click', startTest);
  el('nav-home').addEventListener('click', ()=>show('page-home'));
  el('nav-catalog').addEventListener('click', openCatalog);
  el('nav-saved').addEventListener('click', openSaved);
  el('prev-btn').addEventListener('click', prevQ);
  el('next-btn').addEventListener('click', nextQ);
  el('save-result').addEventListener('click', saveResult);
  el('retake').addEventListener('click', startTest);
  el('back-results').addEventListener('click', ()=>show('page-results'));
  el('start-quiz').addEventListener('click', startCareerQuiz);
  el('quiz-back').addEventListener('click', ()=>show('page-career'));
  el('quiz-submit').addEventListener('click', submitQuiz);
  resetState();
  show('page-home');
});

// reset state
function resetState(){
  state = {answers:{}, index:0, scores:{}, activeCareer:null, quizKey:null};
  Object.keys(careers).forEach(k => state.scores[k] = 0);
}

// render question
function renderQuestion(i){
  state.index = i;
  const q = questions[i];
  const area = el('question-area');
  area.innerHTML = `<label><strong>Q${i+1}.</strong> ${q.q}</label>`;
  const sel = document.createElement('select'); sel.id = q.id;
  q.opts.forEach(o => { const opt = document.createElement('option'); opt.value = o; opt.text = o; sel.appendChild(opt); });
  if(state.answers[q.id]) sel.value = state.answers[q.id];
  area.appendChild(sel);
  el('progress-text').innerText = (i+1) + ' / ' + total;
  const pct = Math.round((i/total)*100); el('progress-bar').style.width = pct + '%';
  el('prev-btn').style.display = i>0 ? 'inline-block' : 'none';
  el('next-btn').innerText = i === total-1 ? 'Finish & Show Matches' : 'Next';
}

// navigation
function startTest(){
  resetState();
  renderQuestion(0);
  show('page-test');
}

function nextQ(){
  const q = questions[state.index];
  const val = document.getElementById(q.id).value;
  state.answers[q.id] = val;
  if(state.index < total-1) renderQuestion(state.index+1);
  else computeResults();
}

function prevQ(){
  const q = questions[state.index];
  const selVal = document.getElementById(q.id).value;
  state.answers[q.id] = selVal;
  if(state.index>0) renderQuestion(state.index-1);
}

// compute results with weights, penalties, tie-breaks
function computeResults(){
  // zero
  Object.keys(state.scores).forEach(k=>state.scores[k]=0);
  // apply weights
  for(const q of questions){
    const ans = state.answers[q.id];
    if(!ans) continue;
    for(const careerKey in state.scores){
      const wmap = (weights[careerKey]||{})[q.id];
      if(wmap){
        const w = wmap[ans];
        if(w) state.scores[careerKey] += w;
      }
    }
  }
  // apply tie-break boost using specific strong answers
  // Example: if user chose 'Coding / Building apps' strongly, boost software fields further
  if(state.answers['q2'] === 'Coding / Building apps') {
    state.scores['software_engineer'] += 1;
    state.scores['cyber_security'] += 1;
  }
  if(state.answers['q10'] === 'Yes') {
    // entrepreneur interest increases entrepreneur score
    state.scores['entrepreneur'] += 2;
  }
  // fallback heuristics if many zeros
  const allZero = Object.values(state.scores).every(v=>v===0);
  if(allZero){
    const subj = state.answers['q12'];
    if(subj === 'Mathematics' || subj === 'Computer Science'){ state.scores['software_engineer'] += 3; }
    if(subj === 'Biology'){ state.scores['doctor'] += 3; state.scores['nurse'] += 2; }
    if(subj === 'Art / Design'){ state.scores['graphic_designer'] += 3; }
    if(subj === 'Commerce'){ state.scores['accountant'] += 3; state.scores['investment_banker'] += 2; }
  }

  // create sorted list and ensure top 3 distinct and varied
  const sorted = Object.keys(state.scores).map(k=>({k,score:state.scores[k]})).sort((a,b)=>b.score-a.score);
  // take top but ensure they are not identical in role type by preferring variety:
  const selected = [];
  const usedCategories = new Set();
  const categoryOf = k => {
    if(['software_engineer','data_scientist','cyber_security'].includes(k)) return 'tech';
    if(['doctor','nurse','psychologist'].includes(k)) return 'health';
    if(['mechanical_engineer','civil_engineer'].includes(k)) return 'engineering';
    if(['graphic_designer','digital_marketer'].includes(k)) return 'creative';
    if(['accountant','investment_banker'].includes(k)) return 'finance';
    if(['lawyer'].includes(k)) return 'law';
    if(['entrepreneur','army_officer'].includes(k)) return 'other';
    return 'other';
  };
  for(const s of sorted){
    const cat = categoryOf(s.k);
    if(selected.length < 3){
      if(!usedCategories.has(cat) || selected.length < 2){
        selected.push(s);
        usedCategories.add(cat);
      }
    } else break;
  }
  // if not enough variety, just fill top-3
  if(selected.length < 3) selected.push(...sorted.slice(selected.length, 3));

  showResults(selected.slice(0,3));
}

function showResults(list){
  const container = el('results-list');
  container.innerHTML = '';
  list.forEach(item=>{
    const k = item.k;
    const c = careers[k];
    const row = document.createElement('div');
    row.className = 'career-row';
    row.innerHTML = `<div><strong>${c.title}</strong><div class="small">${c.short}</div></div>
                     <div style="text-align:right">
                       <div class="small">Score: ${item.score}</div>
                       <div style="margin-top:8px"><button class="primary" data-key="${k}">View Details</button></div>
                     </div>`;
    container.appendChild(row);
    row.querySelector('button').addEventListener('click', ()=>openCareer(k));
  });
  // answers summary
  const answersList = Object.keys(state.answers).map(k=>{
    const q = questions.find(x=>x.id===k);
    return `<div><strong>${q.q}</strong>: ${state.answers[k]}</div>`;
  }).join('');
  el('answers-list').innerHTML = answersList || '<em>No answers recorded</em>';
  el('answers-review').classList.remove('hidden');
  show('page-results');
}

// open career detail
function openCareer(key){
  const data = careers[key];
  if(!data) return;
  el('career-title').innerText = data.title;
  el('career-desc').innerText = data.desc;
  el('career-path').innerHTML = ''; (data.path||[]).forEach(s => { const li = document.createElement('li'); li.innerText = s; el('career-path').appendChild(li); });
  el('career-exams').innerHTML = ''; (data.exams||[]).forEach(e => { const li = document.createElement('li'); li.innerHTML = e; el('career-exams').appendChild(li); });
  el('career-colleges').innerHTML = ''; (data.colleges||[]).forEach(c => { const li = document.createElement('li'); li.innerText = c; el('career-colleges').appendChild(li); });
  el('career-salary').innerText = data.salary || 'Varies';
  el('career-demand').innerText = data.demand || 'Stable';
  state.activeCareer = key;
  show('page-career');
}

// quiz functions
function startCareerQuiz(){
  const key = state.activeCareer;
  if(!key) { alert('Open a career to take its mini-quiz.'); return; }
  const qlist = (careers[key].quiz || []);
  el('quiz-area').innerHTML = '';
  qlist.forEach((q,i) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `<div style="font-weight:700;margin-top:10px">Q${i+1}. ${q.q}</div><input id="quiz-a-${i}" type="text" placeholder="Short answer">`;
    el('quiz-area').appendChild(wrapper);
  });
  el('quiz-result').innerHTML = '';
  state.quizKey = key;
  show('page-quiz');
}

function submitQuiz(){
  const key = state.quizKey;
  if(!key) return;
  const qlist = (careers[key].quiz || []);
  let score = 0;
  const answersOut = [];
  qlist.forEach((q,i) => {
    const value = (document.getElementById('quiz-a-'+i)?.value || '').trim().toLowerCase();
    const expected = (q.a||'').toLowerCase();
    const correct = expected && value && value.indexOf(expected) !== -1;
    if(correct) score++;
    answersOut.push({q: q.q, given: value || '<blank>', expected: q.a, correct});
  });
  el('quiz-result').innerHTML = `<div><strong>Your score:</strong> ${score} / ${qlist.length}</div>
    <div style="margin-top:8px"><strong>Answers:</strong><ol>${answersOut.map(a=>`<li><b>Q:</b> ${a.q}<br><b>Your:</b> ${a.given}<br><b>Expected:</b> ${a.expected}</li>`).join('')}</ol></div>`;
}

// save / load
function saveResult(){
  const payload = {timestamp: Date.now(), answers: state.answers, scores: state.scores};
  localStorage.setItem('careerai_saved_v2', JSON.stringify(payload));
  alert('Result saved locally.');
}
function openSaved(){
  const raw = localStorage.getItem('careerai_saved_v2');
  if(!raw){ alert('No saved result found'); return; }
  const obj = JSON.parse(raw);
  const sorted = Object.keys(obj.scores || {}).map(k=>({k,score:obj.scores[k] || 0})).sort((a,b)=>b.score-a.score);
  if(sorted.length) {
    // show top three from saved
    const top = sorted.slice(0,3);
    showResults(top);
  } else alert('Saved data invalid.');
}

// catalog: list all careers and allow open
function openCatalog(){
  el('career-title').innerText = 'Career Catalog';
  el('career-desc').innerText = 'Browse all career choices below. Click Open to view detailed path.';
  el('career-path').innerHTML = '';
  const container = document.createElement('div');
  Object.keys(careers).forEach(k=>{
    const c = careers[k];
    const line = document.createElement('div');
    line.style.margin = '8px 0';
    line.innerHTML = `<strong>${c.title}</strong> — <span class="small">${c.short}</span> <button class="ghost" data-key="${k}" style="margin-left:8px">Open</button>`;
    container.appendChild(line);
  });
  el('career-path').appendChild(container);
  show('page-career');
  document.querySelectorAll('#career-path button').forEach(b=>b.addEventListener('click', ()=>openCareer(b.dataset.key)));
}
