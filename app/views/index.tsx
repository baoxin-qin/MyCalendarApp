/**
 * @file index.tsx
 * @description the root page of the views
 */
import DayView from "@/components/views/Day";
import MonthView from "@/components/views/Month";
import WeekView from "@/components/views/Week";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ViewIndexProps {
	viewChoice: string;
	onViewChoiceChange: (viewChoice: string) => void;
};

const ViewMenu = ({ viewChoice, onViewChoiceChange }: ViewIndexProps) => {
	const [choice, setChoice] = useState(viewChoice);

	useEffect(() => {
		setChoice(viewChoice);
	}, [viewChoice]);

	const chooseMonthView = () => {
		onViewChoiceChange("month");
	};
	const chooseWeekView = () => {
		onViewChoiceChange("week");
	};
	const chooseDayView = () => {
		onViewChoiceChange("day");
	};

	return (
		<View style={styles.menuBar}>
			<TouchableOpacity onPress={chooseMonthView}>
				<Text>月视图</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={chooseWeekView}>
				<Text>周视图</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={chooseDayView}>
				<Text>日视图</Text>
			</TouchableOpacity>
		</View>
	);
};

export default function ViewIndex() {
	const [viewChoice, setViewChoice] = useState("month");
	const [thisDate, setThisDate] = useState(new Date());

	return (
		<View style={styles.body}>
			<ViewMenu viewChoice={viewChoice} onViewChoiceChange={setViewChoice} />
			{viewChoice === "month" 
				&& <MonthView /> }
			{viewChoice === "week" 
				&& <WeekView />}
			{viewChoice === "day" 
				&& <DayView />}
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		width: '100%',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	menuBar: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		padding: 10
	}
});