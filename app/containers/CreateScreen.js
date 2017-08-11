/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { addNote, removeNote } from '../store/actions/note';
import Items from '../components/Items';

class CreateScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Create ' + navigation.state.params.type,
  });

  render() {

    return (
      <View style={styles.container}>
      {/* note first */}
        <TextInput
          style={{
            height: 60,
            fontSize: 20,
            padding: 20,
            fontWeight: 'bold',
          }}
          placeholder={'Title'}
        />
        <TextInput
          style={{
            color: 'gray',
            fontSize: 20,
            padding: 20,
            textAlignVertical: 'top',
            flex: 1,
            alignSelf: 'stretch',
          }}
          multiline={true}
          placeholder={'Note'}
          onEndEditing={(event) => this.props.addNote(event.nativeEvent.text)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
  },
});

const mapStateToProps = state => ({
  todo: state.todo,
  note: state.note,
});

const mapDispatchToProps = {
  addNote: noteText => dispatch => dispatch(addNote(noteText)),
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen);
