import {Text, View} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';

export default function MainHeader({name, icon}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ededed',
      }}>
      {/* <Ionicon size={24} color={'#333'} name={'funnel-outline'} /> */}
      <View style={{width: 20}} />
      <Text
        style={{
          fontSize: 19,
          color: '#333',
          fontFamily: 'Roboto-Bold',
        }}>
        {name}
      </Text>
      <Ionicon size={28} color={'#333'} name={icon} />
    </View>
  );
}
