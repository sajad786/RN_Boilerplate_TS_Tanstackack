import {View, Text, StatusBar, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../../redux/reducers/counter';

type Props = {};
type Count = {
  count: number;
};
const Home = (props: Props) => {
  let dispatch = useDispatch();

  const count = useSelector((state: Count) => state?.count);
  console.log(count, 'state>>');
  const onUpdateCount = (type: string) => {
    if (type == 'plus') {
      let counter = count + 1;
      dispatch(increment(counter));
    } else {
      if (count == 0) {
        return;
      }
      let counter = count - 1;
      dispatch(decrement(counter));
    }
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button title="minus" onPress={() => onUpdateCount('minus')} />
        <Text style={{marginHorizontal: 20, fontSize: 24}}>{count}</Text>
        <Button title="plus" onPress={() => onUpdateCount('plus')} />
      </View>
    </View>
  );
};

export default Home;
