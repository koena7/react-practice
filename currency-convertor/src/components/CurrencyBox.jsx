import React, { useId } from "react";

function CurrencyBox({
    label,// from or To?
    className = "",//taking css as input in case user wants custom styling
    amount=0,
    onAmountChange,
    selectedCurrency='usd',
    onSelectedCurrencyChange,
    currencyOptions = [],
    amountDisabled = false
}) {
    const amountId = useId();
    
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2 text-left">
                <label  
                    className="text-black/40 mb-2 inline-block"
                    htmlFor = '{amountId}'>
                    {label}
                </label>
                <input
                    id={amountId}
                    className="pr-50 outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange = {(e) => onAmountChange && onAmountChange(e.target.value)}
                    disabled={amountDisabled}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value = {selectedCurrency}
                    onChange = {(e) => onSelectedCurrencyChange && onSelectedCurrencyChange(e.target.value)}
                >
                    
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                 ))}      
                
                </select>
            </div>
        </div>
    )
}

export default CurrencyBox;