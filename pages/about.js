import Collapsible from './Collapsible';
//import image from '../images/expand-vertical-4.svg';
import Header from '../comps/header';
import Layout from '../comps/layout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

class Index extends React.Component {
//contacts are destructured from the state
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      contacts: []
    }
  }

  componentDidMount(){
    this.fetchData()
  }




fetchData(){
   // site that doesn’t send Access-Control-*
  fetch("https://randomuser.me/api/?results=50&nat=us,dk,fr,gb")
  .then(response => response.json())
  .then(parsedJSON => parsedJSON.results.map(show => (
            {
                username: `${show.name}`,
                name: `${show.language}`
            }
)))
    .then(contacts => this.setState({
      contacts,
      isLoading: false
    }))
    .catch(error => console.log('parsing failed', error))
}

render() {
  const {isLoading, contacts} = this.state;
  return (
    <div>
     <header>
     
       <h1>Fetching Data <button className="btn btn-sm btn-danger">Fetch now</button></h1>
       </header>
       <div className={`content ${isLoading ? 'is-loading' : ``}`}>
         <div className="panel-group">
             {
         !isLoading && contacts.length > 0 ? contacts.map(contact => {
           const {username, name} = contact;
           return <Collapsible key={username} title={name}>
             <p>hello</p>
             </Collapsible>
           }) : null
         }
             </div>
             <div className="loader">
             <div className="icon"></div>
             </div>
</div>
             </div>
           )
         }

       }


export default Index
