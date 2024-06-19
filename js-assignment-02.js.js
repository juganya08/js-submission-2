//question 1
let transactions = [
    { type: 'deposit', amount: 1000 },
    { type: 'withdraw', amount: 100 },
    { type: 'deposit', amount: 500 },
    { type: 'withdraw', amount: 50 }
]

function groupByType(transactions) {
    let grouped = {};
    for (let transaction of transactions) {
        if (!grouped[transaction.type]) {
            grouped[transaction.type] = [];
        }
        grouped[transaction.type].push(transaction);
    }
    return grouped;
}

console.log(groupByType(transactions));

//queestion 2
let employees = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 35 },
    { name: 'Jim', age: 30 }
];

let ageLimit = 30;
function filterEmployeesByAge(employees, ageLimit) {
    return employees.filter(employee => employee.age <= ageLimit);
}
console.log(filterEmployeesByAge(employees, ageLimit));

//question 3
let classes = [
    ["Alice", "Bob", "Charlie"],
    ["David", "Alice", "Eve"],
    ["Frank", "George", "Bob"]
];

function checkDuplicates(classes) {
    let nameSet = new Set();
    for (let names of classes) {
        for (let name of names) {
            if (nameSet.has(name)) {
                return true;
            }
            nameSet.add(name);
        }
    }
    return false;
}
console.log(checkDuplicates(classes));  // Output: true

//question 4
function getCurrentDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
console.log(getCurrentDateTime());

//question 5
function calculateAge(birthdate) {
    let birthDate = new Date(birthdate);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();

    // Adjust age if the birthdate has not occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

let birthdate = "2003-03-22";
console.log(`Age: ${calculateAge(birthdate)}`);

//question 6
function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

let date = "2023-06-17";
let daysToAdd = 10;
let newDate = addDays(date, daysToAdd);

console.log(newDate.toISOString().split('T')[0]); // Outputs the new date in YYYY-MM-DD format

//question 7
function dateDifference(date1, date2) {
    let startDate = new Date(date1);
    let endDate = new Date(date2);
    let differenceInTime = endDate - startDate;

    // round
    let differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;

}
let date1 = "2023-06-17";
let date2 = "2024-06-27";
console.log(dateDifference(date1, date2)); // Output: 375

//question 8
let userPreferences = new Map();
function setPreference(key, value) {
    userPreferences.set(key, value);
}
function getPreference(key) {
    return userPreferences.get(key);
}
setPreference('theme', 'dark');
setPreference('fontSize', '16px');
console.log(getPreference('theme'));
console.log(getPreference('fontSize'));

//question 9
function countOccurances(arr) {
    let stringMap = new Map();
    for (let str of arr) {
        if (stringMap.has(str)) {
            stringMap.set(str, stringMap.get(str) + 1);
        } else {
            stringMap.set(str, 1);
        }
    }
    return stringMap;
}
let strings = ['apple', 'orange', 'apple', 'banana', 'orange', 'apple'];
console.log(countOccurances(strings));

//question 10
let employeess = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

function mapEmployeeIdsToNames(employeess) {
    let employeeMap = new Map();
    for (let employee of employeess) {
        employeeMap.set(employee.id, employee.name);
    }
    return employeeMap;
}
let employeeMap = mapEmployeeIdsToNames(employeess);
console.log(employeeMap);

//question 11
let inventory = new Map();
function addItem(itemName, quantity) {
    inventory.set(itemName, quantity);
}

function updateItemQuantity(itemName, quantity) {

    if (inventory.has(itemName)) {
        let currentQuantity = inventory.get(itemName);
        inventory.set(itemName, currentQuantity + quantity);
    }
    else {
        console.log("Item not found");
    }
}
function checkItemQuantity(itemName) {
    return inventory.get(itemName);
}

addItem('apple', 100);
addItem('banana', 150);

updateItemQuantity('apple', 50);

console.log(checkItemQuantity('apple'));
console.log(checkItemQuantity('banana'));
console.log(checkItemQuantity('orange'));

//question 12
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
let numbers = [1, 2, 3, 3, 4, 5, 5, 6];
console.log(removeDuplicates(numbers));

//question 13
function intersection(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    return [...set1].filter(item => set2.has(item));
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
console.log(intersection(arr1, arr2));

//question 14
function union(...arrays) {
    let resultSet = new Set();
    for (let arr of arrays) {
        for (let item of arr) {
            resultSet.add(item);
        }
    }
    return [...resultSet];
}

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
let array3 = [5, 6, 7];
console.log(union(array1, array2, array3));

//question 15
function removeItemsFromSet(items, set) {
    for (let item of items) {
        set.delete(item);
    }
}
let mySet = new Set([1, 2, 3, 4, 5]);
let itemsToRemove = [2, 3];

removeItemsFromSet(itemsToRemove, mySet);
console.log([...mySet]);

//question 16
function updateAttendance(newAttendance, overallAttendance) {
    for (let name of newAttendance) {
        overallAttendance.add(name);
    }
    return overallAttendance;
}
let overallAttendance = new Set(['Alice', 'Bob', 'Charlie']);
let newAttendance = ["Charlie", "Alice"];
overallAttendance = updateAttendance(newAttendance, overallAttendance);
console.log([...overallAttendance]);

