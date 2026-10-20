var people = [
    { name: "Ahmed", age: 22, city: "Cairo" },
    { name: "Mona", age: 20, city: "Giza" },
    { name: "Omar", age: 25, city: "Alexandria" },
    { name: "Sara", age: 19, city: "Cairo" },
    { name: "Youssef", age: 23, city: "Mansoura" },
    { name: "Nour", age: 21, city: "Giza" }
];

var tableBody = document.getElementById("tableBody");
var search = document.getElementById("search");
var noResults = document.getElementById("noResults");
var sortBy = "name";
var ascending = true;

function showTable() {
    var word = search.value.toLowerCase();
    var filteredPeople = [];

    for (var i = 0; i < people.length; i++) {
        var person = people[i];

        if (person.name.toLowerCase().includes(word) ||
            person.city.toLowerCase().includes(word) ||
            String(person.age).includes(word)) {
            filteredPeople.push(person);
        }
    }

    filteredPeople.sort(function(a, b) {
        if (sortBy === "name") {
            if (ascending) {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        } else {
            if (ascending) {
                return a.age - b.age;
            } else {
                return b.age - a.age;
            }
        }
    });

    tableBody.innerHTML = "";

    for (var i = 0; i < filteredPeople.length; i++) {
        var row = document.createElement("tr");
        row.innerHTML = "<td>" + filteredPeople[i].name + "</td>" +
                        "<td>" + filteredPeople[i].age + "</td>" +
                        "<td>" + filteredPeople[i].city + "</td>";
        tableBody.appendChild(row);
    }

    if (filteredPeople.length === 0) {
        noResults.textContent = "No results found.";
    } else {
        noResults.textContent = "";
    }
}

search.addEventListener("input", showTable);

document.getElementById("nameSort").addEventListener("click", function() {
    sortBy = "name";
    ascending = !ascending;
    showTable();
});

document.getElementById("ageSort").addEventListener("click", function() {
    sortBy = "age";
    ascending = !ascending;
    showTable();
});

showTable();
