import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

export function MinhasDoações({ navigation }) {

  const Separator = () => {
    return <View style={styles.separator} />;
  }

  const [selectedDates, setSelectedDates] = useState([]);

  const handleDayPress = (date) => {
    const offset = new Date().getTimezoneOffset() * 60000;
    setSelectedDates([date.timestamp + offset, ...selectedDates]);
  };

  const formatDate = (timestamp) => {
    const offset = new Date().getTimezoneOffset() * 60000;
    const date = new Date(timestamp + offset);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (

    <View style={styles.container}>

      <View style={styles.quad}>
        <Text style={styles.texto}>
          Histórico de Doações
        </Text>
      </View>

      <Separator/>
      <Calendar

        onDayPress={handleDayPress}

        onChange={(range) => console.log(range)}
        minDate={new Date(2018, 3, 20).toISOString().split('T')[0]}
        startDate={new Date(2018, 3, 30).toISOString().split('T')[0]}
        endDate={new Date(2023, 12, 31).toISOString().split('T')[0]}
        theme={{
          backgroundColor: '#f4f4f4',
          calendarBackground: '##f4f4f4',
          textSectionTitleColor: '#B22222',
          selectedDayBackgroundColor: '#B22222',
          selectedDayTextColor: '##f4f4f4',
          todayTextColor: '#B22222',
          dayTextColor: '#000000',
          textDisabledColor: '#d9e1e8',
          dotColor: '#B22222',
          selectedDotColor: '##f4f4f4',
          arrowColor: '#B22222',
          monthTextColor: '#B22222',
          indicatorColor: '#B22222',
          textDayFontWeight: '200',
          textMonthFontWeight: '300',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 15,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 13,
          activeDayColor: {},
          monthTitleTextStyle: {
            color: '#B22222',
            fontWeight: '300',
            fontSize: 16,
          },
          emptyMonthContainerStyle: {},
          emptyMonthTextStyle: {
            fontWeight: '200',
          },
          weekColumnsContainerStyle: {},
          weekColumnStyle: {
            paddingVertical: 10,
          },
          weekColumnTextStyle: {
            color: '#B22222',
            fontSize: 13,
          },
          nonTouchableDayContainerStyle: {},
          nonTouchableDayTextStyle: {},
          startDateContainerStyle: {},
          endDateContainerStyle: {},
          dayContainerStyle: {},
          dayTextStyle: {
            color: '#B22222',
            fontWeight: '200',
            fontSize: 15,
          },
          dayOutOfRangeContainerStyle: {},
          dayOutOfRangeTextStyle: {},
          todayContainerStyle: {},
          todayTextStyle: {
            color: '#B22222',
          },
          activeDayContainerStyle: {
            backgroundColor: '#B22222',
          },
          activeDayTextStyle: {
            color: '#B22222',
          },
          nonTouchableLastMonthDayTextStyle: {},
        }}
      />
      <Separator />
      <ScrollView>
        {selectedDates
          .slice(0)
          .reverse()
          .map((timestamp, index) => (
            <Text key={index} style={styles.data}>{formatDate(timestamp)}</Text>
          ))
          .reverse()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 50,
  },
  texto: {
    color: '#B22222',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 10,
  },
  separator: {
    marginVertical: 0,
    marginTop: 3,
    borderBottomColor: "#B22222",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  data: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#f4f4f4',
    padding: 8,
    backgroundColor: '#B22222',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 5,
    borderRadius: 10,
  }
});