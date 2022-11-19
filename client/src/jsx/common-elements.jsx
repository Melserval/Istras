import React from "react";
/**
 * Селетк выбора приоритетета задачи.
 * 
 * @param {*} props 
 * @returns 
 */
export function ElementSelectPriority(props) {
	return (
		<select name="prior" disabled={props.disabled} defaultValue="1">
			<option value="1">обычный</option>
			<option value="2">средний</option>
			<option value="3">высокий</option>
			<option value="4">низкий</option>
		</select>
	)
}
