const students = [
    { name: `Remy`, country: `Korea` },
    { name: `Chuck`, country: `China` },
    { name: `Osmund`, country: `U.S.A.` },
    { name: `Nicole`, country: `South Africa` },
    { name: `Boris`, country: `France` },
    { name: `John`, country: `Philippines` },
    { name: `Michael`, country: `Ukraine` }
];

function displayNameCountry(lists) {
    lists.map((student) => {
        console.log(`Name: ${student.name}, Country: ${student.country}`);
    });
}

displayNameCountry(students);
