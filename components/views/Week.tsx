/**
 * @file Week.tsx
 * @description Week View Component
 */
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function WeekView() {
    const [thisWeek, setThisWeek] = useState(new Date());

    return (
        <ScrollView style={styles.container}>
            {Weekdays.map((day, index)=>{
                return (
                    <View key={index} style={{width: '100%', height: 45, flexDirection: 'row'}}>
                        <Text style={{width: '15%', paddingHorizontal: 5, color: index === thisWeek.getDay() ? 'blue' : 'black'}}>
                            {day}
                        </Text>
                        <TouchableOpacity style={{width: '75%', paddingHorizontal: 5}}>
                            <Text>当前没有事件 ...</Text>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
    }
});