/**
 * @file CalendarHeader.tsx
 * @description This is the component showing the weekdays header of the calendar
 */
import { StyleSheet, Text, View } from "react-native";

const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarHeader() {
    return (
        <View style={styles.container}>
            {week.map((day, index) => {
                return (
                    <Text key={index} style={styles.item}>
                        {day}
                    </Text>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    item: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    }
});