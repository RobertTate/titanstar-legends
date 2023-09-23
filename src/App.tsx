import Header from './components/header';
import Slice from './components/slice';
import Container from './components/container';
import TalentPath from './components/talentpath';
import Points from './components/points';

function App() {
  return (
    <>
      <main>
        <Header />
        <Slice>
          <Container type="TalentPathsContainer">
            <TalentPath path={"talentPath1"} />
            <TalentPath path={"talentPath2"} />
          </Container>
          <Container type="PointsContainer">
            <Points />
          </Container>
        </Slice>
      </main >
    </>
  )
}

export default App
