import {Text, TextInput, View} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';
import {LightTheme} from '../configs/theme';

export default function TextAreaField({
  name,
  placeholder,
  rightIcon,
  containerStyle,
  simple,
  value,
  setValue,
}) {
  return (
    <View style={[containerStyle, {marginVertical: 10, width: '100%'}]}>
      <Text style={{color: LightTheme.textColor, marginLeft: 5}}>
        {name}
      </Text>
      <View
        style={{
          backgroundColor: '#f0f0f0',
          borderRadius: 30,
          flexDirection: 'row',
          marginVertical: 7,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          minHeight: 50
        }}>
        {simple ? (
          <Text>{value}</Text>
        ) : (
          <TextInput
            style={{color: LightTheme.textColor, fontSize: 16}}
            placeholderTextColor={LightTheme.textColor}
            placeholder={placeholder}
            multiline={true}
            numberOfLines={4}
            value={value}
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
