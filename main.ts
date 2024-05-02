import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow("\n \t Welcome to 'CT' - Currency Convertor \n"));

// Define the list of currencies and their exchange rates.
let exchange_rate: any ={
    "USD": 1,
    "EUR": 0.9,
    "PKR": 277.70,
    "JYP": 133,
    "CAD": 1.3,
    "AUD": 1.65,
}

let user_answer = await inquirer.prompt([
{
    name: "from_currency",
    type: "list",
    message: "Select the currency to convert from",
    choices: ["USD", "EUR", "PKR", "JYP", "CAD", "AUD"]
},
{
    name: "to_currency",
    type: "list",
    message: "Select the currency to convert into",
    choices: ["USD", "EUR", "PKR", "JYP", "CAD", "AUD"]

    
    },

    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert",
       
    },

]);

// perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

// formula of conversion
let base_amount = amount/from_amount;
let converted_amount = base_amount * to_amount;

// display the converted amount
console.log(`Converted_amount = ${chalk.green (converted_amount.toFixed(2))}`);
