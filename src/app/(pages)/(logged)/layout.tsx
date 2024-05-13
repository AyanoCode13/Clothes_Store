import Footer from "~/layout/footer/footer";
import Avatar from "~/layout/navigation/avatar";
import CartButton from "~/layout/navigation/cart.button"
import Navbar from "~/layout/navigation/navbar";
import { CartProvider } from "~/providers/cart.provider";
export default function AuthLayout({ children }: { children: React.ReactNode }) {
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