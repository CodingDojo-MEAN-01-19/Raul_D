// 30 minutes max

let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];

for (let key in students) {
    console.log("Name:", students[key].name, ",", "Cohort", students[key].cohort);
}


let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};

for (let title in users){
    console.log(title.charAt(0).toUpperCase() + title.slice(1))
    for(let i = 0; i < users[title].length; i++){
        var count = users[title][i].first_name + users[title][i].last_name
        console.log(i + " "+ users[title][i].first_name + " " + users[title][i].last_name + " " + count.length)
    }

    
}

// console.log(users.employees[0].first_name);