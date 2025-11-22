import { CartItem } from "./cart-item.model";
import { Product } from "./product.model";

export interface CartContextType {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    addCartItem: (product: Product) => void;
    cartItems: CartItem[];
    deleteCartItem: (product: Product) => void
}