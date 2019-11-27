import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './todoSlice';
import { Input, Button } from 'react-native-elements';
import { View } from 'react-native';

const AddScreen = ({ navigation }) => {
  const [title, setTitle] = useState(null);
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <View>
      <Input
        placeholder='Title'
        onChangeText={setTitle}
        value={title}
      />
      <Button
        title="Add"
        onPress={() => {
          dispatch(addItem({
            id: todos.length + 1,
            done: false,
            title
          }));
          navigation.navigate('List');
        }}
      />
    </View>
  );
}

AddScreen.navigationOptions = {
  title: 'Add new item',
};

export default AddScreen;