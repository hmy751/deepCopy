const deepCopy = (data) => {
  if (data === null) return data;

  if (typeof data !== "object") {
    return data;
  }

  if (Array.isArray(data)) {
    return [...data];
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

    for (const key of Object.keys(data)) {
      newSet.add(key);
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
