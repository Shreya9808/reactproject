import React, { useEffect } from 'react'
import "../styles/Product.css";

import { useDispatch, useSelector} from 'react-redux';
import { additem,removeitem} from '../redux/slice';
import  {fetchproducts} from '../redux/productSlice'


const Product = () => {
  
    
  

    const select = useSelector((state) => state.prod.items);
  
    const cartselector= useSelector((state) => state.cart.items);
    console.log(cartselector)


    const dispatch = useDispatch();
      useEffect(() => {
        dispatch(fetchproducts())
        },[])
  return (
    <>
    <div >
 <div className='row'>
    {
      select.map((item)=>(
       
          <div className='col-md-3' key={item.id} >
           
        <div className="card" >
            <div className='rate'>⭐{item.rating}</div>
          <img src={item.thumbnail} alt={item.title}/>

          <div className='content'>
            <div className='title'>{item.title}</div >
            <div className='price' style={{color:"green"}}><i>Price:</i> ${item.price}</div>
           

           
             <div className='price'><h5><i>Description:</i></h5> <i>{item.description}</i></div> 

            {
            cartselector.find((x)=>x.id===item.id)
            ?
            <div className='btn remove-button' onClick={()=>dispatch(removeitem(item))}>Remove from cart</div>
            :
            <div className='btn' onClick={()=>dispatch(additem(item))}>Add to cart</div>
            }
            
          

          </div>
</div>
</div>
       

       
     
      )

      )
    }
     </div>
      

    </div>  
   </>
  )
}

export default Product
