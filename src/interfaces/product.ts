export interface ProductCart {
    products: Product[];
    addedItems: Product[];
    total: number;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity?: number;
    img?: string
}