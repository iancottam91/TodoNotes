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
import { addNote, removeNote, editNote } from '../store/actions/note';
import Items from '../components/Items';
import { capitalizeFirstLetter, compareJSON } from '../utils/fns';

class EditNoteScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    title: capitalizeFirstLetter(navigation.state.params.action) + ' Note',
  });

  constructor(props) {
    super(props);

    // check if we're editing or creating
    const { action, id }= this.props.navigation.state.params;
    this.action = action;
    this.id = id;
    this.initialState = {};

    if (action === 'create') {
      this.initialState = {
        noteTitle: '',
        noteContent: '',
      }
      this.state = this.initialState;
    } else if (action === 'edit') {
      const { notes } = props.note;
      const note = notes.filter(( note ) => {
        return note.id === id;
      });

      this.initialState = {
        noteTitle: note[0].title,
        noteContent: note[0].content,
      }

      this.state = this.initialState;
    }

  }

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
          defaultValue={this.state.noteTitle}
          onChangeText={(text) => this.setState({noteTitle: text})}
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
          defaultValue={this.state.noteContent}
          onChangeText={(text) => this.setState({noteContent: text})}
        />
      </View>
    );
  }

  componentWillUnmount(){

    if (this.action === 'create') {
      if (!compareJSON(this.initialState, this.state)) {
        this.props.addNote(this.state.noteTitle, this.state.noteContent);
      }
    } else if (this.action === 'edit') {
      if (!compareJSON(this.initialState, this.state)) {
        this.props.editNote(this.state.noteTitle, this.state.noteContent, this.id);
      }
    }

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
  note: state.note,
});

const mapDispatchToProps = {
  addNote: (noteText, noteContent) => dispatch => dispatch(addNote(noteText, noteContent)),
  editNote: (noteText, noteContent, id) => dispatch => dispatch(editNote(noteText, noteContent, id)),
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNoteScreen);
