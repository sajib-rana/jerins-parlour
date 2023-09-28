import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import Screen from "./Screen/Screen";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Jerins Parlour | Home</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <Screen></Screen>
        </div>
    );
};

export default Home;