import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './routes/route';
//import { createTheme, ThemeProvider } from '@rneui/themed';

const AppContext = React.createContext();

export default function App() {

  const [authToken, setAuthToken] = React.useState();
  const [userProfile, setUserProfile] = React.useState();

  return (
    <NavigationContainer>
      <AppContext.Provider value={{ authToken, setAuthToken, userProfile, setUserProfile }} >
        <Navigator />
      </AppContext.Provider>
    </NavigationContainer>
  );
}