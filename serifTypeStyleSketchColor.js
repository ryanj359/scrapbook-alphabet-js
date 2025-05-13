function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }
  
  function RandomColor() {
    var colors = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "blanchedalmond", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "gainsboro", "ghostwhite", "gold", "goldenrod", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "oldlace", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "whitesmoke", "yellow", "yellowgreen", "black"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }
  
//   function RandomFontSize() {
//     var sizes = ["12pt", "13pt", "14pt", "15pt", "16pt", "17pt", "18pt", "19pt", "20pt", "21pt", "22pt", "23pt", "24pt", "25pt", "26pt", "27pt", "28pt", "29pt", "30pt", "31pt", "32pt", "33pt", "34pt", "35pt", "36pt", "37pt", "38pt", "39pt", "40pt", "41pt", "42pt", "43pt", "44pt", "45pt", "46pt", "47pt", "48pt", "49pt", "50pt"];
//     var randomSize = sizes[Math.floor(Math.random() * sizes.length)];
//     return randomSize;
//   }
  
function RandomFont() {
  var fonts = ["Playfair Display", "Gravitas One", "Slabo 27px", "DM Serif Display", "Cinzel", "Bree Serif", "Bodoni Moda", "Oranienbaum", "Nixie One", "Solway"];
  var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  return randomFont;
}
  
  function randomizeText() {
    var elem = document.getElementById("letters")
    elem.style.color = RandomColor();
    // elem.style.fontSize = RandomFontSize();
    elem.style.fontFamily = RandomFont();
  
    elem.innerHTML = span_it(elem.innerText);
    
    var spanColor = elem.querySelectorAll("span");
    spanColor.forEach(span => span.style.color = RandomColor());
    
    // var spanSize = elem.querySelectorAll("span");
    // spanSize.forEach(span => span.style.fontSize = RandomFontSize());
    
    var spanFont = elem.querySelectorAll("span");
    spanFont.forEach(span => span.style.fontFamily = RandomFont());
  
  
  }
  
  function span_it(str) {
    return str.split("").map(letter => "<span>" + letter + "</span>").join("")
  }