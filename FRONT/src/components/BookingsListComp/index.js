// === Imports
import ComingTrips from "../ComingTrips";
import PastTrips from "../PastTrips";

const BookingsListComp = () => {

    return (
        <div>
            <h1>My trips</h1>
            <ComingTrips />
            <PastTrips />
        </div>
    );
};

export default BookingsListComp;