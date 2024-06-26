import { useRef, useState } from "react";
import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";



const MealItemForm = props => {

     const [amountIsValid, setAmountIsValid] = useState(true);


    const amountInputRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || 
        enteredAmountNumber < 0 || 
        enteredAmountNumber > 5)
          {

            setAmountIsValid(false)
        return
        }
        props.onAddToCart(enteredAmountNumber)
    }

    

    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <Input 
                ref={amountInputRef}
                label="amount" 
                input={{
                id: "amount",
                type: "number",
                min: '1',
                max: "5",
                step: "1",
                defaultValue: '1',
            }} />
            <button className={classes.form}>+ ADD</button>
            {!amountIsValid && <p>Please enter a valid valid amount</p>}
        </form>
    )
}

export default MealItemForm;


