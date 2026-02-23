let backpack = {
  books: 5,             // property
  pencil: 2,            // property
  laptop: 1,            // property
  open: function() {    // method
    console.log("Backpack is open!");
  },
  close: function() {   // method
  }
};

// method
backpack.open();
// property
console.log("Books in bag: ", backpack.books);
