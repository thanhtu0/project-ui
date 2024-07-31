import Header from '../components/Header';
import Footer from '../components/Footer';
import Brand from '../components/Brand';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <Brand />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
