function superbowlWin(record) {
    const winRecord = record.find(game => game.result === "W");

    if (winRecord) {
      return winRecord.year;
    } else {
      return undefined;
    }
  }

  // Example usage:
  const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ];

  const yearOfWin = superbowlWin(record);
  console.log(yearOfWin); // This will print the year of the win or undefined if no win is found.
