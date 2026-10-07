import { useState } from 'react';
import { Plus,Minus } from 'lucide-react';

const data=
[
    [
        'How do I place an order?',
        'Choose a piece, select your quantity, add it to your bag, and continue to checkout.'
    ],

    [
        'How long does delivery take?',
        'Delivery timing depends on destination and will be confirmed during checkout.'
    ],

    [
        'Can I return an item?',
        'Eligible returns are handled according to our Shipping & Returns policy.'
    ],

    [
        'How can I contact Wealth Collection?',
        'Email hello@wealthcollection.com or use the contact page.'
    ],

    [
        'Are pieces available in limited quantities?',
        'Some curated pieces may be available in limited quantities.'
    ]

];

export default function FAQ()
{
    const [open,setOpen]=useState<number|null>(0);
    return
    <main className="bg-[#F5F1E8] px-6 py-20 md:px-10 md:py-28">

    <div className="mx-auto max-w-4xl">

    <p className="text-xs uppercase tracking-[.3em] text-[#C8A96A]"> Need to know
    </p>

    <h1 className="mt-4 font-[Cormorant_Garamond] text-6xl md:text-8xl"> Frequently asked.
    </h1>

    <div className="mt-14 border-t border-black/10">

    {
        data.map(([q,a],i)=>

        <div key={q}
        className="border-b border-black/10">

        <button onClick={()=>setOpen(open===i?null:i)}
        className="flex w-full items-center justify-between py-7 text-left">

        <span className="pr-8 font-[Cormorant_Garamond] text-2xl md:text-3xl"> {q}
        </span>

        {open===i?
        <Minus
        size={18}
        />:
        <Plus
        size={18}
        />}
        </button>

        {open===i&&<p className="max-w-2xl pb-7 text-sm leading-7 text-[#68645D]">{a}</p>}
        </div>)

    }
        </div>
    </div>
    </main>

}
