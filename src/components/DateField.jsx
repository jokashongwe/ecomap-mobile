import {Text, TextInput, TouchableOpacity, View, Modal} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';
import {LightTheme} from '../configs/theme';

import DatePicker from 'react-native-date-picker';
import CalendarPicker from 'react-native-calendar-picker';
import {useState} from 'react';

export const parseResult = (myDate, mode = 'date') => {
  let usedDate = myDate;
  if (!(usedDate instanceof Date)) {
    usedDate = new Date(myDate);
  }
  //console.log('parseResult: ', mode, myDate);
  if (mode && mode === 'time') {
    const parts = usedDate.toLocaleTimeString().split(':');
    return parts[0] + 'h' + parts[1];
  }
  return usedDate.toLocaleDateString();
};

export default function DateField({
  name,
  placeholder,
  rightIcon,
  mode,
  containerStyle,
  value,
  setValue,
}) {
  //const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View style={containerStyle}>
      <Text style={{color: LightTheme.textSecondaryColor, marginLeft: 5}}>
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
          height: 40,
        }}>
        <Text style={{color: LightTheme.textColor}}>
          {value ? parseResult(value, mode) : name}
        </Text>
        {mode == 'time' ? (
          <DatePicker
            modal
            locale="fr"
            open={open}
            minimumDate={new Date()}
            date={new Date(value)}
            mode={mode}
            style={{color: LightTheme.textColor, fontSize: 13}}
            onConfirm={date => {
              setOpen(false);
              setValue(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        ) : (
          <Modal visible={open}>
            <CalendarPicker
              weekdays={['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']}
              previousTitle={'Précédent'}
              nextTitle={'Suivant'}
              months={['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sept', 'Oct', 'Nov', 'Dec']}
              minDate={new Date()}
              date={value}
              selectedDayColor={LightTheme.primary}
              style={{color: LightTheme.textColor, fontSize: 13}}
              onDateChange={date => {
                setValue(date);
                setOpen(false)
              }}
            />
          </Modal>
        )}
        {rightIcon && (
          <TouchableOpacity
            onPress={() => {
              setOpen(true);
            }}>
            <Ionicon
              size={20}
              color={LightTheme.textSecondaryColor}
              style={{marginRight: 10}}
              name={rightIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
