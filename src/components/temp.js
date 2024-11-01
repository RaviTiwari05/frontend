import React from 'react';

function HomePage() {
    return (
        <div className="bg-blue-50 min-h-screen flex flex-col">
            <header className="bg-transparent sticky top-0 w-full py-4 px-6 shadow-md backdrop-blur-md">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img src="https://www.dotmagazine.online/_Resources/Persistent/7/c/7/a/7c7ab2423d2f340edfe42eb99461ff58f6e9a2ba/iStock-683542394-900x507-720x406.jpg" alt="Profile Logo" className="w-8 h-8 rounded-full" />
                        <h1 className="text-2xl font-bold">Smart Campus Connect</h1>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#announcements" className="text-gray-800 font-medium">Announcements</a>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
                        />
                        <a href="#profile" className="text-gray-800 font-medium">My Profile</a>
                    </div>
                </nav>
            </header>

            <main className="flex-grow flex items-center justify-center">
                <h1 className="text-5xl font-bold text-center text-blue-700">Welcome to Smart Campus Connect!</h1>
            </main>

            <footer className="bg-blue-200 text-center py-4 text-gray-700">
                &copy; {new Date().getFullYear()} Smart Campus Connect. All rights reserved.
            </footer>
        </div>
    );
}

export default HomePage;
