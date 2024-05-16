import AvailableMeal from "./AvailableMeal";
import MealsSummary from "./MealsSummary";
import { Fragment } from "react";

const Meals = props => {

    return <Fragment>
        <MealsSummary />
        <AvailableMeal />
    </Fragment>
}

export default Meals;