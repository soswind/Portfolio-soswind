import { Link } from "@remix-run/react";

export default function Projects() {

    return (
        <>
        <div className="flex md:space-x-12 space-y-18 justify-center">
            <h1 className="text-3xl font-semibold">Projekter</h1>
        </div>

        <div className="m-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <a href="https://awu-exam-soswind-fc74ef9f9cab.herokuapp.com/events" target="_blank" rel="noopener noreferrer" className="p-4 border border-gray-200 rounded shadow-sm bg-white cursor-pointer hover:bg-gray-100 transition-colors duration-200">
        <h2 className="text-center text-lg font-semibold p-2">AWU Exam Project</h2>
        <img src="exam-logo.png" className="w-full h-auto mb-4 md:mb-6 rounded-xl" />
        <div className="flex justify-center w-full">
            <p className="font-m font-semibold p-2 bg:orange-500">Se projekt</p>
        </div>
    </a>
</div>

        
        </>
    )
};