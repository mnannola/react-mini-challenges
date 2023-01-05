export default function Card({children}) {
    return (
        <div className="border-solid border-2 border-stone-200 py-6 flex justify-center align-middle text-orange-600">            
            {children}
        </div>        
    );
}