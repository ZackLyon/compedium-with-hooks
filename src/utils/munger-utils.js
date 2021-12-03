export const listGroomer = async (list) => {
  return list.map(({ pokemon, type_1, attack, defense, hp, url_image }) => ({
    pokemon,
    type_1,
    attack,
    defense,
    hp,
    url_image,
  }));
};
