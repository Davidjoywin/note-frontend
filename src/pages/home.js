import Header from '../components/home/header.js';
import Container from '../components/home/container.js';

const Home = ({ client, submitLogout }) => {
  return (
    <>
      <Header submitLogout={submitLogout}/>
      <Container client={client} />
    </>
  )
}

export default Home;