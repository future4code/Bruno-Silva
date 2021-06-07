import React, { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import ListTripsPage from './pages/ListTripsPage/ListTripsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminHomePage from './pages/AdminHomePage/AdminHomePage';

function App() {
  const [actualPage, setActualPage] = useState("home-page")
  const [isLogin, setIsLogin] = useState(false);

  const backToHomePage = () => {
    setActualPage("home-page");
  }

  const goToListTrips = () => {
    setActualPage("list-trips");
  }

  const checkAdminOrLogin = () => {
    if (isLogin) {
      setActualPage("admin-page");
    } else {
      setActualPage("login-page");
    }
  }

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
        return <LoginPage />;
      case "admin-page":
        return <AdminHomePage />;
      default:
        return;
    }
  }

  return (
    <div>
      {renderScreen()}
    </div>
  );
}

export default App;