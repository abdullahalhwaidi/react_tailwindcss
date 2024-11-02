// import React from 'react';

// function Header() {
//     return (
//         <header style={headerStyle}>
//             <h1>عنوان الموقع</h1>
//             <nav>
//                 <ul style={navStyle}>
//                     <li><a href="#home">الرئيسية</a></li>
//                     <li><a href="#about">من نحن</a></li>
//                     <li><a href="#services">الخدمات</a></li>
//                     <li><a href="#contact">اتصل بنا</a></li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// const headerStyle = {
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     padding: '1rem',
//     textAlign: 'center'
// };

// const navStyle = {
//     listStyle: 'none',
//     padding: 0,
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '1rem'
// };

// export default Header;


import React from 'react';

function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-white text-2xl font-bold">Logo</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#home" className="text-white hover:text-gray-300 transition duration-300">Home</a></li>
                        <li><a href="#about" className="text-white hover:text-gray-300 transition duration-300">About</a></li>
                        <li><a href="#services" className="text-white hover:text-gray-300 transition duration-300">Services</a></li>
                        <li><a href="#contact" className="text-white hover:text-gray-300 transition duration-300">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
