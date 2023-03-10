import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
