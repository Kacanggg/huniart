const FilterHelpers = (items, mainCategory, category) => {
  return items.filter((item) => {
    const matchesMain = mainCategory
      ? item.mainCategory === mainCategory
      : true;
    const matchesSub = category ? item.category === category : true;
    return matchesMain && matchesSub;
  });
};

export default FilterHelpers;
