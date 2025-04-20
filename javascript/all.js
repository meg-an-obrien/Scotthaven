// GLOBAL JS FOR THE PASSWORD ALERT HOPEFULLY ONLY POPS UP ONCE

const correctPassword = "JohnScott";
    const storageKey = "siteUnlocked";

    function unlockSite() {
      if (sessionStorage.getItem(storageKey) === "true") {
        unlockView();
        return;
      }

      while (true) {
        const input = prompt("This site is locked. Enter the password:");
        if (input === null) {
          alert("Access cancelled.");
          return;
        } else if (input === correctPassword) {
          sessionStorage.setItem(storageKey, "true");
          unlockView();
          break;
        } else {
          alert("Wrong password. Please try again.");
        }
      }
    }

    function unlockView() {
      document.body.classList.remove("locked");
      document.getElementById("lockScreen").style.display = "none";
    }

    window.onload = unlockSite;