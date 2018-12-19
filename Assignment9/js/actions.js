function allowDrop(ev) {
  ev.preventDefault();
}


function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

var block_flags = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  //data is the id
  var data_change = document.getElementById(data);
  data_change.style.left = "0px";
  data_change.style.top = "0px";

  }

//tile array from Jesse Heines

var ScrabbleTiles = [] ;
ScrabbleTiles[0] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles[1] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles[2] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles[3] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles[4] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12 } ;
ScrabbleTiles[5] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles[6] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3  } ;
ScrabbleTiles[7] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles[8] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles[9] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles[10] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles[11] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles[12] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles[13] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles[14] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8  } ;
ScrabbleTiles[15] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles[16] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles[17] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles[18] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles[19] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles[20] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles[21] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles[22] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles[23] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles[24] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles[25] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles[26] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2  } ;

var imageURLs = ["css/smile.png", "css/tile_rack.png"];
function getTiles(name, num) {
  //function to get a new set of tiles
    var tile_name = "tile" + num;
    var tile_elem = document.getElementById(tile_name);
    //img1.src = imageURLs[randomIndex];
    var image_source = get_random_tile();  // at this point we have the tile image selected
    tile_elem.src = image_source;
    // at this point, black1 has its tile
  }

function get_random_tile(){
  var randomIndex = Math.floor(Math.random() * 35);
  var img_src = "";
  switch(randomIndex)
  {
    case 0: //9 A's
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    img_src = "css/A.png";
    break;
    case 1: // 2 B's
    case 35:
    img_src = "css/B.png";
    break;
    case 2: // 2 C's
    case 36:
    img_src = "css/C.png";
    break;
    case 3: //4 D's
    case 37:
    case 38:
    case 39:
    img_src = "css/D.png";
    break;
    case 4: //12 E's
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
    img_src = "css/E.png";
    break;
    case 5: //2 F's
    case 51:
    img_src = "css/F.png";
    break;
    case 6: // 3 G's
    case 52:
    case 53:
    img_src = "css/G.png";
    break;
    case 7: //2 H's
    case 54:
    img_src = "css/H.png";
    break;
    case 8: //9 I's
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    img_src = "css/I.png";
    break;
    case 9: // 1 J
    img_src = "css/J.png";
    break;
    case 10: // 1 K
    img_src = "css/K.png";
    break;
    case 11: // 4 L's
    case 63:
    case 64:
    case 65:
    img_src = "css/L.png";
    break;
    case 12: // 2 M's
    case 66:
    img_src = "css/M.png";
    break;
    case 13: // 6 N'switch
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    img_src = "css/N.png";
    break;
    case 14: // 8 O's
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    img_src = "css/O.png";
    break;
    case 15: // 2 P's
    case 79:
    img_src = "css/P.png";
    break;
    case 16: // 1 Q
    img_src = "css/Q.png";
    break;
    case 17: // 6 Rs
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    img_src = "css/R.png";
    break;
    case 18: // 4 S's
    case 84:
    case 85:
    case 86:
    img_src = "css/S.png";
    break;
    case 19: // 6 Ts
    case 87:
    case 88:
    case 89:
    case 90:
    case 91:
    img_src = "css/T.png";
    break;
    case 20: // 4 Us
    case 92:
    case 93:
    case 94:
    img_src = "css/U.png";
    break;
    case 21: // 2 Vs
    case 95:
    img_src = "css/V.png";
    break;
    case 22: // 2 Ws
    case 96:
    img_src = "css/W.png";
    break;
    case 23: // 1 X
    img_src = "css/X.png";
    break;
    case 24: // 2 Ys
    case 97:
    img_src = "css/Y.png";
    break;
    case 25: // 1 Z
    img_src = "css/Z.png";
    break;
    case 26: // 2 Blank
    case 98:
    img_src = "css/-.png";
    break;
    default:
    img_src = "error";
  }
  if (img_src == "error")
  {
    alert("error in tile rack");
  }
  return img_src;
}

function each_tile(block_name){
  var name = "block";
  for (var i = 1; i <= 7; i++)
  {
    name += i;
    getTiles(name, i);
    name = "block";
  }
}

function get_score(){
  var total_score = 0;
  var tiles = document.getElementsByClassName("tiles");
  var blocks = document.getElementsByClassName("emptytiles");
  for (var i = 0; i <7; i++)
  {
    if (tiles[i].offsetLeft == "0") //this means the tile is on the scrabble board
    {
      //need to figure out which tile it is and add that value to the whole score
      if (tiles[i].src.includes("A.png") || tiles[i].src.includes("E.png") || tiles[i].src.includes("I.png") || tiles[i].src.includes("L.png") || tiles[i].src.includes("N.png") || tiles[i].src.includes("O.png") || tiles[i].src.includes("R.png") || tiles[i].src.includes("S.png") || tiles[i].src.includes("T.png") || tiles[i].src.includes("U.png"))
      {
        total_score += 1;
      }

      else if (tiles[i].src.includes("D.png") || tiles[i].src.includes("G.png"))
      {
        total_score += 2;
      }
      else if (tiles[i].src.includes("B.png") || tiles[i].src.includes("C.png") || tiles[i].src.includes("P.png"))
      {
        total_score += 3;
      }
      else if (tiles[i].src.includes("F.png") || tiles[i].src.includes("H.png") || tiles[i].src.includes("V.png") || tiles[i].src.includes("W.png") || tiles[i].src.includes("Y.png"))
      {
        total_score += 4;
      }
      else if (tiles[i].src.includes("K.png"))
      {
        total_score += 5;
      }
      if (tiles[i].src.includes("J.png") || tiles[i].src.includes("X.png"))
      {
        total_score += 8;
      }
      if (tiles[i].src.includes("Q.png") || tiles[i].src.includes("Z.png"))
      {
        total_score += 10;
      }


    }
  }
  var header = document.getElementById('second_header');
  header.innerHTML = +total_score;
}
