/**
 * @file CalendarTable.tsx
 * @description This is the component showing the calendar table
 */
import { isHoliday } from "@/instance/holiday";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CalendarTableProps {
    currentMonth: Date;
    type: 'home' | 'view';
};
interface TableCellProps {
    date: string | number | null;
    month: string | number | null;
    type: 'home' | 'view',
};

export const TableCell = ({date, month, type}: TableCellProps) => {
    const today = new Date();
    const cellDate = date && month ? new Date(today.getFullYear(), Number(month), Number(date)) : null;

    const holiday = cellDate ? isHoliday(cellDate.getMonth()+1, cellDate.getDate()) : null;
    const holidayName = holiday === null ? '' : holiday.name;

    return (
        <TouchableOpacity style={{width: '14%', height: '100%', borderWidth: type === 'home' ? 0 : 1}}>
            <Text style={[styles.tableCell, {color: (date === today.getDate() && month === today.getMonth()) ? 'blue' : 'black'}]}>
                {typeof date === null ? '' : date}
            </Text>
            <Text style={{textAlign: 'center', fontSize: 12, color: 'gray'}}>
                { type === 'view' ? holidayName : ''}
            </Text>
        </TouchableOpacity>
    );
};

export default function CalendarTable({currentMonth, type}: CalendarTableProps) {
    // How many days in this month; The first day weekday;
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

    const table = [];
    let currentDay = 1;
    for (let r = 0; r < 6; r++){
        if (currentDay > daysInMonth){
            break;
        }
        const row = [];
        for (let c = 0; c < 7; c++){
            if (r === 0 && c < firstDayOfMonth){
                row.push(null);
            } else if (currentDay <= daysInMonth){
                row.push(currentDay);
                currentDay ++;
            }
        }
        table.push(row);
    }
    const len = table.length;
    let backBlank = 7 - table[len-1].length;
    for (; backBlank > 0; backBlank--){
        table[len-1].push(null);
    }

    return (
        <View style={styles.container}>
            {table.map((row, outIdx) => {
                return (
                    <View key={outIdx} style={styles.tableRow}>
                        {row.map((col, inIdx) => {
                            return (
                                <TableCell key={inIdx} date={col} month={currentMonth.getMonth()} type={type} />
                            );
                        })}
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        width: '100%',
    },
    tableRow : {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 5,
    },
    tableCell : {
        fontSize: 16,
        textAlign: 'center',
    },
});