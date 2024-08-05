import { FashionTrending, NewSeason, NewRelease, RouteOne, Season } from '~/components/Layout/components/Container';

const Home = ({ activeTab }) => {
    return (
        <div>
            <FashionTrending activeTab={activeTab} />
            <NewSeason activeTab={activeTab} />
            <RouteOne activeTab={activeTab} />
            <NewRelease activeTab={activeTab} />
            <Season activeTab={activeTab} />
        </div>
    );
};

export default Home;
