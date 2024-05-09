import CategoriesTabs from "./components/categories.tabs";
import Footer from "./components/layout/footer/footer";
import Avatar from "./components/layout/navigation/avatar";
import CartButton from "./components/layout/navigation/cart.button";
import Navbar from "./components/layout/navigation/navbar";
import { CartProvider } from "../providers/cart.provider";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider>
            <Navbar>
                <CartButton />
                <Avatar />
            </Navbar>
            {children}
            <Footer />
        </CartProvider>
    )
}