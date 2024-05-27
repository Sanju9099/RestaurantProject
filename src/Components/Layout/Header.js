import { Fragment } from 'react';
import mealsImage from '../../Components/Assets/Meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1> ReactMeal </h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
              <img src={mealsImage} alt='A Full Of Delicious Food'></img>
            </div>
        </Fragment>
    )
}

export default Header;







