import React from 'react'
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';




function App() {
  return (
    <div className="App">

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">  ZW Industry</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contact</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


<div class="formulaire"> 
        
    <div class="formulaire-d">  {/* partie gauche */}
        <div class="row">
          <div class="col">
             <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
          </div>
          <div class="col">
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
          </div>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" ></label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Numéro de Télephone"/>
         </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" ></label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
         </div>
         <div class="mb-3">
             <label for="exampleFormControlTextarea1" class="form-label"></label>
             <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
         </div>
         <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">SEND</button>
        </div>
    </div>
  
    <div class="formulaire-g">  
    <img  class ="image-zw" src="https://st2.depositphotos.com/5943796/11458/v/950/depositphotos_114588448-stock-illustration-initial-letter-zw-blue-swoosh.jpg"  alt="exemple de texte alternatif"/>
      <h6> Numéro de telephone</h6>
      <p> +216 78 901 234</p>
      <h6> Adress</h6>
      <p> Sfax-Tunisia</p>
    

    </div>
</div>  
     
    </div>
  );
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDY6KGcfO2MwxesmueqGk2aDNpv7F5txp4")
})(App)

