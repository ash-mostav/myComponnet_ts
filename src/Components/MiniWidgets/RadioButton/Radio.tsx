import React, { useState } from "react";
import { H2radio, RadioContainer } from "./Radio.Styles";

const RadioButton: React.FC = () => {
  // The selected drink
  const [selectedDrink, setSelectedDrink] = useState<String>();

  // This function will be triggered when a radio button is selected
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDrink(event.target.value);
  };

  return (
    <RadioContainer>
      <H2radio>test subject</H2radio>
      <fieldset>
        <legend>Please select your most favorite drink?</legend>
        <p>
          <input
            type="radio"
            name="drink"
            value="Coffee"
            id="coffee"
            onChange={radioHandler}
          />
          <label htmlFor="coffee">Coffee</label>
        </p>

        <p>
          <input
            type="radio"
            name="drink"
            value="Tea"
            id="tea"
            onChange={radioHandler}
          />
          <label htmlFor="tea">Green Tea</label>
        </p>

        <p>
          <input
            type="radio"
            name="drink"
            value="CokaCola"
            id="Coka Cola"
            onChange={radioHandler}
          />
          <label htmlFor="Coka Cola">Coka Cola</label>
        </p>
      </fieldset>

      {/* Display the selected drink */}
      {selectedDrink && <h2>{selectedDrink}</h2>}
    </RadioContainer>
  );
};

export default RadioButton;