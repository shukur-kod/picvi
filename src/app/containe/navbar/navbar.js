'use client'
import Link from 'next/link';
import { useState } from 'react';
import './navbar.css'

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [language, setLanguage] = useState('uz'); 

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Qidirilayotgan:', searchTerm);
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        console.log('Tanlangan til:', e.target.value);
       
    };

    return (
        <nav className='bg-blue-600 p-4 flex justify-between items-center'>
            <div className='text-white text-lg font-bold'>UzGidroTrans</div>
            <ul className='flex space-x-6'>
            <li><Link href='/' className='text-white hover:text-yellow-300'>Bosh sahifa</Link></li>
                <li><Link href='/catalog1' className='text-white hover:text-yellow-300'>Kompaniya haqida</Link></li>
                <li><Link href='/catalog2' className='text-white hover:text-yellow-300'>Xizmatlar</Link></li>
                <li><Link href='/catalog3' className='text-white hover:text-yellow-300'>Yangiliklar</Link></li>
                <li><Link href='/catalog4' className='text-white hover:text-yellow-300'>Mijoz uchun</Link></li>
            </ul>
            <form onSubmit={handleSearch} className='flex'>
                <input
                    type='text'
                    placeholder='Qidirish...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='p-2 rounded-l-md border border-gray-300'
                />
                <button type='submit' className='bg-yellow-500 text-white p-2 rounded-r-md hover:bg-yellow-600'>Qidirish</button>
            </form>
            <select value={language} onChange={handleLanguageChange} className='ml-4 p-2 rounded border border-gray-300'>
                <option value='uz'>O&apos;zbekcha</option>
                <option value='ru'>Русский</option>
                <option value='en'>English</option>
            </select>
        </nav>
    );
};

export default Navbar;