import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import AppContext, { defaultUser } from './AppContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
      ],
      logOut: this.logOut,
      logIn: this.logIn,
    };
  }

  logIn = (email, password) => {
    this.setState({
      user: { email, password, isLoggedIn: true },
    });
  };

  logOut = () => {
    this.setState({
      user: defaultUser,
    });
  };

  markNotificationAsRead = (id) => {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter((notif) => notif.id !== id),
    }));
  };

  render() {
    const { user, listNotifications, logOut } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <Notifications
          listNotifications={listNotifications}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <Footer />
      </AppContext.Provider>
    );
  }
}

export default App;

