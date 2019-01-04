import Collapsible from './Collapsible';
import image from '../images/expand-vertical-4.svg';
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

  render() {
    return (

      <div>
       <header>
       <img src={image} />
         <h1>Fetching Data <button className="btn btn-sm btn-danger">Fetch now</button></h1>
         </header>
         <div className="content">
           <div className="panel-group">
             <Collapsible title="Tracy Palmer">
               <p>tracy.palmer@example.com 3200 manchester road, ely</p>
               </Collapsible>
               </div>
               </div>
               <div className="loader">
                 <div className="icon"></div>
                 </div>
               </div>
             );
         }
}

export default Index
