import Navbar from "../Components/Navbar";
import { SidebarWithSearch } from "../Components/SideBar";
import React, { useState } from "react";
import NotificationPanel from "../Components/NotificationPanel";
import ChatbaseChatbot from "../Components/Chatbot1";

const ApplicationForm = () => {
    const [showNotifications, setShowNotification] = useState(false);
    const toggleNotifications = () => setShowNotification(!showNotifications);

    const [cofounderEquity, setCofounderEquity] = useState({
        founderEquity: "",
        weights: "",
        cofounderContributions: "",
    });

    const [pnlInputs, setPnLInputs] = useState({
        periodType: "",
        sales: "",
        cogs: "",
        operatingExpenses: "",
        depreciation: "",
        amortization: "",
        interestExpense: "",
        interestIncome: "",
        otherIncome: "",
        otherExpenses: "",
        taxRate: "",
    });

    const [investmentInputs, setInvestmentInputs] = useState({
        initialInvestment: "",
        exitTimePeriods: "",
        exitMultiples: "",
        baseGrowthRate: "",
        inflationRate: "",
        volatility: "",
        dividendYield: "",
        decayFactor: "",
    });

    const [equityDistribution, setEquityDistribution] = useState({
        shareholders: [],
        fundingRound: {
            newInvestorName: "",
            investmentEquityPercentage: "",
        },
    });

    const [valuationInputs, setValuationInputs] = useState({
        revenue: "",
        growthRate: "",
        tam: "",
        marketShare: "",
        industryMultiplier: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Co-Founder Equity Data:", cofounderEquity);
        console.log("P&L Inputs:", pnlInputs);
        console.log("Investment Inputs:", investmentInputs);
        console.log("Equity Distribution:", equityDistribution);
        console.log("Valuation Inputs:", valuationInputs);
    
        alert("Form submitted! Check the console for details.");
      };

        // Handle shareholders array input
    const addShareholder = () => {
        setEquityDistribution((prevState) => ({
        ...prevState,
        shareholders: [
            ...prevState.shareholders,
            { name: "", equityPercentage: "", isEmployee: false, vestingSchedule: {} },
        ],
        }));
    };

    const handleShareholderChange = (index, field, value) => {
        const updatedShareholders = equityDistribution.shareholders.map((shareholder, i) =>
        i === index ? { ...shareholder, [field]: value } : shareholder
        );
        setEquityDistribution((prevState) => ({
        ...prevState,
        shareholders: updatedShareholders,
        }));
    };

    return (
        <div className="flex h-screen overflow-hidden bg-bgWhite">
            {/* Sidebar */}

            <SidebarWithSearch />



            {/* Main Content */}
            <main className="flex flex-col flex-grow">
                {/* Navbar */}
                <div className={`${showNotifications ? "w-[1048px]" : "w-full"}`}>
                    <Navbar toggleNotifications={toggleNotifications} />
                </div>


                {/* Scrollable content */}
                <section className="overflow-y-auto p-6 mt-2">
                    <div className="w-full">
                        <div className="max-w-5xl font-primary">
                            <h1 className="text-3xl font-bold mb-6">Application Form</h1>
                            <div className="space-y-10">
                                {/* Section 1: Co-Founder Equity Allocation */}
                                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                                    <h2 className="text-xl font-bold mb-4">Co-Founder Equity Allocation</h2>
                                    <form className="space-y-4">
                                        {/* <div className="fl "> */}
                                            <div>
                                                <label htmlFor="founderEquity" className="block mb-2 text-sm font-medium">
                                                    Founder Equity
                                                </label>
                                                <input
                                                    type="number"
                                                    id="founderEquity"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Enter founder equity percentage"
                                                    value={cofounderEquity.founderEquity}
                                                    onChange={(e) =>
                                                        setCofounderEquity({ ...cofounderEquity, founderEquity: e.target.value })
                                                    }
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="weights" className="block mb-2 text-sm font-medium">
                                                    Contribution Weights 
                                                </label>
                                                <textarea
                                                    id="weights"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder='e.g., {"problem_solving": 0.2, "experience": 0.3}'
                                                    value={cofounderEquity.weights}
                                                    onChange={(e) =>
                                                        setCofounderEquity({ ...cofounderEquity, weights: e.target.value })
                                                    }
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="contributions" className="block mb-2 text-sm font-medium">
                                                    Co-Founder Contributions
                                                </label>
                                                <textarea
                                                    id="contributions"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder='e.g., {"problem_solving": 0.8, "experience": 0.6}'
                                                    value={cofounderEquity.cofounderContributions}
                                                    onChange={(e) =>
                                                        setCofounderEquity({
                                                            ...cofounderEquity,
                                                            cofounderContributions: e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>
                                        {/* </div> */}

                                        <button 
                                            type="submit" 
                                            className="py-2.5 px-16 mt-5 text-sm justify-right font-medium text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>

                                {/* Section 2: P&L Statement Generator */}
                                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                                    <h2 className="text-xl font-bold mb-4">Profit & Loss (P&L) Statement Generator</h2>
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="periodType" className="block mb-2 text-sm font-medium">
                                                Period Type
                                            </label>
                                            <select
                                                id="periodType"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                value={pnlInputs.periodType}
                                                onChange={(e) =>
                                                    setPnLInputs({ ...pnlInputs, periodType: e.target.value })
                                                }
                                            >
                                                <option value="monthly">Monthly</option>
                                                <option value="6-month">6-Month</option>
                                                <option value="yearly">Yearly</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="sales" className="block mb-2 text-sm font-medium">
                                                Total Sales (USD)
                                            </label>
                                            <input
                                                type="number"
                                                id="sales"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter sales amount"
                                                value={pnlInputs.sales}
                                                onChange={(e) =>
                                                    setPnLInputs({ ...pnlInputs, sales: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="cogs" className="block mb-2 text-sm font-medium">
                                                COGS
                                            </label>
                                            <input
                                                type="number"
                                                id="cogs"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter Cost of Goods Sold (COGS)"
                                                value={pnlInputs.cogs}
                                                onChange={(e) =>
                                                    setPnLInputs({ ...pnlInputs, cogs: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="operatingExpenses" className="block mb-2 text-sm font-medium">
                                                Operating Expenses
                                            </label>
                                            <input
                                                type="number"
                                                id="operatingExpenses"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter operating expenses"
                                                value={pnlInputs.operatingExpenses}
                                                onChange={(e) =>
                                                    setPnLInputs({ ...pnlInputs, operatingExpenses: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="depreciation" className="block mb-2 text-sm font-medium">
                                                Depreciation
                                            </label>
                                            <input
                                                type="number"
                                                id="depreciation"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter depreciation amount"
                                                value={pnlInputs.depreciation}
                                                onChange={(e) =>
                                                    setPnLInputs({ ...pnlInputs, depreciation: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="amortization" className="block mb-2 text-sm font-medium">
                                                Amortization
                                            </label>
                                            <input
                                                type="number"
                                                id="amortization"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter amortization amount"
                                                value={pnlInputs.amortization}
                                                onChange={(e) =>
                                                    setPnLInputs({ ...pnlInputs, amortization: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="interestExpense" className="block mb-2 text-sm font-medium">
                                                Interest Expense
                                            </label>
                                            <input
                                                type="number"
                                                id="interestExpense"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter interest expense"
                                                value={pnlInputs.interestExpense}
                                                onChange={(e) =>
                                                    setPnLInputs({ ...pnlInputs, interestExpense: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="interestIncome" className="block mb-2 text-sm font-medium">
                                                Interest Income
                                            </label>
                                            <input
                                                type="number"
                                                id="interestIncome"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter interest income"
                                                value={pnlInputs.interestIncome}
                                                onChange={(e) =>
                                                    setPnLInputs({ ...pnlInputs, interestIncome: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="otherIncome" className="block mb-2 text-sm font-medium">
                                                Other Income
                                            </label>
                                            <input
                                                type="number"
                                                id="otherIncome"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter other income"
                                                value={pnlInputs.otherIncome}
                                                onChange={(e) =>
                                                    setPnLInputs({ ...pnlInputs, otherIncome: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="otherExpenses" className="block mb-2 text-sm font-medium">
                                                Other Expense
                                            </label>
                                            <input
                                                type="number"
                                                id="otherExpenses"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter other expenses"
                                                value={pnlInputs.otherExpenses}
                                                onChange={(e) =>
                                                    setPnLInputs({ ...pnlInputs, otherExpenses: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="taxRate" className="block mb-2 text-sm font-medium">
                                                Tax Rate
                                            </label>
                                            <input
                                                type="number"
                                                id="taxRate"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter tax rate percentage"
                                                value={pnlInputs.taxRate}
                                                onChange={(e) =>
                                                    setPnLInputs({ ...pnlInputs, taxRate: e.target.value })
                                                }
                                            />
                                        </div>

                                        <button 
                                            type="submit" 
                                            className="py-2.5 px-16 mt-5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg"
                                        >
                                            Submit
                                        </button>
                                        {/* Add other financial data inputs similar to the above */}
                                    </form>
                                </div>

                                {/* Section 3: Investment ROI Simulator */}
                                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                                    <h2 className="text-xl font-bold mb-4">Investment ROI Simulator</h2>
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="initialInvestment" className="block mb-2 text-sm font-medium">
                                                Initial Investment (USD)
                                            </label>
                                            <input
                                                type="number"
                                                id="initialInvestment"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter initial investment amount"
                                                value={investmentInputs.initialInvestment}
                                                onChange={(e) =>
                                                    setInvestmentInputs({
                                                        ...investmentInputs,
                                                        initialInvestment: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="exitTimePeriods" className="block mb-2 text-sm font-medium">
                                                Exit Time Periods (in yrs)
                                            </label>
                                            <input
                                                type="number"
                                                id="exitTimePeriods"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter exit time period"
                                                value={investmentInputs.exitTimePeriods}
                                                onChange={(e) =>
                                                    setInvestmentInputs({
                                                        ...investmentInputs,
                                                        exitTimePeriods: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="exitMultiples" className="block mb-2 text-sm font-medium">
                                                Exit Mulitples
                                            </label>
                                            <input
                                                type="number"
                                                id="exitMultiples"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter exit multiples"
                                                value={investmentInputs.exitMultiples}
                                                onChange={(e) =>
                                                    setInvestmentInputs({
                                                        ...investmentInputs,
                                                        exitMultiples: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="baseGrowthRate" className="block mb-2 text-sm font-medium">
                                                Base Growth Rate
                                            </label>
                                            <input
                                                type="number"
                                                id="baseGrowthRate"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter base growth rate"
                                                value={investmentInputs.baseGrowthRate}
                                                onChange={(e) =>
                                                    setInvestmentInputs({
                                                        ...investmentInputs,
                                                        baseGrowthRate: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="inflationRate" className="block mb-2 text-sm font-medium">
                                                Inflation Rate
                                            </label>
                                            <input
                                                type="number"
                                                id="inflationRate"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter inflation rate"
                                                value={investmentInputs.inflationRate}
                                                onChange={(e) =>
                                                    setInvestmentInputs({
                                                        ...investmentInputs,
                                                        inflationRate: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="volatility" className="block mb-2 text-sm font-medium">
                                                Volatility
                                            </label>
                                            <input
                                                type="number"
                                                id="volatility"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter volatility"
                                                value={investmentInputs.volatility}
                                                onChange={(e) =>
                                                    setInvestmentInputs({
                                                        ...investmentInputs,
                                                        volatility: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="dividendYield" className="block mb-2 text-sm font-medium">
                                                Dividend yield
                                            </label>
                                            <input
                                                type="number"
                                                id="dividendYield"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter dividend yield"
                                                value={investmentInputs.dividendYield}
                                                onChange={(e) =>
                                                    setInvestmentInputs({
                                                        ...investmentInputs,
                                                        dividendYield: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="decayFactor" className="block mb-2 text-sm font-medium">
                                                Decay Factor
                                            </label>
                                            <input
                                                type="number"
                                                id="decayFactor"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter decay factor"
                                                value={investmentInputs.decayFactor}
                                                onChange={(e) =>
                                                    setInvestmentInputs({
                                                        ...investmentInputs,
                                                        decayFactor: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        {/* Add remaining inputs */}
                                        <button 
                                            type="submit" 
                                            className="py-2.5 px-16 mt-5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>

                                {/* Section 4: Equity Distribution Tracker */}
                                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                                    <h2 className="text-xl font-bold mb-4">Equity Distribution Tracker</h2>
                                    <form className="space-y-4">
                                        {/* Shareholder details */}
                                        <div>
                                            <label htmlFor="newInvestorName" className="block mb-2 text-sm font-medium">
                                                New Investor Name
                                            </label>
                                            <input
                                                type="number"
                                                id="newInvestorName"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter investor's name"
                                                value={equityDistribution.fundingRound.newInvestorName}
                                                onChange={(e) =>
                                                    setEquityDistribution((prevState) => ({
                                                        ...prevState,
                                                        fundingRound: {
                                                            ...prevState.fundingRound,
                                                            newInvestorName: e.target.value,
                                                        },
                                                    }))
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="investmentEquityPercentage" className="block mb-2 text-sm font-medium">
                                                Investment Equity Percentage
                                            </label>
                                            <input
                                                type="number"
                                                id="investmentEquityPercentage"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter equity percentage"
                                                value={equityDistribution.fundingRound.investmentEquityPercentage}
                                                onChange={(e) =>
                                                    setEquityDistribution((prevState) => ({
                                                        ...prevState,
                                                        fundingRound: {
                                                            ...prevState.fundingRound,
                                                            investmentEquityPercentage: e.target.value,
                                                        },
                                                    }))
                                                }
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-md font-medium mb-2">Shareholders</h3>
                                            {equityDistribution.shareholders.map((shareholder, index) => (
                                                <div key={index} className="space-y-2 mb-4">
                                                    <input
                                                        type="text"
                                                        placeholder="Shareholder Name"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                        value={shareholder.name}
                                                        onChange={(e) =>
                                                            handleShareholderChange(index, "name", e.target.value)
                                                        }
                                                    />
                                                    <input
                                                        type="number"
                                                        placeholder="Equity Percentage"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                        value={shareholder.equityPercentage}
                                                        onChange={(e) =>
                                                            handleShareholderChange(index, "equityPercentage", e.target.value)
                                                        }
                                                    />
                                                    <label className="inline-flex items-center space-x-2">
                                                        <input
                                                            type="checkbox"
                                                            className="form-checkbox"
                                                            checked={shareholder.isEmployee}
                                                            onChange={(e) =>
                                                                handleShareholderChange(index, "isEmployee", e.target.checked)
                                                            }
                                                        />
                                                        <span>Is Employee?</span>
                                                    </label>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                className="px-4 py-2 text-sm bg-blue-400 text-white rounded-md"
                                                onClick={addShareholder}
                                            >
                                                Add Shareholder
                                            </button>
                                        </div>
                                        <button
                                            type="submit"
                                            className="py-2.5 px-16 mt-5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>

                                {/* Section 5: Business Valuation Calculator */}
                                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                                    <h2 className="text-xl font-bold mb-4">Business Valuation Calculator</h2>
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="revenue" className="block mb-2 text-sm font-medium">
                                                Revenue (USD)
                                            </label>
                                            <input
                                                type="number"
                                                id="revenue"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter current revenue"
                                                value={valuationInputs.revenue}
                                                onChange={(e) =>
                                                    setValuationInputs({ ...valuationInputs, revenue: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="growthRate" className="block mb-2 text-sm font-medium">
                                                Growth Rate
                                            </label>
                                            <input
                                                type="number"
                                                id="growthRate"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter growth rate"
                                                value={valuationInputs.growthRate}
                                                onChange={(e) =>
                                                    setValuationInputs({ ...valuationInputs, growthRate: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="tam" className="block mb-2 text-sm font-medium">
                                                TAM
                                            </label>
                                            <input
                                                type="number"
                                                id="tam"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter Total Addressable Market (TAM)"
                                                value={valuationInputs.tam}
                                                onChange={(e) =>
                                                    setValuationInputs({ ...valuationInputs, tam: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="marketShare" className="block mb-2 text-sm font-medium">
                                                Market Share
                                            </label>
                                            <input
                                                type="number"
                                                id="marketShare"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter market share percentage"
                                                value={valuationInputs.marketShare}
                                                onChange={(e) =>
                                                    setValuationInputs({ ...valuationInputs, marketShare: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="industryMultiplier" className="block mb-2 text-sm font-medium">
                                                Industry Multiplier
                                            </label>
                                            <input
                                                type="number"
                                                id="industryMultiplier"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Enter industry multiplier"
                                                value={valuationInputs.industryMultiplier}
                                                onChange={(e) =>
                                                    setValuationInputs({ ...valuationInputs, industryMultiplier: e.target.value })
                                                }
                                            />
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="py-2.5 px-16 mt-5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Notifications Container */}
            {showNotifications && (
                <NotificationPanel />
            )}

            <ChatbaseChatbot />

        </div>
    );
};

export default ApplicationForm;
