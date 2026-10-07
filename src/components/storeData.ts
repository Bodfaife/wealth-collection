export type Product = {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
    details: string[];
};

export const products: Product[] = [
    {
        id:'vintage-essential',
        name:'Vintage Essential',
        category:'Vintage Shirts',
        price:35000,
        image:'/images/images10.jpg',
        description:'A character-rich vintage shirt selected for effortless everyday dressing.',
        details:['Relaxed silhouette','Vintage-inspired character','Easy everyday styling']

    },

    {

        id:'the-classic',
        name:'The Classic',
        category:'Vintage Shirts',
        price:45000,
        image:'/images/images9.jpg',
        description:'A refined shirt with a timeless profile and understated presence.',
        details:['Classic silhouette','Premium feel','Versatile styling']

    },

    {
        id:'soft-living',
        name:'Soft Living',
        category:'Premium Bedding',
        price:85000,
        image:'/images/images7.jpg',
        description:'Thoughtfully selected bedding designed to make everyday rest feel considered.',
        details:['Soft-touch texture','Refined finish','Designed for everyday comfort']

    },

    {
        id:'everyday-luxury',
        name:'Everyday Luxury',
        category:'Elevated Essentials',
        price:55000,
        image:'/images/4.jpg',
        description:'An elevated essential that brings simplicity and intention into daily life.',
        details:['Minimal design','Easy everyday use','Quietly refined']

    },

    {
        id:'heritage-shirt',
        name:'Heritage Shirt',
        category:'Vintage Shirts',
        price:42000,
        image:'/images/images6.jpg',
        description:'A distinctive vintage layer chosen for texture, character, and lasting appeal.',
        details:['Relaxed fit','Distinctive texture','Limited selection']

    },

    {
        id:'linen-rest',
        name:'Linen Rest Set',
        category:'Premium Bedding',
        price:98000,
        image:'/images/images8.jpg',
        description:'A calm, tactile bedding set for a softer and more elevated bedroom.',
        details:['Natural-feel texture','Neutral aesthetic','Complete bedding set']

    },

];

export const formatPrice = (n:number) => `₦${n.toLocaleString('en-NG')}`;
