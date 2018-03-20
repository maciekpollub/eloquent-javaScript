//Generating database array
let agenda =[];
function addEntry(day, events, didIParticipate){
  agenda.push({
    day: day,
    events: events,
    presence: didIParticipate
  });
}

addEntry('16-03-2018',['running', 'climbing', 'learning'], false);
addEntry('17-03-2018',['swimming', 'running', 'learning'], true);
addEntry('18-03-2018', ['shopping', 'playing with children'], true);
addEntry('19-03-2018', ['swimming', 'learning'], false);
addEntry('20=03-2018', ['playing the instrument', 'cycling', 'learning'], true);

//Checking if a certain event took place on a certain day

function hasEvent(event, entry){
  return entry.events.indexOf(event) !== -1;
}

//Counting frequendy of a certain event

function frequency(event, agenda){
  let freq = 0;
  for(let i = 0; i < agenda.length; i++){
    let entry = agenda[i];
    if (hasEvent(event, entry)){
      freq+=1;
     }
  }
  return freq;
}

//------------------------------------------------------------
//Using objects as maps \ functions towards dynamic database generating

let map = {};
function storeHeight(name, height){
  map[name] = height;
}

storeHeight('adam', 170);
storeHeight('bartosz', 175);
storeHeight('cecylia', 165);
storeHeight('dariusz', 180);
storeHeight("eugenia", 160);

//Checking if a certain person is already inside map..

/*console.log('mariusz' in map);*/

//Making raport via "for in" loop

for (let name in map){
  console.log(('The height of ' + name + ' is: ' + map[name] + '.' ));
}

//--------------------------------------------------------------------

//Searching through the object with a view to generating new one

let measureSatisfaction = (event) => {
  return event.length * 2;
}

let gatherSatisfactionCoefficients = (agenda) => {
  let coefficients = {};
  for (let entry = 0; entry < agenda.length; entry++){
    let events = agenda[entry].events;
    for (let i = 0; i < events.length; i++){
      let event = events[i];
      if (!(event in coefficients)){
        coefficients[event] = measureSatisfaction(event);
      }
    }
  }; 
  return coefficients;
}
console.log(gatherSatisfactionCoefficients(agenda));