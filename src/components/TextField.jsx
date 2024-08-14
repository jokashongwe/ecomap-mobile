import {Text, TextInput, View} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';
import {LightTheme} from '../configs/theme';

export default function TextField({
  name,
  placeholder,
  rightIcon,
  containerStyle,
  simple,
  value,
  setValue,
  keyboardType,
  SecureTextEntry
}) {
  return (
    <View style={[containerStyle, {marginVertical: 10}]}>
      {name && (
        <Text
          style={{color: LightTheme.textColor, marginLeft: 5, fontSize: 15}}>
          {name}
        </Text>
      )}
      <View
        style={{
          backgroundColor: '#f0f0f0',
          borderRadius: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          height: 50,
        }}>
        {simple ? (
          <Text>{value}</Text>
        ) : (
          <TextInput
            style={{color: LightTheme.textColor, fontSize: 16, width: '90%'}}
            placeholderTextColor={LightTheme.textSecondaryColor}
            placeholder={placeholder}
            keyboardType={keyboardType}
            value={value}
            secureTextEntry={SecureTextEntry}
            onChangeText={text => setValue(text)}
          />
        )}
        {rightIcon && (
          <Ionicon
            size={20}
            color={LightTheme.textSecondaryColor}
            style={{marginRight: 10}}
            name={rightIcon}
          />
        )}
      </View>
    </View>
  );
}
