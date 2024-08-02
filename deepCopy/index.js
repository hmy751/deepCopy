const deepCopy = (data) => {
  if (data === null) return data;

  if (typeof data !== "object") {
    return data;
  }

  if (Array.isArray(data)) {
    return [...data];
  }

  const newObj = {};

  for (const key of Object.keys(data)) {
    newObj[key] = deepCopy(data[key]);
  }

  return newObj;
};

export default deepCopy;
