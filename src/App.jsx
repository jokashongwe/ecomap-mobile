import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './routes/route';
import { Button, createTheme, ThemeProvider } from '@rneui/themed';

const theme = createTheme({
    lightColors: {
      primary: 'red',
    },
    darkColors: {
      primary: 'blue',
    },
    components: {
      Button: {
        raised: true,
      },
    },
  });

export default function App() {
    return (
        <NavigationContainer>
            <ThemeProvider theme={theme} >
                <Navigator />
            </ThemeProvider>
        </NavigationContainer>
    );
}