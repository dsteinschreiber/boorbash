export interface Cart{
    restaurantId: number,
    items: Array<Item>
}

export interface Item{
  unitPrice: number,
  item: string,
  quantity: number
}
