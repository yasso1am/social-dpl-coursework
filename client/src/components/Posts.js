import React from 'react'
import { connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { getPosts } from '../reducers/posts'
import { 
  Button,
  Card,
  Header,
  Container,
  Divider,
  Dropdown,
} from 'semantic-ui-react'

class Posts extends React.Component {
  state = { category: '' }

  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  handleChange = (e, data) => {
    this.setState({ category: data.value })
  }

  categoryOptions = () => {
    const { categories } = this.props
    return categories.map( (c,i) => { 
      return { key: i, text: c, value: c }
    })
  }

  posts = () => {
    const { posts } = this.props
    const { category } = this.state
    let visible = posts
    if ( category)
      visible = posts.filter (a => a.category === category )
    return visible.map( post =>
      <Card key={post.id}>
      <Card.Content>
        <Card.Header 
          style={{
            textDecoration: 'underline',
            textAlign: 'center',
            }}
        >
          {post.title.toUpperCase()}
        </Card.Header>
        <Card.Meta>
          By: { post.author}
        </Card.Meta>
        <Card.Description>
          Topic: { post.category }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={`/posts/${post.id}`}>
          View Post
        </Link>
      </Card.Content>
    </Card>
    )
  }
  
  clearFilter = (category) => { 
    if (category){
      return(
        <Button
            fluid
            basic
            onClick={() => this.setState({ category: '' })}
          >
            Clear Filters
          </Button>
      )
    }
  }


  render() {
    const { category } = this.state
    return (
    <Container>
      <Divider />
        <Header
          textAlign="center"
          as="h1"
          >
            Let's have a look at all your lovely posts
        </Header>
      <Dropdown
        placeholder="Filter by Topic"
        fluid
        selection
        options={this.categoryOptions()}
        value={category}
        onChange={this.handleChange}
      />
      { this.clearFilter(category) }
      {/* { category && 
                  <Button
                    fluid
                    basic
                    onClick={() => this.setState({ category: '' })}
                  >
                    Clear Filters
                  </Button>
              } */}
      <Divider />
      <Card.Group itemsPerRow={4}>
        { this.posts() }
      </Card.Group>
     </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { posts } = state
  const categories = [...new Set(posts.map( a => a.category )) ]
  return {
    posts,
    categories,
  }
}

export default connect(mapStateToProps)(Posts)