import { Minus,Plus,Trash2 } from 'lucide-react';
import { useCart } from '../store';
import { formatPrice } from './storeData';

export default function Cart()
{
    const {items,subtotal,update,remove}=useCart();
    return
    <main className="min-h-[70vh] bg-[#F5F1E8] px-6 py-16 md:px-10 md:py-24">

    <div className="mx-auto max-w-5xl">

    <p className="text-xs uppercase tracking-[.3em] text-[#C8A96A]"> Your selection
    </p>

    <h1 className="mt-3 font-[Cormorant_Garamond] text-6xl"> Shopping Bag
    </h1>
    {
        !items.length?
        <div
        className="mt-12 border-y border-black/10 py-16 text-center">
        <p className="font-[Cormorant_Garamond] text-3xl"> Your bag is quiet.
        </p>

        <a href="/shop"
        className="mt-7 inline-flex rounded-full bg-[#171717] px-7 py-3 text-xs uppercase tracking-[.18em] text-[#F5F1E8]">
        Explore the Collection
        </a>

        </div>
        :
        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_320px]">

        <div className="divide-y divide-black/10">
        {
            items.map(i=><div
            key={i.product.id}
            className="flex gap-5 py-6 first:pt-0">
            <img src={i.product.image}
            className="h-28 w-24 object-cover"/>

            <div className="flex flex-1 flex-col justify-between">

            <div className="flex justify-between gap-4">
            <a href={`/product/${i.product.id}`}
            className="font-[Cormorant_Garamond] text-2xl">{i.product.name}</a>

            <span className="text-sm">{formatPrice(i.product.price*i.quantity)}</span>

            </div>

            <div className="flex items-center justify-between">
            <div className="flex items-center rounded-full border border-black/15">

            <button className="p-2"
            onClick={()=>update(i.product.id,i.quantity-1)}><Minus
            size={13}/></button>
            <span className="min-w-7 text-center text-xs">{i.quantity}</span>

            <button className="p-2"
            onClick={()=>update(i.product.id,i.quantity+1)}><Plus
            size={13}/></button>

            </div>

            <button onClick={()=>remove(i.product.id)}><Trash2
            size={16}/></button></div>

            </div>

            </div>)

        }
        </div>
        <aside className="h-fit border border-black/10 bg-white/20 p-7">

        <p className="text-xs uppercase tracking-[.2em]"> Summary
        </p>

        <div className="mt-7 flex justify-between border-b border-black/10 pb-5 text-sm">
        <span> Subtotal

        </span>
        <span>{formatPrice(subtotal)}
        </span>

        </div>

        <p className="mt-5 text-xs leading-6 text-[#8C867C]"> Shipping is calculated at checkout.
        </p>

        <button className="mt-7 w-full rounded-full bg-[#171717] px-6 py-4 text-xs uppercase tracking-[.18em] text-[#F5F1E8]">
        Proceed to Checkout
        </button>

        </aside>

        </div>

    }
    </div>
    </main>}
