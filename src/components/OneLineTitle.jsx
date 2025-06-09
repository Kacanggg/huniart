import { useState, useEffect } from "react";

const OneLineTitle = (filteredItems, titleRefs) => {
  const [oneLineTitles, setOneLineTitles] = useState({});

  useEffect(() => {
    const newOneLineTitles = {};
    filteredItems.forEach((item) => {
      const el = titleRefs.current[item.link];
      if (el) {
        const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
        const height = el.offsetHeight;
        newOneLineTitles[item.link] = height <= lineHeight + 1;
      }
    });

    const isSame =
      Object.keys(newOneLineTitles).length ===
        Object.keys(oneLineTitles).length &&
      Object.keys(newOneLineTitles).every(
        (key) => newOneLineTitles[key] === oneLineTitles[key]
      );

    if (!isSame) {
      setOneLineTitles(newOneLineTitles);
    }
  }, [filteredItems, oneLineTitles, titleRefs]);

  return oneLineTitles;
};

export default OneLineTitle;
