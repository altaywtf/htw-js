/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

import Main from './App/Components/Main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class githubNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
        titleTextColor='#000'
        tintColor='#000'
        style={styles.container}
        initialRoute={{
          title: 'Github Note Taker',
          component: Main,
        }}/>
    );
  }
}

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
