import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { View, Button, Platform, StyleSheet, TextInput } from "react-native";

const App = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, onChangeText] = useState("Enter your name");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View>
      <View style={styles.Button}>
        <Button title="Show datePicker" onPress={showDatepicker} />
      </View>
      <View style={styles.Button}>
        <Button title="Show timePicker" onPress={showTimepicker} />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      {/* <separator /> */}
      <View>
        <TextInput
          value={text}
          style={styles.Text}
          onChangeText={text => onChangeText(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Button: {
    marginTop: 30
  },
  Text: {
    borderColor: "gray",
    borderWidth: 1,
    height: 40,
    marginTop: 50,
    fontSize: 30
  }
});

export default App;
