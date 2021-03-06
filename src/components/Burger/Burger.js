import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {

    let ingredientsArray = Object.keys(props.ingredients)
        .map(igKey => {
            console.log(props.ingredients)
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
                return <BurgerIngredient key={igKey+i} type={igKey}></BurgerIngredient>
            })
        })
        .reduce((arr,el)=>{
            return arr.concat(el)
        },[])
    if(ingredientsArray.length === 0){
        ingredientsArray = <p>Please add ingredients</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredientsArray}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;