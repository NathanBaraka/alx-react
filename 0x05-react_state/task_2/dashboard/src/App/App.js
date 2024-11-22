import React, { Component } from 'react';
import AppContext, { defaultUser } from './AppContext';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      logOut: this.logOut,
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: defaultUser,
    });
  }

  render() {
    const { user, logOut } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <div className="App">
          <Notifications />
          <Header />
          {user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;

