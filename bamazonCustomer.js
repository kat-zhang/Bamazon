var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "startShopping",
      type: "list",
      message: "Would you like to start shopping",
      choices: ["YES", "NO"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.startShopping === "YES") {
        showProducts();
        console.log("----------------------------------------------");
        console.log("            AVAILABLE FOR PURCHASE            ");
        console.log("----------------------------------------------");
        console.log("");
        choose();
      }
      else {
        console.log("Goodbye")
      }
    });
}

function showProducts () {
  connection.query("SELECT * FROM products", function (error, response){
    for (var i = 0;  i < response.length; i++) {
    
      console.table ([ 
        {
          ITEM_ID: response[i].item_id,
          PRODUCT: response[i].product_name,
          DEPARTMENT: response[i].department_name,
          PRICE: response[i].price

        }
      ])

    }
  })
}

function choose() {
  inquirer
    .prompt({
      name: "chooseItem",
      type: "list",
      message: "Which item do you want to purchase?",
      choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    })
    .then(function (answer) {
      if (answer.chooseItem == "1") {
        console.log("akjdshlf")
      }
      else (
        console.log('bfbsfdsf')
      )
    })
}

function choose() {
  inquirer
    .prompt({
      name: "chooseItem",
      type: "list",
      message: "Which item do you want to purchase?",
      choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    })
    .then(function (answer) {
      if (answer.chooseItem == "1") {
        console.log("akjdshlf")
      }
    
      else if (answer.chooseItem == "2") {
        console.log('bfbsfdsf')
      }
      else if (answer.chooseItem == "2") {
        console.log('cdsfsdfsd')
         }
      else if (answer.chooseItem == "3") {
        console.log('dgrgsd')
      }
      else if (answer.chooseItem == "4") {
        console.log('efghdh')
         }
      else if (answer.chooseItem == "5") {
        console.log('fhghdf')
      }
      else if (answer.chooseItem == "6") {
        console.log('gdfgf')
         }
      else if (answer.chooseItem == "7") {
        console.log('hisdhf')
      }
      else if (answer.chooseItem == "8") {
        console.log('isdfgb')
         }
       else if (answer.chooseItem == "9") {
        console.log('jhsdfgsdfg')
      }
      else if (answer.chooseItem == "10") {
        console.log('khfsdgfgdsf')
         }        
    })
}