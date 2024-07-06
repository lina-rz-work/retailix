export interface Item {
  id: number;
  quantity: number;
  size: string;
}

export interface Order {
  createdAt: string;
  items: Item[];
  orderId: string;
  totalAmount: string;
}
