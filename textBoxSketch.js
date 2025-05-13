const input = document.getElementById('inputText');
const button = document.getElementById('bttn');
const output = document.getElementById('outputText');

button.addEventListener('click', randomizeText);

function RandomColor() {
  var colors = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "blanchedalmond", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "gainsboro", "ghostwhite", "gold", "goldenrod", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "oldlace", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "whitesmoke", "yellow", "yellowgreen", "black"];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
}

function RandomFontSize() {
  var sizes = ["12pt", "13pt", "14pt", "15pt", "16pt", "17pt", "18pt", "19pt", "20pt", "21pt", "22pt", "23pt", "24pt", "25pt", "26pt", "27pt", "28pt", "29pt", "30pt", "31pt", "32pt", "33pt", "34pt", "35pt", "36pt", "37pt", "38pt", "39pt", "40pt", "41pt", "42pt", "43pt", "44pt", "45pt", "46pt", "47pt", "48pt", "49pt", "50pt", "51pt", "52pt", "53pt", "54pt", "55pt", "56pt", "57pt", "58pt", "59pt", "60pt", "61pt", "62pt", "63pt", "64pt", "65pt", "66pt", "67pt", "68pt", "69pt", "70pt", "71pt", "72pt", "73pt", "74pt", "75pt", "76pt", "77pt", "78pt", "79pt", "80pt", "81pt", "82pt", "83pt", "84pt", "85pt", "86pt", "87pt", "88pt", "89pt", "90pt", "91pt", "92pt", "93pt", "94pt", "95pt", "96pt", "97pt", "98pt", "99pt", "100pt", "101pt", "102pt", "103pt", "104pt", "105pt", "106pt", "107pt", "108pt", "109pt", "110pt", "111pt", "112pt", "113pt", "114pt", "115pt", "116pt", "117pt", "118pt", "119pt", "120pt", "121pt", "122pt", "123pt", "124pt", "125pt", "126pt", "127pt", "128pt", "129pt", "130pt", "131pt", "132pt", "133pt", "134pt", "135pt", "136pt", "137pt", "138pt", "139pt", "140pt", "141pt", "142pt", "143pt", "144pt", "145pt", "146pt", "147pt", "148pt", "149pt", "150pt", "151pt", "152pt", "153pt", "154pt", "155pt", "156pt", "157pt", "158pt", "159pt", "160pt", "161pt", "162pt", "163pt", "164pt", "165pt", "166pt", "167pt", "168pt", "169pt", "170pt", "171pt", "172pt", "173pt", "174pt", "175pt", "180pt", "181pt", "182pt", "183pt", "184pt", "185pt", "186pt", "187pt", "188pt", "189pt", "190pt", "191pt", "192pt", "193pt", "194pt", "195pt", "196pt", "197pt", "198pt", "199pt", "200pt", "201pt", "202pt", "203pt", "204pt", "205pt", "206pt", "207pt", "208pt", "209pt", "210pt", "211pt", "212pt", "213pt", "214pt", "215pt", "216pt", "217pt", "218pt", "219pt", "220pt", "221pt", "222pt", "223pt", "224pt", "225pt", "226pt", "227pt", "228pt", "229pt", "230pt", "231pt", "232pt", "233pt", "234pt", "235pt", "236pt", "237pt", "238pt", "239pt", "240pt", "241pt", "242pt", "243pt", "244pt", "245pt", "246pt", "247pt", "248pt", "249pt", "250pt", "251pt", "252pt", "253pt", "254pt", "255pt", "256pt", "257pt", "258pt", "259pt", "260pt", "261pt", "262pt", "263pt", "264pt", "265pt", "266pt", "267pt", "268pt", "269pt", "270pt", "271pt", "272pt", "273pt", "274pt", "275pt", "276pt", "277pt", "278pt", "279pt", "280pt", "281pt", "282pt", "283pt", "284pt", "285pt", "286pt", "287pt", "288pt", "290pt", "291pt", "292pt", "293pt", "294pt", "295pt", "296pt", "297pt", "298pt", "299pt", "300pt"];
  var randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  return randomSize;
}

function RandomFont() {
  var fonts = ["Roboto", "Oswald", "Lilita One", "Comfortaa", "Righteous", "Space Mono", "Staatliches", "Oxanium", "Julius Sans One", "Londrina Solid"];
  var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  return randomFont;
}

function randomizeText() {
  const text = input.value;
  output.innerHTML = "";

  for (let char of text) {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.color = RandomColor();
    span.style.fontSize = RandomFontSize();
    span.style.fontFamily = RandomFont();
    output.appendChild(span);
  }
}