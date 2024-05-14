import Footer from "~/layout/footer/footer";
import Avatar from "~/layout/navigation/avatar";
import CheckoutButton from "~/components/layout/navigation/checkout.button"
import Navbar from "~/layout/navigation/navbar";
import { CartProvider } from "~/providers/cart.provider";
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider>
            <Navbar>
                <CheckoutButton />
                <Avatar />
            </Navbar>
            {children}
            <Footer />
        </CartProvider>
    )
}