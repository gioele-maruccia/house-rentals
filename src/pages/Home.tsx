import styled from 'styled-components';
import '../assets/scss/Home.scss';
import { TextWriting } from '../elements/TextWriting';
const image1 = require('../assets/images/img_home.png')

const Wrapper = styled.div`
.top-section {
    height: 80vh;
    padding: 5vh 0 200px 0;
    box-sizing: border-box;
    min-height: 500px;
    background: black;
}
`

const Home = () => {
    
    return(
        <Wrapper className='home'>
            <div className="top-section">

                <img src={image1} 
                    style={{ objectFit : 'cover' }} width='100%'
                    height='100%' alt="Salento Mare" />

                <TextWriting
                    style={{ minWidth: '230px', textAlign: 'left', marginTop: '45px' }}
                    invariantTextColor='white'
                    invariantText='We are '
                    textToWrite={['building.  ', 'creating. ', 'working.  ' ]} 
                />
            </div>
            <h1>Home</h1>

        </Wrapper>
    )
}

export default Home