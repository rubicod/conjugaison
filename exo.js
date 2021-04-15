//indicatif
var presentdelindicatif="<p>Je XXXX<b>e</b></p><p>Tu XXXX<b>es</b></p><p>Il, elle XXXX<b>e</b></p><p>Nous XXXX<b>ons</b></p><p>Vous XXXX<b>ez</b></p>Ils, elles XXXX<b>ent</b></p>";
var futurdelindicatif="<p>Je XXXX<b>rai</b></p><p>Tu XXXX<b>ras</b></p><p>Il, elle XXXX<b>ra</b></p><p>Nous XXXX<b>rons</b></p><p>Vous XXXX<b>rez</b></p>Ils, elles XXXX<b>ront</b></p>";
var passeedelindicatif="<p>Je XXXX<b>ai</b></p><p>Tu XXXX<b>as</b></p><p>Il, elle XXXX<b>a</b></p><p>Nous XXXX<b>âmes</b></p><p>Vous XXXX<b>âtes</b></p>Ils, elles XXXX<b>èrent</b></p>";

function conjugue()
{var vrb=document.getElementById('npt').value;
// test surr la nature du verbe
if (vrb.subsURS(-2)=="er") {
    document.getElementById('rsp').innerHTML=presentdelindicatif.replace(/XXXX/g,vrb.substr(0,vrb.length-2));
    document.getElementById('rsp').innerHTML=presentdelindicatif.replace(/XXXX/g,vrb.substr(0,vrb.length-2));
    document.getElementById('rsp').innerHTML=presentdelindicatif.replace(/XXXX/g,vrb.substr(0,vrb.length-2));