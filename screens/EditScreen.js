import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { saveItem } from './todoSlice';

const EditScreen = ({ navigation }) => {
  const item = navigation.getParam('item', null);
  if (item === null) {
    navigation.navigate('List');
    return;
  }

  const [title, setTitle] = useState(item.title);
  const dispatch = useDispatch();

  return (
    <View>
      <Input
        placeholder='Title'
        onChangeText={setTitle}
        value={title}
      />
      <Button
        title="Update"
        onPress={() => {
          const newItem = {
            ...item,
            title
          };
          dispatch(saveItem(newItem));
          navigation.navigate('List');
        }}
      />
    </View>
  );
}

EditScreen.navigationOptions = {
  title: 'Edit item',
};

export default EditScreen;