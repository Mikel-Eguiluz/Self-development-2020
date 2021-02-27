function updateTimer() {
  future = Date.parse("nov 20, 2020 18:20:00");
  // future = Date.parse("nov 20, 2020 01:02:00");
  now = new Date();
  diff = future - now;
  if (diff > 0) {
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer").innerHTML =
      "<div>" +
      d +
      "<span>days</span></div>" +
      "<div>" +
      h +
      "<span>hours</span></div>" +
      "<div>" +
      m +
      "<span>minutes</span></div>" +
      "<div>" +
      s +
      "<span>seconds</span></div>";
  } else if (diff > -80 * 1000 * 60) {
    document.getElementById("timer-container").style.display = "block";
    document.getElementById("timer").style.width = "100%";

    document.getElementById("timer").style.background = "#194915";
    document.getElementById("timer").innerHTML =
      '<a href="https://zoom.us/j/98860339722"><div class="timer-msg">EVENT&nbspIS LIVE!<span>Join Now</span></div></a>';
  } else {
    document.getElementById("timer-container").style.display = "block";
    document.getElementById("timer").style.width = "100%";
    document.getElementById("timer").style.background = "#491515";
    document.getElementById("timer").innerHTML =
      '<div class="timer-msg" >EVENT HAS ENDED</div>';
  }
}
setInterval("updateTimer()", 1000);
