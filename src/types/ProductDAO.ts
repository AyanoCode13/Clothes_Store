export type ProductCardDAO = {

    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    subcategory: string;
    description: string;
}

export type CreateProductDAO = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    stock: number;
}

export type UpdateProductDAO = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    stock: number;
}

export type CartProduct = {
    id: number;
    name: string;
    price: number;
    quantity: number;

}

export type CheckoutProduct  = {
    name: string;
    description: string;
    price: number;
    quantity: number;
}