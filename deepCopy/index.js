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

  const newObj = {};

  for (const key of Object.keys(data)) {
    newObj[key] = deepCopy(data[key]);
  }

  return newObj;
};

export default deepCopy;
