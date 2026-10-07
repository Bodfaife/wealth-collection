import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Product } from './pages/storeData';

type CartItem={product:Product;quantity:number};
type CartContextType={items:CartItem[];
    count:number;
    subtotal:number;
    add:(p:Product,q?:number)=>void;
    update:(id:string,q:number)=>void;
    remove:(id:string)=>void};
const CartContext=createContext<CartContextType|null>(null);

export function CartProvider({children}:{children:ReactNode})
{
    const [items,setItems]=useState<CartItem[]>(()=>{try{return JSON.parse(localStorage.getItem('wealth-cart')||'[]')}
    catch
    {
        return[]}});
    useEffect(()=>localStorage.setItem('wealth-cart',JSON.stringify(items)),[items]);
    const value=useMemo(()=>(
        {
        items,
        count:items.reduce((s,i)=>s+i.quantity,0),
        subtotal:items.reduce((s,i)=>s+i.product.price*i.quantity,0),
        add:(p:Product,q=1)=>setItems(cur=>cur.some(i=>i.product.id===p.id)?cur.map(i=>i.product.id===p.id?{...i,quantity:i.quantity+q}:i):[...cur,{product:p,quantity:q}]),
        update:(id:string,q:number)=>setItems(cur=>q<1?cur.filter(i=>i.product.id!==id):cur.map(i=>i.product.id===id?{...i,quantity:q}:i)),
        remove:(id:string)=>setItems(cur=>cur.filter(i=>i.product.id!==id))}),[items]);

    return <CartContext.Provider
    value={value}>{children}</CartContext.Provider>;
}

export const useCart=()=>{const c=useContext(CartContext);
    if(!c)
        throw new Error('useCart must be inside CartProvider');
    return c};
