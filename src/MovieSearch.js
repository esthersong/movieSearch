import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie.js';
import JwPagination from 'jw-react-pagination';
import Pagination from "react-js-pagination";
const apiKey = "403ffcb3b4481da342203f94fb6e937e";

export default class MovieSearch extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchTitle: "",
      movies: [],
      loader: false,
      activePage: 1,
      totalItemsCount: 0
    }
    this.onSearchChange = this.onSearchChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  onSearchChange(e){
    this.setState({
      searchTitle: e.target.value,
      loader: true
    });
    if (e.target.value !== "") {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${e.target.value}`;
      axios.get(url)
      .then(data => {
        console.log('data: ', data.data);
        this.setState({
          movies: data.data.results,
          loader: false,
          activePage: data.data.page,
          totalItemsCount: data.data.total_results
        })
      }).catch(err => {
        console.log('error: ', err);
        this.setState({
          loader: false
        })
      })
    } else {
      this.setState({
        movies: []
      })
    }
  }
  handlePageChange(){
    let page = this.state.activePage + 1;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.searchTitle}&page=${page}`;
    console.log('url: ', url);
    axios.get(url)
    .then(data => {
      console.log('data: ', data.data);
      this.setState({
        movies: data.data.results,
        loader: false,
        activePage: data.data.page
      })
    }).catch(err => {
      console.log('error: ', err);
      this.setState({
        loader: false
      })
    })
  }
  render(){
    return(
      <div className="container">
        <div className="search-box">
          <div className="row">
            <div className="col-md-12">
            <label>Search movie by title:</label>
              <input value={this.state.searchTitle} name="search" placeholder="search movie" onChange={this.onSearchChange}/>
            </div>
          </div>
        </div>
        <div className="movies">
          <div className="loader"></div>
          <div className="row">
            <div className="note">{this.state.movies.length === 0 ? "No search results" : ""}</div>
            {this.state.movies.map((movie, index) => (
              <Movie movie={movie} key={index}/>
            ))}
          </div>
        </div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={20}
          totalItemsCount={this.state.totalItemsCount}
          pageRangeDisplayed={10}
          onChange={this.handlePageChange}
        />
      </div>
    )
  }
}
