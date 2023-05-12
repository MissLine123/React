
import './App.css';
import styles from './app.module.css'

import { Route,Routes } from 'react-router-dom';


import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Superhero from './components/Superhero';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Person from './components/Person';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import Form from './components/Form';
import Newsletter from './components/Newsletter';
import React, { useReducer } from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import DataFetchingOne from './components/DataFetchingOne';
import { UserProvider } from './components/UserContext';
import ComponentG from './components/ComponentG';
import DataFetchAll from './components/DataFetchAll';
import DataFetchAllToDos from './components/DataFetchAllToDos';
import DataFetchAllReducer from './components/DataFetchAllReducer';
import Home from './components/Home/Home';
import Service from './components/Services/Service';
import Profil from './components/Profil/Profil';
import NotFound from './components/NotFound/NotFound';
import Developpement from './components/Services/Developpement/Developpement';
import Marketing from './components/Services/Marketing/Marketing';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Admin from './components/Admin/Admin';
import GestionPost from './components/Admin/GestionPost/GestionPost';
import AllUser from './components/AllUser/AllUser';
import Allposts from './components/AllPosts/Allposts';
import Allfilm from './components/Allfilm/Allfilm';
import Onefilm from './components/OneFilm/Onefilm';
import NewFilm from './components/NewFilm/NewFilm';
import UpdateFilm from './components/UpdateFilm/UpdateFilm';


export const CountContext = React.createContext() ;

function App() {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case 'increment': return state + 1;
      case 'decrement': return state - 1;
      case 'reset': return initialState ;
      default: return state 
    }
  }

  const [count, dispatch] = useReducer(reducer, initialState);

  
  return (
    <div className="App">

        {/* <UserProvider value="Fred">

         <ComponentG/>
        </UserProvider> */}



      {/* <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>

      </CountContext.Provider> */}



      {/* <DataFetchingOne/> */}
      {/* <DataFetchAll/> */}
{/* <DataFetchAllToDos/> */}
{/* <DataFetchAllReducer/> */}

     {/* <Greet name="Thomas" age="23 ans">
     Thomas est un super gars parce qu'il adore React!
     </Greet>
     <Greet name="Toto" age="90 ans"/>
     <Greet name="Zaid" age="33 ans"/>   */}
     {/* <Welcome/>
    <Superhero name="Bruce" hero="Batman">This is children props</Superhero>
    <Superhero name="Clark" hero="Superman"/>
    <Superhero name="Diana" hero="Wonder Women"/> */}

    {/* <Welcome name="Thomas" age="23 ans"/>
    <Welcome name="Toto" age="90 ans"/>
    <Welcome name="John" age="33 ans"/> */}

    {/* <Message/> */}
{/* <Counter value={5}/> */}
{/* <FunctionClick/>
<ClassClick/>
<UserGreeting/> */}
{/* <NameList/> */}
{/* <Person/> */}
{/* <StyleSheet primary="primary"/>
<Inline/> */}
{/* <h1 className={styles.success} >Success</h1> */}
{/* <Form/>
<Newsletter/> */}


{/*ROUTE*/}

 <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/services' element={<Service/>} > 
      <Route path='/services/developpement' element={<Developpement/>} />
      <Route path='/services/marketing' element={<Marketing/>} />
    
    </Route>



    <Route path='/profile/:id' element={<Profil/>}/>
    <Route path='/*' element={<NotFound/>}/>

    <Route path='/admin' element={<Admin/>}>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/gestionpost' element={<GestionPost/>}/>

    </Route>

    <Route path='/allusers' element={<AllUser/>}/>
    <Route path='/allposts' element={<Allposts/>}/>
    <Route path='/allfilm' element={<Allfilm/>}/>
    <Route path='/film/' element={<Onefilm/>}/>
    <Route path='/newfilm/' element={<NewFilm/>}/>

    <Route path='updatefilm' element={<UpdateFilm/>}/>

    <Route path='updatefilm/:id' element={<UpdateFilm/>}/>
</Routes> 
    </div>
  );
}

export default App;
