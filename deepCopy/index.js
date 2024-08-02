const deepCopy = (data) => {
  if (data === null) return data;

  if (typeof data !== "object") {
    return data;
  }

  if (Array.isArray(data)) {
    return [...data];
  }

  return { ...data };
};

export default deepCopy;
