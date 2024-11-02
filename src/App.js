
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <h2 className="text-center text-3xl font-semibold mt-10">مرحبًا بك في موقعنا</h2>
                <p className="text-center mt-4 text-gray-600">هذا هو المحتوى الرئيسي للموقع.</p>
            </main>
            <Footer />
        </div>
    );
}

export default App;
