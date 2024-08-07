const deepCopy = (data) => {
  if (!data) return data;

  if (typeof data !== "object") {
    return data;
  }

  if (Array.isArray(data)) {
    const newArr = [];

    for (const [index, value] of Object.entries(data)) {
      newArr[index] = deepCopy(value);
    }

    return newArr;
  }

  if (data instanceof Map) {
    const newMap = new Map();

    for (const key of Object.keys(data)) {
      newMap.set(key, deepCopy(data[key]));
    }

    return newMap;
  }

  if (data instanceof Set) {
    const newSet = new Set();

    for (const item of data) {
      newSet.add(deepCopy(item));
    }

    return newSet;
  }

  const newObj = {};

  for (const key of Object.keys(data)) {
    newObj[key] = deepCopy(data[key]);
  }

  return newObj;
};

export default deepCopy;
