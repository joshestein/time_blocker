export function hourFormatter(hour: number) {
	const stringHour = hour < 10 ? `0${hour}` : String(hour);
	return hour < 12 ? `${stringHour}:00 AM` : `${stringHour}:00 PM`
}