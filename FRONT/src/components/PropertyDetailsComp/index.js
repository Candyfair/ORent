/* eslint-disable linebreak-style */
// === Imports
import Pictures from './Pictures';
import Description from './Description';
import VacanciesList from './VacanciesList';

const PropertyDetailsComp = () => (
  <div>
    <Pictures />
    <div className="PropertyDetailsContainer">
      <Description />
      <VacanciesList />
    </div>
  </div>
);

export default PropertyDetailsComp;
