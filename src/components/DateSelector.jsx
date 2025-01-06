
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDateContext } from "../context/DateContext";

export const DateSelector = ({checkInType}) =>{

    const {dateDispatch, checkIn, checkOut} = useDateContext()

    function handleDateChange(date){
        dateDispatch({
            type : checkInType === "in"? "CHECK_IN" : "CHECK_OUT",
            payload : date
        })
    }

    function handleFocusDate(){
        dateDispatch({
            type : "DATE_FOCUS"
        })
    }

    return(
        <DatePicker 
            selected={checkInType === "in"? checkIn : checkOut}
            onChange={date => handleDateChange(date)}
            dateFormat='dd/MM/yyyy'
            placeholderText="Add date"
            closeOnScroll ={true}
            onFocus={handleFocusDate}
            className="border-hidden focus:outline-none "
        />
    )
}