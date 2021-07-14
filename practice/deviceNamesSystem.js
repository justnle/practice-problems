'use strict';

function deviceNamesSystem(devicenames) {
    const hash = {};
    const uniqueDevicename = [];
    let i;

    for (const name of devicenames) {
        if (hash[name] === 0 || hash[name] > 0) {
            hash[name] += 1;
        } else {
            hash[name] = 0;
        }
    }

    for (const device of devicenames) {
        if (uniqueDevicename.includes(device)) {
            if (hash[device] > 1) {
                i = hash[device] - 1;
            } else {
                i = hash[device];
            }
            uniqueDevicename.push(device.concat(i.toString()));
            hash[device] += i;
        } else {
            uniqueDevicename.push(device);
        }
    }

    console.log(uniqueDevicename);
}

deviceNamesSystem([`mixer`, `toaster`, `mixer`, `tv`, `mixer`, `toaster`]);
