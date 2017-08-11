import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
} from 'react-native';
import ListItem from './ListItem';

const styles = StyleSheet.create({
  myNotes: {
    flex: 1,
    alignSelf: 'stretch',
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
  }
});

export default class Items extends Component {

  constructor(props) {
    super(props);
    const { todos, notes } = this.props;
    let items = [...todos, ...notes];

    items.sort(function(a,b){
      if(a.lastUpdated > b.lastUpdated){
        return -1;
      } else if(a.lastUpdated < b.lastUpdated){
        return 1;
      }
      return 0;
    })

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(items),
    };
  }

  render() {

    console.log('notes: ' + this.props.notes.length);

    return (
      <View style={styles.myNotes}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ListItem title={rowData.title} date={rowData.lastUpdated}/>}
        />
      </View>
    );
  }
}
