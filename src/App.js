
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import OrderPage from './components/OrderPage/OrderPage';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllBookings from './components/ManageAllBookings/ManageAllBookings';
import AddNewTour from './components/AddNewTour/AddNewTour';
import Login from './components/Login/Login/Login';

function App() {

  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
           <Login></Login>
            </Route>
          <PrivateRoute path="/myorders/:tourId">
            <MyOrders></MyOrders>
            </PrivateRoute>
          <PrivateRoute path="/myorders">
            <MyOrders></MyOrders>
            </PrivateRoute>
          <PrivateRoute path="/manageallbookings">
           <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>
          <PrivateRoute path="/addnewtour">
           <AddNewTour></AddNewTour>
            </PrivateRoute>
          <PrivateRoute path="/orderpage/:tourId">
            <OrderPage></OrderPage>
            </PrivateRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;






