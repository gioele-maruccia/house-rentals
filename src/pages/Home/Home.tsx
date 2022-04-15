import Banner from '../../elements/Banner/Banner'
import {HomeWrapper, CardWrapper} from "./Home.styles";
import Card from '../../elements/Card/Card'

const Home = () => {

    return (
        <HomeWrapper>
            <Banner/>
            <CardWrapper>
                <Card
                    src="localhost:3000/src/assets/images/ettore-caputo-FMRmGvdvw04-unsplash.jpg"
                    title="Al mare"
                    description="Spaces that are more than just a place to sleep"/>
                <Card
                    src="../../assets/images/ettore-caputo-FMRmGvdvw04-unsplash.jpg"
                    title="In campagna"
                    description="Spaces that are more than just a place to sleep"/>
                <Card
                    src="../../assets/images/ettore-caputo-FMRmGvdvw04-unsplash.jpg"
                    title="Masseria"
                    description="Spaces that are more than just a place to sleep"/>
                <Card
                    src="../../assets/images/ettore-caputo-FMRmGvdvw04-unsplash.jpg"
                    title="In paese"
                    description="Spaces that are more than just a place to sleep"/>
            </CardWrapper>
            <div className="home__section">

            </div>
        </HomeWrapper>
    )
}

export default Home