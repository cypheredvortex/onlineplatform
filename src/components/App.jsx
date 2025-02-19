import React from "react";
import './App.css';
import './App.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Herosection from "./herosection.jsx";
import Benefits from "./benefits.jsx";
import Introcourse from "./introcourse.jsx";
import Calltoaction from "./calltoaction.jsx";
import Courses from "./courses.jsx";
import Exams from "./exams.jsx";
import Login from "./login.jsx";
import Signin from "./signin.jsx";
import Html from "./htmlcourse.jsx"; 
import Csscourse from "./csscourse.jsx";
import JsCourse from "./jscourse.jsx";
import SqlCourse from "./sqlcourse.jsx";
import CCourse from "./ccourse.jsx";
import CSharpCourse from "./cshcourse.jsx";
import CppCourse from "./cppcourse.jsx";
import KotlinCourse from "./kotlincourse.jsx";
import RCourse from "./rcourse.jsx";
import RubyCourse from "./rubycourse.jsx";
import TypeScriptCourse from "./tscourse.jsx";
import PythonCourse from "./pycourse.jsx";
import PhpCourse from "./phpcourse.jsx";
import SwiftCourse from "./swiftcourse.jsx";
import GoCourse from "./gocourse.jsx";

const Notfound=()=><h2>The page you are looking for does not exist!</h2>
 
const Page = ({ match }) => {
  return <h2>Welcome to the {match.params.page} page</h2>;
};
function App() {

  return (
    <Router>
      <div id="app">
      <Header/>
      <Routes>
      <Route path="/" element={<><Herosection/><Introcourse/><Benefits/><Calltoaction/></>}/>
      <Route path="/coursespage" element={<Courses/>}/>
      <Route path="/examspage" element={<Exams/>}/>
      <Route path="/loginpage" element={<Login/>}/>
      <Route path="/signinpage" element={<Signin/>}/>
      <Route path="/htmlcourse" element={<Html />} />
      <Route path="/csscourse" element={<Csscourse />} />
      <Route path="/jscourse" element={<JsCourse />} />
      <Route path="/sqlcourse" element={<SqlCourse />} />
      <Route path="/pycourse" element={<PythonCourse />} />
      <Route path="/ccourse" element={<CCourse />} />
      <Route path="/cshcourse" element={<CSharpCourse />} />
      <Route path="/kotlincourse" element={<KotlinCourse />} />
      <Route path="/rcourse" element={<RCourse />} />
      <Route path="/gocourse" element={<GoCourse />} />
      <Route path="/swiftcourse" element={<SwiftCourse />} />
      <Route path="/rubycourse" element={<RubyCourse />} />
      <Route path="/phpcourse" element={<PhpCourse />} />
      <Route path="/tscourse" element={<TypeScriptCourse />} />
      <Route path="/cppcourse" element={<CppCourse />} />
      </Routes>
      <Routes>
      <Route path="/:page" component={Page} />
      <Route path="/" exact />
      <Route path="*" component={Notfound} />
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
};
export default App;
