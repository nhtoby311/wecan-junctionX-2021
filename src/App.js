import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import AuthRoute from './hooks/useAuthRoute/useAuthRoute';
import AuthDoctorRoute from './hooks/useAuthDoctorRoute/useAuthDoctorRoute'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Layout from './components/Layout/Layout';
import Home from './pages/Main/Home/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {theme} from './theme/theme'
import Questions from './pages/Questions/Questions';
import {styled} from '@mui/material/styles'
import Footer from './components/Layout/Footer/Footer';
import Question from './pages/Questions/Question/Question';

const Wrapper = styled('div')`
  width: 100vw;
  overflow-x: hidden;
`

function App() {

  const DoctorRoute = (path) => {
    const routers = (
      <Switch>
        <AuthDoctorRoute exact path={`${path}`}component={Register}/>
      </Switch>
    )
    return (
    <>
        {routers}      
    </>
  )};

  const MainRoute = () => {

    const routers = (
      <Switch>
        <AuthRoute exact path="/" component={Home}/>
        <AuthRoute exact path="/questions" component={Questions}/>
        <AuthRoute exact path="/questions/:id" component={Question}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
    ) 


    return (
    <>   
      <Layout>
        {routers}
      </Layout>  
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
    <Wrapper>
        <ThemeProvider theme={theme()}>
        <Router>
          {routes}
        </Router>
      </ThemeProvider>
    </Wrapper>
    
  );
}

export default App;
