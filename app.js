(() => {
  "use strict";
  const STORE = { favorites: "everydaykit-favorites-v1", recent: "everydaykit-recent-v1", theme: "everydaykit-theme-v1" };
  const categories = [
    { id:"productivity", name:"Productivity", icon:"◷", description:"Focus your time and make small tasks easier." },
    { id:"text-tools", name:"Text tools", icon:"Aa", description:"Write, count, clean up and transform text." },
    { id:"developer-tools", name:"Developer tools", icon:"⌘", description:"Format data and encode values in your browser." },
    { id:"image-tools", name:"Image tools", icon:"▧", description:"Resize, convert and prepare images locally." },
    { id:"calculators", name:"Calculators", icon:"±", description:"Quick answers for numbers, dates and daily life." },
    { id:"generators", name:"Generators", icon:"✳", description:"Create secure strings, IDs and useful samples." },
    { id:"conversion-tools", name:"Conversion tools", icon:"⇄", description:"Move between units, colors and common formats." },
    { id:"education", name:"Education", icon:"⌂", description:"Friendly guides to practical digital topics." },
    { id:"everyday-utilities", name:"Everyday utilities", icon:"✦", description:"Handy tools for the little things in life." }
  ];
  const tools = [
    ["qr-code-generator","QR Code Generator","Turn a link or short message into a scannable QR code.","Generators","▦"],
    ["password-generator","Password Generator","Create a strong random password with options you control.","Generators","♢"],
    ["word-counter","Word Counter","Count words, characters, sentences and reading time.","Text tools","Aa"],
    ["character-counter","Character Counter","Check characters with or without spaces.","Text tools","#"],
    ["text-case-converter","Text Case Converter","Switch text between common capitalization styles.","Text tools","⇧"],
    ["text-formatter","Text Formatter","Trim lines, remove duplicates and tidy pasted text.","Text tools","☷"],
    ["json-formatter","JSON Formatter","Format JSON so its structure is easy to read.","Developer tools","{ }"],
    ["json-validator","JSON Validator","Check JSON syntax and locate parsing errors.","Developer tools","✓"],
    ["base64-encoder-decoder","Base64 Encoder / Decoder","Encode or decode Base64 text with Unicode support.","Developer tools","64"],
    ["url-encoder-decoder","URL Encoder / Decoder","Safely encode or decode text for a URL.","Developer tools","↗"],
    ["color-picker","Color Picker","Choose a color and copy its HEX, RGB or HSL value.","Conversion tools","◉"],
    ["color-converter","Color Converter","Convert color values between HEX, RGB and HSL.","Conversion tools","◌"],
    ["unit-converter","Unit Converter","Convert common length, weight and temperature units.","Conversion tools","⇄"],
    ["percentage-calculator","Percentage Calculator","Find a percentage, change or percentage difference.","Calculators","%"],
    ["age-calculator","Age Calculator","Calculate an age in years, months and days.","Calculators","🎂"],
    ["date-calculator","Date Calculator","Add days to a date or count days between two dates.","Calculators","▣"],
    ["bmi-calculator","BMI Calculator","Estimate body mass index from height and weight.","Calculators","⚖"],
    ["calculator","Calculator","A handy calculator for everyday arithmetic.","Calculators","＋"],
    ["stopwatch","Stopwatch","Start, pause and reset a precise lap-friendly stopwatch.","Productivity","◴"],
    ["countdown-timer","Countdown Timer","Set a timer and get an alert when it finishes.","Productivity","⏱"],
    ["random-number-generator","Random Number Generator","Pick an unbiased integer inside a range.","Generators","⁙"],
    ["random-name-picker","Random Name Picker","Choose a name from a list, with optional draw without replacement.","Everyday utilities","♙"],
    ["lorem-ipsum-generator","Lorem Ipsum Generator","Create placeholder copy by paragraphs, sentences or words.","Generators","¶"],
    ["uuid-generator","UUID Generator","Generate standards-shaped random UUID v4 identifiers.","Developer tools","⠿"],
    ["image-resizer","Image Resizer","Resize an image in your browser and download the result.","Image tools","↗"],
    ["image-compressor","Image Compressor","Reduce image file size with adjustable output quality.","Image tools","⇣"],
    ["image-converter","Image Converter","Convert an image to PNG, JPEG or WebP on your device.","Image tools","▧"],
    ["image-cropper","Image Cropper","Crop an image by entering a precise rectangle.","Image tools","⌗"]
  ].map(([id,name,description,category,icon]) => ({id,name,description,category,icon}));
  const guides = [
    {id:"programming",title:"Programming, explained simply",category:"Digital foundations",icon:"⌘",summary:"Learn how instructions, data and logic combine to make software work.",body:["Programming is the practice of writing precise instructions for a computer. A program reads input, follows rules and produces an output. You can think of it as a recipe: the order and clarity of each step matter.","Most programs are built from a few recurring ideas: values hold information, conditions choose a path, loops repeat work, and functions package steps for reuse. You do not need to memorize everything before building something small.","A good first project solves a real tiny problem: rename a batch of files, calculate a total, or make a page react to a button. Build one feature at a time, run it often, and use errors as clues."]},
    {id:"artificial-intelligence",title:"A practical introduction to AI",category:"Emerging technology",icon:"✧",summary:"Understand what AI can do, where it can be wrong, and how to use it thoughtfully.",body:["Artificial intelligence is a broad name for computer systems that perform tasks associated with human judgment, such as recognizing patterns, translating language or generating text. Different systems learn or follow rules in different ways.","Generative AI predicts likely pieces of content from patterns in its training data. It can help brainstorm, summarize or explain, but it can also state incorrect details confidently. Treat important answers as a starting point and verify them with reliable sources.","Give AI a clear goal, useful context and the format you want. Avoid sharing secrets or personal data unless you understand the service's privacy terms. Human review remains valuable, especially for decisions that affect people."]},
    {id:"cybersecurity",title:"Everyday cybersecurity habits",category:"Safety & privacy",icon:"⬡",summary:"Simple steps that make accounts and devices harder to compromise.",body:["Cybersecurity is the work of protecting devices, accounts and information from misuse. Many common attacks try to trick a person into opening a link, sharing a password or installing something unsafe.","Use a different password for each important account and store them in a reputable password manager. Turn on multi-factor authentication where available. Keep your browser and devices updated, and pause before following unexpected links or payment requests.","Back up important files, lock your devices and review app permissions from time to time. No single step prevents every attack, but several small habits make a meaningful difference."]},
    {id:"web-development",title:"How websites are built",category:"Build for the web",icon:"▤",summary:"See how HTML, CSS and JavaScript work together in a modern web page.",body:["A website starts with HTML, which describes the meaning and structure of its content. CSS controls appearance and layout. JavaScript adds behavior, such as opening a menu or updating a result without reloading the page.","A browser downloads these files, interprets them and paints the page on screen. A server may also store data or provide services, but many useful interactions can run directly in the browser.","Start with semantic HTML and a small responsive layout. Add behavior only where it helps, check the keyboard path as well as the mouse path, and test at more than one screen width."]},
    {id:"python",title:"Your first steps with Python",category:"Programming languages",icon:"🐍",summary:"A clear map of Python basics and a practical first learning loop.",body:["Python is a general-purpose programming language known for readable syntax. It is used for automation, data work, web services, education and many other tasks.","Begin with variables, strings, numbers, lists, dictionaries, conditions, loops and functions. A few lines that transform a list or calculate a value can teach more than a long tutorial watched passively.","Write a small script, run it, and change one thing at a time. When an error appears, read the final line first, find the named file and line, then inspect the values around the problem."]},
    {id:"javascript",title:"JavaScript in the browser",category:"Programming languages",icon:"JS",summary:"Learn how JavaScript makes websites interactive and responds to user input.",body:["JavaScript lets a webpage respond to events, work with data and update what the visitor sees. In a browser it can validate a form, filter a list or draw onto a canvas.","Useful early concepts include variables, arrays, objects, functions, conditions and event listeners. Browser APIs such as localStorage can keep small preferences on the current device.","Keep user input separate from HTML markup, label controls clearly and handle errors in a way that helps the person recover. Build one interaction, test it with a keyboard, and then add the next."]},
    {id:"computer-science",title:"Computer science beyond code",category:"Digital foundations",icon:"◫",summary:"A beginner-friendly look at algorithms, data and how computers represent information.",body:["Computer science studies computation: how information is represented, transformed and communicated. Coding is one practical way to express those ideas, but the field also covers algorithms, networks, hardware and human-centered design.","An algorithm is a repeatable method for solving a problem. Two algorithms can produce the same answer while using different amounts of time or memory, so efficiency matters as data grows.","Computers represent information with bits. Groups of bits can encode numbers, letters, colors, sound or instructions when both sides agree on a format. Clear formats help software exchange data reliably."]},
    {id:"productivity",title:"Build a calmer digital workflow",category:"Work & study",icon:"◷",summary:"Use small routines and simple tools to reduce friction in everyday work.",body:["A digital workflow is the sequence of steps you use to capture, organize and finish work. The best workflow is not the one with the most apps; it is the one you can keep using.","Choose one trusted place to capture tasks, decide what matters next, and group similar small jobs together. A short review at the end of the day helps close loops and prepare for tomorrow.","Protect focus by turning off nonessential notifications for a set period. Leave a clear next action when you pause a task, so restarting takes less effort."]},
    {id:"digital-skills",title:"Digital skills for everyday life",category:"Work & study",icon:"◇",summary:"Get more confident with files, browsers, online forms and digital privacy.",body:["Digital skills are the practical habits that help people use technology with confidence. They include finding information, managing files, communicating clearly and recognizing common risks.","Learn where downloads go, how to identify a secure connection, how to share a link rather than an unnecessary copy, and how to check who can access a document. These basics save time and reduce accidental exposure.","Practice with a low-stakes task and write down the steps that worked. When a tool changes, knowing the underlying idea makes it easier to adapt."]}
  ];
  const sitePages = [
    {name:"All tools",description:"Browse and search the complete EverydayKit tool library.",url:"#tools",icon:"⌕"},
    {name:"Categories",description:"Browse tools by category.",url:"#categories",icon:"▦"},
    {name:"Learning guides",description:"Read beginner-friendly digital learning guides.",url:"#learn",icon:"⌂"},
    {name:"About EverydayKit",description:"Learn about the purpose of this platform.",url:"#about",icon:"✦"},
    {name:"Frequently asked questions",description:"Get answers about tools and privacy.",url:"#faq",icon:"?"},
    {name:"Contact EverydayKit",description:"Contact the team by email.",url:"#contact",icon:"✉"},
    {name:"Privacy Policy",description:"Read about browser storage and privacy.",url:"#privacy",icon:"⬡"},
    {name:"Terms of Service",description:"Read the terms for using this site.",url:"#terms",icon:"§"},
    {name:"Cookie Policy",description:"Read about cookies and browser storage.",url:"#cookies",icon:"◌"}
  ];
  const faqs = [
    ["What is EverydayKit?","EverydayKit is a collection of practical browser tools and beginner-friendly digital guides. It is designed to make common tasks quick and approachable."],
    ["Are the tools free?","Yes. The tools on this site are free to use, with no account required."],
    ["Do I need to register?","No. You can use the tools without creating an account. Favorites and recent tools are saved only in this browser if you choose to use those features."],
    ["Is my information stored?","Most tool inputs are processed in your browser and are not sent to an EverydayKit server. Favorites, theme preference and recent tools use local browser storage on your device."],
    ["How does privacy work?","Text, calculations and image processing happen locally in your browser. The contact form opens a pre-filled email in your email app; it does not submit data to a server. See the Privacy Policy for details."],
    ["How can I contact the team?","Send a note to kimdokja550orv@gmail.com, or use the contact form to prepare an email draft."],
    ["Can I use the tools on my phone?","Yes. The pages adapt to mobile screens and the tools use standard browser controls. Some image tasks work best with a larger screen."],
    ["Do I need to install anything?","No installation is needed. Open the website in a modern browser and use the tools there."]
  ];
  const $ = (selector, root=document) => root.querySelector(selector);
  const esc = (value) => String(value == null ? "" : value).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
  const readList = key => { try { const value=JSON.parse(localStorage.getItem(key)||"[]"); return Array.isArray(value)?value:[]; } catch { return []; } };
  const writeList = (key,value) => { try { localStorage.setItem(key,JSON.stringify(value)); } catch {} };
  const favorites = () => readList(STORE.favorites);
  const recent = () => readList(STORE.recent);
  const toolById = id => tools.find(t=>t.id===id);
  const categoryByName = name => categories.find(c=>c.name===name);
  const slug = value => String(value).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
  const toolUrl = id => "#tool/"+id;
  const guideUrl = id => "#learn/"+id;
  const icon = (symbol, className="tool-icon") => '<span class="'+className+'" aria-hidden="true">'+esc(symbol)+'</span>';
  const toast = message => { let el=$(".toast"); if(!el){el=document.createElement("div");el.className="toast";el.setAttribute("role","status");document.body.appendChild(el);} el.textContent=message;el.classList.add("visible");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("visible"),2200); };
  const toolCard = tool => {
    const active=favorites().includes(tool.id);
    return '<article class="tool-card"><div class="tool-card-top">'+icon(tool.icon)+'<button class="fav-button" type="button" data-favorite="'+tool.id+'" aria-label="'+(active?"Remove ":"Add ")+esc(tool.name)+' '+(active?"from":"to")+' favorites" aria-pressed="'+active+'">'+(active?"★":"☆")+'</button></div><a href="'+toolUrl(tool.id)+'"><h3>'+esc(tool.name)+'</h3><p>'+esc(tool.description)+'</p><div class="card-meta">'+esc(tool.category)+' <span aria-hidden="true">·</span> <span>Open tool →</span></div></a></article>';
  };
  const miniTool = tool => '<a class="mini-tool" href="'+toolUrl(tool.id)+'">'+icon(tool.icon)+'<span>'+esc(tool.name)+'</span></a>';
  const guideCard = guide => '<a class="guide-card" href="'+guideUrl(guide.id)+'"><div class="guide-art" aria-hidden="true">'+esc(guide.icon)+'</div><div class="guide-body"><div class="guide-label">'+esc(guide.category)+'</div><h3>'+esc(guide.title)+'</h3><p>'+esc(guide.summary)+'</p><span class="link-arrow">Read guide →</span></div></a>';
  const faqMarkup = (items=faqs) => '<div class="faq-list">'+items.map((item,i)=>'<div class="faq-item"><button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-'+i+'"><span>'+esc(item[0])+'</span><span aria-hidden="true">＋</span></button><div class="faq-answer" id="faq-answer-'+i+'" hidden>'+esc(item[1])+'</div></div>').join("")+'</div>';
  const searchMarkup = placeholder => '<div class="search-wrap"><div class="search-box"><span class="search-icon" aria-hidden="true">⌕</span><input type="search" class="tool-search" placeholder="'+esc(placeholder||"Search 28 tools… try “word counter”")+'" autocomplete="off" aria-label="Search tools" aria-expanded="false" aria-controls="search-results"><span class="key-hint">/</span></div><div class="search-results" id="search-results" hidden></div></div>';
  const app = $("#app");
  const setPageMeta = (title,description) => {
    document.title=title+" | EverydayKit";
    const meta=$('meta[name="description"]'); if(meta)meta.content=description;
    const og=$('meta[property="og:title"]'); if(og)og.content=title+" | EverydayKit";
  };
  const homePage = () => {
    setPageMeta("Useful tools for everyday","Free, private browser tools and friendly digital guides for work, study and everyday life.");
    const popular=["qr-code-generator","password-generator","word-counter","json-formatter","percentage-calculator","image-resizer"].map(toolById);
    const rec=recent().map(toolById).filter(Boolean).slice(0,4);
    const fav=favorites().map(toolById).filter(Boolean).slice(0,4);
    app.innerHTML='<div class="page-shell">'+
      '<section class="hero"><div class="wrap hero-grid"><div><div class="eyebrow"><span class="eyebrow-dot"></span> A little more useful, every day</div><h1>Small tools.<br><span class="accent">Big time-savers.</span></h1><p class="hero-copy">A thoughtful collection of free tools and friendly guides for the things you do every day. No account, no fuss — just open and get it done.</p><div class="hero-actions"><a class="button button-primary" href="#tools">Explore all tools <span aria-hidden="true">↗</span></a><a class="button button-secondary" href="#learn">Browse the guides</a></div><div class="subtle-note">✓ Free to use &nbsp; · &nbsp; ✓ Works in your browser &nbsp; · &nbsp; ✓ No sign-up</div></div>'+
      '<div class="hero-art" aria-label="A preview of EverydayKit tools"><div class="orbit"></div><div class="dashboard-card"><div class="dash-top"><span class="dash-label">Your everyday toolkit</span><span class="dash-dots"><i></i><i></i><i></i></span></div><div class="dash-tool"><span class="dash-icon">Aa</span><div><strong>Word counter</strong><small>Quick writing checks</small></div></div><div class="dash-tool"><span class="dash-icon">⌘</span><div><strong>JSON formatter</strong><small>Make data readable</small></div></div><div class="dash-tool"><span class="dash-icon">▦</span><div><strong>QR code maker</strong><small>Ready to scan</small></div></div></div><div class="float-chip one"><span>✦</span>28 handy tools</div><div class="float-chip two"><span>●</span>Private by design</div></div></div></section>'+
      '<section class="wrap" style="padding-bottom:30px">'+searchMarkup("What do you need to get done?")+'</section>'+
      (rec.length?'<section class="section-tight"><div class="wrap"><div class="section-head"><div><div class="eyebrow">Pick up where you left off</div><h2 class="section-title">Recently used</h2></div></div><div class="tool-card-list">'+rec.map(miniTool).join("")+'</div></div></section>':"")+
      (fav.length?'<section class="section-tight"><div class="wrap"><div class="section-head"><div><div class="eyebrow">Saved on this device</div><h2 class="section-title">Your favorites</h2></div></div><div class="tool-card-list">'+fav.map(miniTool).join("")+'</div></div></section>':"")+
      '<section class="section"><div class="wrap"><div class="section-head"><div><div class="eyebrow">Made for the everyday</div><h2 class="section-title">Popular tools</h2><p>Reliable little helpers, ready whenever you need them.</p></div><a class="link-arrow" href="#tools">See all tools →</a></div><div class="card-grid">'+popular.map(toolCard).join("")+'</div></div></section>'+
      '<section class="section tint-section"><div class="wrap"><div class="section-head"><div><div class="eyebrow">Find your kind of useful</div><h2 class="section-title">Browse by category</h2><p>Start with what you need to do. There is a tool for that.</p></div><a class="link-arrow" href="#categories">All categories →</a></div><div class="category-grid">'+categories.filter(c=>c.id!=="education").map(c=>{const count=tools.filter(t=>t.category===c.name).length;return '<a class="category-card" href="#category/'+c.id+'">'+icon(c.icon,"category-icon")+'<div><h3>'+esc(c.name)+'</h3><p>'+esc(c.description)+'</p><span class="card-count">'+count+' tools →</span></div></a>';}).join("")+'</div></div></section>'+
      '<section class="section" id="tools"><div class="wrap"><div class="section-head"><div><div class="eyebrow">A good place to start</div><h2 class="section-title">Recently added</h2><p>Fresh helpers for images, dates and everyday calculations.</p></div></div><div class="tool-card-list">'+tools.slice(-4).map(miniTool).join("")+'</div></div></section>'+
      '<section class="section"><div class="wrap split-panel"><div class="feature-panel"><div class="eyebrow">Simple by design</div><h2>Useful should feel easy.</h2><p style="color:var(--muted)">EverydayKit is built to help you get on with the task at hand, without a learning curve or an account to create.</p><div class="benefit-list"><div class="benefit"><span class="benefit-check">✓</span><p><strong>Private by default</strong>Your text, calculations and images stay in your browser.</p></div><div class="benefit"><span class="benefit-check">✓</span><p><strong>Clear and approachable</strong>Helpful instructions make each tool easy to pick up.</p></div><div class="benefit"><span class="benefit-check">✓</span><p><strong>Works on your devices</strong>A responsive design follows you from desktop to phone.</p></div></div></div><div class="feature-panel"><div class="eyebrow">Learn something new</div><h2>Build confidence as you go.</h2><p style="color:var(--muted)">Short, beginner-friendly guides explain the digital ideas behind the tools you use.</p><div class="benefit-list"><div class="benefit"><span class="benefit-check">⌘</span><p><strong>Digital skills, made clear</strong>Start with practical explanations and examples.</p></div><div class="benefit"><span class="benefit-check">↗</span><p><strong>Go at your own pace</strong>Each guide is short enough to read over a coffee.</p></div></div><a class="button button-secondary" style="margin-top:22px" href="#learn">Explore learning guides →</a></div></div></section>'+
      '<section class="section tint-section" id="categories"><div class="wrap"><div class="section-head"><div><div class="eyebrow">Learn without the jargon</div><h2 class="section-title">Curiosity, made practical</h2><p>Original guides to the tools and ideas shaping our digital lives.</p></div><a class="link-arrow" href="#learn">All guides →</a></div><div class="guide-grid">'+guides.slice(0,3).map(guideCard).join("")+'</div></div></section>'+
      '<section class="section"><div class="wrap" style="max-width:880px"><div class="section-head"><div><div class="eyebrow">Questions, answered</div><h2 class="section-title">A few things you might wonder</h2></div><a class="link-arrow" href="#faq">Visit the help center →</a></div>'+faqMarkup(faqs.slice(0,5))+'</div></section>'+
      '<section class="wrap section-tight"><div class="cta-banner"><div><h2>Need a hand with something?</h2><p>Have a question or an idea for a useful tool? We would love to hear from you.</p></div><a class="button" href="#contact">Get in touch <span aria-hidden="true">↗</span></a></div></section>'+
    '</div>';
  };
  const toolsPage = (filter="") => {
    const cat=categories.find(c=>c.id===filter);
    setPageMeta(cat?cat.name+" tools":"All browser tools",cat?"Explore "+cat.name.toLowerCase()+" tools from EverydayKit.":"Browse free text, developer, image, calculation and everyday tools.");
    const selected=cat?tools.filter(t=>t.category.toLowerCase()===cat.name.toLowerCase()):tools;
    app.innerHTML='<div class="page-shell"><section class="page-hero wrap"><div class="breadcrumbs"><a href="#home">Home</a><span>›</span><a href="#categories">Categories</a><span>›</span><span>'+(cat?esc(cat.name):"All tools")+'</span></div><div class="eyebrow">Your everyday toolkit</div><h1>'+(cat?esc(cat.name)+" tools":"Tools for the things you do")+'</h1><p>'+(cat?esc(cat.description):"Search, explore and find a simple tool for the task in front of you. Every tool works right in your browser.")+'</p></section><section class="wrap tool-search-section">'+searchMarkup("Search tools by name or task…")+'<div class="filter-row" role="group" aria-label="Filter tools by category"><button class="filter-chip" data-filter="" aria-pressed="'+(!cat)+'">All tools ('+tools.length+')</button>'+categories.filter(c=>c.id!=="education").map(c=>'<button class="filter-chip" data-filter="'+c.id+'" aria-pressed="'+(cat&&cat.id===c.id)+'">'+esc(c.name)+'</button>').join("")+'</div><p class="results-count">'+selected.length+' tools</p><div class="card-grid" id="tools-grid">'+selected.map(toolCard).join("")+'</div></section></div>';
  };
  const categoriesPage = () => {
    setPageMeta("Tool categories","Browse EverydayKit tools by category.");
    app.innerHTML='<div class="page-shell"><section class="page-hero wrap"><div class="breadcrumbs"><a href="#home">Home</a><span>›</span><span>Categories</span></div><div class="eyebrow">Organized around your day</div><h1>One place, many useful things.</h1><p>Choose a category to find a tool that fits what you are doing.</p></section><section class="wrap section-tight"><div class="category-grid">'+categories.filter(c=>c.id!=="education").map(c=>{const count=tools.filter(t=>t.category===c.name).length;return '<a class="category-card" href="#category/'+c.id+'">'+icon(c.icon,"category-icon")+'<div><h3>'+esc(c.name)+'</h3><p>'+esc(c.description)+'</p><span class="card-count">'+count+' tools →</span></div></a>';}).join("")+'<a class="category-card" href="#learn">'+icon("⌂","category-icon")+'<div><h3>Education</h3><p>Friendly guides to programming, online safety and digital skills.</p><span class="card-count">'+guides.length+' guides →</span></div></a></div></section></div>';
  };
  const guidePage = guide => {
    setPageMeta(guide.title,guide.summary);
    app.innerHTML='<div class="page-shell"><section class="page-hero wrap"><div class="breadcrumbs"><a href="#home">Home</a><span>›</span><a href="#learn">Learn</a><span>›</span><span>'+esc(guide.title)+'</span></div><div class="eyebrow">'+esc(guide.category)+'</div><h1>'+esc(guide.title)+'</h1><p>'+esc(guide.summary)+'</p></section><article class="wrap prose">'+guide.body.map((para,i)=>'<p>'+esc(para)+'</p>').join("")+'<h2>Try it for yourself</h2><p>Choose one small idea from this guide and apply it to a task you already have. A short experiment is often the quickest way to make a new concept stick.</p><div class="tag-row"><span class="tag">Beginner friendly</span><span class="tag">Practical guide</span><span class="tag">EverydayKit Learn</span></div><p style="margin-top:28px"><a href="#learn">← Browse all guides</a></p></article></div>';
  };
  const educationPage = () => {
    setPageMeta("Digital learning guides","Beginner-friendly guides to programming, AI, cybersecurity, web development and practical digital skills.");
    app.innerHTML='<div class="page-shell"><section class="page-hero wrap"><div class="breadcrumbs"><a href="#home">Home</a><span>›</span><span>Learn</span></div><div class="eyebrow">A little knowledge goes a long way</div><h1>Make digital things make sense.</h1><p>Clear, original guides to the ideas and skills that help you feel at home online. Written for curious beginners.</p></section><section class="wrap section-tight"><div class="guide-grid">'+guides.map(guideCard).join("")+'</div></section></div>';
  };
  const aboutPage = () => {
    setPageMeta("About EverydayKit","Why EverydayKit exists and how it helps with everyday digital tasks.");
    app.innerHTML='<div class="page-shell"><section class="page-hero wrap"><div class="breadcrumbs"><a href="#home">Home</a><span>›</span><span>About</span></div><div class="eyebrow">Our little corner of the internet</div><h1>More helpful. Less hassle.</h1><p>EverydayKit brings useful browser tools and approachable learning resources together, so everyday digital tasks take less effort.</p></section><article class="wrap prose"><h2>Why we made EverydayKit</h2><p>Simple tasks should not require an account, a software install or a trip through a maze of menus. We created EverydayKit to make practical tools easy to find and easy to use, whether you are studying, working or just getting something done.</p><h2>What we believe</h2><ul><li><strong>Useful things should be accessible.</strong> Keep the interface clear and work across screen sizes.</li><li><strong>Privacy deserves care.</strong> Process tool inputs on your device whenever possible.</li><li><strong>Learning should feel welcoming.</strong> Explain digital ideas in plain language and invite people to try them.</li></ul><h2>How it works</h2><p>Most tools on EverydayKit run locally in your browser. Your favorites, recently used tools and theme preference are saved in this browser so the site can feel a little more personal without creating an account. The contact page opens an email draft for you to send.</p><p>EverydayKit is an independent general-purpose utility site. Its educational guides are original summaries intended to help readers get started, not replace specialist instruction.</p><div class="button-row"><a class="button button-primary" href="#tools">Explore the tools</a><a class="button button-secondary" href="#contact">Contact us</a></div></article></div>';
  };
  const faqPage = () => {
    setPageMeta("Frequently asked questions","Answers about EverydayKit tools, accounts, privacy and contact.");
    app.innerHTML='<div class="page-shell"><section class="page-hero wrap"><div class="breadcrumbs"><a href="#home">Home</a><span>›</span><span>FAQ</span></div><div class="eyebrow">Here to help</div><h1>Frequently asked questions</h1><p>A few quick answers about using EverydayKit.</p></section><section class="wrap section-tight" style="max-width:880px">'+faqMarkup()+'<div class="feature-panel" style="margin-top:28px"><h2>Still have a question?</h2><p style="color:var(--muted)">Send us a note and we will get back to you.</p><a class="button button-primary" href="#contact">Contact EverydayKit →</a></div></section></div>';
  };
  const contactPage = () => {
    setPageMeta("Contact EverydayKit","Get in touch with the EverydayKit team.");
    app.innerHTML='<div class="page-shell"><section class="page-hero wrap"><div class="breadcrumbs"><a href="#home">Home</a><span>›</span><span>Contact</span></div><div class="eyebrow">We are listening</div><h1>Say hello.</h1><p>Share a question, a bit of feedback or an idea for a tool you would find useful.</p></section><section class="wrap contact-grid section-tight"><div class="feature-panel"><div class="eyebrow">Get in touch</div><h2>We would love to hear from you.</h2><p style="color:var(--muted)">Use the form to prepare an email message, or write to us directly. The form does not send your information to a website server.</p><div class="contact-detail">'+icon("✉","category-icon")+'<div><strong>Email</strong><p><a href="mailto:kimdokja550orv@gmail.com">kimdokja550orv@gmail.com</a></p></div></div><div class="contact-detail">'+icon("◷","category-icon")+'<div><strong>What to expect</strong><p>Your email app opens with the message ready for you to review and send.</p></div></div><div class="tool-instructions"><strong>Privacy note</strong><br>Your name, email and message stay in this form until you choose to open your email app. EverydayKit does not receive a copy through this page.</div></div><form class="form-card" id="contact-form" novalidate><div class="field"><label for="contact-name">Your name</label><input id="contact-name" name="name" required maxlength="100" autocomplete="name" placeholder="Name"></div><div class="field"><label for="contact-email">Email address</label><input id="contact-email" name="email" type="email" required maxlength="200" autocomplete="email" placeholder="you@example.com"></div><div class="field"><label for="contact-message">Message</label><textarea id="contact-message" name="message" required minlength="10" maxlength="3000" placeholder="What would you like us to know?"></textarea><small>At least 10 characters, up to 3,000.</small></div><div class="validation-message" id="contact-error" role="alert"></div><button class="button button-primary" type="submit">Prepare email <span aria-hidden="true">↗</span></button><button class="button button-secondary" type="reset">Clear form</button><p class="form-note">Your email program opens so you can review the message and send it yourself.</p></form></section></div>';
  };
  const legalPage = type => {
    const data={
      privacy:{title:"Privacy Policy",intro:"This policy describes how EverydayKit handles information when you visit the site or use its tools.",sections:[["Information you enter into tools","Most tools run entirely in your browser. Text, calculations and images are processed on your device and are not sent to an EverydayKit server by the tool interfaces."],["Local browser storage","If you use favorites, recently used tools or the theme toggle, those preferences are stored in your browser's local storage. They remain on that device and can be cleared through your browser settings."],["Contact form","The contact form validates your entries in the browser and opens a pre-filled email draft addressed to kimdokja550orv@gmail.com. The site does not receive or store the draft. Your email app and email provider handle the message if you choose to send it."],["Cookies and third parties","EverydayKit does not require cookies for its core tools. If the site is hosted with analytics, advertising or other third-party services in the future, this policy should be updated to describe them before they are used."],["Your choices","You can clear local storage through your browser's site data controls. You can choose not to use the contact form or any optional tool."],["Policy changes","This page may be updated as the site changes. The current version is the one published here."]]},
      terms:{title:"Terms of Service",intro:"By using EverydayKit, you agree to use the site responsibly and understand the general limits described below.",sections:[["Using the tools","EverydayKit provides general-purpose utilities and educational information. Check important results before relying on them, especially where accuracy has a real-world impact."],["No professional advice","Calculations and guides are for general information. They are not medical, legal, financial or other professional advice. For decisions that need expert judgment, consult a qualified professional."],["Availability and changes","We aim to keep the site useful and available, but features may change and uninterrupted service is not guaranteed. Tools are provided as-is, without a promise that every result will fit every purpose."],["Your responsibility","You are responsible for the inputs you provide, files you process and decisions you make from the results. Do not use the site to violate another person's rights or applicable rules."],["Contact","Questions about these terms can be sent to kimdokja550orv@gmail.com."]]},
      cookies:{title:"Cookie Policy",intro:"This page explains how EverydayKit handles cookies and similar browser storage.",sections:[["Cookies","The core static tools do not need cookies to operate. Your browser may still use essential storage mechanisms when loading a website, depending on how the site is hosted."],["Local storage","Favorites, recent tools and your display theme may be kept in browser local storage. This is different from a cookie and is used to remember preferences on this device."],["Third-party services","External services, if added to the site, may use their own cookies or storage. This page should be updated if that happens so visitors can understand their choices."],["Managing storage","You can clear cookies and local storage from your browser's settings. Clearing local storage will also remove saved favorites and recent tools."]]}
    }[type];
    setPageMeta(data.title+" | EverydayKit",data.intro);
    app.innerHTML='<div class="page-shell"><section class="page-hero wrap"><div class="breadcrumbs"><a href="#home">Home</a><span>›</span><span>'+esc(data.title)+'</span></div><div class="eyebrow">Clear and straightforward</div><h1>'+esc(data.title)+'</h1><p>'+esc(data.intro)+'</p></section><article class="wrap prose"><p><strong>Effective date: October 3, 2026</strong></p>'+data.sections.map(s=>'<h2>'+esc(s[0])+'</h2><p>'+esc(s[1])+'</p>').join("")+'<p>For questions, email <a href="mailto:kimdokja550orv@gmail.com">kimdokja550orv@gmail.com</a>.</p></article></div>';
  };
  const field = (id,label,type="text",placeholder="",extra="") => '<div class="field"><label for="'+id+'">'+label+'</label><input id="'+id+'" type="'+type+'" placeholder="'+placeholder+'" '+extra+'></div>';
  const textarea = (id,label,placeholder="",rows=8) => '<div class="field"><label for="'+id+'">'+label+'</label><textarea id="'+id+'" rows="'+rows+'" placeholder="'+placeholder+'"></textarea></div>';
  const select = (id,label,options) => '<div class="field"><label for="'+id+'">'+label+'</label><select id="'+id+'">'+options.map(o=>'<option value="'+esc(o[0])+'">'+esc(o[1])+'</option>').join("")+'</select></div>';
  const textToolArea = (label="Your text") => textarea("tool-input",label,"Type or paste your text here…",9);
  const toolForm = tool => {
    const id=tool.id;
    let fields="", note="";
    switch(id){
      case "qr-code-generator": fields='<div class="field"><label for="qr-input">Text or URL</label><input id="qr-input" maxlength="78" placeholder="https://example.com" required><small>Up to 78 UTF-8 bytes. Short links scan most reliably.</small></div><div class="field"><label for="qr-size">Image size</label><select id="qr-size"><option value="240">240 × 240</option><option value="320" selected>320 × 320</option><option value="480">480 × 480</option></select></div><canvas id="qr-canvas" class="canvas-output" width="1" height="1" aria-label="Generated QR code" hidden></canvas>'; note="QR generation runs on this device. The supported compact QR versions fit up to 78 bytes.";
        break;
      case "password-generator": fields='<div class="form-grid">'+field("pass-length","Password length","number","16",'min="4" max="64" value="20"')+select("pass-count","How many", [["1","1 password"],["5","5 passwords"],["10","10 passwords"]])+'</div><div class="check-row"><input id="pass-lower" type="checkbox" checked><label for="pass-lower">Lowercase letters</label></div><div class="check-row"><input id="pass-upper" type="checkbox" checked><label for="pass-upper">Uppercase letters</label></div><div class="check-row"><input id="pass-digits" type="checkbox" checked><label for="pass-digits">Numbers</label></div><div class="check-row"><input id="pass-symbols" type="checkbox" checked><label for="pass-symbols">Symbols</label></div><div class="check-row"><input id="pass-ambiguous" type="checkbox"><label for="pass-ambiguous">Avoid look-alike characters</label></div>'; note="Passwords are generated with your browser’s cryptographic random number generator and are not saved.";
        break;
      case "word-counter": case "character-counter": fields=textToolArea("Text to count"); break;
      case "text-case-converter": fields=textToolArea("Text to convert")+select("case-mode","Convert to", [["upper","UPPERCASE"],["lower","lowercase"],["title","Title Case"],["sentence","Sentence case"],["alternating","aLtErNaTiNg"],["camel","camelCase"],["snake","snake_case"],["kebab","kebab-case"]]); break;
      case "text-formatter": fields=textToolArea("Text to format")+'<div class="form-grid">'+select("format-lines","Line cleanup", [["keep","Keep lines"],["trim","Trim each line"],["dedupe","Remove duplicate lines"],["sort","Sort lines A–Z"]])+select("format-spaces","Whitespace", [["keep","Keep whitespace"],["collapse","Collapse repeated spaces"],["blank","Remove blank lines"]])+'</div>'; break;
      case "json-formatter": fields=textarea("tool-input","JSON input",'{"name":"EverydayKit","tools":28}',10)+select("json-style","Output", [["pretty","Pretty print · 2 spaces"],["compact","Minify JSON"]]); note="Format or minify JSON locally."; break;
      case "json-validator": fields=textarea("tool-input","JSON input",'{"name":"EverydayKit","tools":28}',10); note="Validation uses your browser’s JSON parser and reports the point where parsing stopped."; break;
      case "base64-encoder-decoder": fields=textToolArea("Text or Base64")+select("codec-mode","Action", [["encode","Encode to Base64"],["decode","Decode from Base64"]]); break;
      case "url-encoder-decoder": fields=textToolArea("Text or URL")+select("url-mode","Action", [["encode","Encode component"],["decode","Decode component"]]); break;
      case "color-picker": fields='<div class="form-grid">'+field("color-value","Choose a color","color","",'value="#5859df"')+field("color-hex","HEX value","text","#5859df",'value="#5859df"')+'</div>'; break;
      case "color-converter": fields=field("color-convert-input","Color value","text","#5859df or rgb(88, 89, 223)",'value="#5859df"'); break;
      case "unit-converter": fields='<div class="form-grid">'+field("unit-value","Value","number","Enter a value",'value="1" step="any"')+select("unit-kind","Convert", [["length","Length"],["weight","Weight"],["temperature","Temperature"]])+select("unit-from","From", [])+select("unit-to","To", [])+'</div>'; break;
      case "percentage-calculator": fields=select("percent-mode","Calculate", [["of","What is X% of Y?"],["is","X is what percent of Y?"],["change","Percentage change from X to Y"],["increase","Increase X by Y%"],["decrease","Decrease X by Y%"]])+'<div class="form-grid">'+field("percent-a","First value","number","0",'step="any" value="20"')+field("percent-b","Second value","number","0",'step="any" value="150"')+'</div>'; break;
      case "age-calculator": fields='<div class="form-grid">'+field("birth-date","Date of birth","date","",'required')+field("age-date","Calculate age on","date","",'required')+'</div>'; break;
      case "date-calculator": fields=select("date-mode","Calculate", [["between","Days between two dates"],["add","Add days to a date"],["subtract","Subtract days from a date"]])+'<div class="form-grid">'+field("date-a","Start date","date","",'required')+field("date-b","End date","date","",'required')+field("date-days","Number of days","number","0",'value="30"')+'</div>'; break;
      case "bmi-calculator": fields='<div class="form-grid">'+field("bmi-weight","Weight (kg)","number","e.g. 68",'min="1" max="500" step="any" value="68"')+field("bmi-height","Height (cm)","number","e.g. 170",'min="50" max="250" step="any" value="170"')+'</div>'; note="BMI is a general screening measure and does not describe health on its own. It is not a diagnosis.";
        break;
      case "calculator": fields=field("calc-input","Expression","text","(12 + 8) × 3",'value="(12 + 8) * 3" autocomplete="off"')+'<div class="tool-instructions">Use +, −, ×, ÷, parentheses and decimals. Use * for multiplication and / for division.</div>'; break;
      case "stopwatch": fields='<div class="result-box" id="stopwatch-display" style="font:700 42px ui-monospace,monospace;text-align:center">00:00.00</div><div class="tool-actions"><button class="button button-primary" type="button" data-timer="start">Start</button><button class="button button-secondary" type="button" data-timer="pause">Pause</button><button class="button button-secondary" type="button" data-timer="reset">Reset</button><button class="button button-secondary" type="button" data-timer="lap">Lap</button></div><ol id="stopwatch-laps"></ol>'; note="The display uses elapsed time so it stays accurate when the browser tab is busy."; break;
      case "countdown-timer": fields='<div class="form-grid">'+field("timer-minutes","Minutes","number","0",'min="0" max="999" value="1"')+field("timer-seconds","Seconds","number","0",'min="0" max="59" value="0"')+'</div><div class="result-box" id="countdown-display" style="font:700 36px ui-monospace,monospace;text-align:center">01:00</div><div class="tool-actions"><button class="button button-primary" type="button" data-timer="countdown-start">Start timer</button><button class="button button-secondary" type="button" data-timer="countdown-pause">Pause</button><button class="button button-secondary" type="button" data-timer="countdown-reset">Reset</button></div>'; break;
      case "random-number-generator": fields='<div class="form-grid">'+field("random-min","Minimum","number","1",'value="1" step="1"')+field("random-max","Maximum","number","100",'value="100" step="1"')+field("random-count","How many numbers","number","1",'value="1" min="1" max="100"')+'</div><div class="check-row"><input id="random-unique" type="checkbox"><label for="random-unique">No repeats (range must be large enough)</label></div>'; break;
      case "random-name-picker": fields=textarea("names-input","Names (one per line)","Alex\nSam\nJordan",7)+'<div class="check-row"><input id="names-remove" type="checkbox"><label for="names-remove">Remove the chosen name before the next draw</label></div><div class="tool-actions"><button class="button button-primary" type="button" data-action="pick-name">Pick a name</button><button class="button button-secondary" type="button" data-action="reset-names">Reset drawn names</button></div>'; break;
      case "lorem-ipsum-generator": fields=select("lorem-unit","Generate by", [["paragraphs","Paragraphs"],["sentences","Sentences"],["words","Words"]])+field("lorem-count","Amount","number","3",'value="3" min="1" max="30"'); break;
      case "uuid-generator": fields=select("uuid-count","How many", [["1","1 UUID"],["5","5 UUIDs"],["10","10 UUIDs"],["25","25 UUIDs"]]); break;
      case "image-resizer": case "image-compressor": case "image-converter": case "image-cropper":
        fields='<div class="field"><label for="image-file">Choose an image</label><input id="image-file" type="file" accept="image/*"><small>Image stays on this device. Very large images may use significant memory.</small></div><div id="image-info" class="status-line">No image selected yet.</div><img id="image-preview" class="image-preview" alt="Preview of the selected image" hidden>';
        if(id==="image-resizer")fields+='<div class="form-grid">'+field("image-width","Width (px)","number","",'min="1" max="8000" value="800"')+field("image-height","Height (px)","number","",'min="1" max="8000" value="600"')+'</div><div class="check-row"><input id="image-lock" type="checkbox" checked><label for="image-lock">Keep aspect ratio</label></div>';
        if(id==="image-compressor")fields+=field("image-quality","Quality (JPEG)","range","",'min="10" max="100" value="75"')+'<div class="status-line">Quality: <span id="quality-value">75</span>%</div>';
        if(id==="image-converter")fields+=select("image-format","Convert to", [["image/png","PNG"],["image/jpeg","JPEG"],["image/webp","WebP"]]);
        if(id==="image-cropper")fields+='<div class="form-grid">'+field("crop-x","Left (px)","number","",'min="0" value="0"')+field("crop-y","Top (px)","number","",'min="0" value="0"')+field("crop-width","Crop width (px)","number","",'min="1" value="300"')+field("crop-height","Crop height (px)","number","",'min="1" value="300"')+'</div>';
        note="Image transformations happen in your browser. The original file is not uploaded.";
        break;
      default: fields=textToolArea();
    }
    const hasSubmit=!["stopwatch","countdown-timer","random-name-picker"].includes(id);
    const actionLabel=({"qr-code-generator":"Generate QR code","password-generator":"Generate passwords","word-counter":"Count text","character-counter":"Count characters","text-case-converter":"Convert text","text-formatter":"Format text","json-formatter":"Format JSON","json-validator":"Validate JSON","base64-encoder-decoder":"Run conversion","url-encoder-decoder":"Run conversion","unit-converter":"Convert units","percentage-calculator":"Calculate","age-calculator":"Calculate age","date-calculator":"Calculate dates","bmi-calculator":"Calculate BMI","calculator":"Calculate","random-number-generator":"Generate numbers","lorem-ipsum-generator":"Generate text","uuid-generator":"Generate UUIDs","image-resizer":"Resize image","image-compressor":"Compress image","image-converter":"Convert image","image-cropper":"Crop image"})[id]||"Run tool";
    return '<form id="tool-form" novalidate>'+fields+(hasSubmit?'<div class="tool-actions"><button class="button button-primary" type="submit">'+actionLabel+' <span aria-hidden="true">→</span></button><button class="button button-secondary" type="reset">Reset</button></div>':"")+'<div id="tool-status" class="status-line" role="status" aria-live="polite"></div><div id="tool-result" class="result-box" aria-live="polite"></div></form>'+(note?'<div class="tool-instructions"><strong>Good to know</strong><br>'+esc(note)+'</div>':"");
  };
  const toolPage = tool => {
    const stored=recent().filter(id=>id!==tool.id); stored.unshift(tool.id); writeList(STORE.recent,stored.slice(0,8));
    setPageMeta(tool.name,tool.description+" Free, private and runs in your browser.");
    const related=tools.filter(t=>t.category===tool.category&&t.id!==tool.id).slice(0,4);
    const faqItems=[
      ["How do I use "+tool.name.toLowerCase()+"?","Enter or choose the value shown in the tool, then select the action button. Results appear below the controls. Use Copy, Download or Reset where offered."],
      ["Is my input sent anywhere?","This tool runs in your browser. Its input is not uploaded by EverydayKit."],
      ["Can I use this on a phone?","Yes. The interface adapts to smaller screens. Some tools, especially image editing, are more comfortable on a larger display."]
    ];
    app.innerHTML='<div class="page-shell"><section class="page-hero wrap"><div class="breadcrumbs"><a href="#home">Home</a><span>›</span><a href="#tools">Tools</a><span>›</span><span>'+esc(tool.name)+'</span></div><div class="eyebrow">'+esc(tool.category)+'</div><h1>'+esc(tool.name)+'</h1><p>'+esc(tool.description)+'</p></section><section class="wrap tool-layout"><div class="tool-workspace"><h2>Use the tool</h2>'+toolForm(tool)+'</div><aside class="tool-side"><div class="side-card"><h3>Quick tips</h3><p>Everything you enter is handled by your browser. Copy a result or download it when you are ready.</p><div class="tag-row"><span class="tag">Free</span><span class="tag">No account</span><span class="tag">Private</span></div></div>'+(related.length?'<div class="side-card"><h3>Related tools</h3><div class="related-list">'+related.map(t=>'<a class="related-link" href="'+toolUrl(t.id)+'">'+icon(t.icon)+'<span>'+esc(t.name)+'</span></a>').join("")+'</div></div>':"")+'<div class="side-card"><h3>Have a suggestion?</h3><p>Tell us what would make this tool more useful.</p><a class="link-arrow" href="#contact">Contact us →</a></div></aside></section><section class="wrap tool-faq" style="max-width:880px"><div class="eyebrow">A few quick answers</div><h2>About this tool</h2>'+faqMarkup(faqItems)+'</section></div>';
    configureDynamicInputs();
  };
  const configureDynamicInputs = () => {
    const now=new Date(), date=localDate(now);
    const ageDate=$("#age-date"); if(ageDate)ageDate.value=date;
    const birth=$("#birth-date"); if(birth)birth.max=date;
    const a=$("#date-a"),b=$("#date-b"); if(a)a.value=date;if(b)b.value=date;
    const unitKind=$("#unit-kind"); if(unitKind)populateUnits();
    const color=$("#color-value"),hex=$("#color-hex"); if(color&&hex){color.addEventListener("input",()=>hex.value=color.value);hex.addEventListener("input",()=>{const c=parseColor(hex.value);if(c)color.value=rgbHex(c.r,c.g,c.b);});}
    const names=$("#names-input");if(names)originalNames=names.value;
    const quality=$("#image-quality"); if(quality)quality.addEventListener("input",()=>{const q=$("#quality-value");if(q)q.textContent=quality.value;});
    refreshStopwatch();refreshCountdown();
  };
  const renderRoute = () => {
    const route=decodeURI(location.hash.replace(/^#/,""));
    if(!route||route==="home"){homePage();return;}
    const [kind,...rest]=route.split("/"), id=rest.join("/");
    if(kind==="tools"){toolsPage();return;}
    if(kind==="categories"){categoriesPage();return;}
    if(kind==="category"){toolsPage(id);return;}
    if(kind==="tool"){const t=toolById(id);if(t){toolPage(t);return;}homePage();return;}
    if(kind==="learn"){const guide=guides.find(g=>g.id===id);if(guide){guidePage(guide);return;}educationPage();return;}
    if(kind==="about"){aboutPage();return;}
    if(kind==="faq"){faqPage();return;}
    if(kind==="contact"){contactPage();return;}
    if(["privacy","terms","cookies"].includes(kind)){legalPage(kind);return;}
    homePage();
  };
  const localDate = d => {const x=new Date(d.getTime()-d.getTimezoneOffset()*60000);return x.toISOString().slice(0,10);};
  const showStatus = message => {const node=$("#tool-status");if(node)node.textContent=message||"";};
  const showResult = (text,options={}) => {
    const box=$("#tool-result");if(!box)return;
    const content=String(text==null?"":text);
    box.innerHTML='<div class="result-title">'+esc(options.title||"Result")+'</div><div class="result-text">'+esc(content)+'</div><div class="tool-actions"><button type="button" class="button button-secondary button-small" data-copy-result>Copy result</button>'+(options.download?'<button type="button" class="button button-secondary button-small" data-download-result="'+esc(options.filename||"everydaykit-result.txt")+'">Download</button>':"")+'</div>';
    box.dataset.result=content;
  };
  const fail = message => {showResult(message,{title:"Check your input"});const title=$("#tool-result .result-title");if(title)title.classList.add("result-error");showStatus("");};
  const randInt = maxExclusive => {
    if(!Number.isSafeInteger(maxExclusive)||maxExclusive<=0)throw new Error("Random range is too large.");
    const range=4294967296,limit=Math.floor(range/maxExclusive)*maxExclusive,buf=new Uint32Array(1);
    do{crypto.getRandomValues(buf);}while(buf[0]>=limit);
    return buf[0]%maxExclusive;
  };
  const makePassword = length => {
    const sets=[];
    const ambiguous=$("#pass-ambiguous")&&$("#pass-ambiguous").checked;
    const groups=[
      $("#pass-lower").checked?"abcdefghijklmnopqrstuvwxyz":"",
      $("#pass-upper").checked?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":"",
      $("#pass-digits").checked?"0123456789":"",
      $("#pass-symbols").checked?"!@#$%^&*()-_=+[]{};:,.?":"",
    ].map(s=>ambiguous?s.replace(/[iloILO01]/g,""):s).filter(Boolean);
    if(!groups.length)throw new Error("Select at least one character type.");
    if(length<groups.length)throw new Error("Choose a length at least as long as the number of selected character types ("+groups.length+").");
    for(const group of groups)sets.push(group[randInt(group.length)]);
    const all=groups.join("");
    while(sets.length<length)sets.push(all[randInt(all.length)]);
    for(let i=sets.length-1;i>0;i--){const j=randInt(i+1);[sets[i],sets[j]]=[sets[j],sets[i]];}
    return sets.join("");
  };
  const splitWords = text => text.trim().match(/[\p{L}\p{N}]+(?:['’_-][\p{L}\p{N}]+)*/gu)||[];
  const encodeBase64 = text => {
    const bytes=new TextEncoder().encode(text);
    let binary="";
    for(let offset=0;offset<bytes.length;offset+=0x8000)binary+=String.fromCharCode(...bytes.subarray(offset,offset+0x8000));
    return btoa(binary);
  };
  const titleCase = text => text.toLowerCase().replace(/(^|[\s\p{P}])([\p{L}\p{N}])/gu,(_,a,b)=>a+b.toUpperCase());
  const sentenceCase = text => text.toLowerCase().replace(/(^\s*|[.!?]\s+)([\p{L}])/gu,(_,a,b)=>a+b.toUpperCase());
  const caseConvert = (text,mode) => {
    if(mode==="upper")return text.toLocaleUpperCase();
    if(mode==="lower")return text.toLocaleLowerCase();
    if(mode==="title")return titleCase(text);
    if(mode==="sentence")return sentenceCase(text);
    if(mode==="alternating"){let flip=false;return [...text].map(c=>{if(/[a-z]/i.test(c)){flip=!flip;return flip?c.toLowerCase():c.toUpperCase();}return c;}).join("");}
    const words=text.match(/[\p{L}\p{N}]+/gu)||[];
    if(mode==="snake")return words.map(x=>x.toLowerCase()).join("_");
    if(mode==="kebab")return words.map(x=>x.toLowerCase()).join("-");
    if(mode==="camel")return words.map((x,i)=>i?x[0].toUpperCase()+x.slice(1).toLowerCase():x.toLowerCase()).join("");
    return text;
  };
  const parseColor = raw => {
    const s=String(raw).trim().toLowerCase();
    let m=s.match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if(m){let v=m[1];if(v.length===3)v=[...v].map(ch=>ch+ch).join("");return {r:parseInt(v.slice(0,2),16),g:parseInt(v.slice(2,4),16),b:parseInt(v.slice(4,6),16)};}
    m=s.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*[\d.]+)?\s*\)$/);
    if(m){const a=m.slice(1,4).map(Number);if(a.every(x=>x>=0&&x<=255))return {r:Math.round(a[0]),g:Math.round(a[1]),b:Math.round(a[2])};}
    m=s.match(/^hsla?\(\s*([\d.]+)(?:deg)?\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*[\d.]+)?\s*\)$/);
    if(m){let h=((Number(m[1])%360)+360)%360/360,sat=Number(m[2])/100,l=Number(m[3])/100;if(sat<0||sat>1||l<0||l>1)return null;const hue=(p,q,t)=>{if(t<0)t++;if(t>1)t--;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p;};if(sat===0){const v=Math.round(l*255);return {r:v,g:v,b:v};}const q=l<.5?l*(1+sat):l+sat-l*sat,p=2*l-q;return {r:Math.round(hue(p,q,h+1/3)*255),g:Math.round(hue(p,q,h)*255),b:Math.round(hue(p,q,h-1/3)*255)};}
    return null;
  };
  const rgbHex = (r,g,b) => "#"+[r,g,b].map(v=>Math.round(v).toString(16).padStart(2,"0")).join("");
  const rgbHsl = ({r,g,b}) => {r/=255;g/=255;b/=255;const max=Math.max(r,g,b),min=Math.min(r,g,b),d=max-min;let h=0,s=0,l=(max+min)/2;if(d){s=d/(1-Math.abs(2*l-1));switch(max){case r:h=((g-b)/d)%6;break;case g:h=(b-r)/d+2;break;default:h=(r-g)/d+4;}h*=60;if(h<0)h+=360;}return {h:Math.round(h),s:Math.round(s*100),l:Math.round(l*100)};};
  const populateUnits = () => {
    const type=$("#unit-kind"),from=$("#unit-from"),to=$("#unit-to");if(!type||!from||!to)return;
    const values={length:[["m","Meters"],["km","Kilometers"],["cm","Centimeters"],["mm","Millimeters"],["mi","Miles"],["ft","Feet"],["in","Inches"]],weight:[["kg","Kilograms"],["g","Grams"],["lb","Pounds"],["oz","Ounces"]],temperature:[["c","Celsius"],["f","Fahrenheit"],["k","Kelvin"]]}[type.value];
    const oldF=from.value,oldT=to.value;
    from.innerHTML=values.map(v=>'<option value="'+v[0]+'">'+v[1]+'</option>').join("");
    to.innerHTML=values.map(v=>'<option value="'+v[0]+'">'+v[1]+'</option>').join("");
    from.value=values.some(v=>v[0]===oldF)?oldF:values[0][0];
    to.value=values.some(v=>v[0]===oldT)?oldT:values[1][0];
  };
  const convertUnit = (n,kind,from,to) => {
    if(kind==="temperature"){let c=from==="c"?n:from==="f"?(n-32)*5/9:n-273.15;return to==="c"?c:to==="f"?c*9/5+32:c+273.15;}
    const factors=kind==="length"?{m:1,km:1000,cm:.01,mm:.001,mi:1609.344,ft:.3048,in:.0254}:{kg:1,g:.001,lb:.45359237,oz:.028349523125};
    return n*factors[from]/factors[to];
  };
  const calculateExpression = expression => {
    const tokens=String(expression).replace(/[×x]/gi,"*").replace(/[÷]/g,"/").replace(/[−]/g,"-").match(/\d*\.?\d+(?:e[+-]?\d+)?|[()+\-*/%]/gi);
    if(!tokens||tokens.join("")!==String(expression).replace(/\s/g,"").replace(/[×x]/gi,"*").replace(/[÷]/g,"/").replace(/[−]/g,"-"))throw new Error("Use numbers, parentheses, +, -, *, / and % only.");
    let i=0;
    const primary=()=>{const t=tokens[i++];if(t==="+"||t==="-"){const v=primary();return t==="-"?-v:v;}if(t==="("){const v=add();if(tokens[i++]!==")")throw new Error("Add a closing parenthesis.");return v;}const n=Number(t);if(!Number.isFinite(n))throw new Error("Enter a valid number.");return n;};
    const mul=()=>{let v=primary();while(["*","/","%"].includes(tokens[i])){const op=tokens[i++],r=primary();if((op==="/"||op==="%")&&r===0)throw new Error("Division by zero is not allowed.");v=op==="*"?v*r:op==="/"?v/r:v%r;}return v;};
    const add=()=>{let v=mul();while(tokens[i]==="+"||tokens[i]==="-"){const op=tokens[i++],r=mul();v=op==="+"?v+r:v-r;}return v;};
    const result=add();if(i<tokens.length)throw new Error("Check the expression near “"+tokens[i]+"”.");if(!Number.isFinite(result))throw new Error("That expression has no finite result.");return result;
  };
  const niceNumber = n => Number(n.toPrecision(12)).toLocaleString(undefined,{maximumFractionDigits:10});
  const readNumber = (selector,label) => {
    const raw=$(selector).value.trim();
    if(!raw)throw new Error("Enter "+label+".");
    const value=Number(raw);
    if(!Number.isFinite(value))throw new Error("Enter a valid number for "+label+".");
    return value;
  };
  let imageObject=null,imageURL=null,resultImageURL=null,originalNames=null;
  const loadImage = () => {
    const file=$("#image-file")&&$("#image-file").files[0];if(!file)return;
    if(!file.type.startsWith("image/")){showStatus("Please choose a supported image file.");return;}
    if(imageURL)URL.revokeObjectURL(imageURL);
    imageURL=URL.createObjectURL(file);const img=new Image();
    img.onload=()=>{imageObject=img;const prev=$("#image-preview");if(prev){prev.src=imageURL;prev.hidden=false;}const info=$("#image-info");if(info)info.textContent=file.name+" · "+img.naturalWidth+" × "+img.naturalHeight+" · "+(file.size/1024).toFixed(1)+" KB";const w=$("#image-width"),h=$("#image-height");if(w&&h){w.value=img.naturalWidth;h.value=img.naturalHeight;}const cw=$("#crop-width"),ch=$("#crop-height");if(cw&&ch){cw.value=img.naturalWidth;ch.value=img.naturalHeight;}showStatus("");};
    img.onerror=()=>showStatus("This image could not be opened in your browser.");
    img.src=imageURL;
  };
  const downloadBlob = (blob,name) => {const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);};
  const processImage = async id => {
    if(!imageObject)throw new Error("Choose an image first.");
    const canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");
    let width=imageObject.naturalWidth,height=imageObject.naturalHeight,x=0,y=0;
    if(id==="image-resizer"){width=Number($("#image-width").value);height=Number($("#image-height").value);if($("#image-lock").checked){const ratio=imageObject.naturalWidth/imageObject.naturalHeight;if(document.activeElement===$("#image-height"))width=Math.round(height*ratio);else height=Math.round(width/ratio);$("#image-width").value=width;$("#image-height").value=height;}if(width<1||height<1||width>8000||height>8000)throw new Error("Choose dimensions between 1 and 8,000 pixels.");}
    if(id==="image-cropper"){x=Number($("#crop-x").value);y=Number($("#crop-y").value);width=Number($("#crop-width").value);height=Number($("#crop-height").value);if([x,y,width,height].some(n=>!Number.isFinite(n)||n<0)||width<1||height<1||x+width>imageObject.naturalWidth||y+height>imageObject.naturalHeight)throw new Error("The crop rectangle must fit inside the image ("+imageObject.naturalWidth+" × "+imageObject.naturalHeight+").");}
    canvas.width=width;canvas.height=height;
    ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality="high";
    if(id==="image-compressor"||(id==="image-converter"&&$("#image-format").value==="image/jpeg")){ctx.fillStyle="#fff";ctx.fillRect(0,0,width,height);}
    if(id==="image-cropper")ctx.drawImage(imageObject,x,y,width,height,0,0,width,height);else ctx.drawImage(imageObject,0,0,width,height);
    let mime="image/png",quality;
    if(id==="image-compressor"){mime="image/jpeg";quality=Number($("#image-quality").value)/100;}
    if(id==="image-converter")mime=$("#image-format").value;
    const blob=await new Promise(resolve=>canvas.toBlob(resolve,mime,quality));
    if(!blob)throw new Error("This image format is not supported by your browser.");const actualMime=blob.type||mime;
    if(resultImageURL)URL.revokeObjectURL(resultImageURL);const previewURL=URL.createObjectURL(blob);resultImageURL=previewURL;
    const ext=actualMime.split("/")[1].replace("jpeg","jpg");
    const box=$("#tool-result");box.innerHTML='<div class="result-title">Image ready</div><div class="result-text">'+width+' × '+height+' px · '+(blob.size/1024).toFixed(1)+' KB · '+esc(actualMime.split("/")[1].toUpperCase())+'</div><img class="image-preview" src="'+previewURL+'" alt="Processed image preview"><div class="tool-actions"><button type="button" class="button button-primary button-small" data-download-blob="'+previewURL+'" data-filename="everydaykit-image.'+ext+'">Download image</button></div>';
    box.dataset.result="";
  };
  const runTool = async () => {
    const id=location.hash.replace(/^#tool\//,"").split("/")[0],get=x=>$(x),input=$("#tool-input")?$("#tool-input").value:"";
    try{
      showStatus("");const result=$("#tool-result");if(result)result.innerHTML="";
      switch(id){
        case "qr-code-generator":{const value=$("#qr-input").value.trim();if(!value)throw new Error("Enter text or a URL.");const bytes=new TextEncoder().encode(value);if(bytes.length>78)throw new Error("This compact QR tool supports up to 78 UTF-8 bytes. Shorten the text or use a link shortener.");const grid=buildQr(bytes),canvas=$("#qr-canvas"),scale=Number($("#qr-size").value),modulePx=scale===240?6:scale===320?8:12;canvas.width=canvas.height=(grid.length+8)*modulePx;canvas.hidden=false;const ctx=canvas.getContext("2d");ctx.fillStyle="#fff";ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle="#111";for(let y=0;y<grid.length;y++)for(let x=0;x<grid.length;x++)if(grid[y][x])ctx.fillRect((x+4)*modulePx,(y+4)*modulePx,modulePx,modulePx);const box=$("#tool-result");box.innerHTML='<div class="result-title">QR code ready</div><div class="result-text">Scan to open: '+esc(value)+'</div><div class="tool-actions"><button type="button" class="button button-secondary button-small" data-download-canvas="qr-canvas" data-filename="everydaykit-qr-code.png">Download PNG</button></div>';box.dataset.result=value;break;}
        case "password-generator":{const length=Number($("#pass-length").value),count=Number($("#pass-count").value);if(!Number.isInteger(length)||length<4||length>64)throw new Error("Choose a length from 4 to 64 characters.");if(!crypto.getRandomValues)throw new Error("Secure random generation is unavailable in this browser.");showResult(Array.from({length:count},()=>makePassword(length)).join("\n"),{title:"Generated passwords"});break;}
        case "word-counter":case "character-counter":{const words=splitWords(input),chars=[...input].length,charsNoSpace=[...input.replace(/\s/g,"")].length,sentences=(input.match(/[.!?]+(?=\s|$)/g)||[]).length,paragraphs=input.trim()?input.trim().split(/\n\s*\n/).length:0,read=Math.ceil(words.length/200);showResult(id==="word-counter"?"Words: "+words.length+"\nCharacters: "+chars+"\nCharacters without spaces: "+charsNoSpace+"\nSentences: "+sentences+"\nParagraphs: "+paragraphs+"\nEstimated reading time: "+read+" min":"Characters: "+chars+"\nCharacters without spaces: "+charsNoSpace+"\nWords: "+words.length,{title:"Text statistics"});break;}
        case "text-case-converter":showResult(caseConvert(input,$("#case-mode").value),{title:"Converted text"});break;
        case "text-formatter":{let lines=input.split(/\r?\n/),lineMode=$("#format-lines").value;if(lineMode==="trim")lines=lines.map(x=>x.trim());if(lineMode==="dedupe"){const seen=new Set();lines=lines.filter(x=>{const k=x.trim();if(seen.has(k))return false;seen.add(k);return true;});}if(lineMode==="sort")lines.sort((a,b)=>a.localeCompare(b));if($("#format-spaces").value==="collapse")lines=lines.map(x=>x.replace(/[ \t]{2,}/g," "));if($("#format-spaces").value==="blank")lines=lines.filter(x=>x.trim());showResult(lines.join("\n"),{title:"Formatted text"});break;}
        case "json-formatter":{const parsed=JSON.parse(input),compact=$("#json-style").value==="compact";showResult(JSON.stringify(parsed,null,compact?0:2),{title:compact?"Minified JSON":"Formatted JSON"});break;}
        case "json-validator":{JSON.parse(input);showResult("This is valid JSON. Your JSON syntax is well formed.",{title:"Valid JSON"});break;}
        case "base64-encoder-decoder":{const mode=$("#codec-mode").value;let out;if(mode==="encode")out=encodeBase64(input);else{const binary=atob(input.trim()),bytes=Uint8Array.from(binary,c=>c.charCodeAt(0));out=new TextDecoder("utf-8",{fatal:true}).decode(bytes);}showResult(out,{title:mode==="encode"?"Base64 encoded":"Decoded text"});break;}
        case "url-encoder-decoder":{const mode=$("#url-mode").value;showResult(mode==="encode"?encodeURIComponent(input):decodeURIComponent(input.trim()),{title:mode==="encode"?"Encoded component":"Decoded text"});break;}
        case "color-picker":case "color-converter":{const c=id==="color-picker"?parseColor($("#color-hex").value):parseColor($("#color-convert-input").value);if(!c)throw new Error("Enter a HEX color or a valid rgb() or hsl() value.");const hsl=rgbHsl(c),hex=rgbHex(c.r,c.g,c.b);if($("#color-hex"))$("#color-hex").value=hex;if($("#color-value"))$("#color-value").value=hex;showResult("HEX: "+hex+"\nRGB: rgb("+c.r+", "+c.g+", "+c.b+")\nHSL: hsl("+hsl.h+", "+hsl.s+"%, "+hsl.l+"%)",{title:"Color values"});break;}
        case "unit-converter":{const n=readNumber("#unit-value","a value"),kind=$("#unit-kind").value,from=$("#unit-from").value,to=$("#unit-to").value;if(!Number.isFinite(n))throw new Error("Enter a valid number.");showResult(niceNumber(convertUnit(n,kind,from,to))+" "+to,{title:niceNumber(n)+" "+from+" converted to"});break;}
        case "percentage-calculator":{const a=readNumber("#percent-a","the first value"),b=readNumber("#percent-b","the second value"),mode=$("#percent-mode").value;let out,title;if(mode==="of"){out=a/100*b;title=a+"% of "+b;}else if(mode==="is"){if(b===0)throw new Error("The second value cannot be zero.");out=a/b*100;title=a+" is what percent of "+b;}else if(mode==="change"){if(a===0)throw new Error("The starting value cannot be zero.");out=(b-a)/Math.abs(a)*100;title="Percentage change from "+a+" to "+b;}else if(mode==="increase"){out=a*(1+b/100);title=a+" increased by "+b+"%";}else{out=a*(1-b/100);title=a+" decreased by "+b+"%";}showResult(niceNumber(out)+(mode==="is"||mode==="change"?"%":""),{title:title});break;}
        case "age-calculator":{const born=new Date($("#birth-date").value+"T00:00:00"),at=new Date($("#age-date").value+"T00:00:00");if(Number.isNaN(born.getTime())||Number.isNaN(at.getTime()))throw new Error("Choose both dates.");if(born>at)throw new Error("Date of birth must be on or before the calculation date.");let y=at.getFullYear()-born.getFullYear(),m=at.getMonth()-born.getMonth(),d=at.getDate()-born.getDate();if(d<0){m--;d+=new Date(at.getFullYear(),at.getMonth(),0).getDate();}if(m<0){y--;m+=12;}const days=(Date.UTC(at.getFullYear(),at.getMonth(),at.getDate())-Date.UTC(born.getFullYear(),born.getMonth(),born.getDate()))/86400000;showResult(y+" years, "+m+" months and "+d+" days\nTotal: "+days.toLocaleString()+" days",{title:"Age"});break;}
        case "date-calculator":{const mode=$("#date-mode").value,dateA=new Date($("#date-a").value+"T00:00:00");if(Number.isNaN(dateA.getTime()))throw new Error("Choose a valid start date.");if(mode==="between"){const dateB=new Date($("#date-b").value+"T00:00:00");if(Number.isNaN(dateB.getTime()))throw new Error("Choose a valid end date.");const days=Math.abs(Date.UTC(dateB.getFullYear(),dateB.getMonth(),dateB.getDate())-Date.UTC(dateA.getFullYear(),dateA.getMonth(),dateA.getDate()))/86400000;showResult(days.toLocaleString()+" days",{title:"Time between the dates"});}else{const count=readNumber("#date-days","a number of days");if(!Number.isInteger(count)||Math.abs(count)>1000000)throw new Error("Enter a whole number of days within ±1,000,000.");dateA.setDate(dateA.getDate()+(mode==="add"?count:-count));showResult(dateA.toLocaleDateString(undefined,{year:"numeric",month:"long",day:"numeric"}),{title:mode==="add"?"Date after adding "+count+" days":"Date after subtracting "+count+" days"});}break;}
        case "bmi-calculator":{const w=readNumber("#bmi-weight","a weight"),h=readNumber("#bmi-height","a height")/100;if(!(w>0&&h>0))throw new Error("Enter a positive weight and height.");const bmi=w/(h*h),range=bmi<18.5?"below the commonly used adult reference range":bmi<25?"within the commonly used adult reference range":bmi<30?"above the commonly used adult reference range":"in the higher adult reference range";showResult("BMI: "+bmi.toFixed(1)+"\nThis is "+range+".",{title:"Body mass index estimate"});break;}
        case "calculator":showResult(niceNumber(calculateExpression($("#calc-input").value)),{title:"Answer"});break;
        case "random-number-generator":{const min=readNumber("#random-min","a minimum"),max=readNumber("#random-max","a maximum"),count=readNumber("#random-count","a result count");if(!Number.isSafeInteger(min)||!Number.isSafeInteger(max)||max<min)throw new Error("Enter whole-number bounds where the maximum is at least the minimum.");if(!Number.isInteger(count)||count<1||count>100)throw new Error("Choose between 1 and 100 results.");const range=max-min+1;if(!Number.isSafeInteger(range)||range>4294967296)throw new Error("Choose a range no larger than 4,294,967,296 numbers.");if($("#random-unique").checked&&count>range)throw new Error("There are not enough numbers in this range for unique results.");const nums=[];if($("#random-unique").checked){const chosen=new Set();for(let j=range-count;j<range;j++){const candidate=randInt(j+1);chosen.add(chosen.has(candidate)?j:candidate);}for(const value of chosen)nums.push(min+value);}else for(let i=0;i<count;i++)nums.push(min+randInt(range));showResult(nums.join(", "),{title:"Random number"+(count>1?"s":"")});break;}
        case "random-name-picker":pickName();break;
        case "lorem-ipsum-generator":{const unit=$("#lorem-unit").value,count=Number($("#lorem-count").value);if(!Number.isInteger(count)||count<1||count>30)throw new Error("Choose an amount from 1 to 30.");const source="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";const words=source.split(" "),sentences=[];for(let i=0;i<90;i++){let s=[];const length=8+(i%7),start=(i*5)%words.length;for(let n=0;n<length;n++)s.push(words[(start+n)%words.length]);const sentence=s.join(" ");sentences.push(sentence[0].toUpperCase()+sentence.slice(1)+".");}let out;if(unit==="words")out=Array.from({length:count},(_,i)=>words[i%words.length]).join(" ");else if(unit==="sentences")out=sentences.slice(0,count).join(" ");else out=Array.from({length:count},(_,i)=>sentences.slice(i*3,i*3+3).join(" ")).join("\n\n");showResult(out,{title:"Generated placeholder text"});break;}
        case "uuid-generator":{const count=Number($("#uuid-count").value),list=[];for(let i=0;i<count;i++)list.push(crypto.randomUUID?crypto.randomUUID():makeUuid());showResult(list.join("\n"),{title:"UUID v4 identifiers"});break;}
        case "image-resizer":case "image-compressor":case "image-converter":case "image-cropper":await processImage(id);break;
      }
    }catch(error){fail(error instanceof SyntaxError?"JSON syntax error: "+error.message:error.message||"Something went wrong.");}
  };
  const makeUuid = () => {const bytes=crypto.getRandomValues(new Uint8Array(16));bytes[6]=(bytes[6]&15)|64;bytes[8]=(bytes[8]&63)|128;const s=[...bytes].map(x=>x.toString(16).padStart(2,"0")).join("");return s.slice(0,8)+"-"+s.slice(8,12)+"-"+s.slice(12,16)+"-"+s.slice(16,20)+"-"+s.slice(20);};
  const pickName = () => {const input=$("#names-input");if(originalNames===null)originalNames=input.value;const names=(input.value||"").split(/\r?\n/).map(s=>s.trim()).filter(Boolean);if(!names.length){fail("Enter at least one name.");return;}const index=randInt(names.length),chosen=names[index];showResult(chosen,{title:"Picked name"});if($("#names-remove").checked){names.splice(index,1);input.value=names.join("\n");showStatus(names.length+" name"+(names.length===1?"":"s")+" remaining.");}};
  const stopw={elapsed:0,started:null,interval:null,running:false,laps:[]};
  const cd={remaining:0,due:null,interval:null,running:false,finished:false};
  const monotonicNow = () => typeof performance!=="undefined"?performance.now():Date.now();
  const formatDuration = ms => {const cs=Math.floor(ms/10),mins=Math.floor(cs/6000),secs=Math.floor(cs/100)%60,hundredths=cs%100;return String(mins).padStart(2,"0")+":"+String(secs).padStart(2,"0")+"."+String(hundredths).padStart(2,"0");};
  const refreshStopwatch = () => {const d=$("#stopwatch-display");if(d)d.textContent=formatDuration(stopw.elapsed+(stopw.running?monotonicNow()-stopw.started:0));};
  const refreshCountdown = () => {const d=$("#countdown-display");if(!d)return;let remain=cd.remaining;if(cd.running)remain=Math.max(0,cd.due-monotonicNow());const total=Math.ceil(remain/1000);d.textContent=String(Math.floor(total/60)).padStart(2,"0")+":"+String(total%60).padStart(2,"0");};
  const beep = () => {try{const context=new (window.AudioContext||window.webkitAudioContext)(),osc=context.createOscillator(),gain=context.createGain();osc.frequency.value=880;gain.gain.value=.08;osc.connect(gain);gain.connect(context.destination);osc.start();osc.stop(context.currentTime+.35);osc.onended=()=>context.close();}catch{}};
  const qrGfMul = (x,y) => {let z=0;for(let i=7;i>=0;i--){z=(z<<1)^((z>>>7)*0x11d);z^=((y>>>i)&1)*x;}return z;};
  const qrEcc = (data,count) => {
    let gen=[1];
    for(let i=0;i<count;i++){const next=Array(gen.length+1).fill(0);for(let j=0;j<gen.length;j++){next[j]^=gen[j];next[j+1]^=qrGfMul(gen[j],1<<i);}gen=next;}
    const rem=Array(count).fill(0);
    for(const byte of data){const factor=byte^rem.shift();rem.push(0);for(let j=0;j<count;j++)rem[j]^=qrGfMul(gen[j+1],factor);}
    return rem;
  };
  const buildQr = bytes => {
    const specs=[[17,19,7],[32,34,10],[53,55,15],[78,80,20]];
    const spec=specs.find(x=>bytes.length<=x[0]);if(!spec)throw new Error("QR payload is too long.");
    const version=specs.indexOf(spec)+1,dataCount=spec[1],eccCount=spec[2],bits=[];
    const append=(value,length)=>{for(let i=length-1;i>=0;i--)bits.push((value>>>i)&1);};
    append(4,4);append(bytes.length,8);for(const b of bytes)append(b,8);
    const maxBits=dataCount*8;for(let i=0;i<Math.min(4,maxBits-bits.length);i++)bits.push(0);while(bits.length%8)bits.push(0);
    const data=[];for(let i=0;i<bits.length;i+=8){let v=0;for(let j=0;j<8;j++)v=(v<<1)|bits[i+j];data.push(v);}
    for(let pad=0;data.length<dataCount;pad++)data.push(pad%2?0x11:0xec);
    const codewords=data.concat(qrEcc(data,eccCount)),size=17+4*version,matrix=Array.from({length:size},()=>Array(size).fill(false)),reserved=Array.from({length:size},()=>Array(size).fill(false));
    const fn=(x,y,dark)=>{if(x>=0&&x<size&&y>=0&&y<size){matrix[y][x]=dark;reserved[y][x]=true;}};
    const finder=(cx,cy)=>{for(let dy=-1;dy<=7;dy++)for(let dx=-1;dx<=7;dx++){const x=cx+dx,y=cy+dy;if(x<0||x>=size||y<0||y>=size)continue;const on=dx>=0&&dx<=6&&dy>=0&&dy<=6&&(dx===0||dx===6||dy===0||dy===6||(dx>=2&&dx<=4&&dy>=2&&dy<=4));fn(x,y,on);}};
    finder(0,0);finder(size-7,0);finder(0,size-7);
    for(let i=8;i<size-8;i++){fn(i,6,i%2===0);fn(6,i,i%2===0);}
    if(version>=2){const center=version===2?18:version===3?22:26;if(!reserved[center][center])for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++)fn(center+dx,center+dy,Math.max(Math.abs(dx),Math.abs(dy))!==1);}
    // Reserve both copies of the format information and the fixed dark module.
    for(let i=0;i<=5;i++)fn(8,i,false);fn(8,7,false);fn(8,8,false);fn(7,8,false);for(let i=9;i<15;i++)fn(14-i,8,false);
    for(let i=0;i<8;i++)fn(size-1-i,8,false);for(let i=8;i<15;i++)fn(8,size-15+i,false);
    fn(8,size-8,true);
    let bitIndex=0,upward=true;
    for(let right=size-1;right>=1;right-=2){
      if(right===6)right=5;
      for(let vert=0;vert<size;vert++){
        const y=upward?size-1-vert:vert;
        for(let offset=0;offset<2;offset++){const x=right-offset;if(reserved[y][x])continue;let bit=bitIndex<codewords.length*8?((codewords[Math.floor(bitIndex/8)]>>>(7-bitIndex%8))&1):0;bitIndex++;if((x+y)%2===0)bit^=1;matrix[y][x]=bit===1;}
      }
      upward=!upward;
    }
    const formatData=(1<<3),bch=(value)=>{let rem=value;for(let i=0;i<10;i++)rem=(rem<<1)^((rem>>>9)*0x537);return ((value<<10)|rem)^0x5412;},format=bch(formatData);
    const put=(x,y,i)=>{matrix[y][x]=((format>>>i)&1)!==0;};
    for(let i=0;i<=5;i++)put(8,i,i);put(8,7,6);put(8,8,7);put(7,8,8);for(let i=9;i<15;i++)put(14-i,8,i);
    for(let i=0;i<8;i++)put(size-1-i,8,i);for(let i=8;i<15;i++)put(8,size-15+i,i);
    matrix[size-8][8]=true;
    return matrix;
  };
  const doTimer = action => {
    if(action==="start"&&!stopw.running){stopw.started=monotonicNow();stopw.running=true;if(!stopw.interval)stopw.interval=setInterval(refreshStopwatch,31);refreshStopwatch();}
    if(action==="pause"&&stopw.running){stopw.elapsed+=monotonicNow()-stopw.started;stopw.running=false;clearInterval(stopw.interval);stopw.interval=null;refreshStopwatch();}
    if(action==="reset"){stopw.elapsed=0;stopw.started=null;stopw.running=false;clearInterval(stopw.interval);stopw.interval=null;stopw.laps=[];refreshStopwatch();const l=$("#stopwatch-laps");if(l)l.innerHTML="";}
    if(action==="lap"&&stopw.running){stopw.laps.unshift(stopw.elapsed+monotonicNow()-stopw.started);const l=$("#stopwatch-laps");if(l)l.innerHTML=stopw.laps.map((ms,i)=>'<li>Lap '+(stopw.laps.length-i)+': '+formatDuration(ms)+'</li>').join("");}
    if(action==="countdown-start"){let mins,secs;try{mins=readNumber("#timer-minutes","minutes");secs=readNumber("#timer-seconds","seconds");}catch(error){showStatus(error.message);return;}if(!Number.isInteger(mins)||!Number.isInteger(secs)||mins<0||mins>999||secs<0||secs>59){showStatus("Enter 0–999 minutes and 0–59 seconds.");return;}if(!cd.running){if(!cd.remaining)cd.remaining=(mins*60+secs)*1000;if(cd.remaining<=0){showStatus("Choose a timer longer than zero.");return;}cd.due=monotonicNow()+cd.remaining;cd.running=true;cd.finished=false;if(!cd.interval)cd.interval=setInterval(()=>{if(!cd.running)return;cd.remaining=Math.max(0,cd.due-monotonicNow());refreshCountdown();if(cd.remaining===0){cd.running=false;cd.finished=true;clearInterval(cd.interval);cd.interval=null;beep();showStatus("Timer complete.");}},200);showStatus("Timer running.");refreshCountdown();}}
    if(action==="countdown-pause"&&cd.running){cd.remaining=Math.max(0,cd.due-monotonicNow());cd.running=false;clearInterval(cd.interval);cd.interval=null;refreshCountdown();showStatus("Timer paused.");}
    if(action==="countdown-reset"){cd.running=false;clearInterval(cd.interval);cd.interval=null;cd.remaining=0;cd.finished=false;refreshCountdown();showStatus("Timer reset.");}
  };
  const renderSearch = (input,box) => {
    const q=input.value.trim().toLowerCase();
    if(!q){box.hidden=true;input.setAttribute("aria-expanded","false");return;}
    const hits=tools.filter(t=>(t.name+" "+t.description+" "+t.category).toLowerCase().includes(q)).slice(0,7);
    const guideHits=guides.filter(g=>(g.title+" "+g.summary+" "+g.category).toLowerCase().includes(q)).slice(0,3);
    const categoryHits=categories.filter(c=>(c.name+" "+c.description).toLowerCase().includes(q)).slice(0,2);
    const pageHits=sitePages.filter(p=>(p.name+" "+p.description).toLowerCase().includes(q)).slice(0,3);
    if(!hits.length&&!guideHits.length&&!categoryHits.length&&!pageHits.length){box.innerHTML='<div class="no-results">No matches yet. Try a shorter search, like “date” or “text”.</div>';}
    else box.innerHTML=hits.map(t=>'<a class="search-result" href="'+toolUrl(t.id)+'">'+icon(t.icon)+'<span><strong>'+esc(t.name)+'</strong><small>'+esc(t.category)+' · '+esc(t.description)+'</small></span></a>').join("")+guideHits.map(g=>'<a class="search-result" href="'+guideUrl(g.id)+'">'+icon(g.icon)+'<span><strong>'+esc(g.title)+'</strong><small>Learning guide · '+esc(g.summary)+'</small></span></a>').join("")+categoryHits.map(c=>'<a class="search-result" href="#category/'+c.id+'">'+icon(c.icon)+'<span><strong>'+esc(c.name)+'</strong><small>Tool category · '+esc(c.description)+'</small></span></a>').join("")+pageHits.map(p=>'<a class="search-result" href="'+p.url+'">'+icon(p.icon)+'<span><strong>'+esc(p.name)+'</strong><small>'+esc(p.description)+'</small></span></a>').join("");
    box.hidden=false;input.setAttribute("aria-expanded","true");
  };
  const updateGridSearch = input => {
    const grid=$("#tools-grid");if(!grid)return;const q=input.value.trim().toLowerCase();
    const categoryId=location.hash.startsWith("#category/")?location.hash.slice("#category/".length):"";
    const category=categories.find(c=>c.id===categoryId);
    const base=category?tools.filter(t=>t.category.toLowerCase()===category.name.toLowerCase()):tools;
    const visible=base.filter(t=>(t.name+" "+t.description+" "+t.category).toLowerCase().includes(q));
    grid.innerHTML=visible.map(toolCard).join("")||'<div class="no-results" style="grid-column:1/-1">No tools match that search. Try another word.</div>';
    const count=$(".results-count");if(count)count.textContent=visible.length+" tool"+(visible.length===1?"":"s");
  };
  const toggleFavorite = id => {
    const list=favorites(),button=$('[data-favorite="'+CSS.escape(id)+'"]'),exists=list.includes(id);
    const next=exists?list.filter(x=>x!==id):[id,...list];writeList(STORE.favorites,next);
    if(button){button.setAttribute("aria-pressed",String(!exists));button.textContent=exists?"☆":"★";button.setAttribute("aria-label",(exists?"Add ":"Remove ")+(toolById(id)?.name||"tool")+(exists?" to":" from")+" favorites");}
    toast(exists?"Removed from favorites":"Added to favorites");
  };
  const handleContactSubmit = event => {
    event.preventDefault();const name=$("#contact-name").value.trim(),email=$("#contact-email").value.trim(),message=$("#contact-message").value.trim(),error=$("#contact-error");
    const validEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if(!name){error.textContent="Please enter your name.";$("#contact-name").focus();return;}
    if(!validEmail){error.textContent="Enter a valid email address.";$("#contact-email").focus();return;}
    if(message.length<10){error.textContent="Please add a little more detail (at least 10 characters).";$("#contact-message").focus();return;}
    if(message.length>3000){error.textContent="Keep the message under 3,000 characters.";return;}
    error.textContent="";
    const subject=encodeURIComponent("EverydayKit message from "+name),body=encodeURIComponent("From: "+name+"\nReply to: "+email+"\n\n"+message);
    const mailto="mailto:kimdokja550orv@gmail.com?subject="+subject+"&body="+body;
    const success=document.createElement("div");success.className="success-message";success.setAttribute("role","status");success.textContent="Your email app should open with your message ready to review and send. EverydayKit has not sent or stored it.";
    $("#contact-form").appendChild(success);
    window.location.href=mailto;
  };
  const copyFallback = value => {const area=document.createElement("textarea");area.value=value;area.setAttribute("readonly","");area.style.position="fixed";area.style.opacity="0";document.body.appendChild(area);area.select();let ok=false;try{ok=document.execCommand("copy");}catch{}area.remove();toast(ok?"Copied to clipboard":"Clipboard access is unavailable");};
  document.addEventListener("click",event=>{
    const target=event.target.closest("a,button");if(!target)return;
    if(target.matches("[data-favorite]")){event.preventDefault();toggleFavorite(target.dataset.favorite);return;}
    if(target.matches("[data-go]")){location.hash=target.dataset.go;return;}
    if(target.matches("[data-filter]")){const id=target.dataset.filter;if(id)location.hash="category/"+id;else location.hash="tools";return;}
    if(target.matches(".faq-question")){const isOpen=target.getAttribute("aria-expanded")==="true";target.setAttribute("aria-expanded",String(!isOpen));const panel=$("#"+CSS.escape(target.getAttribute("aria-controls")));if(panel)panel.hidden=isOpen;return;}
    if(target.matches("[data-copy-result]")){const box=$("#tool-result"),value=box&&box.dataset.result||"";if(!value){toast("There is no text result to copy");return;}if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(value).then(()=>toast("Copied to clipboard")).catch(()=>copyFallback(value));}else copyFallback(value);return;}
    if(target.matches("[data-download-result]")){const value=$("#tool-result")?.dataset.result||"";downloadBlob(new Blob([value],{type:"text/plain;charset=utf-8"}),target.dataset.filename||"result.txt");return;}
    if(target.matches("[data-download-canvas]")){const canvas=$("#"+CSS.escape(target.dataset.downloadCanvas));if(canvas)canvas.toBlob(blob=>downloadBlob(blob,target.dataset.filename||"image.png"));return;}
    if(target.matches("[data-download-blob]")){const url=target.dataset.downloadBlob,a=document.createElement("a");a.href=url;a.download=target.dataset.filename||"image.png";a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);return;}
    if(target.matches("[data-timer]")){doTimer(target.dataset.timer);return;}
    if(target.matches("[data-action=pick-name]")){pickName();return;}
    if(target.matches("[data-action=reset-names]")){if(originalNames!==null)$("#names-input").value=originalNames;const r=$("#tool-result");if(r)r.innerHTML="";showStatus("The original name list has been restored.");return;}
    if(target.matches(".menu-toggle")){const nav=$(".mobile-nav"),open=target.getAttribute("aria-expanded")==="true";target.setAttribute("aria-expanded",String(!open));target.setAttribute("aria-label",open?"Open navigation":"Close navigation");const glyph=target.querySelector(".menu-glyph");if(glyph)glyph.textContent=open?"☰":"×";if(nav)nav.hidden=open;return;}
    if(target.matches(".theme-toggle")){const dark=document.documentElement.dataset.theme!=="dark";document.documentElement.dataset.theme=dark?"dark":"light";try{localStorage.setItem(STORE.theme,dark?"dark":"light");}catch{}target.querySelector(".theme-icon").textContent=dark?"☀":"☾";target.setAttribute("aria-label",dark?"Switch to light theme":"Switch to dark theme");return;}
  });
  document.addEventListener("input",event=>{
    const input=event.target;if(input.matches(".tool-search")){const box=input.parentElement.parentElement.querySelector(".search-results");renderSearch(input,box);if($("#tools-grid"))updateGridSearch(input);}
    if(input.id==="unit-kind")populateUnits();
    if(input.id==="names-input")originalNames=input.value;
    if(input.id==="image-width"&&$("#image-lock")?.checked&&imageObject)$("#image-height").value=Math.round(Number(input.value)*imageObject.naturalHeight/imageObject.naturalWidth);
    if(input.id==="image-height"&&$("#image-lock")?.checked&&imageObject)$("#image-width").value=Math.round(Number(input.value)*imageObject.naturalWidth/imageObject.naturalHeight);
  });
  document.addEventListener("change",event=>{if(event.target.id==="unit-kind")populateUnits();if(event.target.id==="image-file")loadImage();});
  document.addEventListener("submit",event=>{
    if(event.target.id==="tool-form"){event.preventDefault();runTool();}
    if(event.target.id==="contact-form")handleContactSubmit(event);
  });
  document.addEventListener("reset",event=>{if(event.target.id==="tool-form"){setTimeout(()=>{const result=$("#tool-result");if(result)result.innerHTML="";showStatus("");if(location.hash.includes("qr-code-generator")){const c=$("#qr-canvas");if(c)c.hidden=true;}if(location.hash.includes("image-")){if(imageURL)URL.revokeObjectURL(imageURL);if(resultImageURL)URL.revokeObjectURL(resultImageURL);imageURL=null;resultImageURL=null;imageObject=null;const preview=$("#image-preview"),info=$("#image-info");if(preview)preview.hidden=true;if(info)info.textContent="No image selected yet."; }},0);}});
  document.addEventListener("reset",event=>{if(event.target.id==="contact-form"){setTimeout(()=>{const error=$("#contact-error"),success=$("#contact-form .success-message");if(error)error.textContent="";if(success)success.remove();},0);}});
  window.addEventListener("hashchange",()=>{const nav=$(".mobile-nav"),button=$(".menu-toggle");if(nav){nav.hidden=true;button?.setAttribute("aria-expanded","false");const glyph=button?.querySelector(".menu-glyph");if(glyph)glyph.textContent="☰";}if(imageURL)URL.revokeObjectURL(imageURL);if(resultImageURL)URL.revokeObjectURL(resultImageURL);imageURL=null;resultImageURL=null;imageObject=null;originalNames=null;renderRoute();window.scrollTo(0,0);$("#main").focus();});
  document.addEventListener("keydown",event=>{if(event.key==="/"&&!/input|textarea|select/i.test(document.activeElement.tagName)){event.preventDefault();const search=$(".tool-search");if(search)search.focus();}if(event.key==="Escape"){const box=$(".search-results");if(box){box.hidden=true;$(".tool-search")?.setAttribute("aria-expanded","false");}}});
  try{const theme=localStorage.getItem(STORE.theme);if(theme==="dark"){document.documentElement.dataset.theme="dark";const button=$(".theme-toggle");if(button){button.querySelector(".theme-icon").textContent="☀";button.setAttribute("aria-label","Switch to light theme");}}}catch{}
  const year=$("#year");if(year)year.textContent=new Date().getFullYear();
  renderRoute();
})();
