

import "./Banner.css"
export default function Banner(prop){

  //  let allMovies = props.moviesProps;

  //  let myMovies = allMovies.map(function (movie, index){
  //      return  <div class="col-md-3" >
  //      <div class="card mb-4 shadow-sm">
  //          <img src={movie.Poster}/>
  //          <div class="card-body">
  //          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  //          <div class="d-flex justify-content-between align-items-center">
  //              <div class="btn-group">
  //              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
  //              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
  //              </div>
  //              <small class="text-muted">9 mins</small>
  //          </div>
  //          </div>
  //      </div>
  //  </div>
  //  })
  


  let allMovies = prop.allMoviesProp;
  let search = prop.searchProp

   let movie = allMovies.map(function (movie, index){
    let Poster = movie.Poster_path === "null" ? "ttps://image.tmdb.org/t/p/original/i67gII3CoM4bpyTGuZb1TiRKUbZ.jpg" : movie.Poster
    return <div class="col-md-3" key={index}>
    <div class="card mb-4 shadow-sm movie-card">
        <img loading="lazy" src={"https://image.tmdb.org/t/p/original" + movie.poster_path}/>
        <p></p>
        <div class="card-body">
        <h4 class="card-text ">{movie.title}</h4>
        <h6 class="card-text"><small>Release date: {movie.release_date}</small></h6>
        <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" id="add">add</button>
            <button type="button" class="btn btn-sm btn-outline-secondary" id = "like">like</button>
            </div>
            <small class="text-muted">Ratings: {movie.vote_average}</small>
       </div>
        </div>
    </div>
    </div>
   })
 
  return(
    <div class="banner">
    <h1 class="display-4 text-center">Let's Download</h1>
    <p class="lead">
      <input type="search" placeholder="search.." 
       class= "form-control" id="search-info" />
    </p>
    <div class="text-center">
      <button class="btn btn-primary px-5  mt-3" id= "search" onClick={search}>Search</button>
    </div>
    <div class="album row py-5 bg-light">
    <div class="container">
      <div className="load">
      <div className="loader " id="loader">
      
      </div>
      </div> 
      <div class="row load-bottom" id="movies">
      <div className="row movies">{movie}</div>
   </div>
   </div>
   </div>
  </div>
  )

}



   