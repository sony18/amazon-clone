import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Checkout from './pages/checkout/Checkout'
import SigninForm from './components/form/SigninForm';
import Footer from './components/footer/Footer'
import { auth } from './components/firebase'
import { actionType } from './context/reducer'
import { useGlobalData } from './context/GlobalContext';
import Basket from './pages/basket/Basket';
import OrderComplete from './components/messages/OrderComplete';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51HYEurATR77trMFyKigXzfok19HW7KhaCXgg66g0TK1Pew1mZaJmVkdRvwmoOBZnNNi1mZUOjr1JMjb0Q5hWoEPJ00XtrEBIK9');

function App() {

  const [{ }, dispatch] = useGlobalData();
//chek if user logged in (firestore data)
//load user name and email to app's global state
  useEffect(() => {
    auth.onAuthStateChanged(authuser => {
      if (authuser) {
        dispatch({
          type: actionType.LOAD_USER_DETAIL,
          payload: {
            displayName: authuser.displayName,
            email: authuser.email,
          }
        })
      }
      else {
        dispatch({
          type: actionType.LOAD_USER_DETAIL,
          payload: {}
        })
      }
    });
  }, [dispatch])

  return (
    <>
      <Router>
        <div className="mainapp">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/checkout'>
              <Elements stripe={stripePromise}>
                <Checkout />
              </Elements>
            </Route>
            <Route path='/basket' component={Basket} />
            <Route path='/signin' component={SigninForm} />
            <Route path='/ordercomplete' component={OrderComplete} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
