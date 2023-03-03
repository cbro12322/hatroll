document.getElementById("Themes").onchange = function() {
  if (this.value === "Classic") {
    localStorage.setItem('Classic', 'on');
    localStorage.setItem('Ocean', 'off');
    localStorage.setItem('Midnight', 'off');
    document.body.style.backgroundColor = "#111";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#111");
  } else if (this.value === "Ocean") {
    localStorage.setItem('Ocean', 'on');
    localStorage.setItem('Classic', 'off');
    localStorage.setItem('Midnight', 'off');
    document.body.style.backgroundColor = "#162545";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#162545");
  } else if (this.value === "Midnight") {
    localStorage.setItem('Midnight', 'on');
    localStorage.setItem('Classic', 'off');
    localStorage.setItem('Ocean', 'off');
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#000");
  }
};
