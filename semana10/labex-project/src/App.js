import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage/HomePage';
import ListTripsPage from './pages/ListTripsPage/ListTripsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminHomePage from './pages/AdminHomePage/AdminHomePage';

function App() {
  const [actualPage, setActualPage] = useState("home-page")
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    checkAdminOrLogin()
  }, [isLogin])

  const backToHomePage = () => {
    setActualPage("home-page");
  };

  const goToListTrips = () => {
    setActualPage("list-trips");
  };

  const logging = () => {
    setIsLogin(!isLogin);
  };

  const checkAdminOrLogin = () => {
    if (isLogin) {
      setActualPage("admin-page");
    } else {
      setActualPage("login-page");
    };
  };

  const renderScreen = () => {
    switch (actualPage) {
      case "home-page":
        return (<HomePage
          listTrip={goToListTrips}
          adminOrLogin={checkAdminOrLogin}
        />);
      case "list-trips":
        return (
          <ListTripsPage
            backToHomePage={backToHomePage}
          />);
      case "login-page":
        return (
          <LoginPage
            backToHomePage={backToHomePage}
            logging={logging}
          />);
      case "admin-page":
        return (
          <AdminHomePage
            backToHomePage={backToHomePage}
            logging={logging}
          />);
      default:
        return;
    };
  };

  return (
    <div>
      {renderScreen()}
    </div>
  );
}

export default App;