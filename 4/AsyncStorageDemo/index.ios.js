/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  AsyncStorage,
  View
} from 'react-native';

const baseURL = 'http://localhost:8000/';
const dbVersion_KEY = '@AsyncStorageDemo:dbVersion';
const data_KEY = '@AsyncStorageDemo:data';


class AsyncStorageDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbVersion: {
      },
      data: {
        nodes: [],
        routes: []
      }
    }
  }

  // WORKING PART ----------------------------------------- // 
  componentWillMount() {

    // TESTING TESTING //
      // AsyncStorage.removeItem(dbVersion_KEY);
      // AsyncStorage.removeItem(data_KEY);
      // AsyncStorage.setItem(dbVersion_KEY, '1');
    // -------------- //
     
    AsyncStorage.getItem(dbVersion_KEY).then((value) => {
      // if db.version is null (new installed app)
      if(!value) {
        // display current data
        console.log('Current database version: ', value);
        AsyncStorage.getItem(data_KEY).then((value) => {
          console.log('Current Database: ', JSON.parse(value));
        });

        // message
        console.log('Updating Database...');

        // do the job!
        this.updateDatabaseVersion();
        this.updateData();
      } 
      // if db.version is not null (we have a database!)
      else {
        // display current data
        console.log('Current database version: ', value);
        AsyncStorage.getItem(data_KEY).then((value) => {
          console.log('Current Data: ', JSON.parse(value));
        });

        // check database version
        console.log('Checking Database Version');
        this.checkDatabaseVersion(value);
      }
    });
  }

  checkDatabaseVersion(currentDatabaseVersion) {
    fetch(baseURL+'database_check.json')
      .then((res) => res.json())
      .then((res) => {
        // if current db is older
        if(currentDatabaseVersion < res.database_version.version_number){
            console.log('THIS DB IS OLD!');
            this.updateDatabaseVersion();
            this.updateData();   
        } else {
          console.log('DB UP TO DATE!');
          this.setState({dbVersion: res.database_version});
          AsyncStorage.getItem(data_KEY).then((value) => {
            const readData = JSON.parse(value);
            this.setState({data: {nodes: readData.nodes, routes: readData.routes}});
          });
        }
      })
      .done();
  }

  updateDatabaseVersion() {
    fetch(baseURL+'database_check.json')
      .then((res) => res.json())
      .then((res) => {
        this.setState({dbVersion: res.database_version});
        AsyncStorage.setItem(dbVersion_KEY, this.state.dbVersion.version_number.toString());
        AsyncStorage.getItem(dbVersion_KEY).then((value) => {
          console.log('Database updated to version: ', value);
        });
      })
      .done();
  }

  updateData() {
    fetch(baseURL+'database_fetch_all.json')
      .then((res) => res.json())
      .then((res) => {
        this.setState({data: {nodes: res.nodes, routes: res.routes}});
        AsyncStorage.setItem(data_KEY, JSON.stringify(this.state.data));
        AsyncStorage.getItem(data_KEY).then((value) => {
          console.log('Data updated to: ', value);
        });
      })
      .done();
  }
  // ----------------------------------------------------- //
  
  // Experimental Part //
  goToRoutePage(route) {
    console.log('goToRoutePage', this.state.data);
  }
  // ----------------- //

  render() {

    const nodeList = this.state.data.nodes.map((node, index) => {
      return (
        <Text style={styles.welcome} key={index}> {node.name} </Text>
      );
    });

    return (
      <View style={styles.container}>
        {nodeList}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('AsyncStorageDemo', () => AsyncStorageDemo);
