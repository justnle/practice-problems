let users = {
    employees: [
        { first_name: 'Miguel', last_name: 'Jones' },
        { first_name: 'Ernie', last_name: 'Bertson' },
        { first_name: 'Nora', last_name: 'Lu' },
        { first_name: 'Sally', last_name: 'Barkyoumb' }
    ],
    managers: [
        { first_name: 'Lillian', last_name: 'Chambers' },
        { first_name: 'Gordon', last_name: 'Poe' }
    ]
};

function printUsers(users) {
    console.log(`EMPLOYEES`);
    for (let i = 0; i < users.employees.length; ++i) {
        console.log(
            `${i + 1} - ${users.employees[
                i
            ].last_name.toUpperCase()}, ${users.employees[
                i
            ].first_name.toUpperCase()} - ${
                users.employees[i].last_name.length +
                users.employees[i].first_name.length
            }`
        );
    }
    console.log(`MANAGERS`);
    for (let i = 0; i < users.managers.length; ++i) {
        console.log(
            `${i + 1} - ${users.managers[
                i
            ].last_name.toUpperCase()}, ${users.managers[
                i
            ].first_name.toUpperCase()} - ${
                users.managers[i].last_name.length +
                users.managers[i].first_name.length
            }`
        );
    }
}

printUsers(users);
