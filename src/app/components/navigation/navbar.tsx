export default function Navbar(){
    return(
        <div className="flex justify-between items-center py-4 px-6 bg-white shadow-lg">
            <div className="text-2xl font-bold">Logo</div>
            <div className="flex gap-4">
                <a href="#" className="text-lg">Home</a>
                <a href="#" className="text-lg">About</a>
                <a href="#" className="text-lg">Services</a>
                <a href="#" className="text-lg">Contact</a>
            </div>
         
            
        </div>
    )
}