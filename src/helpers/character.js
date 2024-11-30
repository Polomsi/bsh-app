export const getMainLore = (charact) => {
  if (charact && charact.lores) {
    let mainLore = "";
    charact.lores.forEach((lore) => {
      if (lore?.pivot?.main === 1) {
        mainLore = lore.name;
      }
    });

    return mainLore;
  }
};
