import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <h3>What is the Difference between react and react native? Which one is library or framework?</h3>
      <p><li>ReactJS is a JavaScript library, supporting both front-end web and being run on a server, for building user interfaces and web applications.
         It follows the concept of reusable components.</li>
        <li>React Native is a mobile framework that makes use of the JavaScript engine available on the host, allowing you to build mobile applications for different platforms (iOS, Android, and Windows Mobile) in JavaScript that allows you to use ReactJS to build reusable components and communicate with native components</li></p>
        <h3>What is the package name you are using for routing</h3>
        <p>react-router-dom</p>
        <h3>Routing Implementation</h3>
        <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
          </div>
       </Router>
        <h3>How do you switch/navigate form one component to another in React?</h3>
        <li>Link</li>
        <li>NavLink</li>
        <li>Redirect Component</li>
        <li>history.push</li>
        <li>history.replace</li>
        <h3>What is lazy loading in React?</h3>
        <p>lazy loading means that a component or a part of code must get loaded when it is required. It is also referred to as code splitting and data fetching . Talking about React specifically, it bundles the complete code and deploys all of it at the same time.</p>
        <h3>Difference b/w Stateful and stateless Component</h3>
        <h4>Stateless</h4>
      <p>
        If the behaviour is independent of its state then it can be a stateless
        component. You can use either a function or a class for creating
        stateless components. But unless we need to use a lifecycle hook in your
        components, we should go for function components. There are a lot of
        benefits if you decide to use function components here; they are easy to
        write, understand, and test, a little faster, and you can avoid the this
        keyword altogether.
      </p>

      <h4>Stateful</h4>
      <p>
        If the behaviour of a component is dependent on the state of the
        component then it can be termed as stateful component. These stateful
        components are always class components and have a state that gets
        initialized in the constructor.
      </p>

    </div>
  );
}

export default App;
