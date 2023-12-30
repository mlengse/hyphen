(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hyphenationPatternsSa = factory();
  }
})(this, function () {
  return [
    "22,01,001,0001,021,0301,2,201,21,031,11,12,2001",
    '{"‍":[{},0],"‌":[{},0],"a":[{"̄":[{},2],"i":[{"̈":[{},5]},4],"u":[{"̈":[{},5]},4],"í":[{},4],"ì":[{},4],"ú":[{},4],"ù":[{},4],"ï":[{},9],"ü":[{},9]},1],"i":[{"̈":[{},2],"̄":[{},2]},1],"u":[{"̈":[{},2],"̄":[{},2]},1],"r":[{"̥":[{"̄":[{},3]},2],"̣":[{"̄":[{},3]},2],".":[{},6],"k":[{".":[{},6]}],"g":[{".":[{},6]}],"t":[{"̣":[{".":[{},6]}],".":[{},6]}],"d":[{"̣":[{".":[{},6]}],".":[{},6]}],"p":[{".":[{},6]}],"b":[{".":[{},6]}],"ṭ":[{".":[{},6]}],"ḍ":[{".":[{},6]}]}],"l":[{"̥":[{"̄":[{},3]},2],"̣":[{"̄":[{},3],".":[{},6]},2],".":[{},6]}],"e":[{},1],"o":[{},1],"k":[{".":[{},6],"h":[{".":[{},6]}]}],"g":[{".":[{},6],"h":[{".":[{},6]}]}],"n":[{"̇":[{".":[{},6]}],"̃":[{".":[{},6]}],"̣":[{".":[{},6]}],".":[{},6]}],"c":[{".":[{},6],"h":[{".":[{},6]}]}],"j":[{".":[{},6],"h":[{".":[{},6]}]}],"t":[{"̣":[{".":[{},6],"h":[{".":[{},6]}]}],".":[{},6],"h":[{".":[{},6]}]}],"d":[{"̣":[{".":[{},6],"h":[{".":[{},6]}]}],".":[{},6],"h":[{".":[{},6]}]}],"p":[{".":[{},6],"h":[{".":[{},6]}]}],"b":[{".":[{},6],"h":[{".":[{},6]}]}],"m":[{".":[{},6],"̣":[{},7],"̇":[{},7],"̐":[{},7]}],"y":[{".":[{},6]}],"v":[{".":[{},6]}],"s":[{"́":[{".":[{},6]}],"̣":[{".":[{},6]}],".":[{},6]}],"h":[{".":[{},6],"̣":[{},7],"̱":[{},7],"̮":[{},7]}],"̮":[{},6],"̐":[{},6],"̄":[{},6],"̱":[{},8],"́":[{},8],"̀":[{},8],"̈":[{},6],"á":[{},1],"à":[{},1],"ā":[{},1],"í":[{},1],"ì":[{},1],"ï":[{},1],"ī":[{},1],"ú":[{},1],"ù":[{},1],"ü":[{},1],"ū":[{},1],"é":[{},1],"è":[{},1],"ó":[{},1],"ò":[{},1],"ṅ":[{".":[{},6]}],"ñ":[{".":[{},6]}],"ṭ":[{".":[{},6],"h":[{".":[{},6]}]}],"ḍ":[{".":[{},6],"h":[{".":[{},6]}]}],"ṇ":[{".":[{},6]}],"ḷ":[{".":[{},6]}],"ś":[{".":[{},6]}],"ṣ":[{".":[{},6]}],"ṃ":[{},8],"ṁ":[{},8],"ḥ":[{},8],"ẖ":[{},8],"ḫ":[{},8],"अ":[{},10],"आ":[{},10],"इ":[{},10],"ई":[{},10],"उ":[{},10],"ऊ":[{},10],"ऋ":[{},10],"ॠ":[{},10],"ऌ":[{},10],"ॡ":[{},10],"ए":[{},10],"ऐ":[{},10],"ओ":[{},10],"औ":[{},10],"ा":[{},8],"ि":[{},8],"ी":[{},8],"ु":[{},8],"ू":[{},8],"ृ":[{},8],"ॄ":[{},8],"ॢ":[{},8],"ॣ":[{},8],"े":[{},8],"ै":[{},8],"ो":[{},8],"ौ":[{},8],"क":[{"्":[{".":[{},6]}]},10],"ख":[{"्":[{".":[{},6]}]},10],"ग":[{"्":[{".":[{},6]}]},10],"घ":[{"्":[{".":[{},6]}]},10],"ङ":[{"्":[{".":[{},6]}]},10],"च":[{"्":[{".":[{},6]}]},10],"छ":[{"्":[{".":[{},6]}]},10],"ज":[{"्":[{".":[{},6]}]},10],"झ":[{"्":[{".":[{},6]}]},10],"ञ":[{"्":[{".":[{},6]}]},10],"ट":[{"्":[{".":[{},6]}]},10],"ठ":[{"्":[{".":[{},6]}]},10],"ड":[{"्":[{".":[{},6]}]},10],"ढ":[{"्":[{".":[{},6]}]},10],"ण":[{"्":[{".":[{},6]}]},10],"त":[{"्":[{".":[{},6]}]},10],"थ":[{"्":[{".":[{},6]}]},10],"द":[{"्":[{".":[{},6]}]},10],"ध":[{"्":[{".":[{},6]}]},10],"न":[{"्":[{".":[{},6]}]},10],"प":[{"्":[{".":[{},6]}]},10],"फ":[{"्":[{".":[{},6]}]},10],"ब":[{"्":[{".":[{},6]}]},10],"भ":[{"्":[{".":[{},6]}]},10],"म":[{"्":[{".":[{},6]}]},10],"य":[{"्":[{".":[{},6]}]},10],"र":[{"्":[{".":[{},6],"क":[{"्":[{".":[{},6]}]}],"ट":[{"्":[{".":[{},6]}]}],"त":[{"्":[{".":[{},6]}]}],"प":[{"्":[{".":[{},6]}]}]}]},10],"ल":[{"्":[{".":[{},6]}]},10],"ळ":[{"्":[{".":[{},6]}]},10],"व":[{"्":[{".":[{},6]}]},10],"श":[{"्":[{".":[{},6]}]},10],"ष":[{"्":[{".":[{},6]}]},10],"स":[{"्":[{".":[{},6]}]},10],"ह":[{"्":[{".":[{},6]}]},10],"ँ":[{},6],"ं":[{},6],"ः":[{},6],"ऽ":[{},0],"॑":[{},6],"॒":[{},6],"्":[{},0],"অ":[{},10],"আ":[{},10],"ই":[{},10],"ঈ":[{},10],"উ":[{},10],"ঊ":[{},10],"ঋ":[{},10],"ৠ":[{},10],"ঌ":[{},10],"ৡ":[{},10],"এ":[{},10],"ঐ":[{},10],"ও":[{},10],"ঔ":[{},10],"া":[{},8],"ি":[{},8],"ী":[{},8],"ু":[{},8],"ূ":[{},8],"ৃ":[{},8],"ৄ":[{},8],"ৢ":[{},8],"ৣ":[{},8],"ে":[{},8],"ৈ":[{},8],"ো":[{},8],"ৌ":[{},8],"ক":[{"্":[{".":[{},6]}]},10],"খ":[{"্":[{".":[{},6]}]},10],"গ":[{"্":[{".":[{},6]}]},10],"ঘ":[{"্":[{".":[{},6]}]},10],"ঙ":[{"্":[{".":[{},6]}]},10],"চ":[{"্":[{".":[{},6]}]},10],"ছ":[{"্":[{".":[{},6]}]},10],"জ":[{"্":[{".":[{},6]}]},10],"ঝ":[{"্":[{".":[{},6]}]},10],"ঞ":[{"্":[{".":[{},6]}]},10],"ট":[{"্":[{".":[{},6]}]},10],"ঠ":[{"্":[{".":[{},6]}]},10],"ড":[{"্":[{".":[{},6]}]},10],"ড়":[{"্":[{".":[{},6]}]},10],"ঢ":[{"্":[{".":[{},6]}]},10],"ঢ়":[{"্":[{".":[{},6]}]},10],"ণ":[{"্":[{".":[{},6]}]},10],"ত":[{"্":[{".":[{},6]}]},10],"থ":[{"্":[{".":[{},6]}]},10],"দ":[{"্":[{".":[{},6]}]},10],"ধ":[{"্":[{".":[{},6]}]},10],"ন":[{"্":[{".":[{},6]}]},10],"প":[{"্":[{".":[{},6]}]},10],"ফ":[{"্":[{".":[{},6]}]},10],"ব":[{"্":[{".":[{},6]}]},10],"ভ":[{"্":[{".":[{},6]}]},10],"ম":[{"্":[{".":[{},6]}]},10],"য":[{"্":[{".":[{},6]}]},10],"য়":[{"্":[{".":[{},6]}]},10],"র":[{"্":[{".":[{},6],"ক":[{".":[{},6]}],"ট":[{".":[{},6]}],"ত":[{".":[{},6]}],"প":[{".":[{},6]}]}]},10],"ল":[{"্":[{".":[{},6]}]},10],"শ":[{"্":[{".":[{},6]}]},10],"ষ":[{"্":[{".":[{},6]}]},10],"স":[{"্":[{".":[{},6]}]},10],"হ":[{"্":[{".":[{},6]}]},10],"ৎ":[{},11],"ঁ":[{},6],"ং":[{},6],"ঃ":[{},6],"ঽ":[{},0],"়":[{},6],"ৗ":[{},6],"্":[{},0],"અ":[{},10],"આ":[{},10],"ઇ":[{},10],"ઈ":[{},10],"ઉ":[{},10],"ઊ":[{},10],"ઋ":[{},10],"ૠ":[{},10],"ઌ":[{},10],"ૡ":[{},10],"એ":[{},10],"ઐ":[{},10],"ઓ":[{},10],"ઔ":[{},10],"ા":[{},8],"િ":[{},8],"ી":[{},8],"ુ":[{},8],"ૂ":[{},8],"ૃ":[{},8],"ૄ":[{},8],"ૢ":[{},8],"ૣ":[{},8],"ે":[{},8],"ૈ":[{},8],"ો":[{},8],"ૌ":[{},8],"ક":[{"્":[{".":[{},6]}]},10],"ખ":[{"્":[{".":[{},6]}]},10],"ગ":[{"્":[{".":[{},6]}]},10],"ઘ":[{"્":[{".":[{},6]}]},10],"ઙ":[{"્":[{".":[{},6]}]},10],"ચ":[{"્":[{".":[{},6]}]},10],"છ":[{"્":[{".":[{},6]}]},10],"જ":[{"્":[{".":[{},6]}]},10],"ઝ":[{"્":[{".":[{},6]}]},10],"ઞ":[{"્":[{".":[{},6]}]},10],"ટ":[{"્":[{".":[{},6]}]},10],"ઠ":[{"્":[{".":[{},6]}]},10],"ડ":[{"્":[{".":[{},6]}]},10],"ઢ":[{"્":[{".":[{},6]}]},10],"ણ":[{"્":[{".":[{},6]}]},10],"ત":[{"્":[{".":[{},6]}]},10],"થ":[{"્":[{".":[{},6]}]},10],"દ":[{"્":[{".":[{},6]}]},10],"ધ":[{"્":[{".":[{},6]}]},10],"ન":[{"્":[{".":[{},6]}]},10],"પ":[{"્":[{".":[{},6]}]},10],"ફ":[{"્":[{".":[{},6]}]},10],"બ":[{"્":[{".":[{},6]}]},10],"ભ":[{"્":[{".":[{},6]}]},10],"મ":[{"્":[{".":[{},6]}]},10],"ય":[{"્":[{".":[{},6]}]},10],"ર":[{"્":[{".":[{},6],"ક":[{".":[{},6]}],"ટ":[{".":[{},6]}],"ત":[{".":[{},6]}],"પ":[{".":[{},6]}]}]},10],"લ":[{"્":[{".":[{},6]}]},10],"ળ":[{"્":[{".":[{},6]}]},10],"વ":[{"્":[{".":[{},6]}]},10],"શ":[{"્":[{".":[{},6]}]},10],"ષ":[{"્":[{".":[{},6]}]},10],"સ":[{"્":[{".":[{},6]}]},10],"હ":[{"્":[{".":[{},6]}]},10],"ઁ":[{},6],"ં":[{},6],"ઃ":[{},6],"ઽ":[{},0],"્":[{},0],"ಅ":[{},10],"ಆ":[{},10],"ಇ":[{},10],"ಈ":[{},10],"ಉ":[{},10],"ಊ":[{},10],"ಋ":[{},10],"ೠ":[{},10],"ಌ":[{},10],"ೡ":[{},10],"ಎ":[{},10],"ಏ":[{},10],"ಐ":[{},10],"ಒ":[{},10],"ಓ":[{},10],"ಔ":[{},10],"ಾ":[{},8],"ಿ":[{},8],"ೀ":[{},8],"ು":[{},8],"ೂ":[{},8],"ೃ":[{},8],"ೄ":[{},8],"ೆ":[{},8],"ೇ":[{},8],"ೈ":[{},8],"ೊ":[{},8],"ೋ":[{},8],"ೌ":[{},8],"ಕ":[{"್":[{".":[{},6]}]},10],"ಖ":[{"್":[{".":[{},6]}]},10],"ಗ":[{"್":[{".":[{},6]}]},10],"ಘ":[{"್":[{".":[{},6]}]},10],"ಙ":[{"್":[{".":[{},6]}]},10],"ಚ":[{"್":[{".":[{},6]}]},10],"ಛ":[{"್":[{".":[{},6]}]},10],"ಜ":[{"್":[{".":[{},6]}]},10],"ಝ":[{"್":[{".":[{},6]}]},10],"ಞ":[{"್":[{".":[{},6]}]},10],"ಟ":[{"್":[{".":[{},6]}]},10],"ಠ":[{"್":[{".":[{},6]}]},10],"ಡ":[{"್":[{".":[{},6]}]},10],"ಢ":[{"್":[{".":[{},6]}]},10],"ಣ":[{"್":[{".":[{},6]}]},10],"ತ":[{"್":[{".":[{},6]}]},10],"ಥ":[{"್":[{".":[{},6]}]},10],"ದ":[{"್":[{".":[{},6]}]},10],"ಧ":[{"್":[{".":[{},6]}]},10],"ನ":[{"್":[{".":[{},6]}]},10],"ಪ":[{"್":[{".":[{},6]}]},10],"ಫ":[{"್":[{".":[{},6]}]},10],"ಬ":[{"್":[{".":[{},6]}]},10],"ಭ":[{"್":[{".":[{},6]}]},10],"ಮ":[{"್":[{".":[{},6]}]},10],"ಯ":[{"್":[{".":[{},6]}]},10],"ರ":[{"್":[{".":[{},6],"ಕ":[{".":[{},6]}],"ಟ":[{".":[{},6]}],"ತ":[{".":[{},6]}],"ಪ":[{".":[{},6]}]}]},10],"ಱ":[{"್":[{".":[{},6]}]},10],"ಲ":[{"್":[{".":[{},6]}]},10],"ಳ":[{"್":[{".":[{},6]}]},10],"ೞ":[{},10],"ವ":[{"್":[{".":[{},6]}]},10],"ಶ":[{"್":[{".":[{},6]}]},10],"ಷ":[{"್":[{".":[{},6]}]},10],"ಸ":[{"್":[{".":[{},6]}]},10],"ಹ":[{"್":[{".":[{},6]}]},10],"ಂ":[{},6],"ಃ":[{},6],"ೱ":[{},6],"ೲ":[{},6],"ಽ":[{},0],"ೕ":[{},6],"ೖ":[{},6],"್":[{},0],"അ":[{},10],"ആ":[{},10],"ഇ":[{},10],"ഈ":[{},10],"ഉ":[{},10],"ഊ":[{},10],"ഋ":[{},10],"ൠ":[{},10],"ഌ":[{},10],"ൡ":[{},10],"എ":[{},10],"ഏ":[{},10],"ഐ":[{},10],"ഒ":[{},10],"ഓ":[{},10],"ഔ":[{},10],"ാ":[{},8],"ി":[{},8],"ീ":[{},8],"ു":[{},8],"ൂ":[{},8],"ൃ":[{},8],"െ":[{},8],"േ":[{},8],"ൈ":[{},8],"ൊ":[{},8],"ോ":[{},8],"ൌ":[{},8],"ക":[{"്":[{".":[{},6],"‍":[{},12]}]},10],"ഖ":[{"്":[{".":[{},6]}]},10],"ഗ":[{"്":[{".":[{},6]}]},10],"ഘ":[{"്":[{".":[{},6]}]},10],"ങ":[{"്":[{".":[{},6]}]},10],"ച":[{"്":[{".":[{},6]}]},10],"ഛ":[{"്":[{".":[{},6]}]},10],"ജ":[{"്":[{".":[{},6]}]},10],"ഝ":[{"്":[{".":[{},6]}]},10],"ഞ":[{"്":[{".":[{},6]}]},10],"ട":[{"്":[{".":[{},6]}]},10],"ഠ":[{"്":[{".":[{},6]}]},10],"ഡ":[{"്":[{".":[{},6]}]},10],"ഢ":[{"്":[{".":[{},6]}]},10],"ണ":[{"്":[{".":[{},6],"‍":[{},12]}]},10],"ത":[{"്":[{".":[{},6],"‍":[{},12]}]},10],"ഥ":[{"്":[{".":[{},6]}]},10],"ദ":[{"്":[{".":[{},6]}]},10],"ധ":[{"്":[{".":[{},6]}]},10],"ന":[{"്":[{".":[{},6],"‍":[{},12]}]},10],"പ":[{"്":[{".":[{},6]}]},10],"ഫ":[{"്":[{".":[{},6]}]},10],"ബ":[{"്":[{".":[{},6]}]},10],"ഭ":[{"്":[{".":[{},6]}]},10],"മ":[{"്":[{".":[{},6]}]},10],"യ":[{"്":[{".":[{},6]}]},10],"ര":[{"്":[{".":[{},6],"ക":[{".":[{},6]}],"ട":[{".":[{},6]}],"ത":[{".":[{},6]}],"പ":[{".":[{},6]}],"‍":[{},12]}]},10],"റ":[{"്":[{".":[{},6]}]},10],"ല":[{"്":[{".":[{},6],"‍":[{},12]}]},10],"ള":[{"്":[{".":[{},6],"‍":[{},12]}]},10],"ഴ":[{"്":[{".":[{},6]}]},10],"വ":[{"്":[{".":[{},6]}]},10],"ശ":[{"്":[{".":[{},6]}]},10],"ഷ":[{"്":[{".":[{},6]}]},10],"സ":[{"്":[{".":[{},6]}]},10],"ഹ":[{"്":[{".":[{},6]}]},10],"ൺ":[{},8],"ൻ":[{},8],"ർ":[{},8],"ൽ":[{},8],"ൾ":[{},8],"ൿ":[{},8],"ം":[{},6],"ഃ":[{},6],"ൗ":[{},6],"്":[{},0],"అ":[{},10],"ఆ":[{},10],"ఇ":[{},10],"ఈ":[{},10],"ఉ":[{},10],"ఊ":[{},10],"ఋ":[{},10],"ౠ":[{},10],"ఌ":[{},10],"ౡ":[{},10],"ఎ":[{},10],"ఏ":[{},10],"ఐ":[{},10],"ఒ":[{},10],"ఓ":[{},10],"ఔ":[{},10],"ా":[{},8],"ి":[{},8],"ీ":[{},8],"ు":[{},8],"ూ":[{},8],"ృ":[{},8],"ౄ":[{},8],"ె":[{},8],"ే":[{},8],"ై":[{},8],"ొ":[{},8],"ో":[{},8],"ౌ":[{},8],"క":[{"్":[{".":[{},6]}]},10],"ఖ":[{"్":[{".":[{},6]}]},10],"గ":[{"్":[{".":[{},6]}]},10],"ఘ":[{"్":[{".":[{},6]}]},10],"ఙ":[{"్":[{".":[{},6]}]},10],"చ":[{"్":[{".":[{},6]}]},10],"ఛ":[{"్":[{".":[{},6]}]},10],"జ":[{"్":[{".":[{},6]}]},10],"ఝ":[{"్":[{".":[{},6]}]},10],"ఞ":[{"్":[{".":[{},6]}]},10],"ట":[{"్":[{".":[{},6]}]},10],"ఠ":[{"్":[{".":[{},6]}]},10],"డ":[{"్":[{".":[{},6]}]},10],"ఢ":[{"్":[{".":[{},6]}]},10],"ణ":[{"్":[{".":[{},6]}]},10],"త":[{"్":[{".":[{},6]}]},10],"థ":[{"్":[{".":[{},6]}]},10],"ద":[{"్":[{".":[{},6]}]},10],"ధ":[{"్":[{".":[{},6]}]},10],"న":[{"్":[{".":[{},6]}]},10],"ప":[{"్":[{".":[{},6]}]},10],"ఫ":[{"్":[{".":[{},6]}]},10],"బ":[{"్":[{".":[{},6]}]},10],"భ":[{"్":[{".":[{},6]}]},10],"మ":[{"్":[{".":[{},6]}]},10],"య":[{"్":[{".":[{},6]}]},10],"ర":[{"్":[{".":[{},6],"క":[{"్":[{".":[{},6]}]}],"ట":[{"్":[{".":[{},6]}]}],"త":[{"్":[{".":[{},6]}]}],"ప":[{"్":[{".":[{},6]}]}]}]},10],"ఱ":[{"్":[{".":[{},6]}]},10],"ల":[{"్":[{".":[{},6]}]},10],"ళ":[{"్":[{".":[{},6]}]},10],"వ":[{"్":[{".":[{},6]}]},10],"శ":[{"్":[{".":[{},6]}]},10],"ష":[{"్":[{".":[{},6]}]},10],"స":[{"్":[{".":[{},6]}]},10],"హ":[{"్":[{".":[{},6]}]},10],"ఁ":[{},6],"ం":[{},6],"ః":[{},6],"ౕ":[{},6],"ౖ":[{},6],"్":[{},0]}',
    []
  ];
});
