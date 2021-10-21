import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import AuthRoute from './hooks/useAuthRoute/useAuthRoute';
import AuthDoctorRoute from './hooks/useAuthDoctorRoute/useAuthDoctorRoute'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {

  const DoctorRoute = (path) => {

    const routers = (
      <Switch>
        <AuthDoctorRoute exact path={`${path}`}component={<></>}/>
      </Switch>
    )
    return (
    <>
        {routers}      
    </>
  )};

  const MainRoute = () => {
    return (
    <>      
      <Switch>
        <AuthRoute exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
    </>
  )};

  const routes = (
    <Switch>
      <Route path="/doctor" component={()=>DoctorRoute("/doctor")}/>      {/*need to pass parameter to make path route*/}
      <Route path="/" component={MainRoute} />
      <Route component={()=> "404 NOT FOUND 404 NOT FOUND"}/>
    </Switch>
  )


  return (
    <Router>
      {routes}
    </Router>
  );
}

export default App;
