/* =========================================================
   viJEMIn Daily Booster
   SCRIPT
========================================================= */


/* =========================================================
   MESSAGE POOLS

   Dummy for now.
   Later:
   - 50 messages per jar
   - one message is selected per jar per day
========================================================= */

const messages = {
  /* =========================================================
     ❤️ COMFORT — WHEN LIFE SUCKS
     ========================================================= */

  comfort: [

      "Hey. Whatever happened today, you don't have to carry all of it at once. Breathe. You don't have to solve everything now. You already did your best, and I'm proud of you.",
      
      "You don't have to be okay every second. Some days are just hard, and that's okay. Let this one be hard. Let yourself rest. You don't have to pretend you're fine just because someone expects you to be.",
      
      "Come here. No fixing, no explaining, no pretending. You can just exist beside me for a while. You don't have to say anything. I'll keep you company, adek sayang.",
      
      "Whatever went wrong today, it doesn't make you a failure. One bad day is still just one day. Please don't let a painful moment control you. You are the one who can control how much power it has over you.",
      
      "Take a breath, sayang. The world can wait a little. You deserve a moment where nothing is expected from you. Put everything down for a while and just breathe. You already did your best.",
      
      "Kalau hari ini lagi gak baik-baik aja, biarin and let it be. Dunia emang kadang lakuin hal semaunya, jadi adek sayangku juga berhak lakuin apapun semaunya, gak harus ikutin apa maunya dunia jelek ini. Ayo kita hajar sama-sama, sayang?",
      
      "You don't have to figure everything out tonight. Some answers can wait until tomorrow. For now, let your tired mind be quiet. Not everything needs to be solved before you sleep.",
      
      "You're doing better than you think you are. I know it doesn't feel like it right now, but I see how much you've been carrying. So please be a little gentler with yourself. I'm always proud of you, wanita hebatku.",
      
      "You don't need to turn every difficult day into something productive. Sometimes being lazy and selfish for your own sanity is more than enough.",
      
      "Adek sayang, if today all the things feel so cruel to you, breathe in, breathe out. Throw it away, be angry about it. Release it to me, I'm all ears. Let someone care about you too, and let me be that someone, okay?",
      
      "Whatever you're feeling right now, you don't have to apologize for it. Feel it. Cry if you need to. Be quiet if you need to. I'll stay and wait for you.",
      
      "Bad days don't get to decide what your whole life looks like. Tomorrow is still waiting for you, and you don't have to know what it looks like yet. So live your life to the fullest, sayang.",
      
      "Hey, sayang. Consider this your tiny reminder that you are loved even on the days you don't feel particularly lovable. Especially on those days, you ARE more than enough.",
      
      "You are allowed to have messy days, tired days, angry days, quiet days, and days where you don't recognize yourself very much. You're still YOU through all of them.",
      
      "If today hurt, then let yourself admit that it hurt. You don't have to turn every wound into a lesson immediately. Sometimes it is enough to simply say, 'that really hurt.' And that's okay.",
      
      "Drink some water. Breathe slowly. Unclench your jaw. Yes, I'm bossing you around. It's because I care. And because apparently someone has to remind you to take care of yourself.",
      
      "You don't need to accomplish anything impressive to deserve kindness. You deserve it simply because you're you. Your worth was never supposed to depend on someone else. It depends on you knowing your worth and deciding whether someone else is worthy of your kindness or not.",
      
      "If everything feels too loud, make your world smaller for a moment. Just you, your breath, a quiet room, and this little reminder from me: sayang, everything's gonna be alright in the end. The rest can wait.",
      
      "Aku tau kamu bisa kendaliin semuanya. Tapi sayang, menjadi kuat bukan berarti kamu gak bisa ngandelin orang lain. Kamu boleh capek dan kuat di saat bersamaan, kamu boleh butuh bantuan kapanpun itu dan itu bukan suatu hal yang memalukan.",
      
      "You are not behind. You are not late. You're just moving through your own life at your own pace. Please don't punish yourself for not being somewhere you haven't reached yet.",
      
      "Whatever happened today, please don't let one moment convince you that everything is ruined. A bad chapter can still belong to a beautiful story.",
      
      "I'm proud of you for making it this far today. Even if nobody saw how hard it was, I hope you know that getting through something quietly still counts.",
      
      "Some days don't need productivity. Some days need food, water, sleep, a shower, and a little laziness. If today is one of those days, then that's enough.",
      
      "You don't have to make yourself smaller just because someone failed to appreciate you. Their inability to see your worth doesn't make your worth any smaller.",
      
      "Sayangku, a reminder: You survived every bad day you've had so far. This one doesn't need to be different. You don't have to conquer it today. Just let the day end.",
      
      "Please remember that being tired doesn't mean you're weak. It means you've been carrying things. So rest without feeling guilty about it, okay?",
      
      "Jangan dipaksa terus, ya. Kalau hari ini rasanya berat banget, istirahat dulu. Kamu nggak harus selalu kuat, dan kamu nggak harus selalu punya jawaban saat itu juga. Kamu cuman butuh istirahat dan lupain semuanya untuk sementara.",
      
      "Sometimes there is still so much good waiting for you beyond whatever is hurting right now. You don't have to see it yet. Just trust that this moment is not the whole story, it's just one part of your life.",
      
      "Don't make permanent conclusions about your life while you're having a terrible day. You're tired, you're hurting, and everything feels heavier right now. Give tomorrow a chance to feel different. It is waiting for you.",
      
      "Whatever you're blaming yourself for, take a breath before deciding you deserve all that blame. Maybe you made a mistake. Maybe things went wrong. That still doesn't mean you deserve to hate yourself for it.",
      
      "If today feels like too much, then let's make the goal smaller: Don't think about tomorrow, don't think about next week. Just get through this moment, then the next one. That's enough for now.",
      
      "Your feelings are real, but they are not always forecasts. What hurts today won't necessarily hurt forever. Let the feeling exist without letting it convince you that this is how everything will always be.",
      
      "God is close to the brokenhearted. Psalm 34:18. So if your heart feels a little broken today, remember that you are not sitting in that pain alone. He is there, go talk to Him.",
      
      "You are more than whatever went wrong today. Please don't let a bad moment become your whole identity. You are still the same precious person underneath all this exhaustion.",
      
      "Eat something. Rest a little. Drink some water. Then decide what actually needs your attention. Not everything deserves access to you all at once. You choose.",
      
      "If nobody told you today: you are doing enough. You are enough. You don't need to prove that by accomplishing one more thing before you let yourself rest.",
      
      "I wish I could give you one of those hugs that makes your shoulders finally drop. For now, consider this a tiny digital one. Close your eyes for a second and pretend I'm holding you while telling you that everything takes time, and that's okay.",
      
      "I'm rooting for you even when you're not particularly rooting for yourself. You don't need to be cheerful for me. You can show up exactly as you are. Happy, sad, quiet, irritated, exhausted. I don't need the polished version of you, I need you, in every version of yourself.",
      
      "Matthew 11:28 says, 'Come to me, all you who are weary.' So, rest for a little. You don't have to carry everything by yourself, especially when you're already tired.",
      
      "Sometimes the kindest thing you can do is stop fighting the fact that you're tired. Capek ya? Yaudah, istirahat dulu yuk, sayang. Dunia nggak akan runtuh cuma karena kamu berhenti sebentar.",
      
      "This hard or hurtful feeling is allowed to pass through you. You don't have to build a home inside it. Let it come, let it stay for a while, and eventually, let it go.",
      
      "Whatever today took from you, I hope in the end of the day it gives some of it back. A little peace. A little rest. A little softness. And maybe a reminder that you are more than enough, more than you realize.",
      
      "Come back to yourself, slowly. There's no rush. Tarik napas pelan-pelan. Kamu aman untuk berhenti sebentar. Kamu nggak harus figured it out everything hari ini.",
      
      "Psalm 23:4 — 'Even though I walk through the darkest valley, I will fear no evil, for you are with me.' You don't have to be afraid of this dark moment, sayang. God is still walking beside you.",
      
      "Isaiah 41:10 — 'Do not fear, for I am with you.' So when everything feels too heavy and you're scared of what comes next, remember that you don't have to face it alone. God is with you.",
      
      "Psalm 55:22 — 'Cast your cares on the Lord and he will sustain you.' You don't have to hold every worry in your hands tonight. Give some of it to Him and let yourself breathe.",
      
      "2 Corinthians 12:9 — 'My grace is sufficient for you, for my power is made perfect in weakness.' So it's okay to be weak sometimes. You don't have to hide every tired part of yourself.",
      
      "Lamentations 3:22–23 — 'His mercies never come to an end; they are new every morning.' Whatever today looked like, tomorrow gets to begin again. You don't have to carry today's weight into a new morning.",
      
      "Romans 8:38–39 reminds you that nothing can separate us from the love of God. Not your worst day, not your mistakes, not your sadness, not even the things you don't understand right now.",
      
      "Psalm 46:10 — 'Be still, and know that I am God.' So for a moment, stop trying to fix everything. Be still. Breathe. Let God handle the things that are too heavy for you tonight."

  ],


  /* =========================================================
     🧡 MOTIVATION — GET YOUR ASS UP
     ========================================================= */

  motivation: [

    "Get your ass up, sweetheart. You don't have to conquer the whole world today. Just do one thing. Then we'll see.",

    "Okay, enough staring at the ceiling. Pick one tiny thing and go do it. I'll be annoying about this until you do.",

    "You don't need motivation first. Move first. Motivation can catch up later.",

    "Come on. Shoes on. Water first. Then one small task. That's the deal.",

    "Your future self is going to be very grateful that you got up today. Go make them proud.",

    "You can complain while doing it. I don't care. Just do the thing.",

    "No dramatic speeches today. Just get up and start. Five minutes. That's all I'm asking.",

    "Sweetheart, your bed is not going to build the life you keep dreaming about. Up you go.",

    "You don't need a perfect plan. You need a first step.",

    "Go do something your tomorrow-self will thank you for. Tiny counts.",

    "I know you don't feel like it. That's precisely why I'm telling you to get moving.",

    "One email. One page. One shower. One meal. One task. Start somewhere.",

    "You are absolutely capable of more than today's laziness is trying to convince you.",

    "Get up. Stretch. Drink water. Then decide what deserves your energy today.",

    "You don't have to finish everything. You just have to stop doing absolutely nothing.",

    "Come on, love. Let's turn 'I don't feel like it' into 'fine, I'll do one thing.'",

    "Nobody is asking you to run a marathon. We're literally asking you to stand up.",

    "Your to-do list isn't going to attack you. Open it. Pick one. Begin.",

    "You can rest later. Right now, give yourself ten honest minutes of effort.",

    "I believe in you, which unfortunately means I am not letting you get away with doing nothing.",

    "Get your ass up. This is your lovingly aggressive reminder.",

    "Start badly. Start slowly. Start annoyed. Just start.",

    "You don't need to feel ready. Most worthwhile things begin before you feel ready.",

    "Do one useful thing before you scroll again. Deal?",

    "Sweetheart, momentum is built from tiny actions. Go make one.",

    "Today doesn't need to be your most productive day ever. It just needs a little movement.",

    "Stop waiting for the magical moment when you'll suddenly want to do everything. It may not come.",

    "Go wash your face. Sometimes that's where the comeback starts.",

    "You can absolutely be tired and still take one small step.",

    "I know you can do hard things. But today, let's start with an easy one.",

    "Put the phone down for five minutes and go handle one thing. I'll still be here when you return.",

    "Your dream life is built on boring little actions. Congratulations, today's little action is waiting.",

    "You don't have to impress anyone. Just keep your promise to yourself today.",

    "Go. Move. Begin. We'll figure out the rest once you're already moving.",

    "A tiny amount of progress is still progress. Stop disrespecting your tiny wins.",

    "You're not lazy forever just because you're unmotivated today. Shake it off.",

    "Do it scared. Do it tired. Do it imperfectly. Just don't keep talking yourself out of it.",

    "Sweetheart, you have things to do and a life to live. Up.",

    "Give yourself twenty minutes. If you still hate it after that, we can negotiate.",

    "You don't need permission to start again. Just start again.",

    "Today is not ruined because the morning was unproductive. You still have hours left.",

    "One little win. That's the mission.",

    "Your excuses are getting very creative lately. Cute. Now get up.",

    "You can take it slow without standing still.",

    "Do the annoying thing first. You'll feel so much better afterward.",

    "Don't wait until you feel confident. Action is allowed to come before confidence.",

    "Come on, sweetheart. Give today a chance before deciding it's a lost cause.",

    "You don't need to fix your whole life today. Just move it forward a little.",

    "Get up. I promise the world looks slightly less offensive after water and food.",

    "This is your reminder: you're capable, you're loved, and now you're getting your ass up."
  ],


  /* =========================================================
     🩷 MISS YOU — MISS ME, HUH?
     ========================================================= */

  missyou: [

    "Miss me, huh? Well... I figured you might. Here's a little reminder that I'm thinking of you too.",

    "If you're reading this because you miss me, congratulations. Your diagnosis is correct.",

    "I know you miss me. Don't deny it. It's cute.",

    "Wish I were there? Yeah. Me too.",

    "Here's your tiny substitute for having me beside you. Unfortunately, it doesn't come with hugs.",

    "If you could hear me right now, I'd probably say, 'come here.' So... come here.",

    "You know what's annoying? Missing someone when you can't just reach over and bother them.",

    "Consider this a tiny piece of me sneaking into your day.",

    "I wonder how many times you've thought about me today. Be honest.",

    "Missing me already? You really are hopeless.",

    "I wish I could teleport. Mostly for selfish reasons.",

    "If I suddenly appeared beside you right now, what would you do first?",

    "Here's your reminder that somewhere, someone is thinking about you with a very stupid smile.",

    "You don't have to miss me quietly. You can tell me. I like knowing.",

    "A little distance doesn't make me any less yours to bother.",

    "If this note could hug you, it would. You'll have to imagine the rest.",

    "I hope something small today reminds you of me and makes you smile.",

    "You know I'm going to ask eventually: how much did you miss me?",

    "I miss your presence in all those tiny ways that are difficult to explain.",

    "If you're having a lonely moment, pretend I'm sitting next to you judging whatever you're doing.",

    "I wish I could steal five minutes with you right now. Maybe ten. Fine, the whole day.",

    "This jar is basically me saying, 'hey, I'm still here.'",

    "You opened the miss-me jar. Interesting choice. Suspiciously specific.",

    "I hope you know that being away from you never makes you less important to me.",

    "I wonder if you smiled when you saw this jar. If you did, I'll count that as a win.",

    "You could have picked another jar, but you picked this one. Hmm. Someone misses me.",

    "If I were there, you'd probably be annoyed by how much attention I'd demand from you.",

    "Sometimes I miss you for no particular reason. I just do.",

    "I hope today gives you at least one moment where you wish I were there beside you.",

    "Don't worry. I'll let you miss me a little. Builds character.",

    "This is your official permission to be clingy today.",

    "If you need me, you know where to find me. If you just miss me, that's also acceptable.",

    "I wonder what you're doing right now. And yes, I'm imagining myself interrupting it.",

    "A tiny reminder: distance is just geography being annoying.",

    "If missing me gets unbearable, you can always open this jar again. I won't complain.",

    "I wish this note could carry my voice. You'd probably hear me teasing you.",

    "Some days I don't need a reason to think about you. You're just there in my head.",

    "You know what I like about missing you? Absolutely nothing. Zero stars. Would not recommend.",

    "If I were there, I'd probably find an excuse to stay a little longer.",

    "I hope you feel a little less alone after reading this.",

    "Imagine me looking at you right now and saying, 'I miss you too, dummy.'",

    "You are allowed to miss me. I happen to miss you quite a lot too.",

    "Here's a little reminder that you're never really far from my thoughts.",

    "If you smiled just now, I'm claiming responsibility.",

    "I wish I could bottle up a hug and leave it here for you.",

    "Until I can actually be there, let this tiny note keep you company.",

    "Sometimes I just want to hear your voice. No reason. Just because it's yours.",

    "I hope you know how easily you find your way into my thoughts.",

    "Miss me all you want, sweetheart. I'll be missing you right back.",

    "Come back to me when you can. Until then, keep a little piece of me with you."
  ],


  /* =========================================================
     💛 LOVE — LOOK HOW MUCH I LOVE YOU
     ========================================================= */

  love: [

    "Just in case you forgot: Me, myself, and I are all completely, ridiculously, madly in love with you.",

    "I love you. Annoyingly much, actually.",

    "If loving you were a full-time job, I'd be dangerously overqualified.",

    "You are one of my favorite things about this life.",

    "I hope you know how deeply, genuinely, and stupidly I adore you.",

    "Sometimes I look at you and think, 'yeah, I really got lucky.'",

    "I love the little things about you that you probably don't even realize I notice.",

    "You're not just someone I love. You're someone I love choosing, again and again.",

    "If I had to choose one person to annoy for the foreseeable future, congratulations. It's you.",

    "You make ordinary days feel a little more special just by existing in them.",

    "I love you in the quiet moments, the chaotic moments, and all the weird ones in between.",

    "You're ridiculously easy to love. Don't let it go to your head.",

    "I hope you never doubt how wanted, appreciated, and loved you are.",

    "You have a permanent little corner of my heart. Unfortunately, no eviction notice exists.",

    "I love your presence. Even when you're doing absolutely nothing.",

    "There are probably a thousand ways to say I love you. I'll probably keep trying all of them.",

    "You make me want to keep becoming someone worthy of loving you well.",

    "I love being able to call you mine.",

    "If I could give you one thing today, it would be the ability to see yourself through my eyes.",

    "You are, very inconveniently, one of the easiest people in the world for me to fall for.",

    "I love you more than this tiny piece of paper can possibly explain.",

    "You're my favorite notification, favorite distraction, and favorite person to think about.",

    "I don't need a special occasion to love you loudly.",

    "You make my heart do embarrassing things. Please take responsibility.",

    "I hope you know that I notice you. I see you. And I love you.",

    "Even your little habits have somehow become things I adore.",

    "I love the version of me that exists when I'm with you.",

    "You are one of those people who makes life feel warmer.",

    "If you ever wonder whether I still love you, open this jar. The answer is yes.",

    "I choose you with all your weirdness, softness, stubbornness, and everything in between.",

    "I don't think I'll ever get tired of finding new reasons to love you.",

    "You're precious to me. More than I probably say out loud.",

    "I love you in ways that don't always need words.",

    "You deserve to be loved gently, loudly, consistently, and completely. I'm trying to give you all of that.",

    "You make my world a little brighter without even trying.",

    "I love knowing that somewhere in this huge world, there's you.",

    "You are my favorite kind of trouble.",

    "I would still choose you on the ordinary days. Especially the ordinary days.",

    "I hope today reminds you that you have someone in your corner who loves you very, very much.",

    "You're one of the best things that ever happened to my heart.",

    "I love your laugh. I love your thoughts. I love your existence. See? Ridiculous.",

    "There is something incredibly comforting about knowing you're you and I'm me and somehow we found each other.",

    "I don't need everything to be perfect. Having you makes imperfect days easier to love.",

    "You make me want to say 'I love you' even when there is absolutely no reason to.",

    "If love could be folded into a tiny note, I'd fill this whole jar with it.",

    "You're loved on your good days, your bad days, your sleepy days, and your grumpy days.",

    "I hope you never underestimate the space you occupy in my heart.",

    "I love you abundantly. More than I know how to fit into one little message.",

    "And if you somehow still haven't realized it: yes, sweetheart. I am very, very in love with you."
  ]

};

/* =========================================================
   DATE
========================================================= */

function getTodayKey() {

  const today = new Date();

  const year =
    today.getFullYear();

  const month =
    String(today.getMonth() + 1)
      .padStart(2, "0");

  const day =
    String(today.getDate())
      .padStart(2, "0");

  return `${year}-${month}-${day}`;
}


/* =========================================================
   STORAGE KEY
========================================================= */

function getStorageKey(jarId) {

  return `vijemin-${getTodayKey()}-${jarId}`;

}


/* =========================================================
   TODAY'S MESSAGE
========================================================= */

function getTodayMessage(jarId) {

  const pool =
    messages[jarId];

  const today =
    getTodayKey();

  const dateNumber =
    Number(
      today.replaceAll("-", "")
    );

  const jarNumber =
    Object.keys(messages)
      .indexOf(jarId);

  const index =
    (
      dateNumber +
      jarNumber * 17
    ) % pool.length;

  return {

    text:
      pool[index],

    index:
      index

  };

}


/* =========================================================
   CHECK IF ALREADY TAKEN
========================================================= */

function hasTakenToday(jarId) {

  return (
    localStorage.getItem(
      getStorageKey(jarId)
    ) !== null
  );

}


/* =========================================================
   SAVE DOSE
========================================================= */

function saveDose(
  jarId,
  messageData
) {

  const doseData = {

    message:
      messageData.text,

    messageIndex:
      messageData.index,

    date:
      getTodayKey()

  };

  localStorage.setItem(
    getStorageKey(jarId),
    JSON.stringify(doseData)
  );

}


/* =========================================================
   GET SAVED DOSE
========================================================= */

function getSavedDose(jarId) {

  const saved =
    localStorage.getItem(
      getStorageKey(jarId)
    );

  if (!saved) {
    return null;
  }

  try {

    return JSON.parse(saved);

  } catch (error) {

    console.error(
      "Could not read saved dose:",
      error
    );

    return null;

  }

}


/* =========================================================
   ELEMENTS
========================================================= */

const modal =
  document.getElementById(
    "doseModal"
  );

const modalMessage =
  document.getElementById(
    "doseMessage"
  );

const doseTitle =
  document.getElementById(
    "doseTitle"
  );

const doseRepeat =
  document.getElementById(
    "doseRepeat"
  );

const closeModalButton =
  document.getElementById(
    "closeModal"
  );

const dailyMessage =
  document.getElementById(
    "dailyMessage"
  );

const jarButtons =
  document.querySelectorAll(
    ".jar-button"
  );


/* =========================================================
   OPEN MODAL
========================================================= */

function openModal(
  message,
  alreadyTaken = false
) {

  if (alreadyTaken) {

    doseTitle.textContent =
      "You Already Took One!";

    doseRepeat.textContent =
      "Here it is again ♡";

  } else {

    doseTitle.textContent =
      "Today's Dose";

    doseRepeat.textContent =
      "";

  }

  modalMessage.textContent =
    message;

  modal.classList.add(
    "show"
  );

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

  modal.classList.remove(
    "show"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";

}


/* =========================================================
   UPDATE JAR UI
========================================================= */

function updateJarUI(jarId) {

  const button =
    document.querySelector(
      `.jar-button[data-jar="${jarId}"]`
    );

  const card =
    button?.closest(
      ".jar-card"
    );

  const status =
    document.querySelector(
      `.jar-status[data-status="${jarId}"]`
    );

  if (!card || !status) {
    return;
  }


  if (hasTakenToday(jarId)) {

    card.classList.add(
      "taken"
    );

    status.textContent =
      "You already took your dose today ♡";

  } else {

    card.classList.remove(
      "taken"
    );

    status.textContent =
      "";

  }

}


/* =========================================================
   UPDATE DAILY MESSAGE
========================================================= */

function updateDailyMessage() {

  const jarIds =
    Object.keys(messages);

  const takenCount =
    jarIds.filter(
      jarId =>
        hasTakenToday(jarId)
    ).length;


  if (takenCount === 0) {

    dailyMessage.textContent =
      "Your dose is waiting.";

  }

  else if (
    takenCount === jarIds.length
  ) {

    dailyMessage.textContent =
      "That's enough for today ♡";

  }

  else {

    dailyMessage.textContent =
      "Take what you need. There's still more waiting ♡";

  }

}


/* =========================================================
   TAKE DOSE
========================================================= */

function takeDose(
  jarId,
  button
) {

  /* -------------------------------------------------------
     ALREADY TAKEN

     Show the exact same dose.
     Never generate another one.
  ------------------------------------------------------- */

  if (hasTakenToday(jarId)) {

    const savedDose =
      getSavedDose(jarId);

    if (savedDose) {

      openModal(
        savedDose.message,
        true
      );

    }

    return;
  }


  /* -------------------------------------------------------
     FIRST TIME TODAY
  ------------------------------------------------------- */

  const card =
    button.closest(
      ".jar-card"
    );

  const messageData =
    getTodayMessage(
      jarId
    );


  /* -------------------------------------------------------
     START JAR ANIMATION
  ------------------------------------------------------- */

  card.classList.add(
    "opening"
  );


  /* -------------------------------------------------------
     WAIT FOR JAR ANIMATION
  ------------------------------------------------------- */

  setTimeout(() => {

    saveDose(
      jarId,
      messageData
    );

    updateJarUI(
      jarId
    );

    updateDailyMessage();

    openModal(
      messageData.text,
      false
    );

    card.classList.remove(
      "opening"
    );

  }, 850);

}


/* =========================================================
   JAR BUTTONS
========================================================= */

jarButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        const jarId =
          button.dataset.jar;

        takeDose(
          jarId,
          button
        );

      }
    );

  }
);


/* =========================================================
   CLOSE BUTTON
========================================================= */

closeModalButton.addEventListener(
  "click",
  closeModal
);


/* =========================================================
   CLICK OUTSIDE MODAL
========================================================= */

modal.addEventListener(
  "click",
  event => {

    if (
      event.target.classList
        .contains("modal-overlay")
    ) {

      closeModal();

    }

  }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeModal();

    }

  }
);


/* =========================================================
   INITIALIZE
========================================================= */

function initializePage() {

  Object.keys(messages)
    .forEach(
      jarId => {

        updateJarUI(
          jarId
        );

      }
    );

  updateDailyMessage();

}


initializePage();
