import React, { useState, useEffect } from 'react';

function HomePage() {
    const [announcements, setAnnouncements] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [users, setUsers] = useState([]);

    const [announcementText, setAnnouncementText] = useState('');
    const [announcementDepartment, setAnnouncementDepartment] = useState('');
    const [announcementUserName, setAnnouncementUserName] = useState('');

    useEffect(() => {
        const fetchAnnouncements = async () => {
            const announcementsData = [
                { id: 1, text: "New class timings.", department: "Civil Engineering", userName: "Ananth" },
                { id: 2, text: "Campus fest in nov!", department: "Cultural Fest", userName: "Alok" },
                { id: 3, text: "Online classe on saturday.", department: "Computer Science", userName: "Mayank Pandey" }
            ];
            setAnnouncements(announcementsData);
            setFilteredResults(announcementsData);
        };
        fetchAnnouncements();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            const lowercasedQuery = searchQuery.toLowerCase();
            const results = announcements.filter(
                (announcement) =>
                    announcement.text.toLowerCase().includes(lowercasedQuery) ||
                    announcement.department.toLowerCase().includes(lowercasedQuery) ||
                    announcement.userName.toLowerCase().includes(lowercasedQuery)
            );
            setFilteredResults(results);
        } else {
            setFilteredResults(announcements);
        }
    }, [searchQuery, announcements]);

    const handleAnnouncementSubmit = (e) => {
        e.preventDefault();
        const newAnnouncement = {
            id: announcements.length + 1,
            text: announcementText,
            department: announcementDepartment,
            userName: announcementUserName,
        };
        setAnnouncements([newAnnouncement, ...announcements]);
        setFilteredResults([newAnnouncement, ...filteredResults]);
        setAnnouncementText('');
        setAnnouncementDepartment('');
        setAnnouncementUserName('');
    };

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
                            className="border border-gray-300 rounded-md px-3 py-1 w-96 focus:outline-none focus:border-blue-500"
                        />
                        <a href="#profile" className="text-gray-800 font-medium">My Profile</a>
                    </div>
                </nav>
            </header>

            {/* Welcome Message */}
            <main className="flex-grow p-6">
                <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">Welcome to Smart Campus Connect!</h1>

                {/* Announcement Form */}
                <section id="announcement-form" className="my-8 p-6 bg-white shadow rounded">
                    <h2 className="text-2xl font-semibold mb-4">Make a New Announcement</h2>
                    <form onSubmit={handleAnnouncementSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Announcement Text"
                            value={announcementText}
                            onChange={(e) => setAnnouncementText(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Department"
                            value={announcementDepartment}
                            onChange={(e) => setAnnouncementDepartment(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={announcementUserName}
                            onChange={(e) => setAnnouncementUserName(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Post Announcement
                        </button>
                    </form>
                </section>

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
