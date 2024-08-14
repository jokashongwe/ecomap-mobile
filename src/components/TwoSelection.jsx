import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {LightTheme} from '../configs/theme';

export default function TwoSelection({
  options,
  onSelect,
  defaultOption,
  title,
}) {
  const defaultValue = defaultOption ? defaultOption : options[0];
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const borderStyle = index => {
    if (index == 0) {
      return {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderWidth: 1,
        borderColor: "#ccc"
      };
    }
    return {
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      borderWidth: 1,
      borderColor: "#ccc"
    };
  };
  return (
    <View style={{marginBottom: 20}} >
      {title && (
        <Text
          style={{
            marginBottom: 10,
            color: LightTheme.textColor,
            fontFamily: 'Roboto-Regular',
          }}>
          {title}
        </Text>
      )}
      <View
        style={{
          width: '100%',
          height: 40,
          flexDirection: 'row',
        }}>
        {options &&
          options.map((option, index) => (
            <TouchableOpacity
              key={'ID-' + index}
              onPress={() => {
                setSelectedOption(option);
                if (onSelect) {
                  onSelect(option);
                }
              }}
              style={[
                {
                  flex: 1,
                  backgroundColor:
                    option == selectedOption
                      ? LightTheme.primary
                      : LightTheme.bg,
                  
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                borderStyle(index),
              ]}>
              <Text
                style={{
                  color:
                    option == selectedOption
                      ? LightTheme.bg
                      : LightTheme.textColor,
                  fontFamily: 'Roboto-Regular',
                  fontSize: 14,
                }}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
}
