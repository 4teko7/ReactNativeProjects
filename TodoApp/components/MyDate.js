import React, {useState} from 'react';
import {View,Text, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const MyDate = (props) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    props.todoDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"space-around"}}>
      <View style={{width:"40%"}} >
        <Button onPress={showDatepicker} title="Select Date" />
      </View>
      <View style={{width:"40%"}}>
        <Button onPress={showTimepicker} title="Select Time" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};


export default MyDate;