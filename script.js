let clickOnApps = false;
let clickOnMore = false;
let clickOnSettings = false;
let isAppsVisible = false;
let isMoreVisible = false;
let isSettingsVisible = false;

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
  let appsDiv = document.getElementById("apps-div");
  if (isAppsVisible) {
    appsDiv.style.display = 'block';
    appsDiv.style.overflow = 'hidden';
  }
  else {
    appsDiv.style.display = 'none';
    more('close');
  }
}

function more (mode) {
  clickOnMore = true;
  let moreBtn = document.getElementById("moreApps-btn");
  let appsSheet = document.getElementById("appsSheet");
  let moreAppsSheet = document.getElementById('moreAppsSheet');
  let otherServices = document.getElementById('other-services');
  if (mode == 'close') {
    isMoreVisible = false;
    moreBtn.style.display = 'flex';
    moreAppsSheet.style.display = 'none';
    appsSheet.style.overflowY = 'hidden';
    appsSheet.style.height = '400px';
    otherServices.style.display = 'none';
  }
  if (mode == 'open') {
    isMoreVisible = true;
    moreBtn.style.display = 'none';
    appsSheet.style.overflowY = 'scroll';
    appsSheet.style.height = '440px';
    appsSheet.style.width = '281px';
    appsSheet.style.paddingRight = '10px';
    moreAppsSheet.style.display = 'flex';
    moreAppsSheet.style.marginTop = '30px';
    moreAppsSheet.style.paddingLeft = '-2px';
    appsSheet.scrollTop = appsSheet.scrollHeight;
    otherServices.style.display = 'flex';
    otherServices.style.marginTop = '-2px';
    appsSheet.style.marginRight = '2px';
    appsSheet.style.marginTop = '1px';
  }
}

function clickout () {
  if (isAppsVisible && !clickOnApps && !clickOnMore) {
    appsStatusChange();
  }
  else {
    clickOnApps = false;
    clickOnMore = false;
  }
  if (isSettingsVisible && !clickOnSettings) {
    settings();
  }
  else {
    clickOnSettings = false;
  }
}
function settings() {
  clickOnSettings = true;
  isSettingsVisible = !isSettingsVisible;
  let settingsBlock = document.getElementById('settings');
  if (isSettingsVisible) {
    settingsBlock.style.display = 'flex';
  }
  else {
    settingsBlock.style.display = 'none';
  }
}