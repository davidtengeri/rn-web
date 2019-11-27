import React, { useMemo } from 'react';
import { saveItem, filterChanged } from './todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { View, FlatList } from 'react-native';
import { ListItem, CheckBox, ButtonGroup, Button } from 'react-native-elements';

const OPTIONS = [
  'All items', 'Active', 'Done'
];

const ListScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { filter, todos } = useSelector((state) => state);

  function toggleItem(item) {
    dispatch(saveItem({
      ...item,
      done: !item.done
    }));
  }

  const visibleTodos = useMemo(() => todos.filter((item) => {
    if (filter === OPTIONS[0] || (filter === OPTIONS[1] && !item.done) || (filter === OPTIONS[2] && item.done)) {
      return true;
    }
    return false;
  }), [todos, filter]);

  return (
    <View>
      <ButtonGroup
        onPress={(index) => dispatch(filterChanged(OPTIONS[index]))}
        selectedIndex={OPTIONS.findIndex((value) => value === filter)}
        buttons={OPTIONS}
        containerStyle={{ height: 100 }}
      />
      <FlatList
        data={visibleTodos}
        keyExtractor={(todo) => `${todo.id}`}
        renderItem={(row) => (
          <ListItem
            title={row.item.title}
            onPress={() => toggleItem(row.item)}
            leftElement={(
              <CheckBox
                checked={row.item.done}
                onPress={() => toggleItem(row.item)}
              />
            )}
            rightElement={(
              <Button
                title="Edit"
                onPress={() => navigation.navigate('Edit', { item: row.item })}
              />
            )}
          />
        )}
      />
      <Button
        title="Add new item"
        onPress={() => navigation.navigate('Add')}
      />
    </View>
  );
};

export default ListScreen;

