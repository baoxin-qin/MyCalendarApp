/**
 * @file Day.tsx
 * @description the Day View component
 */

import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface DayViewDateProps {
    date: Date;
    onDayChange: (date: Date) => void;
};
interface DayViewHourProps {
    hour: number;
};
const DayViewMenu = ({date, onDayChange}: DayViewDateProps) => {
    const [today, setToday] = useState(date);
    useEffect(()=>{
        setToday(date);
    }, [date])
    const prevDay = () => {
        const prev = new Date(today);
        prev.setDate(prev.getDate() - 1);
        onDayChange(prev);
    }
    const nextDay = () => {
        const next = new Date(today);
        next.setDate(next.getDate() + 1);
        onDayChange(next);
    }
    return (
        <View style={styles.menuBar}>
            <TouchableOpacity onPress={prevDay}>
                <Text>
                    {"<<"}
                </Text>
            </TouchableOpacity>
            <Text>
                {today.getMonth() + 1}-{today.getDate()}
            </Text>
            <TouchableOpacity onPress={nextDay}>
                <Text>
                    {">>"}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const DayViewEntry = ({hour}: DayViewHourProps) => {
    const [thisHour, setThisHour] = useState(hour);
    useEffect(()=>{
        setThisHour(hour);
    }, [hour])

    const entry = []
    for (let i = 0; i <= 23; i++ ){
        entry.push([i, "00"])
    }
    return (
        <View>
            {entry.map((item, index)=>{
                return (
                    <View key={index} style={{width: '100%', flexDirection: 'row', paddingVertical: 5}}>
                        <Text style={{width: '15%', paddingHorizontal: 5, color: item[0] === hour ? 'blue' : 'black'}}>
                            {item[0]}:{item[1]}
                        </Text>
                        <TouchableOpacity style={{width: '75%', paddingHorizontal: 5}}>
                            <Text>此刻无事件 ...</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
    )
}

export default function DayView() {
    const [today, setToday] = useState(new Date());
    const [hour, setHour] = useState(today.getHours());

    return (
        <ScrollView style={styles.container}>
            <DayViewMenu date={today} onDayChange={setToday} />
            <DayViewEntry hour={hour} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
    },
    menuBar : {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
});