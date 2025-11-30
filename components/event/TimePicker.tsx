/**
 * @file TimePicker.tsx
 * @description TimePicker component, used to select the time of an event: year & month & day & hour & minute & second
 */
import { Picker } from '@react-native-picker/picker';
import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TimePickerProps {
    onTimeSelected: (time:string) => void; // callback function to handle the selected time
};

export default function TimePicker({ onTimeSelected }: TimePickerProps){
    const now = new Date();
    const [year, setYear] = useState(now.getFullYear());
    const [month, setMonth] = useState(now.getMonth() + 1);
    const [day, setDay] = useState(now.getDate());
    const [hour, setHour] = useState(now.getHours());
    const [minute, setMinute] = useState(now.getMinutes());
    const [second, setSecond] = useState(now.getSeconds());

    // picker: recent 10 years
    const yearItmes = useMemo(()=>{
        const items = [];
        for (let y = year - 5; y <= year + 5; y++){
            items.push(
                <Picker.Item key={y} label={y.toString()} value={y} />
            )
        }
        return items;
    }, [])
    // picker: months
    const monthItems = useMemo(()=>{
        const items = [];
        for (let m = 1; m <= 12; m++){
            items.push(
                <Picker.Item key={m} label={m.toString()} value={m} />
            )
        }
        return items;
    }, [])
    // picker: days
    const dayItems = useMemo(()=>{
        const items = [];
        for (let d = 1; d <= 31; d++){
            items.push(
                <Picker.Item key={d} label={d.toString()} value={d} />
            )
        }
        return items;
    }, [])
    // picker: hours
    const hourItems = useMemo(()=>{
        const items = [];
        for (let h = 0; h <= 23; h++){
            items.push(
                <Picker.Item key={h} label={h.toString()} value={h} />
            )
        }
        return items;
    },[])
    // picker: minutes
    const minuteItems = useMemo(()=>{
        const items = [];
        for (let m = 0; m <= 59; m++){
            items.push(
                <Picker.Item key={m} label={m.toString()} value={m} />
            )
        }
        return items;
    },[])
    // picker: seconds
    const secondItems = useMemo(()=>{
        const items = [];
        for (let s = 0; s <= 59; s++){
            items.push(
                <Picker.Item key={s} label={s.toString()} value={s} />
            )
        }
        return items;
    },[])

    // handle submit
    const handleSubmit = () => {
        const submitTimeStr = `${year}-${month}-${day}-${hour}-${minute}-${second}`;
        onTimeSelected(submitTimeStr);
    }

    return (
        <View style={styles.container}>
            <View style={styles.pickerRow}>
                {/* picker left side: year, month, day */}
                <View style={styles.pickerCol}>
                    <Picker
                        selectedValue={year}
                        onValueChange={(val)=>setYear(val)}
                        style={styles.pickerItem}
                    >
                        {yearItmes}
                    </Picker>
                    <Picker
                        selectedValue={month}
                        onValueChange={(val)=>setMonth(val)}
                        style={styles.pickerItem}
                    >
                        {monthItems}
                    </Picker>
                    <Picker
                        selectedValue={day}
                        onValueChange={(val)=>setDay(val)}
                        style={styles.pickerItem}
                    >
                        {dayItems}
                    </Picker>
                </View>
                {/* picker right side: hour, minute, second */}
                <View style={styles.pickerCol}>
                    <Picker
                        selectedValue={hour}
                        onValueChange={(val)=>setHour(val)}
                        style={styles.pickerItem}
                    >
                        {hourItems}
                    </Picker>
                    <Picker
                        selectedValue={minute}
                        onValueChange={(val)=>setMinute(val)}
                        style={styles.pickerItem}
                    >
                        {minuteItems}
                    </Picker>
                    <Picker
                        selectedValue={second}
                        onValueChange={(val)=>setSecond(val)}
                        style={styles.pickerItem}
                    >
                        {secondItems}
                    </Picker>
                </View>
            </View>
            {/* submit button */}
            <TouchableOpacity onPress={handleSubmit}>
                <Text>
                    确认
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    pickerRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    pickerCol: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    pickerItem: {
        width: 120,
        height: 60,
    }
});