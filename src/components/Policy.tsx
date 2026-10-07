function Policy({
    title,
    eyebrow,
    sections,
}: {
    title: string;
    eyebrow: string;
    sections: string[][];
}) {
    return (
        <main className="bg-[#F5F1E8] px-6 py-20 md:px-10 md:py-28">
        <article className="mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-[.3em] text-[#C8A96A]">
        {eyebrow}
        </p>

        <h1 className="mt-4 font-[Cormorant_Garamond] text-6xl md:text-8xl">
        {title}
        </h1>

        <div className="mt-14 space-y-10 text-sm leading-8 text-[#68645D]">
        {sections.map(([h, p]) => (
            <section key={h}>
            <h2 className="font-[Cormorant_Garamond] text-3xl text-[#171717]">
            {h}
            </h2>

            <p className="mt-4">{p}</p>
            </section>
        ))}

        <p className="border-t border-black/10 pt-8 text-xs">
        Starter storefront copy — finalize legal, delivery, payment,
        privacy, and return terms for the actual business before launch.
        </p>
        </div>
        </article>
        </main>
    );
}

export function ShippingReturns() {
    return (
        <Policy
        title="Shipping & Returns"
        eyebrow="The practical details"
        sections={[
            [
                "Shipping",
                "Orders are prepared with care and dispatched to the delivery address provided at checkout. Delivery timing and applicable shipping charges are confirmed before an order is completed.",
            ],
            [
                "Returns",
                "If an eligible item is not right for you, contact us as soon as possible after delivery. Items should be unused, undamaged, and returned in their original condition and packaging where applicable.",
            ],
            [
                "Before returning",
                "Please contact hello@wealthcollection.com before sending anything back so our team can provide the appropriate return instructions.",
            ],
        ]}
        />
    );
}

export function Privacy() {
    return (
        <Policy
        title="Privacy Policy"
        eyebrow="Your information"
        sections={[
            [
                "Information we collect",
                "We may collect information you provide when you place an order, contact us, subscribe to updates, or otherwise interact with the store.",
            ],
            [
                "How we use information",
                "Information may be used to process orders, provide customer support, communicate about the store, improve the shopping experience, and meet applicable legal obligations.",
            ],
            [
                "Your choices",
                "You can contact us to ask questions about personal information associated with your interactions with Wealth Collection or to manage marketing communications.",
            ],
        ]}
        />
    );
}

export function Terms() {
    return (
        <Policy
        title="Terms & Conditions"
        eyebrow="Store rules"
        sections={[
            [
                "Orders",
                "Product availability, pricing, and order acceptance are subject to confirmation. We reserve the right to correct obvious errors and contact customers when an order requires clarification.",
            ],
            [
                "Products",
                "Curated and vintage pieces can naturally vary in character, texture, and appearance. Product photography is intended to represent the collection as accurately as practical.",
            ],
            [
                "Contact",
                "For questions about these terms, contact hello@wealthcollection.com.",
            ],
        ]}
        />
    );
}
