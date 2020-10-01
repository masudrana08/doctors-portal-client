import React, { useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker,MuiPickersUtilsProvider  } from "@material-ui/pickers";

const Calender = () => {
  const [date, changeDate] = useState(new Date());

  // prettier-ignore
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      

      <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={changeDate}
        
      />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default Calender;
