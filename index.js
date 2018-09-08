// add solution here

const musicians = ["John", "Paul", "George", "Ringo"];
const instruments = ["guitar", "bass", "guitar", "drums"];

function theBeatlesPlay (musicians, intruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
    array.push(`${musicians[0]} plays ${intruments[0]}`);
  }
  return array;
  }

