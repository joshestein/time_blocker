/** Formats an hour, minute as a 24 hour HH:MM string. Defaults to MM = 00. */
export function timeFormatter(hour: number, minute = 0) {
	const stringHour = hour < 10 ? `0${hour}` : String(hour);
	const minuteString = minute < 10 ? `0${minute}` : String(minute);
	return `${stringHour}:${minuteString}`;
}
