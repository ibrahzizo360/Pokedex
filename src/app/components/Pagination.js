'use client'

export default function Pagination({ totalPages, currentPage, onPageChange }) {
    const handleNextPage = () => {
        onPageChange(currentPage + 1);
    };

    const handlePreviousPage = () => {
        onPageChange(currentPage - 1);
    };

    return (
        <div className="mx-auto py-6">
            {currentPage > 1 && (
                <button onClick={handlePreviousPage} className="bg-white px-4 py-2 border-2 border-slate-700 mr-36">
                    Previous
                </button>
            )}
            {currentPage < totalPages && (
                <button onClick={handleNextPage} className="bg-red-500 text-white px-8 py-2">
                    Next
                </button>
            )}
        </div>
    );
}
