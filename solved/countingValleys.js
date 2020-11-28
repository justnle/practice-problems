/*
An avid hiker keeps meticulous records of their hikes. During the last
hike that took exactly STEPS steps, for every step it was noted if it
was an uphill, U, or a downhill, D step. Hikes always start and end at
sea level, and each step up or down represents a 1 unit change in altitude.
We define the following terms:

- A mountain is a sequence of consecutive steps above sea level, starting
with a step up from sea level and ending with a step down to sea level
- A valley is a sequence of consecutive steps below sea level, starting with
a step down from sea level and ending with a step up to sea level

Given the sequence of up and down steps during a hike, find and print the
number of valleys walked through
*/

/* pseudocode */

/*
a valley begins when the hiker goes below sea level and back up to sea level
steps = amount of steps taken
hiker starts at 0
D = Down, negative
U = Up, positive

a valley happens below sea level
sea level = 0
location = 0
if U, ++location
if D, --location
if location < sea level, valley begins
when location === 0 again, valley ends
*/

function countingValleys(steps, path) {
    const splitPath = path.split(``);
    const seaLevel = 0;

    let location = 0;
    let valleys = 0;
    let valleyStart = false;

    for (const step of splitPath) {
        if (step === `U`) {
            ++location;
        } else {
            --location;
        }

        if (location < seaLevel) {
            valleyStart = true;
        }

        if (location === seaLevel && valleyStart === true) {
            valleyStart = false;
            ++valleys;
        }
    }

    return valleys;
}

countingValleys(8, `UDDDUDUU`); // expected 1
countingValleys(12, `DDUUDDUDUUUD`); // expected 2
