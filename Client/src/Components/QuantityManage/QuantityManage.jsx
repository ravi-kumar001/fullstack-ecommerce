import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "@mui/material";
function QuantityManage(props) {
  const [inputValue, SetInputValue] = useState(1);
  const inputMinus = () => {
    if (inputValue > 1) {
      SetInputValue(inputValue - 1);
    }
  };
  const inputPlus = () => {
    SetInputValue(inputValue + 1);
  };

  return (
    <div className="quantityManage d-flex align-itmes-center">
      <Button onClick={inputMinus}>
        <FaMinus />
      </Button>
      <input type="text" value={inputValue} />
      <Button onClick={inputPlus}>
        <FaPlus />
      </Button>
    </div>
  );
}

export default QuantityManage;
