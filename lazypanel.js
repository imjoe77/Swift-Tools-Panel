let cal = document.getElementById("calci");
let weat = document.getElementById("weather");
let jk = document.getElementById("joke");
let cric = document.getElementById("espn");
let maindiv, wbtn, wbtn2, maindiv2, wcard, container,nbtn1, nbtn2, nbtn3, nbtn4;
let facts, e1, e2, sint, city, user, pass, defbg, cricbg, title, detail, moreinfo, nav;
let iscardloaded = false;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const statusEl = document.getElementById("status");
const summaryEl = document.getElementById("summary");

//FUCTIONS DEFINITIONS
//CALCULATOR LOGIC
async function loadcalculator() {
  const container = document.getElementById("loadcalci");
  container.innerHTML = "🔄 Loading Calculator...";
  container.style.color = "white";
  container.style.fontSize = "20px";
  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        container.innerHTML = "📥 Fetching the tool into the system...";
        resolve();
      }, 2000);
    });

    
    await new Promise((resolve) => {
      setTimeout(() => {
        container.innerHTML = "⚙️ Initializing tool components...";
        resolve();
      }, 2000);
    });

    
    await new Promise((resolve) => {
      setTimeout(() => {
        container.innerHTML = "✅ PLEASE SCROLL DOWN — The Calculator has been loaded.";
        calciui(container);
        addlogic(container);
        resolve();
      }, 2000);
    });
    container.style.color = "white";
    container.style.fontSize = "20px";
   }
  catch (err) {
    container.innerHTML = "❌ Failed to load calculator!!!"
    container.style.color = "white";
    container.style.fontSize = "15px";
  }
}
//CALCULATOR LAYOUT
function calciui() {
  maindiv = document.createElement("div");
  maindiv.className = "main";

  const b1 = document.createElement("button");
  b1.id = "clr";
  b1.innerText = "C";
  maindiv.appendChild(b1);
  const b2 = document.createElement("button");
  b2.id = "clr2";
  b2.innerText = "REMOVE";
  maindiv.appendChild(b2);

  const caldiv = document.createElement("div");
  caldiv.className = "calc";
  maindiv.appendChild(caldiv);

  const screen = document.createElement("div");
  screen.className = "itemlast";
  screen.innerText = "";
  caldiv.appendChild(screen);

  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "*", "/", "+", "="];
  buttons.forEach(label => {
    const btn = document.createElement("button");
    btn.className = "item";
    btn.textContent = label;
    caldiv.appendChild(btn);
  });
  document.body.appendChild(maindiv);
}
//CALCULATOR WORKING LOGIC
function addlogic(container) {

  let clr = document.getElementById("clr");
  let rem = document.getElementById("clr2");

  const screen = document.querySelector(".itemlast")
  const buttons = document.querySelectorAll(".item")

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.innerText;
      screen.style.color = "white";
      screen.style.textAlign = "right";
      screen.style.fontSize = "30px";
      screen.style.display = "flex";
      screen.style.justifyContent = "right";
      screen.style.paddingRight = "10px";
      screen.style.paddingTop = "10px";

      if (value === "=") {
        try {
          screen.innerText = eval(screen.innerText);
        } catch {
          screen.innerText = "Error!!";
        }
      } else if (value === "C") {
        screen.innerText = "";
      } else {
        screen.innerText += value;
      }
      //REMOVE AND CLR BUTTONS
      clr.addEventListener("click", () => {
        screen.innerText = "";
      });
      rem.addEventListener("click", () => {
        maindiv.remove();
        container.innerHTML = "";
      });

    });
  });
}

//WEATHER APP LOGIC
async function loadweather() {
  container = document.getElementById("loadweather");
  container.innerHTML = "🔄 Loading Weather Forecaster...";
  container.style.color = "white";
  container.style.fontSize = "20px";
  try {
   await new Promise((resolve) => {
      setTimeout(() => {
        container.innerHTML = "📥 Fetching the tool into the system...";
        resolve();
      }, 2000);
    });

    
    await new Promise((resolve) => {
      setTimeout(() => {
        container.innerHTML = "⚙️ Initializing tool components...";
        resolve();
      }, 2000);
    });

    
    await new Promise((resolve) => {
      setTimeout(() => {
        container.innerHTML = "✅ PLEASE SCROLL DOWN — Weather App has been loaded.";
       weatherui();
        resolve();
      }, 2000);
    });
   container.style.color = "white";
    container.style.fontSize = "20px";
   }
  catch (err) {
    container.innerHTML = "❌ Failed to load weather app!!!"
    container.style.color = "white";
    container.style.fontSize = "15px";
  }
}
//UI 1
function weatherui() {
  maindiv = document.createElement("div");
  maindiv.className = "weatbg";
  let img = document.createElement("img");
  img.src = "images/umb.png";
  img.id = "weatimg";
  maindiv.appendChild(img);
  h1 = document.createElement("h1");
  h1.innerText = "Breeze";
  h1.id = "w1";
  maindiv.appendChild(h1);
  h2 = document.createElement("h2");
  h2.innerText = "Weather App";
  h2.id = "w2";
  maindiv.appendChild(h2);
  button = document.createElement("button");
  button.innerText = "→";
  button.id = "next";
  maindiv.appendChild(button);

  button.addEventListener("click", weatherui2);
  document.body.appendChild(maindiv);
}
//UI2
function weatherui2() {
  maindiv.style.display = "none";
  maindiv2 = document.createElement("div");
  maindiv2.className = "weatbg2";
  document.body.appendChild(maindiv2);
  let img = document.createElement("img");
  img.src = "images/h4.jpg";
  img.id = "weatimg2";
  maindiv2.appendChild(img);
  let place = document.createElement("h1");
  place.id = "place";
  place.innerText = "HUBLI";
  maindiv2.appendChild(place);
  let temp = document.createElement("h1");
  temp.id = "temp";
  temp.innerText = "23°";
  maindiv2.appendChild(temp);
  let wtr = document.createElement("h1");
  wtr.id = "weather2";
  wtr.innerText = "Thunderstorms";
  maindiv2.appendChild(wtr);
  e1 = document.createElement("h1");
  e1.id = "etc1";
  e1.innerText = "H:24°C";
  maindiv2.appendChild(e1);
  e2 = document.createElement("h1");
  e2.id = "etc2";
  e2.innerText = "L:18°C";
  maindiv2.appendChild(e2);

  let cover = document.createElement("div");
  cover.id = "daycont";
  maindiv2.appendChild(cover);

  // Array for the forecast
  const forecastData = [
    { day: "MONDAY", icon: "☀️", temp: "32°" },
    { day: "TUESDAY", icon: "⛅", temp: "30°" },
    { day: "WEDNESDAY", icon: "🌧️", temp: "28°" },
    { day: "THURSDAY", icon: "🌩️", temp: "27°" },
    { day: "FRIDAY", icon: "☁️", temp: "29°" }
  ];

  // Loop to generate each forecast item
  forecastData.forEach(data => {
    let ditem = document.createElement("div");
    ditem.id = "dayitem";

    let dtext = document.createElement("h4");

    if (data.day === "WEDNESDAY") {
      dtext.className = "text1";
    } else {
      dtext.className = "text1";
    }
    dtext.innerText = data.day;
    ditem.appendChild(dtext);

    let dwtr = document.createElement("div");
    dwtr.className = "wemoj";
    dwtr.innerText = data.icon;
    ditem.appendChild(dwtr);

    let dtemp = document.createElement("div");
    dtemp.className = "wtemp";
    dtemp.innerText = data.temp;
    ditem.appendChild(dtemp);
    cover.appendChild(ditem);
  });
  let fbtn = document.createElement("div");
  fbtn.id = "ftbtns";

  let xbtn = document.createElement("button");
  xbtn.id = "dmbtn";
  xbtn.innerText = "❌";
  xbtn.addEventListener("click", () => {
    maindiv2.remove();
    maindiv.remove();
    container.innerHTML = "";
  });
  fbtn.appendChild(xbtn);
  let btn1 = document.createElement("button");
  btn1.id = "addbtn";
  btn1.innerText = "✚";
  btn1.addEventListener("click", loadsrc);
  fbtn.appendChild(btn1);
  let btn2 = document.createElement("button");
  btn2.id = "dmbtn2";
  btn2.innerText = "💡";
  fbtn.appendChild(btn2);
  cover.appendChild(fbtn);
}
//SEARCH PAGE
function loadsrc() {
  let srcpg = document.createElement("div");
  srcpg.className = "searchpg";

  let srtool = document.createElement("div");
  srtool.id = "searchTool";
  srcpg.appendChild(srtool);

  let srt1 = document.createElement("h2");
  srt1.className = "search-heading";
  srt1.innerText = "Search Weather";
  srtool.appendChild(srt1);

  sint = document.createElement("input");
  sint.type = "text";
  sint.id = "searchInput";
  sint.placeholder = "Enter city name...";
  sint.addEventListener("click", () => {
    document.getElementById("facts").style.display = "none";
    document.getElementById("etc1").style.display = "none";
    document.getElementById("etc2").style.display = "none";
    if (!iscardloaded) {
      loadcard();
      iscardloaded = true;
    }

  });
  sint.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      city = sint.value.trim();
      if (city !== "") {
        fetchwtr(city);
      }
    }
  });
  srtool.appendChild(sint);

  let srbtn = document.createElement("button");
  srbtn.id = "searchBtn";
  srbtn.innerText = "🔍";
  srbtn.addEventListener("click", () => {
    city = sint.value.trim();
    if (city !== "") {
      fetchwtr(city);
    }
  });

  srtool.appendChild(srbtn);

  facts = document.createElement("div");
  facts.id = "facts";
  srcpg.appendChild(facts);

  let sdyk = document.createElement("h2");
  sdyk.id = "dyk";
  sdyk.innerText = "🌟 Did You Know?";
  facts.appendChild(sdyk);

  let s1 = document.createElement("span");
  s1.className = "fact-box";
  s1.innerText = "The coldest temperature ever recorded on Earth was −89.2°C!";
  facts.appendChild(s1);

  let s2 = document.createElement("span");
  s2.className = "fact-box";
  s2.innerText = "A single lightning bolt is five times hotter than the surface of the sun.";
  facts.appendChild(s2);

  let s3 = document.createElement("span");
  s3.className = "fact-box";
  s3.innerText = "The Sahara Desert can sometimes get snow!";
  facts.appendChild(s3);

  let s4 = document.createElement("span");
  s4.className = "fact-box";
  s4.innerText = "Bangalore is the unofficial weather capital of India according to us!";
  facts.appendChild(s4);

  maindiv2.appendChild(srcpg);

}
//WEATHER CARD
function loadcard() {
  wcard = document.createElement("div");
  wcard.className = "wcard";
  maindiv2.appendChild(wcard);

  let wimg = document.createElement("img");
  wimg.src = "images/wbg.webp";
  wimg.id = "wbg";


  wcard.appendChild(wimg);

  let wplace = document.createElement("h1");
  wplace.id = "place2";
  wplace.innerText = "HUBLI";
  wcard.appendChild(wplace);

  let wdate = document.createElement("h1");
  wdate.id = "date";
  wdate.innerText = "Saturday, October 11, 2025";
  wcard.appendChild(wdate);

  let wtemp2 = document.createElement("h1");
  wtemp2.id = "temp2";
  wtemp2.innerText = "32°c";
  wcard.appendChild(wtemp2);

  let wline = document.createElement("h1");
  wline.id = "line";
  wline.innerText = "-----------------------";
  wcard.appendChild(wline);

  let wt2 = document.createElement("h1");
  wt2.id = "wt2";
  wt2.innerText = "SUNNY";
  wcard.appendChild(wt2);

  let etc2 = document.createElement("h1");
  etc2.id = "wetc2";
  etc2.innerText = "F:12°/";
  wcard.appendChild(etc2);

  let etc3 = document.createElement("h1");
  etc3.id = "etc3";
  etc3.innerText = "P:22°";
  wcard.appendChild(etc3);

  let bkbtn = document.createElement("button");
  bkbtn.id = "back";
  bkbtn.innerText = "🏠";
  bkbtn.addEventListener("click", () => {
    document.querySelector(".wcard").style.display = "none";
    document.querySelector(".searchpg").style.display = "none";

    document.getElementById("etc1").style.display = "block";
    document.getElementById("etc2").style.display = "block";
    document.querySelector(".weatbg2").style.display = "block";

    iscardloaded = false;
  })
  wcard.appendChild(bkbtn);

  let mybtn = document.createElement("button");
  mybtn.id = "me1";
  mybtn.innerHTML = '<img src="Joel.JPG"  id="me">';
  wcard.appendChild(mybtn);

}
//API CALL
async function fetchwtr(city) {
  const apikey = "0513a2441a6d3228b5e4a3a46d22bffc";
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    );
    if (!res.ok) {
      throw new Error("City not found");
    }
    const data = await res.json();
    console.log(data);
    updateui(data);
  } catch (err) {
    alert("❌ Could not fetch weather. Try again!");
    console.log(err);
  }
}
//API VALUES PASS
function updateui(data) {
  document.getElementById("place2").innerText = data.name;
  document.getElementById("temp2").innerText = `${data.main.temp}°C`;
  document.getElementById("wt2").innerText = data.weather[0].description;
  document.getElementById("wetc2").innerText = `F: ${data.main.feels_like}°C`;
  document.getElementById("etc3").innerText = `P: ${data.main.pressure} hPa`;

  const timestamp = data.dt;
  const dateObj = new Date(timestamp * 1000);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = dateObj.toLocaleDateString('en-US', options);

  document.getElementById("date").innerText = formattedDate;
}

//JOKE TELLER LOGIC
async function jokes() {
  container = document.getElementById("loadjoke");
  container.innerHTML = "🔄 Loading Joke Teller...";
  container.style.color = "white";
  container.style.fontSize = "20px";

  try {
   await new Promise((resolve) => {
      setTimeout(() => {
        container.innerHTML = "📥 Fetching the tool into the system...";
        resolve();
      }, 2000);
    });

    
    await new Promise((resolve) => {
      setTimeout(() => {
        container.innerHTML = "⚙️ Initializing tool components...";
        resolve();
      }, 2000);
    });

    
    await new Promise((resolve) => {
      setTimeout(() => {
        container.innerHTML = "✅ PLEASE SCROLL DOWN — Chuklzz has been loaded.";
       jokeui();
        resolve();
      }, 2000);
    });
     container.style.color = "white";
    container.style.fontSize = "20px";
    
  }
  catch (err) {
    container.innerHTML = "❌ Failed to load joke teller!!!"
    container.style.color = "white";
    container.style.fontSize = "15px";
  }
}
//UI1
function jokeui() {
  maindiv = document.createElement("div");
  maindiv.className = "jkbg";
  document.body.appendChild(maindiv);

  let head = document.createElement("h1");
  head.id = "head";
  head.innerText = "🤣 Chuklzz";
  maindiv.appendChild(head);

  let head2 = document.createElement("p");
  head2.id = "head2";
  head2.innerText = "Welcome to your daily dose of laughter! Let's tickle your funny bone 😄";
  maindiv.appendChild(head2);

  let emj = document.createElement("div");
  emj.className = "emoji-row";
  emj.innerText = "😂 🤪 😹 🤭 😜";
  maindiv.appendChild(emj);

  let embtn = document.createElement("button");
  embtn.className = "start-btn";
  embtn.id = "next2";
  embtn.innerText = "Enter";
  embtn.addEventListener("click", () => {
    maindiv.style.display = "none";
    jokeui3();
  })
  maindiv.appendChild(embtn);
}
//UI2 
function jokeui3() {
  maindiv2 = document.createElement("div");
  maindiv2.className = "jkbg2";
  document.body.appendChild(maindiv2);

  let h1 = document.createElement("h1");
  h1.id = "chead";
  h1.innerText = "Chucklzz Central";
  maindiv2.appendChild(h1);

  let jmg = document.createElement("img");
  jmg.src = "images/chuck2.png";
  jmg.id = "chuck";
  maindiv2.appendChild(jmg);

  let text = document.createElement("h1");
  text.id = "text";
  text.innerText = "🎭Hey ho ho! Dare to click me and unleash the giggle magic?";
  maindiv2.appendChild(text);

  let jkbtn = document.createElement("button");
  jkbtn.id = "jokeBtn";
  jkbtn.innerText = "Unleash the LOLs 🤪";
  jkbtn.addEventListener("click", () => {
    joke();
  });
  maindiv2.appendChild(jkbtn);

  let xbtn2 = document.createElement("button");
  xbtn2.className = "xbtn2";
  xbtn2.innerText = "X";
  xbtn2.addEventListener("click", () => {
    maindiv2.style.display = "none";
    container.innerHTML = "";
  });
  maindiv2.appendChild(xbtn2);
}
//Array of jokes
const jokesArray = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the computer go to therapy? It had too many bytes.",
  "What do you get when you cross a snowman and a vampire? Frostbite.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What's orange and sounds like a parrot? A carrot.",
  "Why did the math book look sad? It had too many problems.",
  "What do you call fake spaghetti? An impasta!",
  "Why don't programmers like nature? Too many bugs.",
  "How do you organize a space party? You planet.",
  "Why did the cookie cry? Because its mother was a wafer too long.",
  "Why can't you give Elsa a balloon? Because she'll let it go!",
  "What did one ocean say to the other? Nothing, they just waved.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why did the bicycle fall over? Because it was two-tired.",
  "Why did the coffee file a police report? It got mugged.",
  "Why did the smartphone need glasses? It lost its contacts.",
  "What do you call cheese that isn't yours? Nacho cheese.",
  "What's a skeleton's least favorite room in the house? The living room.",
  "Why did the chicken go to the séance? To talk to the other side.",
  "How do you make holy water? You boil the hell out of it.",
  "What did the janitor say when he jumped out of the closet? Supplies!",
  "Why was the math teacher suspicious of prime numbers? Because they were odd.",
  "Why did the banana go to the doctor? Because it wasn't peeling well.",
  "What does a cloud wear under his raincoat? Thunderwear!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  "Why did the computer keep freezing? It left its Windows open.",
  "What do you call a fish wearing a bowtie? Sofishticated.",
  "What kind of music do mummies listen to? Wrap music.",
  "Why couldn't the leopard play hide and seek? Because he was always spotted.",
  "How does the moon cut his hair? Eclipse it.",
  "Why did the student eat his homework? Because the teacher said it was a piece of cake.",
  "Why can't you trust stairs? They're always up to something.",
  "How does a penguin build its house? Igloos it together.",
  "Why did the cow win an award? Because it was legen-dairy.",
  "What kind of tree fits in your hand? A palm tree.",
  "Why did the man put his money in the freezer? He wanted cold hard cash.",
  "What did the grape do when he got stepped on? Nothing, he just let out a little wine.",
  "Why do bees have sticky hair? Because they use honeycombs.",
  "What do you call a lazy kangaroo? A pouch potato.",
  "Why did the egg get thrown out of class? Because it kept cracking jokes.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "Why did the music teacher go to jail? Because she got caught with too many sharp objects.",
  "What do you call two birds in love? Tweethearts.",
  "Why are ghosts bad at lying? Because you can see right through them.",
  "Why don't elephants use computers? They're afraid of the mouse.",
  "How do you make a tissue dance? Put a little boogie in it.",
  "What did the fish say when it hit the wall? Dam.",
  "Why was the broom late? It overswept.",
  "Why did the cat sit on the computer? To keep an eye on the mouse.",
  "What did the triangle say to the circle? You're pointless."
];
//JOKES
function joke() {
  let tracker = 0;
  // Remove old joke UI if present
  let existing = document.getElementById("jokeui2");
  if (existing) existing.remove();


  let maindiv = document.createElement("div");
  maindiv.id = "jokeui2";
  maindiv2.appendChild(maindiv);

  let h2 = document.createElement("h2");
  h2.id = "jkhead";
  h2.innerText = "😂 Here's a Joke!";
  maindiv.appendChild(h2);

  let jokeText = document.createElement("h1");
  jokeText.className = "joketext";
  jokeText.innerText = jokesArray[tracker];
  maindiv.appendChild(jokeText);

  let xbtn = document.createElement("button");
  xbtn.id = "xbtn";
  xbtn.innerText = "✖";
  xbtn.addEventListener("click", () => {
    maindiv.style.display = "none";
  });
  maindiv.appendChild(xbtn);


  let nextBtn = document.createElement("button");
  nextBtn.id = "nextBtn";
  nextBtn.onclick = function () {
    tracker = (tracker + 1) % jokesArray.length;
    jokeText.innerText = jokesArray[tracker];
  };

  let btnt = document.createElement("span");
  btnt.id = "btntxt";
  btnt.innerText = "😂 Another One";
  nextBtn.appendChild(btnt);

  maindiv.appendChild(nextBtn);

}

//CRICINFO LOGIC
async function cricinfo() {
  container = document.getElementById("loadespn");
  container.innerHTML = "🔄 Loading Stumpd app...";
  container.style.color = "white";
  container.style.fontSize = "20px";

  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        container.innerHTML = "📥 Fetching the tool into the system...";
        resolve();
      }, 2000);
    });

    
    await new Promise((resolve) => {
      setTimeout(() => {
        container.innerHTML = "⚙️ Initializing tool components...";
        resolve();
      }, 2000);
    });

    
    await new Promise((resolve) => {
      setTimeout(() => {
        container.innerHTML = "✅ PLEASE SCROLL DOWN — Stumpd app has been loaded.";
       cricui();
        resolve();
      }, 2000);
    });
    container.style.color = "white";
    container.style.fontSize = "20px";
   }
  catch (err) {
    container.innerHTML = "❌ Failed to load Stumpd app!!!"
    container.style.color = "white";
    container.style.fontSize = "15px";
  }
}
//LOGIN
function cricui() {
  defbg = document.createElement("div");
  defbg.className = "defbg2";
  document.body.appendChild(defbg);

  let cricbg = document.createElement("div");
  cricbg.className = "cricbg";
  defbg.appendChild(cricbg);

  let name = document.createElement("h1");
  name.id = "lghd";
  name.innerText = "🪙Stumpd";
  cricbg.appendChild(name);

  let aim = document.createElement("h2");
  aim.id = "aim";
  aim.innerText = " Catch the vibes, not just the scores";
  cricbg.appendChild(aim);

  let cimg = document.createElement("img");
  cimg.src = "images/clign.png";
  cimg.id = "clgin";
  cricbg.appendChild(cimg);

  let lgin = document.createElement("h1");
  lgin.id = "lg";
  lgin.innerText = "Login";
  cricbg.appendChild(lgin);

  let inp1 = document.createElement("input");
  inp1.id = "inp1";
  inp1.placeholder = "Enter your name";
  inp1.type = "text";
  cricbg.appendChild(inp1);

  let inp2 = document.createElement("input");
  inp2.id = "inp2";
  inp2.placeholder = "Enter any password (simulation only)";
  inp2.type = "password";
  cricbg.appendChild(inp2);

  user = document.getElementById("inp1").value.trim();
  pass = document.getElementById("inp2").value.trim();

  let lgbtn = document.createElement("button");
  lgbtn.id = "loginBtn";
  lgbtn.innerText = "Login";
  lgbtn.addEventListener("click", () => {
    user = document.getElementById("inp1").value.trim();
    pass = document.getElementById("inp2").value.trim();

    if (user && pass) {
      alert("Login successful!");
      cricbg.style.display = "none";
      cricmain();
    } else {
      alert("Please enter both username and password.");
    }
  });
  cricbg.appendChild(lgbtn);
}
//MAIN UI
function cricmain() {
  cricbg = document.createElement("div");
  cricbg.className = "cricbg2";
  defbg.appendChild(cricbg);

  let chead = document.createElement("h1");
  chead.id = "chead";
  chead.innerText = "🏏 Matches";
  cricbg.appendChild(chead);

  let cont = document.createElement("div");
  cont.className = "container2";
  cricbg.appendChild(cont);

  //1st container
  let box1 = document.createElement("div");
  box1.className = "match-box";
  box1.id = "matchbox1";
  cont.appendChild(box1);

  title = document.createElement("div");
  title.className = "match-title";
  title.innerText = "🔥 India vs Australia";
  box1.appendChild(title);

  detail = document.createElement("div");
  detail.className = "match-detail";
  detail.id = "matchdtl1";
  detail.innerText = " Score: IND 286/7 (50 ov)";
  box1.appendChild(detail);

  moreinfo = document.createElement("div");
  moreinfo.className = "more-info";
  moreinfo.id = "more1";
  moreinfo.innerText = "🏟️ Venue: Wankhede Stadium ✅ Result: India won by 25 runs";
  box1.onclick = () => toggleDetail(1);
  box1.appendChild(moreinfo);

  //2nd container
  let box2 = document.createElement("div");
  box2.className = "match-box";
  box2.id = "matchbox2";
  cont.appendChild(box2);

  title = document.createElement("div");
  title.className = "match-title";
  title.innerText = "📅 England vs Pakistan";
  box2.appendChild(title);

  detail = document.createElement("div");
  detail.className = "match-detail";
  detail.id = "matchdtl2";
  detail.innerText = "  Score: ENG 199/5 (40 ov)";
  box2.appendChild(detail);

  moreinfo = document.createElement("div");
  moreinfo.className = "more-info";
  moreinfo.id = "more2";
  moreinfo.innerText = " 🏟️ Venue: Lord's, London 🕒 Status: Match in progress";
  box2.onclick = () => toggleDetail(2);
  box2.appendChild(moreinfo);

  //3rd container
  let box3 = document.createElement("div");
  box3.className = "match-box";
  box3.id = "matchbox3";
  cont.appendChild(box3);

  title = document.createElement("div");
  title.className = "match-title";
  title.innerText = "⏳ South Africa vs New Zealand";
  box3.appendChild(title);

  detail = document.createElement("div");
  detail.className = "match-detail";
  detail.id = "matchdtl3";
  detail.innerText = "  Score: SA 320/8 (50 ov)";
  box3.appendChild(detail);

  moreinfo = document.createElement("div");
  moreinfo.className = "more-info";
  moreinfo.id = "more3";
  moreinfo.innerText = "🏟️ Venue: Cape Town 🏏 Status: NZ need 321 to win";
  box3.onclick = () => toggleDetail(3);
  box3.appendChild(moreinfo);

  function toggleDetail(id) {
    const info = document.getElementById(`more${id}`);
    const all = document.querySelectorAll(".more-info");

    // Collapse all other open boxes
    all.forEach(el => {
      if (el !== info) el.style.display = "none";
    });

    info.style.display = info.style.display === "block" ? "none" : "block";
  }

  nav = document.createElement("div");
  nav.className = "nav";
  cricbg.appendChild(nav);

  nbtn1 = document.createElement("button");
  nbtn1.className = "navbtn";
  nbtn1.id = "lbtn";
  nbtn1.innerText = "📊 Scores";
  nav.appendChild(nbtn1);

  nbtn2 = document.createElement("button");
  nbtn2.className = "navbtn";
  nbtn2.id = "tbtn";
  nbtn2.innerText = "🧠 Trivia";
  nbtn2.addEventListener("click", () => {
    cricbg.remove();
    trivia2();
  });
  nav.appendChild(nbtn2);

  nbtn3 = document.createElement("button");
  nbtn3.className = "navbtn";
  nbtn3.id = "rbtn";
  nbtn3.innerText = "🏆 Rankings";
  nbtn3.addEventListener("click", () => {
    cricbg.remove();
    rank();
  });
  nav.appendChild(nbtn3);

  nbtn4 = document.createElement("button");
  nbtn4.className = "navbtn";
  nbtn4.id = "sbtn";
  nbtn4.innerText = "📅Review";
  nbtn4.addEventListener("click", () => {
    cricbg.remove();
    review();
  });
  nav.appendChild(nbtn4);

  let nbtn5 = document.createElement("button");
  nbtn5.className = "navbtn";
  nbtn5.id = "cbtn";
  nbtn5.innerText = "❌Cancel";
  nbtn5.addEventListener("click", () => {
    defbg.remove();
    container.innerText = "";

  });
  nav.appendChild(nbtn5);

}
//TRIVIA
function trivia2() {
  let tbg = document.createElement("div");
  tbg.id = "defbg4";
  defbg.appendChild(tbg);

  let tcont = document.createElement("div");
  tcont.id = "trivia-container";
  tbg.appendChild(tcont);

  let thead = document.createElement("div");
  thead.className = "qhead";
  thead.innerText = "Trivia quiz";
  tcont.appendChild(thead);

  let tsts = document.createElement("div");
  tsts.id = "status";
  tsts.innerText = "Level: Easy";
  tcont.appendChild(tsts);

  let tqus = document.createElement("div");
  tqus.id = "question";
  tqus.className = "question-box";
  tcont.appendChild(tqus);

  let tops = document.createElement("div");
  tops.id = "options";
  tops.className = "options";
  tcont.appendChild(tops);

  let tctl = document.createElement("div");
  tctl.id = "controls";
  tcont.appendChild(tctl);

  let nbttn = document.createElement("button");
  nbttn.className = "nxtbtn";
  nbttn.innerText = "Next";
  nbttn.addEventListener("click", nextQuestion);
  tctl.appendChild(nbttn);

  let nbttn2 = document.createElement("button");
  nbttn2.className = "nxtbtn";
  nbttn2.innerText = "Increase difficulty";
  nbttn2.addEventListener("click", nextLevel);
  tctl.appendChild(nbttn2);

  let sum = document.createElement("div");
  sum.id = "summary";
  tcont.appendChild(sum);

  //Navbar
  nav = document.createElement("div");
  nav.className = "nav2";
  tcont.appendChild(nav);

  nbtn1 = document.createElement("button");
  nbtn1.className = "navbtn";
  nbtn1.id = "lbtn";
  nbtn1.innerText = "📊 Scores";
  nbtn1.addEventListener("click", () => {
    tbg.remove();
    cricmain();
  });
  nav.appendChild(nbtn1);

  nbtn2 = document.createElement("button");
  nbtn2.className = "navbtn";
  nbtn2.id = "tbtn";
  nbtn2.innerText = "🧠 Trivia";
  nav.appendChild(nbtn2);

  nbtn3 = document.createElement("button");
  nbtn3.className = "navbtn";
  nbtn3.id = "rbtn";
  nbtn3.innerText = "🏆 Rankings";
  nbtn3.addEventListener("click", () => {
    tbg.remove();
    rank();
  });
  nav.appendChild(nbtn3);

  nbtn4 = document.createElement("button");
  nbtn4.className = "navbtn";
  nbtn4.id = "sbtn";
  nbtn4.innerText = "🎬 Review";
  nbtn4.addEventListener("click", () => {
    tbg.remove();
    review();
  });
  nav.appendChild(nbtn4);


  //Questions
  const quizData = {
    easy: [
      {
        q: "🏏 Who has the highest individual score in ODI cricket?",
        o: ["Rohit Sharma", "Sachin Tendulkar", "Virat Kohli", "Chris Gayle"],
        a: 0
      },
      {
        q: "🌍 Which country hosted the 2019 Cricket World Cup?",
        o: ["India", "Australia", "England", "South Africa"],
        a: 2
      },
      {
        q: "🎖️ How many World Cups has India won?",
        o: ["1", "2", "3", "4"],
        a: 1
      }
    ],
    medium: [
      {
        q: "🎯 Who bowled the fastest delivery in cricket history?",
        o: ["Shoaib Akhtar", "Brett Lee", "Shaun Tait", "Mitchell Starc"],
        a: 0
      },
      {
        q: "🏆 Which team has won the most IPL titles?",
        o: ["CSK", "MI", "KKR", "RCB"],
        a: 1
      },
      {
        q: "🧤 Who holds the record for most dismissals as a wicketkeeper?",
        o: ["Gilchrist", "Dhoni", "Sangakkara", "Boucher"],
        a: 3
      }
    ],
    hard: [
      {
        q: "🕰️ Which cricketer has the longest international career span?",
        o: ["Tendulkar", "Anderson", "Jayasuriya", "Miandad"],
        a: 0
      },
      {
        q: "🧢 Who was the first cricketer to take 10 wickets in a test innings?",
        o: ["Anil Kumble", "Jim Laker", "Ajaz Patel", "Muralitharan"],
        a: 1
      },
      {
        q: "📊 What is the lowest team total in Test history?",
        o: ["26", "30", "28", "36"],
        a: 0
      }
    ]
  };

  let currentLevel = "easy";
  let currentQ = 0;
  let score = 0;
  let wrongAnswers = [];

  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const statusEl = document.getElementById("status");
  const summaryEl = document.getElementById("summary");

  //Loading question initially 
  function loadQuestion() {
    const data = quizData[currentLevel][currentQ];
    questionEl.innerText = data.q;
    optionsEl.innerHTML = "";

    data.o.forEach((opt, idx) => {
      const div = document.createElement("div");
      div.classList.add("option");
      div.innerText = opt;
      div.onclick = () => checkAnswer(idx, data.a, div);
      optionsEl.appendChild(div);
    });
  }

  //Check answer   
  function checkAnswer(selected, correct, selectedDiv) {
    const allOptions = document.querySelectorAll(".option");
    allOptions.forEach(opt => opt.onclick = null);

    if (selected === correct) {
      selectedDiv.classList.add("correct");
      score++;
    } else {
      selectedDiv.classList.add("wrong");
      allOptions[correct].classList.add("correct");
      wrongAnswers.push({
        q: quizData[currentLevel][currentQ].q,
        correct: quizData[currentLevel][currentQ].o[correct]
      });
    }
  }

  function nextQuestion() {
    if (currentQ < quizData[currentLevel].length - 1) {
      currentQ++;
      loadQuestion();
    } else {
      document.getElementById("controls").style.display = "none";
      showSummary();
    }
  }

  function nextLevel() {
    if (currentLevel === "easy") currentLevel = "medium";
    else if (currentLevel === "medium") currentLevel = "hard";
    else {
      showFinal();
      return;
    }
    statusEl.innerText = `Level: ${capitalize(currentLevel)}`;
    currentQ = 0;
    loadQuestion();
  }

  function showSummary() {
    summaryEl.style.display = "block";
    summaryEl.innerHTML = `
    <div style="position: relative; background: #fffbea; border: 2px solid goldenrod; border-radius: 10px; padding: 15px 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      <button id="closeSummaryBtn"
        style="
          position: absolute;
          top: 8px;
          right: 10px;
          border: none;
          background: none;
          font-size: 18px;
          cursor: pointer;
          color: #444;
        "
        title="Close">✖️</button>

      <div style="margin-top: 10px; line-height: 1.6;">
        ✅ <strong>Completed ${capitalize(currentLevel)} Level!</strong><br>
        🧮 <strong>Score:</strong> ${score}/${quizData[currentLevel].length}<br><br>
        ${wrongAnswers.length
        ? `❌ <strong>Incorrect Answers:</strong><br>` +
        wrongAnswers
          .map(e => `👉 ${e.q}<br>✔️ ${e.correct}`)
          .join("<br><br>")
        : "🎉 All correct! Great job!"
      }
      </div>
    </div>
  `;

    // Close button functionality
    document.getElementById("closeSummaryBtn").onclick = () => {
      summaryEl.style.display = "none";

      // ✅ Show the buttons again
      tctl.style.display = "block";
      nbtn.style.marginRight = " 2vh";

    };
  }

  function showFinal() {
    summaryEl.style.display = "block";
    summaryEl.innerHTML = `
        🎉 All Levels Completed!<br>
        Total Score: ${score}/9<br><br>
        ${wrongAnswers.length ? "❌ Wrong Answers Summary:<br>" + wrongAnswers.map(e => `${e.q} <br>✔️ ${e.correct}`).join("<br><br>") : "💯 Perfect Score!"}
      `;
    document.getElementById("question").style.display = "none";
    optionsEl.style.display = "none";
    document.getElementById("controls").style.display = "none";
    statusEl.innerText = "✅ Quiz Completed";
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
loadQuestion();
}
//RANKING
function rank() {
  let rbg = document.createElement("div");
  rbg.id = "cmbg";
  defbg.appendChild(rbg);

  let rhead = document.createElement("h1");
  rhead.className = "ranking-title";
  rhead.innerText = "ICC Team Rankings";
  rbg.appendChild(rhead);

  let rtable = document.createElement("div");
  rtable.className = "rank-table";
  rbg.appendChild(rtable);

  let rtbh = document.createElement("div");
  rtbh.className = "rank-row header";
  rtable.appendChild(rtbh);

  let s1 = document.createElement("span");
  s1.innerText = "#";
  rtbh.appendChild(s1);

  let s2 = document.createElement("span");
  s2.innerText = "Team";
  rtbh.appendChild(s2);

  let s3 = document.createElement("span");
  s3.innerText = "Points";
  rtbh.appendChild(s3);

  function addTeam(rank, name, flagUrl, points) {
    let row = document.createElement("div");
    row.className = "rank-row";
    rtable.appendChild(row);

    let rankSpan = document.createElement("span");
    rankSpan.innerText = rank;
    row.appendChild(rankSpan);

    let teamSpan = document.createElement("span");
    let flag = document.createElement("img");
    flag.src = flagUrl;
    flag.className = "flag";
    teamSpan.appendChild(flag);
    teamSpan.append(" " + name);
    row.appendChild(teamSpan);

    let pointsSpan = document.createElement("span");
    pointsSpan.innerText = points;
    row.appendChild(pointsSpan);
  }
  const teams = [
    { rank: 1, name: "India", flag: "https://flagcdn.com/in.svg", points: 125 },
    { rank: 2, name: "Australia", flag: "https://flagcdn.com/au.svg", points: 120 },
    { rank: 3, name: "England", flag: "https://flagcdn.com/gb.svg", points: 115 },
    { rank: 4, name: "South Africa", flag: "https://flagcdn.com/za.svg", points: 110 },
    { rank: 5, name: "New Zealand", flag: "https://flagcdn.com/nz.svg", points: 105 },
    { rank: 6, name: "Pakistan", flag: "https://flagcdn.com/pk.svg", points: 102 },
    { rank: 7, name: "Sri Lanka", flag: "https://flagcdn.com/lk.svg", points: 98 },
    { rank: 8, name: "West Indies", flag: "https://flagcdn.com/jm.svg", points: 95 },
    { rank: 9, name: "Bangladesh", flag: "https://flagcdn.com/bd.svg", points: 90 },
    { rank: 10, name: "Afghanistan", flag: "https://flagcdn.com/af.svg", points: 85 },
  ];

  teams.forEach(team => {
    addTeam(team.rank, team.name, team.flag, team.points);
  });

  //Navbar
  nav = document.createElement("div");
  nav.className = "nav3";
  rbg.appendChild(nav);

  nbtn1 = document.createElement("button");
  nbtn1.className = "navbtn";
  nbtn1.id = "lbtn";
  nbtn1.innerText = "📊 Scores";
  nbtn1.addEventListener("click", () => {
    rbg.remove();
    cricmain();
  });
  nav.appendChild(nbtn1);

  nbtn2 = document.createElement("button");
  nbtn2.className = "navbtn";
  nbtn2.id = "tbtn";
  nbtn2.innerText = "🧠 Trivia";
  nbtn2.addEventListener("click", () => {
    rbg.remove();
    trivia2();
  });
  nav.appendChild(nbtn2);

  nbtn3 = document.createElement("button");
  nbtn3.className = "navbtn";
  nbtn3.id = "rbtn";
  nbtn3.innerText = "🏆 Rankings";
  nav.appendChild(nbtn3);

  nbtn4 = document.createElement("button");
  nbtn4.className = "navbtn";
  nbtn4.id = "sbtn";
  nbtn4.innerText = "🎬 Review";
  nbtn4.addEventListener("click", () => {
    rbg.remove();
    review();
  });
  nav.appendChild(nbtn4);
}
//REVIEW
function review() {
  let hlbg = document.createElement("div");
  hlbg.id = "mainbg";
  defbg.appendChild(hlbg);

  let button = document.createElement("button");
  button.className = "bbtn";
  button.innerText = "🏠";
  button.addEventListener("click", () => {
    hlbg.style.display = "none";
    cricmain();
  });
  hlbg.appendChild(button);

  let hhead = document.createElement("div");
  hhead.className = "title";
  hhead.innerText = "🏏 Cricket's Greatest Showdowns";
  hlbg.appendChild(hhead);


  //1st match
  let mcont1 = document.createElement("div");
  mcont1.className = "match-card";
  mcont1.id = "match1";
  hlbg.appendChild(mcont1);

  let if1 = document.createElement("iframe");
  if1.src = "https://www.youtube.com/embed/xTgGNvIH0wg";
  if1.className = "hmg";
  if1.setAttribute("frameborder", "0");
  if1.setAttribute("allowfullscreen", "");
  mcont1.appendChild(if1);

  let mname1 = document.createElement("h3");
  mname1.className = "httl";
  mname1.innerText = "IND vs BAN";
  mcont1.appendChild(mname1);

  let minf1 = document.createElement("p");
  minf1.className = "htl2";
  minf1.innerText = "Final over drama (T20 specials)";
  mcont1.appendChild(minf1);




  //2nd match
  let mcont2 = document.createElement("div");
  mcont2.className = "match-card";
  mcont2.id = "match2";
  hlbg.appendChild(mcont2);

  let if2 = document.createElement("iframe");
  if2.src = "https://www.youtube.com/embed/o7X82vwBAbw";
  if2.className = "hmg";
  if2.setAttribute("frameborder", "0");
  if2.setAttribute("allowfullscreen", "");
  mcont2.appendChild(if2);

  let mname2 = document.createElement("h3");
  mname2.className = "httl";
  mname2.innerText = "NZ vs AUS";
  mcont2.appendChild(mname2);

  let minf2 = document.createElement("p");
  minf2.className = "htl2";
  minf2.innerText = "Nail biting finsih (WC clash)";
  mcont2.appendChild(minf2);

  //3rd match
  let mcont3 = document.createElement("div");
  mcont3.className = "match-card";
  mcont3.id = "match3";
  hlbg.appendChild(mcont3);

  let if3 = document.createElement("iframe");
  if3.src = "https://www.youtube.com/embed/wY6UyatwVTA";
  if3.className = "hmg";
  if3.setAttribute("frameborder", "0");
  if3.setAttribute("allowfullscreen", "");
  mcont3.appendChild(if3);

  let mname3 = document.createElement("h3");
  mname3.className = "httl";
  mname3.innerText = "IND vs AUS";
  mcont3.appendChild(mname3);

  let minf3 = document.createElement("p");
  minf3.className = "htl2";
  minf3.innerText = "Fortress breached (Epic test)";
  mcont3.appendChild(minf3);

  //4th match
  let mcont4 = document.createElement("div");
  mcont4.className = "match-card";
  mcont4.id = "match4";
  hlbg.appendChild(mcont4);

  let if4 = document.createElement("iframe");
  if4.src = "https://www.youtube.com/embed/wOSDm5rynzg";
  if4.className = "hmg";
  if4.setAttribute("frameborder", "0");
  if4.setAttribute("allowfullscreen", "");
  mcont4.appendChild(if4);

  let mname4 = document.createElement("h3");
  mname4.className = "httl";
  mname4.innerText = "CSK vs GT";
  mcont4.appendChild(mname4);

  let minf4 = document.createElement("p");
  minf4.className = "htl2";
  minf4.innerText = "Final to remember(Ipl specials)";
  mcont4.appendChild(minf4);


  //5th match
  let mcont5 = document.createElement("div");
  mcont5.className = "match-card";
  mcont5.id = "match5";
  hlbg.appendChild(mcont5);

  let if5 = document.createElement("iframe");
  if5.src = "https://www.youtube.com/embed/EBTirkOt-CE";
  if5.className = "hmg";
  if5.setAttribute("frameborder", "0");
  if5.setAttribute("allowfullscreen", "");
  mcont5.appendChild(if5);

  let mname5 = document.createElement("h3");
  mname5.className = "httl";
  mname5.innerText = "CSK vs RCB";
  mcont5.appendChild(mname5);

  let minf5 = document.createElement("p");
  minf5.className = "htl2";
  minf5.innerText = "Chase masterclass ft.MSD";
  mcont5.appendChild(minf5);
}

//EVENTS ASSIGNMENT
cal.addEventListener("click", loadcalculator);
weat.addEventListener("click", loadweather);
jk.addEventListener("click", jokes);
cric.addEventListener("click", cricinfo);
