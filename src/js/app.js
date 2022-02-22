export default function orderByProps(object, array = []) {
    const result = [];
    const result2 = [];

    for (const arr in object) {
        if (array.find((e) => e === arr)) {
            result.push({ key: arr, value: object[arr] });
        } else {
            result2.push({ key: arr, value: object[arr] });
        }
    }

    result2.sort((a, b) => {
        if (a.key > b.key) return 1;
        if (a.key < b.key) return -1;
        return 0;
    });

    const final = [...result, ...result2];

    return final;
}
