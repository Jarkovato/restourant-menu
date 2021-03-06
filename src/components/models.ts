export interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  weight: string,
  img: string,
}

export interface ProductsStateInterface {
  products: Product[],
}
