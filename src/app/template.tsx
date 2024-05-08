import CategoriesTabs from "./components/categories.tabs";
import Footer from "./components/footer";
import Avatar from "./components/navigation/avatar";
import CartButton from "./components/navigation/cart.button";
import Navbar from "./components/navigation/navbar";
import { CartProvider } from "./providers/cart.provider";

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