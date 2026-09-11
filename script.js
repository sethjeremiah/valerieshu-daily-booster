/* =========================================================
   viJEMIn Daily Booster
========================================================= */


/* =========================================================
   MESSAGE POOLS
========================================================= */

const messages = {

  comfort: [

    "Hey. Whatever happened today, you don't have to carry all of it at once. Come here for a second. Breathe. I'm here."

  ],

  motivation: [

    "Get your ass up, sweetheart. You don't have to conquer the whole world today. Just do one thing. Then we'll see."

  ],

  missyou: [

    "Miss me, huh? Well... I figured you might. Here's a little reminder that even when I'm not around, a tiny piece of me can still keep you company."

  ],

  love: [

    "Just in case you forgot: Me, myself, and I are all completely, ridiculously, madly in love with you."

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
    String(
      today.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      today.getDate()
    ).padStart(2, "0");

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


  /*
    ALREADY TAKEN

    Show the exact same dose.
    Never generate another one.
  */

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


  /*
    FIRST TIME TODAY
  */

  const card =
    button.closest(
      ".jar-card"
    );

  const messageData =
    getTodayMessage(
      jarId
    );


  /*
    START ANIMATION
  */

  card.classList.add(
    "opening"
  );


  /*
    WAIT FOR BOTTLE
    ANIMATION
  */

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

const jarButtons =
  document.querySelectorAll(
    ".jar-button"
  );


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
   CLICK OUTSIDE
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
   ESCAPE
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
