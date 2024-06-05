const generateRangeIndexes = (currentIndex: number, text: string) => {
  const startIndex = currentIndex;
  const endIndex = startIndex + text.length + 1;
  return { startIndex, endIndex };
};

export default generateRangeIndexes;
