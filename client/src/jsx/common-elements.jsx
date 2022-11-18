/**
 * Селетк выбора приоритетета задачи.
 * 
 * @param {*} props 
 * @returns 
 */
function ElementSelectPriority(props) {
	return (
		<select name="prior" disabled={props.disabled}>
			<option value="1" selected={true}>обычный</option>
			<option value="2">средний</option>
			<option value="3">высокий</option>
			<option value="4">низкий</option>
		</select>
	)
}
