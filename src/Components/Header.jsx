export default function Header() {
    return (
        <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
                    <div className="group">
                        <h1 
                            className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight 
                            transition-transform duration-500 group-hover:scale-105 animate-slide-in-top"
                        >
                            Imals Library
                        </h1>
                        <p className="mt-2 text-lg text-white/90 font-semibold animate-fade-in">
                            Discover new worlds on every page. Read, enjoy, and explore with us!
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/ikmalif29" target="_blank" rel="noopener noreferrer">
                            <button
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-gray-300 
                                bg-white text-gray-900 shadow-lg transition-all duration-300 ease-in-out 
                                transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100 hover:text-gray-800 focus:outline-none 
                                focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                type="button"
                            >
                                <span className="text-sm font-medium"> View GitHub </span>
                                <img 
                                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
                                    alt="GitHub Icon" 
                                    className="w-6 h-6" 
                                />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
