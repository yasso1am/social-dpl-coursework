import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Header,
  Container,
  Divider,
} from 'semantic-ui-react'

const NoMatch = () => (
  <Container>
  <Divider />
  <Header
    as="h3"
    textAlign="center"
  >
    Page Not Found - Return <Link to="/">Home</Link>
  </Header>
  <Divider />
  </Container>
)

export default NoMatch