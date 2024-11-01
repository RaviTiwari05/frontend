import React, { useState, useEffect } from 'react';

function HomePage() {
    const [announcements, setAnnouncements] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [users, setUsers] = useState([]);

    // Mock data for announcements and users
    useEffect(() => {
        const fetchAnnouncements = async () => {
            const announcementsData = [
                { id: 1, text: "New lab timings updated.", department: "Civil Engineering", userName: "Ananth" },
                { id: 2, text: "Campus fest next week!", department: "Cultural Fest", userName: "Alok" },
                { id: 3, text: "Online classes on Monday.", department: "Computer Science", userName: "Mayank Pandey" }
            ];
            setAnnouncements(announcementsData);

            const usersData = [
                { id: 1, name: "Ananth", department: "Civil Engineering" },
                { id: 2, name: "Alok", department: "Cultural Fest" },
                { id: 3, name: "Mayank Pandey", department: "Computer Science" }
            ];
            setUsers(usersData);

            // Initialize filtered results with all announcements
            setFilteredResults(announcementsData);
        };
        fetchAnnouncements();
    }, []);

    // Handle search functionality
    useEffect(() => {
        if (searchQuery) {
            const lowercasedQuery = searchQuery.toLowerCase();
            const results = [
                ...announcements.filter(
                    (announcement) =>
                        announcement.text.toLowerCase().includes(lowercasedQuery) ||
                        announcement.department.toLowerCase().includes(lowercasedQuery) ||
                        announcement.userName.toLowerCase().includes(lowercasedQuery)
                ),
                ...users.filter(
                    (user) =>
                        user.name.toLowerCase().includes(lowercasedQuery) ||
                        user.department.toLowerCase().includes(lowercasedQuery)
                )
            ];
            setFilteredResults(results);
        } else {
            // Reset to only announcements if no search query
            setFilteredResults(announcements);
        }
    }, [searchQuery, announcements, users]);

    return (
        <div className="bg-blue-50 min-h-screen flex flex-col">
            {/* Navbar */}
            <header className="bg-transparent sticky top-0 w-full py-4 px-6 shadow-md backdrop-blur-md">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://www.dotmagazine.online/_Resources/Persistent/7/c/7/a/7c7ab2423d2f340edfe42eb99461ff58f6e9a2ba/iStock-683542394-900x507-720x406.jpg"
                            alt="Profile Logo"
                            className="w-8 h-8 rounded-full"
                        />
                        <h1 className="text-2xl font-bold">Smart Campus Connect</h1>
                    </div>
                    <div className="flex items-center space-x-6">
                        <input
                            type="text"
                            placeholder="Search announcements or users..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-1 w-64 focus:outline-none focus:border-blue-500"
                        />
                        <a href="#announcement-form" className="text-gray-800 font-medium">Make Announcement</a>
                        <a href="#profile" className="text-gray-800 font-medium">My Profile</a>
                    </div>
                </nav>
            </header>

            {/* Welcome Message */}
            <main className="flex-grow p-6">
                <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">Welcome to Smart Campus Connect!</h1>

                {/* Announcements Feed */}
                <section id="announcements" className="my-8">
                    <h2 className="text-3xl font-semibold text-blue-600 mb-4">Announcements Feed</h2>
                    {filteredResults.length > 0 ? (
                        <ul className="space-y-4">
                            {filteredResults.map((item) => (
                                <li key={item.id} className="p-4 bg-white rounded shadow">
                                    <p className="text-lg font-semibold">{item.text}</p>
                                    <p className="text-gray-500">
                                        Department: {item.department} | Posted by: {item.userName}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-700">No results found.</p>
                    )}
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-blue-200 text-center py-4 text-gray-700">
                &copy; {new Date().getFullYear()} Smart Campus Connect. All rights reserved.
            </footer>
        </div>
    );
}

export default HomePage;
