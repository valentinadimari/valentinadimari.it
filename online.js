/* se diverso da domenica allora evidenzia */

if (new Date().getDay() == 0) {
    document.getElementById("sun").style.color = '#444';
    document.getElementById("sun").style.fontWeight = "normal";
}