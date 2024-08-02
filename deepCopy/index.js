const deepCopy = (data) => {
  if (data === null) return data;

  if (typeof data !== "object") {
    return data;
  }

  return { ...data };
};

export default deepCopy;
