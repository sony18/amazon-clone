import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./DeliveryOption.css";

const DeliveryOption = () => {
   const [selectedValue, setSelectedValue] = useState("standard");

   const handleChange = (event) => {
      setSelectedValue(event.target.value);
   };
   return (
      <div className="deliveryoption">
         <FormControl component="fieldset">
            <FormLabel component="legend">Choose Delivery Option</FormLabel>
            <RadioGroup
               aria-label="gender"
               name="gender1"
               value={selectedValue}
               onChange={handleChange}
            >
               <FormControlLabel
                  value="standard"
                  control={<Radio />}
                  label="Standard"
               />
               <FormControlLabel
                  value="premium"
                  control={<Radio />}
                  label="Premium"
               />
               <FormControlLabel
                  value="free"
                  control={<Radio />}
                  label="Free"
               />
            </RadioGroup>
         </FormControl>
      </div>
   );
};

export default DeliveryOption;
