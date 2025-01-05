import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DateSelector = () =>{
    return(
        <DatePicker 
            dateFormat='dd/MM/yyyy'
            placeholderText="Add date"
            closeOnScroll ={true}
        />
    )
}