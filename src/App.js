
import Nav from "./Component/Nav/Nav";
import Banner from "./Component/Banner/Banner"
// import Film from "./Component/Film/Film
import { Routes, Route } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import React from "react";
import axios from "axios";

class App extends React.Component{
  constructor(){
    super()
    // console.log('fffff')
    this.state = {
       allMovies :[],
       defaultMovies : ["Guardians of the Galaxy"],
       query:" movies"

    }
    this.search = this.search.bind(this);
   
  }
  
 componentDidMount(){
 
      {  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${this.state.query}&page=1&include_adult=false`).then((data)=>{
        console.log(data.data.results)
   
         this.setState({
          allMovies : data.data.results
        })
        
       })}
       
    
    
  }


  async componentDidUpdate(){
    
   
    
   await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${this.state.query}&page=1&include_adult=false`).then((data)=>{
    console.log(data.data.results)

     this.setState({
      allMovies : data.data.results
      
    })
    this.setState({
      
    })
    
   })
  
}


  search = ()=>{ 
    let val = document.getElementById("search-info").value ;
    
    // alert("run")
    this.setState({
      query: val,
      
        // set:  setTimeout(()=>{
        //   let spinner = document.getElementById('loader');
        //   spinner.style.display = "block"
        // }, 100) , 

      

      
    })

  }
  render(){
    return( 
      <>
      <Nav />
      <div class="container">
        
      <Banner allMoviesProp = {this.state.allMovies} searchProp = {this.search}/>

       
       
       
      
      </div>
      </>
      )
  }
}

export default App;
