class CountdownTimer {
  constructor(targetDate) {
    this.targetDate = targetDate;
    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.updateTimer(this.getRefs());
    }, 1000);
  }

  getRefs() {
    const container = document.querySelector("#timer-1");
    const daysEl = container.querySelector('[data-value="days"]');
    const hoursEl =container.querySelector('[data-value="hours"]');
    const minsEl = container.querySelector('[data-value="mins"]');
    const secsEl = container.querySelector('[data-value="secs"]');
    return { container, daysEl, hoursEl, minsEl, secsEl };
  }

  updateTimer({ container, daysEl, hoursEl, minsEl, secsEl }) {
    const time = this.targetDate - Date.now();
    if (time <= 0) {
      clearInterval(this.intervalId);
      container.innerHTML = '<h1> Ура! </h1>';
      return;
    }
    daysEl.textContent = Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    hoursEl.textContent = Math.floor(
      (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
      .toString()
      .padStart(2, "0");
    minsEl.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    secsEl.textContent = Math.floor((time % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");
  }
}

const timer = new CountdownTimer(new Date("Febr 03, 2022 00:00:00"));

timer.start();