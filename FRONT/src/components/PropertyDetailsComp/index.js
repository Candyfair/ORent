// === Imports
import Pictures from "../Pictures";
import Description from "../Description";
import VacancyList from "../VacancyList";

const PropertyDetailsComp = () => {

    return (
        <div>
            <Pictures />
            <div className="PropertyDetailsContainer">
                <Description />
                <VacancyList />
            </div>
        </div>
    );
};

export default PropertyDetailsComp;