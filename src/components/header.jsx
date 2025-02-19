import React, { useState } from 'react';
import { Link,Navigate,useNavigate} from 'react-router-dom';
import "./App.css";



function Header() {
  const [query,setQuery]=useState('');
  const navigate = useNavigate();

  const Handlesearch=(s)=>{
    s.preventDefault();
    if(query){
      navigate(`/${query.toLowerCase()}/`)
    }
  };
  return (

      <header>
        <Link to="/"><h1 style={{ fontSize: "xx-large" }}>ExpertCoder</h1></Link>
          <form onSubmit={Handlesearch}>
              <input type="search" value={query} onChange={(s)=>setQuery(s.target.value)} placeholder="Search here" />
              <button style={{color:"black"}}>Search</button>
          </form>
          <div>
            <Link to="/">Home</Link>
            <Link to="/coursespage">Courses</Link>
            <Link to="/examspage">Exams</Link>
            <Link to="/loginpage">Login</Link>
            <Link to="/signinpage">Sign in</Link>
          </div>
      </header>
  
      
  );
}
export default Header;
