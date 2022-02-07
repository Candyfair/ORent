export function getInitialsOfUsername(username) {
  const firstLetterCapitalized = username[0].toUpperCase();
  return firstLetterCapitalized;
}

export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export default function getMapCenter(cards) {
  let latitudeAverage = 0;
  let longitudeAverage = 0;
  const correctionCoefficient = 12;
  // eslint-disable-next-line no-restricted-syntax
  for (const card of cards) {
    latitudeAverage += card.latitude / cards.length;
    longitudeAverage += card.longitude / cards.length;
  }
  return [latitudeAverage, longitudeAverage + correctionCoefficient];
}
