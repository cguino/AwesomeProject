import React from 'react';
import {
  Text,
  FlatList,
  View,
  Image,
  ActionSheetIOS,
  Button,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {loadUsers} from './UserAction';

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  loadUsersDispatch: loadUsers,
};

const listConnector = connect(mapStateToProps, mapDispatchToProps);

const _renderItem = ({item}) => {
  return (
    <View style={{flexDirection: 'row', padding: 10}}>
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 5,
        }}
        source={{uri: item.avatar}}
      />
      <View style={{marginLeft: 10}}>
        <Text>{item.first_name}</Text>
        <Text>{item.last_name}</Text>
        <Text>{item.email}</Text>
      </View>
    </View>
  );
};

const _keyExtractor = (item) => {
  return `${item.id}`;
};

class List extends React.Component {
  componentDidMount() {
    this.props.loadUsersDispatch();
  }

  render() {
    const onPress = () =>
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Generate number', 'Reset'],
          destructiveButtonIndex: 2,
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {
          if (buttonIndex === 0) {
            // cancel action
          } else if (buttonIndex === 1) {
            //setResult(Math.floor(Math.random() * 100) + 1);
          } else if (buttonIndex === 2) {
            //setResult('🔮');
          }
        },
      );

    return (
      <>
        <FlatList
          style={{}}
          data={this.props.users}
          renderItem={_renderItem}
          keyExtractor={_keyExtractor}
        />
        <ActivityIndicator size="large" />
        <Button onPress={onPress} title={'Alert'} />
      </>
    );
  }
}
/*
const List = ({users, loadUsersDispatch}) => {

  useEffect(() => {
    loadUsersDispatch();
  });

  return (
    <FlatList
      style={{}}
      data={users}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
    />
  );
};
*/
export default listConnector(List);
