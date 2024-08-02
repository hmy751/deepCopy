const deepCopy = (data) => {
  if (data === null) return data;

  if (typeof data !== "object") {
    return data;
  }
};

export default deepCopy;
