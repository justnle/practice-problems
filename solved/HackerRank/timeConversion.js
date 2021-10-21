/*
HackerRank Time Conversion

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Example:
s = `12:01:00PM`
Return `12:01:00`

s = `12:01:00AM`
Return `00:01:00`
*/

const timeConversion = (s) => {
    // removes AM/PM from string and splits it
    const split = s.slice(0, 8).split(`:`);
    const hour = parseInt(split[0]);

    // check if string is PM
    if (s.indexOf(`PM`) > -1) {
        if (hour === 12) {
            return split.join(`:`);
        } else {
            split[0] = (hour + 12).toString();
            return split.join(`:`);
        }
    } else {
        if (hour === 12) {
            split[0] = `00`;
        }
        return split.join(`:`);
    }
};

timeConversion(`12:01:00AM`); // `00:01:00`
