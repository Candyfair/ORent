export function getInitialsOfUsername(username) {
  const firstLetterCapitalized = username[0].toUpperCase();
  return firstLetterCapitalized;
}

export default function getMapCenter(cards) {
  const latitudesArray = cards.map((card) => card.latitude);
  const longitudesArray = cards.map((card) => card.longitude);
  const latitudeOfCenter = (Math.max(...latitudesArray) + Math.min(...latitudesArray)) / 2;
  const longitudeOfCenter = (Math.max(...longitudesArray) + Math.min(...longitudesArray)) / 2;
  return [latitudeOfCenter, longitudeOfCenter];
}
