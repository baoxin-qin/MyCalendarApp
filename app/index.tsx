/**
 * @file home.tsx
 * @description show the homepage screen
 * @component Calendar, DailySentence
 */
// coomponents
import CalendarHeader from "@/components/calendar/CalendarHeadr";
import CalendarMenu from "@/components/calendar/CalendarMenu";
import CalendarTable from "@/components/calendar/CalendarTable";
import CreateEvent from "@/components/event/CreateEvent";
import Astrology from "@/components/homepage/Astrology";
import DailyWord from "@/components/homepage/DailyWord";

// hooks
import { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Homepage() {
    const [currentDate, setCurrentDate] = useState(new Date()); // state: current date
    const [showModal, setShowModal] = useState(false); // state: show modal or not

    return (
        <View style={styles.body}>
            {/* Calendar */}
            <CalendarMenu 
                currentMonth={currentDate}
                onMonthChange={setCurrentDate}
            />
            <CalendarHeader />
            <CalendarTable
                currentMonth={currentDate}
				type="home"
			/>

			{/* Homepage expasion */}
			<DailyWord />
			<Astrology />

            {/* handy way to add a new agenda event */}
            <Modal
                animationType='slide'
                transparent={false}
                visible={showModal}
                onRequestClose={()=>{
                    setShowModal(!showModal);
                }}
                >
                    <CreateEvent onVisibleChange={setShowModal}/>
            </Modal>
            <TouchableOpacity style={styles.handyBtn} onPress={()=>setShowModal(true)}>
                <Text style={styles.handyBtnText}>
                    Add
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    body : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
    },
    handyBtn : {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'lightblue',
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    handyBtnText : {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        lineHeight: 50,
    }
});