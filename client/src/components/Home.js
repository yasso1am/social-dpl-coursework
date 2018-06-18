import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Header,
  Container,
  Divider,
} from 'semantic-ui-react'

const Home = () => (
  <Container>
  <Divider />
  <Header
    textAlign="center"
    as="h1"
    >
      Welcome to a <Link to ="/posts">Social Media</Link> webpage
  </Header>
  <Divider />
  </Container>
)

export default Home