
import { useSelector,useDispatch } from 'react-redux';
import "../styles/cartlist.css";
import { ToastContainer,toast } from 'react-toastify';

import { useNavigate, Link } from 'react-router-dom';
import { removeitem,clearitem,updateQuantity } from '../redux/slice';

const CartList = () => {
    
    const cartselector= useSelector((state) => state.cart.items);
    const dispatch= useDispatch();
    const navigate=useNavigate();

   function handleplaceorder()
{
     localStorage.clear();
     dispatch(clearitem());
     toast.success('Order Placed Successfully',{
         position:"top-right",
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
     });
     setTimeout(() => navigate('/'), 1600);
}
    
    function ManageQ(id,q)
    {
       let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
       dispatch(updateQuantity({id: id, quantity: quantity}));
    }

    return (
        <div className='cart-page'>
        <div className='cart-container'>
            <div className='cart-headers'>
                <h3>Your Cart Items</h3>
                <span className='c'>{cartselector.length}</span>
            </div>

            {cartselector.length>0 ? cartselector.map(item=>(
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
        <p>Looks like you haven't added anything yet.</p>
        <Link className="shop-btn" to="/">Start Shopping</Link>
      </div>
    </div>
        }
        <div className='cart-footer'>
            Total : ${cartselector.reduce((acc, item) => item.quantity ? acc +item.quantity*item.price : acc+item.price, 0).toFixed(2)}
        </div>
        {
        cartselector.length>0 ?
        <button className='btn btn-sm' style={{width:"130px"}} onClick={handleplaceorder}>Place Order</button>
        :null}
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
        </div>
         </div>
    )
}

export default CartList;
