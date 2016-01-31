import React, {
	Text,
	View,
	StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

import Profile from './Profile';
import Repositories from './Repositories';
import Notes from './Notes';

import api from '../Utils/Api';

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

export default class Dashboard extends React.Component {

  makeBackground(btn) {
    const obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }

    if(btn === 0){
      obj.backgroundColor = '#212121';
    } else if(btn === 1){
      obj.backgroundColor = '#424242';
    } else {
      obj.backgroundColor = '#848484';
    }

    return obj;
  }

  goToProfile() {
    this.props.navigator.push({
      component: Profile,
      title: 'Profile Page',
      passProps: {userInfo: this.props.userInfo}
    });
  }

  goToRepos() {
    api.getRepos(this.props.userInfo.login)
      .then((res) => {
        this.props.navigator.push({
          component: Repositories,
          title: 'Repositories',
          passProps: {
            userInfo: this.props.userInfo,
            repos: res
          }
        });
      })
  }

  goToNotes() {
    api.getNotes(this.props.userInfo.login)
      .then((res) => {
        res = res || {};
        this.props.navigator.push({
          component: Notes,
          title: 'Notes',
          passProps: {
            notes: res,
            userInfo: this.props.userInfo
          }
        })
      })
  }

	render() {
		return (
			<View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
        
        <TouchableHighlight
          onPress={this.goToProfile.bind(this)}
          style={this.makeBackground(0)}
          underlaycolor='#88D4f5'>
          <Text style={styles.buttonText}> Profile </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.goToRepos.bind(this)}
          style={this.makeBackground(1)}
          underlaycolor='#88D4f5'>
          <Text style={styles.buttonText}> Repositories </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.goToNotes.bind(this)}
          style={this.makeBackground(2)}
          underlaycolor='#88D4f5'>
          <Text style={styles.buttonText}> Notes </Text>
        </TouchableHighlight>
				
			</View>
		);
	}
}
