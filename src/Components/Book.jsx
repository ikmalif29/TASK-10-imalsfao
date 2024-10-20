import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Book() {
    const books = [
        {
            id: 1,
            foto: "https://down-id.img.susercontent.com/file/id-11134207-7r98z-lnx4k0w9m997df",
            judul: "The Catcher in the Rye",
            penulis: "J.D. Salinger",
            penerbit: "Little, Brown and Company",
            tahunTerbit: 1951,
            genre: "Fiction",
            sinopsis: "A story about the events and struggles of teenage Holden Caulfield in 1950s New York.",
        },
        {
            id: 2,
            foto: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/95/MTA-166190332/no-brand_no-brand_full01.jpg",
            judul: "To Kill a Mockingbird",
            penulis: "Harper Lee",
            penerbit: "J.B. Lippincott & Co.",
            tahunTerbit: 1960,
            genre: "Historical Fiction",
            sinopsis: "A novel about racial injustice and the loss of innocence in the American South.",
        },
        {
            id: 3,
            foto: "https://cdn.gramedia.com/uploads/picture_meta/2024/2/19/drvhidhjtaiv3ks9ae6tb2.jpg",
            judul: "1984",
            penulis: "George Orwell",
            penerbit: "Secker & Warburg",
            tahunTerbit: 1949,
            genre: "Dystopian",
            sinopsis: "A chilling portrayal of a totalitarian regime and mass surveillance.",
        },
        {
            id: 4,
            foto: "https://m.media-amazon.com/images/I/81fZf2uVdPL._AC_UF1000,1000_QL80_.jpg",
            judul: "Pride and Prejudice",
            penulis: "Jane Austen",
            penerbit: "T. Egerton",
            tahunTerbit: 1813,
            genre: "Romance",
            sinopsis: "The story of Elizabeth Bennet as she navigates issues of manners, upbringing, and marriage.",
        },
        {
            id: 5,
            foto: "https://bukukita.com/babacms/displaybuku/67836_f.jpg",
            judul: "The Great Gatsby",
            penulis: "F. Scott Fitzgerald",
            penerbit: "Charles Scribner's Sons",
            tahunTerbit: 1925,
            genre: "Tragedy",
            sinopsis: "A novel about the American dream and the mysterious millionaire Jay Gatsby.",
        },
        {
            id: 6,
            foto: "https://upload.wikimedia.org/wikipedia/id/thumb/f/f9/5_cm_%28poster%29.jpg/220px-5_cm_%28poster%29.jpg",
            judul: "5 cm.",
            penulis: "Donny Dhirgantoro",
            penerbit: "Grasindo",
            tahunTerbit: 2005,
            genre: "Tragedy",
            sinopsis: "Novel ini bercerita tentang persahabatan lima sahabat, yaitu Arial, Riani, Zafran, Ian, dan Genta.",
        },
    ];

    const [hoveredBook, setHoveredBook] = useState(null);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const filterData = books.filter((b) =>
        b.judul.toLowerCase().includes(search.toLowerCase())
    );

    const handleNavigate = (book) => {
        navigate('/detail', { state: { book } }); 
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg p-10">
            <h1 className="text-6xl font-bold text-white text-center mb-8 animate-slide-in-top">
                Book Collection
            </h1>

            <div className="w-full flex my-6">
                <div className="relative group justify-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/954/954591.png"
                        alt="Search Icon"
                        className="cursor-pointer w-8 h-8 z-10 relative"
                    />
                    <input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search..."
                        className="absolute top-0 left-0 w-64 h-10 transform -translate-x-10 opacity-0 pointer-events-none 
                                    group-hover:translate-x-10 group-hover:opacity-100 group-hover:pointer-events-auto 
                                    transition-all duration-500 ease-in-out rounded-lg pl-3 shadow-md"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {filterData.map((book) => (
                    <div
                        key={book.id}
                        onMouseEnter={() => setHoveredBook(book.id)}
                        onMouseLeave={() => setHoveredBook(null)}
                        onClick={() => handleNavigate(book)}
                        className={`relative overflow-hidden rounded-lg p-6 bg-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                            hoveredBook === book.id ? "bg-indigo-500 text-white" : "bg-white text-gray-800"
                        }`}
                    >
                        <img
                            src={book.foto}
                            alt={book.judul}
                            className="mb-4 w-full h-48 object-cover rounded-md"
                        />
                        <h2 className="text-xl font-bold mb-2">{book.judul}</h2>
                        <p className="text-sm mb-1">
                            <strong>Author:</strong> {book.penulis}
                        </p>
                        {hoveredBook === book.id && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center text-white p-4 transition-opacity duration-300">
                                <p>Explore more about {book.judul}!</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
