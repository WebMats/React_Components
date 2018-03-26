import React from 'react';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import enUS from 'rc-calendar/lib/locale/en_US';


const calendarInput = (props) => {

	const calendar = (
						<Calendar
							locale={enUS}
							style={{zIndex: 1000}}
							dateInputPlaceholder="Please Input"
							formatter={props.format}
							defaultValue={props.defaultValue}
							disabledDate={props.disabledDate} 
						/>
					);

		return (
			<div>
				<DatePicker
					animation="slide-up"
					calendar = {calendar}
					value={props.value}
					onChange={props.change}
				>
					{({value}) => {
						return (
								<span tabIndex="0">
									<input 
										placeholder= "Please pick a Date"
										readOnly
										tabIndex="-1"
										className="rc-calendar-picker rc-calendar-picker-placement-bottomLeft"
										value= {value && value.format(props.format)}
									/>
								</span>
								);
					}}
					</DatePicker>
			</div>
			);
}

export default calendarInput;