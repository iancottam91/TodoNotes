import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Checkbox from './Checkbox';

class ListViewItem extends Component {
  constructor(props) {
    super(props);
    this._onCheckBoxPressed = this._onCheckBoxPressed.bind(this);
    this.state = {
      data: this.props.data
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      data: props.data
    })
  }

  _onCheckBoxPressed() {
    this.props.onCompletedChange();
  }

  render() {
    let data = this.state.data;
    let color = data.completed ? '#C5C8C9' : '#000';
    let textDecorationLine = data.completed ? 'line-through' : 'none';
    return (
      <View style={{paddingTop: 6, paddingBottom: 6, backgroundColor: "#F8F8F8", borderBottomWidth:1, borderColor: '#eee', flexDirection: 'row', alignItems: 'center'}}>
        <Checkbox data={data} color={color} onCheckBoxPressed={this._onCheckBoxPressed}></Checkbox>
        <Text style={{fontSize:18, color: color, textDecorationLine: textDecorationLine}}>{data.title}</Text>
      </View>
    )
  }
}

module.exports = ListViewItem;