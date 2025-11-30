/**
 * @file CreateEvent.tsx
 * @description CreateEvent component
 */
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import TimePicker from "./TimePicker";

interface CreateEventProps {
    // callback: to handle the visibility of the modal
    onVisibleChange: (visible: boolean) => void;
}

export default function CreateEvent({onVisibleChange}: CreateEventProps) {
    const [timeStart, setTimeStart] = useState('');
    const [timeEnd, setTimeEnd] = useState('');

    // handle cancel and save event
    const isValidTime = () => {
        // end time should be greater than start time if to be valid
        const startParts = timeStart.split('-');
        const endParts = timeEnd.split('-');
        if (startParts.length !== 6 || endParts.length !== 6) {
            return false;
        }
        const isAllNumbers = (parts: string[]) => {
            return parts.every(part => !isNaN(parseInt(part)));
        }
        if (!isAllNumbers(startParts) || !isAllNumbers(endParts)) {
            return false;
        }

        // convert to timestamp
        const startTimestamp = new Date(
            Number(startParts[0]),
            Number(startParts[1]) - 1, // month starts from 0 as for Date object
            Number(startParts[2]),
            Number(startParts[3]),
            Number(startParts[4]),
            Number(startParts[5])
        
        );
        const endTimestamp = new Date(
            Number(endParts[0]),
            Number(endParts[1]) - 1,
            Number(endParts[2]),
            Number(endParts[3]),
            Number(endParts[4]),
            Number(endParts[5])
        );
        return !isNaN(startTimestamp.getTime()) && !isNaN(endTimestamp.getTime()) && endTimestamp > startTimestamp;
    }
    const handleCancel = ()=> {
        Alert.alert('提示', '已取消创建事件');
        onVisibleChange(false);
    }
    const handleSave = ()=> {
        if (isValidTime()) {
            Alert.alert('提示', '已保存事件');
            onVisibleChange(false);
        } else {
            Alert.alert('提示', '请选择有效的开始和结束时间');
        }
    }

    return (
        <ScrollView style={styles.container}>
            {/* Modal menu */}
            <View style={styles.modalMenu}>
                <TouchableOpacity onPress={handleCancel}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
                <Text>New Event</Text>
                <TouchableOpacity onPress={handleSave}>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>

            {/* Event form */}
            <View style={styles.eventForm}>
                <TextInput placeholder="Title (within 5 words)" />
                <Text>Start Time</Text>
                <TimePicker onTimeSelected={setTimeStart} />
                <Text>End Time</Text>
                <TimePicker onTimeSelected={setTimeEnd} />
                <TextInput placeholder="Location" />
                <TextInput placeholder="Comments" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    modalMenu: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    eventForm: {
        width: '100%',
        flexDirection: 'column',
        paddingVertical: 10,
    }
});