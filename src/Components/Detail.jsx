import { Heart, BadgeInfo, CircleArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Detail() {
    const location = useLocation();
    const navigate = useNavigate();
    const { book } = location.state || {};

    const [isFavorite, setIsFavorite] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal

    const toggleFavorite = () => setIsFavorite((prev) => !prev);

    const toggleModal = () => setIsModalOpen((prev) => !prev); // Toggle modal visibility

    if (!book) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-50">
                <p className="text-xl text-gray-600">No book details available.</p>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 p-10 text-white">
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8">
                <button
                    className="flex items-center gap-2 text-white hover:text-gray-300 mb-6"
                    onClick={() => navigate(-1)}
                >
                    <CircleArrowLeft className="w-6 h-6" />
                    <span className="text-lg">Back</span>
                </button>

                <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                    <img
                        src={book.foto}
                        alt={book.judul}
                        className="w-64 h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                    />

                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold mb-4">{book.judul}</h1>
                        <div className="space-y-2">
                            <p>
                                <span className="font-semibold">Author:</span> {book.penulis}
                            </p>
                            <p>
                                <span className="font-semibold">Publisher:</span> {book.penerbit}
                            </p>
                            <p>
                                <span className="font-semibold">Year:</span> {book.tahunTerbit}
                            </p>
                            <p>
                                <span className="font-semibold">Genre:</span> {book.genre}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-semibold mb-2">Synopsis</h2>
                    <p className="leading-relaxed text-lg mb-6">{book.sinopsis}</p>
                </div>

                <div className="flex justify-end space-x-4">
                    <button
                        className={`flex items-center ${isFavorite ? 'text-red-500' : 'text-white'} hover:text-red-300`}
                        onClick={toggleFavorite}
                    >
                        <Heart className={`w-6 h-6 mr-1 ${isFavorite ? 'fill-red-500' : 'fill-none'}`} />
                        <span>{isFavorite ? 'Has Been in Favorites' : 'Add to Favorites'}</span>
                    </button>
                    <button className="flex items-center text-white hover:text-gray-300" onClick={toggleModal}>
                        <BadgeInfo className="w-6 h-6 mr-1" />
                        <span>More Info</span>
                    </button>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                            <h2 className="text-2xl text-black font-bold mb-4">{book.judul}</h2>
                            <img
                                src={book.foto}
                                alt={book.judul}
                                className="w-full h-64 object-cover rounded-md mb-4"
                            />
                            
                            <p>
                                <span className="text-black font-semibold">Publisher: {book.penerbit}</span>
                            </p>
                            <p>
                                <span className="text-black font-semibold">Year: {book.tahunTerbit}</span> 
                            </p>
                            <p>
                                <span className="text-black font-semibold">Genre:  {book.genre}</span>
                            </p>
                            <p className="mt-4">
                                <span className="text-black font-semibold">Synopsis: {book.sinopsis}</span> 
                            </p>
                            <div className="flex justify-end mt-6">
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    onClick={toggleModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
