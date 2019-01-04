
import Layout from '../comps/layout.js'
import {withRouter} from 'next/router'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'


const Post =  (props) => (
    <Layout>
       <h1>{props.show.gender}</h1>
       <p>{props.show.email}</p>

    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://randomuser.me/api/?results=50&nat=us,dk,fr,gb${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.gender}`)

  return { show }
}

export default Post
