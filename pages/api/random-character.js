import Chance from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    Prefix: chance.prefix(),
    FirstName: chance.first(),
    LastName: chance.last(),
    Age: chance.age(),
    TwitterName: chance.twitter(),
    Geohash: chance.geohash(),
  };

  response.status(200).json(character);
}
