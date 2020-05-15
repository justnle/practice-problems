/*
LeetCode #1436
You are given the array paths, where paths[i] = [cityAi, cityBi] means
there exists a direct path going from cityAi to cityBi. Return the destination
city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop,
therefore, there will be exactly one destination city.
*/

const destCity = (paths) => {
    const hash = {};

    for (const path of paths) {
        for (let i = 0; i < path.length; ++i) {
            !hash[path[i]] ? (hash[path[i]] = 1) : (hash[path[i]] += 1);
        }
    }

    if (paths.length === 1) {
        return paths[0][1];
    }

    for (const path of paths) {
        let destination = path[1];
        for (const city of path) {
            if (city[0] === destination) {
                destination = city[1];
            }

            if (hash[destination] === 1) {
                return destination;
            }
        }
    }
};
// 68ms and 37.1mb, 46.41% faster

destCity([
    [`London`, `New York`],
    [`New York`, `Lima`],
    [`Lima`, `Sao Paulo`]
]); // Sao Paulo
destCity([
    [`B`, `C`],
    [`D`, `B`],
    [`C`, `A`]
]); // A
destCity([[`A`, `Z`]]); // Z
destCity([
    [`qMTSlfgZlC`, `ePvzZaqLXj`],
    [`xKhZXfuBeC`, `TtnllZpKKg`],
    [`ePvzZaqLXj`, `sxrvXFcqgG`],
    [`sxrvXFcqgG`, `xKhZXfuBeC`],
    [`TtnllZpKKg`, `OAxMijOZgW`]
]); // OAxMiJoZgW
