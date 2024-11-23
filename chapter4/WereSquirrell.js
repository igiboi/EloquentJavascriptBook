// Initialize an empty array to store journal entries
let journal = [];

// Function to add entries to the journal
function addEntry(events, squirrel) {
  // Push a new object with the events and squirrel properties into the journal
  journal.push({ events, squirrel });
}

// Function to get all unique events from the journal
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event); // Add the event if it's not already in the list
      }
    }
  }
  return events;
}

// Function to generate a two-by-two table for an event
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let entry of journal) {
    let index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

// Function to calculate the phi coefficient
function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}

// Add multiple entries to the journal by calling addEntry

// First entry: an array of events and a squirrel boolean
addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false);

// Second entry: another array of events with the squirrel boolean
addEntry(
  [
    'work',
    'ice cream',
    'cauliflower',
    'lasagna',
    'touched tree',
    'brushed teeth',
  ],
  false
);

// Third entry: different events and the squirrel boolean as true
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);

// Log the journal to see the entries
console.log('Journal entries:');
console.log(journal);

// Extract unique events from the journal
let uniqueEvents = journalEvents(journal);

// Log the unique events
console.log('Unique events:');
console.log(uniqueEvents);

// Calculate and display correlation (phi coefficient) for each event
console.log('Event correlations:');
for (let event of journalEvents(journal)) {
  console.log(event + ':', phi(tableFor(event, journal)));
}
