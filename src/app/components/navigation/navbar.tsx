import Link from "next/link"

export default function Navbar(){

    const routes = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Services",
            path: "/services"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ]

    return(
        <nav className="navbar">
            <div className="navbar-logo">Logo</div>
            <ul className="navbar-list">
              {routes.map((route,index)=>{
                return (
                <li key={index} className="navbar-list-item">
                    <Link href={route.path}>{route.name}</Link>
                </li>)
              })}
            </ul>
            
        </nav>
    )
}