import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    {label:"Salad",type:'salad'},
    {label:"Bacon",type:'bacon'},
    {label:"Cheese",type:'cheese'},
    {label:"Meat",type:'meat'},
]



const buildControls = (props) => (
        <div className={classes.BuildControls}>
        <p>Current price:<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map((ctrl)=>{
            console.log(ctrl)
            return <BuildControl key={ctrl.label} label={ctrl.label} added={()=>props.ingredientsAdded(ctrl.type)} removed={()=>props.ingredientsRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}/>
        })}
        <button className={classes.OrderButton} disabled={!props.purchasable}>Order Now</button>
        </div>
);

export default buildControls;