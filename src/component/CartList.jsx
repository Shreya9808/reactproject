    import React,{useState,useEffect} from 'react'
    import { useSelector,useDispatch } from 'react-redux';
    import "../styles/cartlist.css";
    import { ToastContainer,toast } from 'react-toastify';
    
    import { useNavigate } from 'react-router';

   
    import { Link } from 'react-router';
import { removeitem,clearitem } from '../redux/slice';


  

    const CartList = () => {
        
        const cartselector= useSelector((state) => state.cart.items);
        const dispatch= useDispatch();
        const navigate=useNavigate();
        var[cartitems,setCartitems]= useState(cartselector);



         function handleplaceorder()
         {
            console.log("i m here");
             localStorage.clear();
             dispatch(clearitem());
             navigate('/');
             toast.success('Order Placed Successfully'
             ,{
                position:"top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                

                });
                
             return (
                <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
             );
             
            


             
             
         }
         function  ManageQ(id,q)
        {
            console.log(id,q);
           let quantity= parseInt(q)>1?parseInt(q):1
           var tempdata= cartselector.map((item)=>{
            return item.id===id?
            {...item,quantity}:item}

        )

        setCartitems(tempdata)
           

     
        }



       

        useEffect(() => {
            setCartitems(cartselector);
            },[cartselector])
        
   

    return (
        <div className='cart-page'>
        <div cart-container>
            <div className='cart-headers'>
                <h3>Your Cart Items</h3>
                <span className='c'>{cartitems.length}</span>
            </div>
       
            

            {cartitems.length>0 ? cartitems.map(item=>(
                <div className='cart-items' key={item.id} >
                    <img src={item.thumbnail} alt={item.title} />

                    <div className='contents'>
                    
                        
                        <div className='title'>{item.title}</div>
                        <div className='brand'>{item.brand}</div>
                
                    </div>

                    <div className='contents-action'>
                        <div style={{display:'flex'}}>
                            <input value={item.quantity? item.quantity:1} className='qty-large' placeholder="Enter quantity" onChange={(e)=>ManageQ(item.id,e.target.value)} style={{margin:'10px',padding:'0px'}} type="number" />
                            <div>
                                <div className='price'>${(item.quantity?item.quantity* item.price:item.price).toFixed(2)}</div>
                        <button onClick={()=>{dispatch(removeitem(item))}}>Remove</button>
                        
                            </div>
                        </div>
                    </div>
                   
                </div>
                
                

            )):
            <div className="empty-cart-container">
      <div className="empty-cart-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          className="empty-cart-img"
        />
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven’t added anything yet.</p>
        <Link className="shop-btn" to="/">Start Shopping</Link>
      </div>
    </div>
        }
        <div className='cart-footer'>
            Total : ${cartitems.reduce((acc, item) => item.quantity ? acc +item.quantity*item.price : acc+item.price, 0).toFixed(2)}
        </div>
        <button className='btn btn-sm' style={{width:"130px"}} onClick={handleplaceorder}>Place Order</button>
        
        </div>
        
         </div>
    )
    }

    export default CartList;
