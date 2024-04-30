import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './DatePickerForm.css'
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';


const DatePickerForm = ({ date, onChange, time, onChangeTime }) => {

  return (
    <form>
      <DatePicker selected={date} onChange={(date) => onChange(date)} />
      <TimePicker disableClock={true} onChange={onChangeTime} value={time} />
    </form>
  )
}
export default DatePickerForm


























// const DatePickerForm = ({ date, onChange, time, onChangeTime }) => {

//   return (
//     <form>
//       <DatePicker selected={date} onChange={(date) => onChange(date)} />
//       <TimePicker disableClock={true} onChange={onChangeTime} value={time} />
//     </form>
//   )
// }

