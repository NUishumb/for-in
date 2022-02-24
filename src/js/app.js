export default function orderByProps(object, array = []) {
    const result = [];

    for (const prop in object) {
        if (!array.find((e) => e === prop)) {
            array.push(prop);
        } else {
            result.push({ key: prop, value: object[prop] });
        }
    }

    array.sort();

    for (let i = 0; i < array.length; i++) {
        if (!result.find((e) => e.key === array[i])) {
            result.push({ key: array[i], value: object[array[i]] });
        }
    }

    return result;
}
