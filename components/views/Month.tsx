/**
 * @file Month.tsx
 * @description Month view page
 */
import CalendarHeader from "@/components/calendar/CalendarHeadr";
import CalendarMenu from "@/components/calendar/CalendarMenu";
import CalendarTable from "@/components/calendar/CalendarTable";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function MonthView() {
    const [thisMonth, setThisMonth] = useState(new Date());
    
    return (
        <ScrollView style={styles.container}>
            <CalendarMenu currentMonth={thisMonth} onMonthChange={setThisMonth} />
            <CalendarHeader />
            <CalendarTable currentMonth={thisMonth} type="view" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        paddingVertical: 10,
    },
});