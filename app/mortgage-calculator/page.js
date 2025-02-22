"use client";

import React, { useState, useEffect } from "react";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(303200);
  const [downPayment, setDownPayment] = useState(21224);
  const [downPaymentPercent, setDownPaymentPercent] = useState(7);
  const [zipCode, setZipCode] = useState("562130");
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(15);
  const [monthlyPayment, setMonthlyPayment] = useState(3085);
  const [showTermDropdown, setShowTermDropdown] = useState(false);
  const [breakdownDetails, setBreakdownDetails] = useState({
    principalAndInterest: 2456,
    propertyTaxes: 268,
    homeownersInsurance: 129,
    hoaFees: 132,
    utilities: 100,
  });
  const [activeInfoBox, setActiveInfoBox] = useState(null);
  const [hoverItem, setHoverItem] = useState(null);

  useEffect(() => {
    calculateMonthlyPayment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [homePrice, downPayment, interestRate, loanTerm]);

  const calculateMonthlyPayment = () => {
    const loanAmount = homePrice - downPayment;
    const monthlyInterest = interestRate / 100 / 12;
    const totalPayments = loanTerm * 12;

    const principalAndInterest =
      loanAmount *
      ((monthlyInterest * Math.pow(1 + monthlyInterest, totalPayments)) /
        (Math.pow(1 + monthlyInterest, totalPayments) - 1));

    const propertyTaxes = (homePrice * 0.0106) / 12;
    const homeownersInsurance = (loanAmount * 0.0055) / 12;
    const hoaFees = 132;
    const utilities = 100;

    setBreakdownDetails({
      principalAndInterest: Math.round(principalAndInterest),
      propertyTaxes: Math.round(propertyTaxes),
      homeownersInsurance: Math.round(homeownersInsurance),
      hoaFees,
      utilities,
    });

    const total =
      principalAndInterest +
      propertyTaxes +
      homeownersInsurance +
      hoaFees +
      utilities;
    setMonthlyPayment(Math.round(total));
  };

  const handleHomePriceChange = (e) => {
    const price = parseInt(e.target.value.replace(/,/g, "").replace(/\$/g, "")) || 0;
    setHomePrice(price);
    setDownPayment(Math.round((price * downPaymentPercent) / 100));
  };

  const handleDownPaymentChange = (e) => {
    const payment = parseInt(e.target.value.replace(/,/g, "").replace(/\$/g, "")) || 0;
    setDownPayment(payment);
    setDownPaymentPercent(Math.round((payment / homePrice) * 100));
  };

  const handleSliderChange = (e) => {
    const percent = parseInt(e.target.value);
    setDownPaymentPercent(percent);
    setDownPayment(Math.round((homePrice * percent) / 100));
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US").format(value);
  };

  const handleInfoClick = (infoType) => {
    setActiveInfoBox(activeInfoBox === infoType ? null : infoType);
  };

  const getComponentWidths = () => {
    const total =
      breakdownDetails.principalAndInterest +
      breakdownDetails.propertyTaxes +
      breakdownDetails.homeownersInsurance +
      breakdownDetails.hoaFees +
      breakdownDetails.utilities;

    return {
      principalAndInterest: `${(breakdownDetails.principalAndInterest / total) * 100}%`,
      propertyTaxes: `${(breakdownDetails.propertyTaxes / total) * 100}%`,
      homeownersInsurance: `${(breakdownDetails.homeownersInsurance / total) * 100}%`,
      hoaFees: `${(breakdownDetails.hoaFees / total) * 100}%`,
      utilities: `${(breakdownDetails.utilities / total) * 100}%`,
    };
  };

  const widths = getComponentWidths();

  const InfoBox = ({ type, title, description }) => (
    <div
      className={`absolute left-0 top-10 w-full max-w-md bg-white p-4 rounded shadow-md z-10 ${
        activeInfoBox === type ? "block" : "hidden"
      }`}
    >
      <h3 className="text-base font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-semibold text-gray-800 mb-3">
        Mortgage calculator
      </h1>
      <p className="text-gray-600 mb-8">
        Our mortgage calculator includes key factors like homeowners association
        fees, property taxes, and private mortgage insurance (PMI). Get the whole
        picture and calculate your total monthly payment.
      </p>

      <div className="flex flex-wrap gap-8 mb-6">
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-sm font-medium text-gray-700 mb-2">Home price</h2>
          <input
            type="text"
            value={`$${formatCurrency(homePrice)}`}
            onChange={handleHomePriceChange}
            className="w-full p-2 text-xl border border-gray-300 rounded focus:outline-none"
          />
        </div>

        <div className="flex-1 min-w-[250px]">
          <h2 className="text-sm font-medium text-gray-700 mb-2">
            Monthly payment
          </h2>
          <div className="text-2xl font-semibold text-gray-800">
            ${formatCurrency(monthlyPayment)}/mo
          </div>
        </div>
      </div>

      <div className="relative mb-8">
        <input
          type="range"
          min="5"
          max="50"
          value={downPaymentPercent}
          onChange={handleSliderChange}
          className="w-full h-2 bg-gray-200 rounded appearance-none cursor-pointer range-sm"
        />

        <div
          className="absolute top-0 -mt-1 w-4 h-4 bg-gray-700 rounded-full pointer-events-none"
          style={{
            left: `${((downPaymentPercent - 5) / 45) * 100}%`,
            transform: "translateX(-50%)",
          }}
        />
      </div>

      <div className="flex flex-wrap gap-6 mb-10">
        <div className="flex-1 min-w-[180px]">
          <label className="block text-sm text-gray-600 mb-1">ZIP code</label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
          />
        </div>

        <div className="flex-1 min-w-[180px]">
          <label className="block text-sm text-gray-600 mb-1">Down payment</label>
          <div className="flex">
            <div className="relative flex-1">
              <span className="absolute left-2 top-2 text-gray-500">$</span>
              <input
                type="text"
                value={formatCurrency(downPayment)}
                onChange={handleDownPaymentChange}
                className="w-full p-2 pl-6 border border-gray-300 rounded-r-none rounded-l focus:outline-none"
              />
            </div>
            <div className="flex items-center px-4 border border-l-0 border-gray-300 rounded-r bg-gray-50">
              {downPaymentPercent}%
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-[180px]">
          <label className="block text-sm text-gray-600 mb-1">Interest rate</label>
          <div className="relative">
            <input
              type="text"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
              className="w-full p-2 pr-6 border border-gray-300 rounded focus:outline-none"
            />
            <span className="absolute right-2 top-2 text-gray-500">%</span>
          </div>
        </div>

        <div className="flex-1 min-w-[180px]">
          <label className="block text-sm text-gray-600 mb-1">Length of loan</label>
          <div className="relative">
            <div
              onClick={() => setShowTermDropdown(!showTermDropdown)}
              className="w-full p-2 border border-gray-300 rounded cursor-pointer flex justify-between items-center"
            >
              <span>{loanTerm} years</span>
              <span className="text-xs text-gray-500">▼</span>
            </div>
            {showTermDropdown && (
              <div className="absolute left-0 top-[100%] w-full bg-white border border-gray-300 rounded-b z-10">
                {[15, 20, 30].map((term) => (
                  <div
                    key={term}
                    onClick={() => {
                      setLoanTerm(term);
                      setShowTermDropdown(false);
                    }}
                    className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                      loanTerm === term ? "bg-gray-50" : ""
                    }`}
                  >
                    {term} years
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Monthly payment breakdown
        </h2>
        <div className="text-2xl font-semibold text-gray-800 mb-4">
          ${formatCurrency(monthlyPayment)}/mo
        </div>

        <div className="flex h-4 rounded-full overflow-hidden mb-6">
          <div
            className="transition-all duration-300 bg-[#008060]"
            style={{ width: widths.principalAndInterest }}
          />
          <div
            className="transition-all duration-300 bg-indigo-500"
            style={{ width: widths.propertyTaxes }}
          />
          <div
            className="transition-all duration-300 bg-indigo-200"
            style={{ width: widths.homeownersInsurance }}
          />
          <div
            className="transition-all duration-300 bg-yellow-400"
            style={{ width: widths.hoaFees }}
          />
          <div
            className="transition-all duration-300 bg-red-400"
            style={{ width: widths.utilities }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div
            className={`relative flex items-center p-2 rounded transition-colors ${
              hoverItem === "principal" ? "bg-gray-50" : ""
            }`}
            onMouseEnter={() => setHoverItem("principal")}
            onMouseLeave={() => setHoverItem(null)}
          >
            <div className="w-1 h-5 mr-3 bg-[#008060]" />
            <span className="flex-1 text-sm">Principal & interest</span>
            <span className="font-semibold">
              ${formatCurrency(breakdownDetails.principalAndInterest)}
            </span>
            <div
              onClick={() => handleInfoClick("principal")}
              className="ml-3 w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full text-xs cursor-pointer"
            >
              i
            </div>
            <InfoBox
              type="principal"
              title="Principal & interest"
              description="Principal is the amount originally borrowed. Interest is the cost of borrowing that principal."
            />
          </div>

          <div
            className={`relative flex items-center p-2 rounded transition-colors ${
              hoverItem === "taxes" ? "bg-gray-50" : ""
            }`}
            onMouseEnter={() => setHoverItem("taxes")}
            onMouseLeave={() => setHoverItem(null)}
          >
            <div className="w-1 h-5 mr-3 bg-indigo-500" />
            <span className="flex-1 text-sm">Property taxes</span>
            <div className="flex items-center">
              <span className="mr-1">$</span>
              <input
                type="text"
                value={breakdownDetails.propertyTaxes}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value) || 0;
                  setBreakdownDetails({
                    ...breakdownDetails,
                    propertyTaxes: newValue,
                  });
                  setMonthlyPayment(
                    monthlyPayment -
                      breakdownDetails.propertyTaxes +
                      newValue
                  );
                }}
                className="w-16 p-1 text-right border border-gray-300 rounded focus:outline-none"
              />
            </div>
            <div
              onClick={() => handleInfoClick("taxes")}
              className="ml-3 w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full text-xs cursor-pointer"
            >
              i
            </div>
            <InfoBox
              type="taxes"
              title="Property taxes"
              description="These are taxes paid to the local government, not your mortgage lender. This estimate uses the national average of about 1.06%."
            />
          </div>

          <div
            className={`relative flex items-center p-2 rounded transition-colors ${
              hoverItem === "insurance" ? "bg-gray-50" : ""
            }`}
            onMouseEnter={() => setHoverItem("insurance")}
            onMouseLeave={() => setHoverItem(null)}
          >
            <div className="w-1 h-5 mr-3 bg-indigo-200" />
            <span className="flex-1 text-sm">Homeowners insurance</span>
            <div className="flex items-center">
              <span className="mr-1">$</span>
              <input
                type="text"
                value={breakdownDetails.homeownersInsurance}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value) || 0;
                  setBreakdownDetails({
                    ...breakdownDetails,
                    homeownersInsurance: newValue,
                  });
                  setMonthlyPayment(
                    monthlyPayment -
                      breakdownDetails.homeownersInsurance +
                      newValue
                  );
                }}
                className="w-16 p-1 text-right border border-gray-300 rounded focus:outline-none"
              />
            </div>
            <div
              onClick={() => handleInfoClick("insurance")}
              className="ml-3 w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full text-xs cursor-pointer"
            >
              i
            </div>
            <InfoBox
              type="insurance"
              title="Homeowners insurance"
              description="This is an estimate of your monthly homeowners insurance premium."
            />
          </div>

          <div
            className={`relative flex items-center p-2 rounded transition-colors ${
              hoverItem === "hoa" ? "bg-gray-50" : ""
            }`}
            onMouseEnter={() => setHoverItem("hoa")}
            onMouseLeave={() => setHoverItem(null)}
          >
            <div className="w-1 h-5 mr-3 bg-yellow-400" />
            <span className="flex-1 text-sm">HOA fees</span>
            <div className="flex items-center">
              <span className="mr-1">$</span>
              <input
                type="text"
                value={breakdownDetails.hoaFees}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value) || 0;
                  setBreakdownDetails({
                    ...breakdownDetails,
                    hoaFees: newValue,
                  });
                  setMonthlyPayment(
                    monthlyPayment - breakdownDetails.hoaFees + newValue
                  );
                }}
                className="w-16 p-1 text-right border border-gray-300 rounded focus:outline-none"
              />
            </div>
            <div
              onClick={() => handleInfoClick("hoa")}
              className="ml-3 w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full text-xs cursor-pointer"
            >
              i
            </div>
            <InfoBox
              type="hoa"
              title="HOA fees"
              description="Payments to a homeowners association that manages rules, amenities, and day-to-day operations."
            />
          </div>

          <div
            className={`relative flex items-center p-2 rounded transition-colors ${
              hoverItem === "utilities" ? "bg-gray-50" : ""
            }`}
            onMouseEnter={() => setHoverItem("utilities")}
            onMouseLeave={() => setHoverItem(null)}
          >
            <div className="w-1 h-5 mr-3 bg-red-400" />
            <span className="flex-1 text-sm">Utilities</span>
            <span className="mr-1">${formatCurrency(breakdownDetails.utilities)}</span>
            <div
              onClick={() => handleInfoClick("utilities")}
              className="ml-3 w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full text-xs cursor-pointer"
            >
              i
            </div>
            <InfoBox
              type="utilities"
              title="Utilities"
              description="Estimate for monthly water, gas, electricity, internet, etc."
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button className="px-4 py-2 text-sm rounded bg-gray-100 border border-gray-300 hover:bg-gray-200">
            Copy estimate link
          </button>

          <button className="px-4 py-2 text-sm rounded bg-green-600 text-white hover:bg-green-700">
            Get pre-approved
          </button>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
