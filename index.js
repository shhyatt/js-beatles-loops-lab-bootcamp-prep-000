// add solution here

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians, intruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
    array.push(`${musicians[0]} plays ${intruments[0]}`);
  }
  return array;
  }

