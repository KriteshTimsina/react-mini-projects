import React, { useState } from "react";

export default function TipCalculator() {
  const [includeTip, setIncludeTip] = useState(false);

  const handleIncludeTipChange = () => {
    setIncludeTip((prevValue) => !prevValue);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={includeTip}
          onChange={handleIncludeTipChange}
        />
        
      </label>
      <p>
        {includeTip ? "Tip will be included." : "Tip will not be included."}
      </p>
    </div>
  );
}
