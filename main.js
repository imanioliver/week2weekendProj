// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it


// 1: Show me how to calculate the average price of all items.
let sum= 0;

function question1 () {
  for (var i = 0; i < data.length; i++) {
    sum+= data[i].price;
  }
  let average = sum/data.length;

  // let roundedavg = Math.round((average +100)*100);
  // let roundedavg =average.toFixed(2);
  // Answer:
  console.log("The average price is $" + average.toFixed(2) + ".");
}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD

let costa = [];
function question2 () {
  // Answer:
  for (var i = 0; i<data.length; i++) {
    if ( data[i].price >= 14 && data[i].price <= 18){
      costa.push(data[i].title);
    }
  }
  for (var j = 0; j < costa.length; j++) {
    console.log ("-" + costa[j])
  }
}

// 3: Which item has a "GBP" currency code? Display it's name and price.
  // Answer:
function question3 () {
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP"){
      console.log(data[i].title + " costs " + data[i].price + " pounds.");

    }
  }
}


// 4: Display a list of all items that are made of wood.
function question4 () {
//   // Answer:
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].materials.length; j++) {
      if (data[i].materials[j]=== "wood"){
        console.log(data[i].title + " is made of wood.");
      }
    }
  }
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[j].materials.length; j++) {
      if (data[i].materials.length > 7){
        console.log(data[i].title + " has " + data[i].materials.length + " materials:" + "\n" + "\n" + "-" + data[i].materials + "\n" );
      }
    }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let diyObjects = 0
  for (var i = 0; i < data.length; i++) {
    diyObjects += data[i].who_made==="i_did";
  }
  console.log(diyObjects + " items were made by their sellers.");
}
