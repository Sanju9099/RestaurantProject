import { Fragment } from 'react';
import mealsImage from '../../Components/Assets/Meals.jpg';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>RaectMeal</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
              <img src={mealsImage} alt='A Full Of Delicious Food'></img>
            </div>
        </Fragment>
    )
}

export default Header;


