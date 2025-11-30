/**
 * @file CalendarMenu.tsx
 * @description This is the component showing the calendar menu bar
 */
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CalendarMenuProps {
    currentMonth: Date;
    onMonthChange: (month: Date) => void;
}

export default function CalendarMenu({currentMonth, onMonthChange}: CalendarMenuProps) {
    const [thisMonth, setThisMonth] = useState(new Date(currentMonth));

    // sync: update the current month when the props change
    useEffect(() => {
        setThisMonth(new Date(currentMonth));
    }, [currentMonth]);

    // handle month change
    const handlePrevMonth = () => {
        const prevMonth = new Date(thisMonth);
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        setThisMonth(prevMonth);
        onMonthChange(prevMonth);
    };
    const handleNextMonth = () => {
        const nextMonth = new Date(thisMonth);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        setThisMonth(nextMonth);
        onMonthChange(nextMonth);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePrevMonth}>
                <Text style={{fontSize: 20, color: 'lightblue'}}>
                    {"<< Prev"}
                </Text>
            </TouchableOpacity>
            <Text style={styles.menuText}>
                {thisMonth.getFullYear()} - {thisMonth.getMonth() + 1}
            </Text>
            <TouchableOpacity onPress={handleNextMonth}>
                <Text style={{fontSize: 20, color: 'lightblue'}}>
                    {"Next >>"}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    },
    menuText : {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    }
});