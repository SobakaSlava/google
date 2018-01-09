let clickOnApps = false;
let clickOnMore = false;
let clickOnSettings = false;
let isAppsVisible = false;
let isMoreVisible = false;
let isSettingsVisible = false;
let e;

function lucky() {
  location.href = "https://www.google.com/doodles";
}

window.addEventListener("keypress", search);
function search(e) {
  let searchbox = document.getElementById("searchbox");
  if (searchbox.value.trim() != '') {
    if (!e || e.keyCode == 13) {
      location.href = 'https://www.google.ru/search?hl=ru&q=' + searchbox.value + '&gws_rd=ssl';
    }
  }
}

function appsStatusChange() {
  clickOnApps = true;
  isAppsVisible = !isAppsVisible;
  let appsSheet = document.getElementById("appsSheet");
  if (isAppsVisible) {
    appsSheet.style.display = 'flex';
    appsSheet.style.overflow = 'hidden';
  }
  else {
    appsSheet.style.display = 'none';
    more();
  }
}

function more () {
  clickOnMore = true;
  isMoreVisible = !isMoreVisible;
  let moreBtn = document.getElementById("moreApps-btn");
  let appsSheet = document.getElementById("appsSheet");
  let moreAppsSheet = document.getElementById('moreAppsSheet')
  if (isMoreVisible) {
    moreBtn.style.display = 'none';
    appsSheet.style.overflowX = 'hidden';
    appsSheet.style.overflowY = 'scroll';
    appsSheet.style.height = '440px';
    appsSheet.style.width = '279px';
    appsSheet.style.paddingRight = '13px';
    moreAppsSheet.style.display = 'flex';
    appsSheet.scrollTop = 10000;
  }
  else {
    moreBtn.style.display = 'block';
    moreAppsSheet.style.display = 'none';
  }
}