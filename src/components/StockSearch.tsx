import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface StockSearchProps {
  onSearch: (stockId: string) => void;
}

const StockSearch: React.FC<StockSearchProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (inputValue.trim()) {
      // Clear previous errors and trigger search
      setError("");
      onSearch(inputValue.trim());
      setInputValue("");
    } else {
      // Show error if the input is empty
      setError("Please enter a valid stock symbol.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div className="flex items-center gap-4 w-full max-w-md">
        <Input
          className="flex-grow"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter stock symbol"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default StockSearch;
