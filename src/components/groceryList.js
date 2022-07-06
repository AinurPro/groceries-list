
import GroceryItem from './groceryItem'

const GroceryList = (props) => {
    console.log('Checking Grocery List', props.groceries)
    return(
        <div>
            <h2>Groceries</h2>
           
           {
               props.groceries.map(
                   (i, idx)=> !i.isPurchased ? (<GroceryItem grocery={i} key={idx} idx={idx} handleRemove={props.handleRemove}/>) : (<h3 key={idx}>{i.item} is not purchased</h3>)
               ) }
        </div>

    )
}


export default GroceryList