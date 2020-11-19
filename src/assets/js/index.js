var deviceWidth = document.documentElement.clientWidth;
if(deviceWidth >750) {
    deviceWidth = 750;
}
var fs = (deviceWidth * 100)/deviceWidth;
document.documentElement.style.fontSize = fs + 'px';