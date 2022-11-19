import React from 'react';
import { Grid, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { cartActions } from 'features/cart/cartSlice';
import { toast } from 'react-toastify';
function CartItem({cartItem}) {
    
    const dispatch = useDispatch()
    
    const HandleRemoveCart = () => {
        dispatch(cartActions.removeCart({
            id: cartItem.id
        }))

        toast.success("Room Removed from Cart !");
    }

    const HanldeAddToCart = () => {
        dispatch(
            cartActions.addToCart({
                name: cartItem.name,
                avatar: cartItem.avatar,
                beds: cartItem.beds,
                roomSize: cartItem.roomSize,
                occupancy:cartItem.occupancy,
                bathroom: cartItem.bathroom,
                price: cartItem.price,
                id: cartItem.id,  
            })
        )

        toast.success("Room Added to Cart !");

    }

    const HandleDeleteToCart = () => {
        console.log("hi");
        dispatch(cartActions.deleteCart({
            id: cartItem.id
        }))

        toast.success("Room Deleted from Cart !");
    }

    return (
        <tr>
         <td className='product'>
            <ul>
                <li className='first-cart'>{cartItem.name}</li>
            </ul>
        </td>
        <td className='ptice'>
           {cartItem.occupancy.adults} adults
        </td>
        <td className='ptice'>{cartItem.quantity}</td>
        <td className='stock'>November 15, 2022</td>
        <td className='stock'>November 17, 2022</td>
        <td className='stock'>
            <Grid className='quantity cart-plus-minus'>
                <Button
                    className="dec qtybutton"
                    tabindex="0"
                    type="button"
                    onClick={HandleRemoveCart}
                >-</Button>
                <input type="text" value={cartItem.quantity} />
                <Button 
                    className="inc qtybutton" 
                    tabindex="0" 
                    type="button"
                    onClick={HanldeAddToCart}
                >+</Button>
            </Grid>
        </td>
        <td className='stock'>${cartItem.quantity * cartItem.price}</td>
        <td className='action'>
            <ul>
                <li className='w-btn' onClick={HandleDeleteToCart}>
                    <DeleteIcon style={{
                        fontSize: "26px",
                        margin: "auto",
                        height: "100%",
                    }}
                        />
                </li>
            </ul>
        </td>   
        </tr>
    );
}

export default CartItem;