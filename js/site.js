function goTo(url){
    location.href=url;
    reload();
}

var version = "0.14";
var date = " (21/02/2018)";

function linuxDownOld(){
    goTo("https://github.com/cyrioncentori/OpMon/releases/download/alpha-v" + version + "/OpMon-" + version  + "-sfml2.3.deb");
}
function linuxDown(){
    goTo("https://github.com/cyrioncentori/OpMon/releases/download/alpha-v" + version + "/OpMon-" + version  + "-sfml2.4.deb");
}
function macDown(){
    goTo("https://github.com/cyrioncentori/OpMon/releases/download/alpha-v" + version + "/OpMon-Mac_" + version + ".dmg");
}
