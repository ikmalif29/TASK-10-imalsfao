export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-inner">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center sm:justify-start">
                        <img 
                            src="https://media.licdn.com/dms/image/D5612AQEV8HVYnoWXQg/article-cover_image-shrink_600_2000/0/1708423669517?e=2147483647&v=beta&t=2oUC-5rVJ_hNmj9SgtfGCW4ulvjZ8TouDjKlCS8WgCA" 
                            alt="Logo" 
                            className="h-12 w-auto rounded-md shadow-md hover:scale-105 transition-transform duration-300" 
                        />
                    </div>

                    <p className="mt-4 text-center text-sm lg:mt-0 lg:text-right font-bold">
                        Copyright &copy; {new Date().getFullYear()}. Ikmal Fauzaeni.
                    </p>
                </div>
            </div>
        </footer>
    );
}
