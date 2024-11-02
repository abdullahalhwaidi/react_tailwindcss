// import React from 'react';

// function Footer() {
//     return (
//         <footer style={footerStyle}>
//             <p>© 2024 جميع الحقوق محفوظة</p>
//         </footer>
//     );
// }

// const footerStyle = {
//     backgroundColor: '#333',
//     color: 'white',
//     textAlign: 'center',
//     padding: '1rem',
//     position: 'fixed',
//     width: '100%',
//     bottom: 0
// };

// export default Footer;


import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6 mt-10">
            <div className="container mx-auto text-center">
                <p>© 2024 جميع الحقوق محفوظة - موقعك</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="#facebook" className="text-gray-400 hover:text-white transition duration-300">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#twitter" className="text-gray-400 hover:text-white transition duration-300">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#instagram" className="text-gray-400 hover:text-white transition duration-300">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#linkedin" className="text-gray-400 hover:text-white transition duration-300">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
