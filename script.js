/* =========================================================
   viJEMIn daily booster
   ========================================================= */


/* =========================================================
   MESSAGE POOLS
   ========================================================= */

/*
   FOR NOW:
   Only one dummy message per jar.

   Later:
   Each array will contain 50 messages.
*/

const messages = {

  comfort: [
    "hey. whatever happened today, you don't have to carry all of it at once. come here for a second. breathe. i'm here."
  ],

  motivation: [
    "get your ass up, sweetheart. you don't have to conquer the whole world today. just do one thing. then we'll see."
  ],

  missyou: [
    "miss me, huh? well... i figured you might. here's a little reminder that even when i'm not around, a tiny piece of me can still keep you company."
  ],

  love: [
    "just in case you forgot: me, myself, and i are all completely, ridiculously, madly in love with you."
  ]

};


/* =========================================================
   JAR INFORMATION
   ========================================================= */

const jarNames = {

  comfort: "when life sucks",

  motivation: "get your ass up",

  missyou: "miss me, huh?",

  love: "look how much i love you"

};


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const jarButtons = document.querySelectorAll(".jar-button");

const modal = document.getElementById("doseModal");

const modalMessage = document.getElementById("doseMessage");

const closeModalButton = document.getElementById("closeModal");

const dailyMessage = document.getElementById("dailyMessage");


/* =========================================================
   DATE HELPER
   ========================================================= */

function getTodayKey() {

  const today = new Date();

  const year = today.getFullYear();

  const month = String(today.getMonth() + 1).padStart(2, "0");

  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}


/* =========================================================
   STORAGE KEY
   ========================================================= */

function getStorageKey(jarId) {

  return `vijemin-${getTodayKey()}-${jarId}`;

}


/* =========================================================
   GET TODAY'S MESSAGE
   ========================================================= */

/*
   This makes sure that:

   - refreshing the page doesn't change the message
   - the same jar gives the same message all day
   - tomorrow automatically gets a different message
*/

function getTodayMessage(jarId) {

  const pool = messages[jarId];

  const today = getTodayKey();

  /*
     Convert date into a number.
     This will later allow us to select
     different messages from the 50-message pool.
  */

  const dateNumber = Number(
    today.replaceAll("-", "")
  );

  const jarNumber = Object.keys(messages).indexOf(jarId);

  const index =
    (dateNumber + jarNumber * 17) % pool.length;

  return {
    text: pool[index],
    index: index
  };

}


/* =========================================================
   CHECK IF JAR HAS BEEN OPENED TODAY
   ========================================================= */

function hasTakenToday(jarId) {

  const storageKey = getStorageKey(jarId);

  return localStorage.getItem(storageKey) !== null;

}


/* =========================================================
   SAVE TODAY'S DOSE
   ========================================================= */

function saveDose(jarId, messageData) {

  const storageKey = getStorageKey(jarId);

  const doseData = {
    message: messageData.text,
    messageIndex: messageData.index,
    date: getTodayKey()
  };

  localStorage.setItem(
    storageKey,
    JSON.stringify(doseData)
  );

}


/* =========================================================
   GET SAVED DOSE
   ========================================================= */

function getSavedDose(jarId) {

  const storageKey = getStorageKey(jarId);

  const saved = localStorage.getItem(storageKey);

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
   OPEN MODAL
   ========================================================= */

function openModal(message) {

  modalMessage.textContent = message;

  modal.classList.add("show");

  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeModal() {

  modal.classList.remove("show");

  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

}


/* =========================================================
   UPDATE JAR UI
   ========================================================= */

function updateJarUI(jarId) {

  const card = document.querySelector(
    `.jar-button[data-jar="${jarId}"]`
  )?.closest(".jar-card");

  const status = document.querySelector(
    `.jar-status[data-status="${jarId}"]`
  );

  if (!card || !status) {
    return;
  }

  if (hasTakenToday(jarId)) {

    card.classList.add("taken");

    status.textContent =
      "you already took your dose today ♡";

  } else {

    card.classList.remove("taken");

    status.textContent = "";

  }

}


/* =========================================================
   UPDATE DAILY MESSAGE
   ========================================================= */

function updateDailyMessage() {

  const jarIds = Object.keys(messages);

  const takenCount = jarIds.filter(
    jarId => hasTakenToday(jarId)
  ).length;


  if (takenCount === 0) {

    dailyMessage.textContent =
      "your dose is waiting.";

  } else if (takenCount === jarIds.length) {

    dailyMessage.textContent =
      "that's enough for today ♡";

  } else {

    dailyMessage.textContent =
      "take what you need. there's still more waiting ♡";

  }

}


/* =========================================================
   OPEN JAR
   ========================================================= */

function takeDose(jarId, button) {

  /*
     If already opened today:
     simply show the same message again.
  */

  if (hasTakenToday(jarId)) {

    const savedDose = getSavedDose(jarId);

    if (savedDose) {

      openModal(savedDose.message);

    }

    return;
  }


  const card = button.closest(".jar-card");

  const messageData = getTodayMessage(jarId);


  /*
     Start jar animation.
  */

  card.classList.add("opening");


  /*
     Wait until the animation has happened
     before showing the note.
  */

  setTimeout(() => {

    saveDose(jarId, messageData);

    updateJarUI(jarId);

    updateDailyMessage();

    openModal(messageData.text);

    card.classList.remove("opening");

  }, 850);

}


/* =========================================================
   JAR CLICK EVENTS
   ========================================================= */

jarButtons.forEach(button => {

  button.addEventListener("click", () => {

    const jarId = button.dataset.jar;

    takeDose(jarId, button);

  });

});


/* =========================================================
   CLOSE BUTTON
   ========================================================= */

closeModalButton.addEventListener(
  "click",
  closeModal
);


/* =========================================================
   CLOSE BY CLICKING OUTSIDE NOTE
   ========================================================= */

modal.addEventListener("click", (event) => {

  if (
    event.target.classList.contains("modal-overlay")
  ) {

    closeModal();

  }

});


/* =========================================================
   CLOSE WITH ESC
   ========================================================= */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    closeModal();

  }

});


/* =========================================================
   INITIALIZE PAGE
   ========================================================= */

function initializePage() {

  Object.keys(messages).forEach(jarId => {

    updateJarUI(jarId);

  });

  updateDailyMessage();

}


/* =========================================================
   START
   ========================================================= */

initializePage();
