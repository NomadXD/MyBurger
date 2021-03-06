import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7

}

class BurgerBuilder extends Component{

    state = {
        ingredients:{
            salad:0,
            bacon:0,
            meat:0,
            cheese:0
        },
        totalPrice:4,
        purchasable:false
    }

    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:newPrice
        })
        this.updatePurchasableState(updatedIngredients)
    }

    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type]
        if(oldCount<=0){
            return;
        }
        const updatedCount = oldCount - 1
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceAddition
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:newPrice
        })
        this.updatePurchasableState(updatedIngredients)
    }

    updatePurchasableState = (ingredients) => {
        const sum = Object.keys(ingredients).map((imgKey)=>{
            return ingredients[imgKey]
        }).reduce((sum,el)=>{
            return sum+el
        },0)
        this.setState({purchasable:sum>0})
    }
   

    render(){

        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0
        }



        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientsAdded = {this.addIngredient} ingredientsRemoved={this.removeIngredient} disabled={disabledInfo}
                price={this.state.totalPrice} purchasable={this.state.purchasable}></BuildControls>
            </Aux>
        ) 
    }
}

export default BurgerBuilder;