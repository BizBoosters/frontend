import Navbar from "../Components/Navbar";
import { SidebarWithSearch } from "../Components/SideBar";
import React, { useState,useEffect } from "react";
import NotificationPanel from "../Components/NotificationPanel";
import ChatbaseChatbot from "../Components/Chatbot1";
import axios from 'axios';

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
    const [plotImage, setPlotImage] = useState(null);  // To store the image URL

  const handleChange = (e) => {
    setPnLInputs({
      ...pnlInputs,
      [e.target.name]: e.target.value,
    });
  };
  const [plResult, setPlResult] = useState(null); // To store the P&L results

  const handleSubmit1 = async (e) => {
    e.preventDefault();
  
    try {
      const pnlInputsParsed = { ...pnlInputs };
      const payload = { ...pnlInputsParsed };
  
      // Send a POST request to calculate the P&L
      const response = await fetch('http://127.0.0.1:5001/calculate_pnl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const plotResponse = await fetch('http://127.0.0.1:5001/plot_pnl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!plotResponse.ok) {
        throw new Error('Failed to fetch plot image');
      }
  
      // Convert the plot image response to a URL
      const imageBlob = await plotResponse.blob();
      const imageUrl = URL.createObjectURL(imageBlob);
  
      // Update the frontend state with the image URL
      setPlotImage(imageUrl);
      
      if (!response.ok) {
        throw new Error('Failed to calculate P&L');
      }
  
      const result = await response.json();
      console.log('Results:', result); // Log to check the format
      setPlResult(result); // Store the result in state
    } catch (error) {
      console.error('Error calculating P&L:', error);
      alert('There was an error processing your request.');
    }
  };

  useEffect(() => {
    console.log(plResult); // Log to check if the result is being updated
  }, [plResult]);
  
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
    const [results, setResults] = useState(null);
  const [plot, setPlot] = useState(null);

  const handleChange1 = (e) => {
    setInvestmentInputs({ ...investmentInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      const parsedInputs = {
        ...investmentInputs,
        exitTimePeriods: investmentInputs.exitTimePeriods.split(",").map(Number),
        exitMultiples: investmentInputs.exitMultiples.split(",").map(Number),
      };

      const response = await fetch("http://127.0.0.1:5001/calculate_returns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsedInputs),
      });

      if (!response.ok) throw new Error("Error calculating returns");

      const data = await response.json();
      setResults(data.results);
      setPlot(data.plot);
    } catch (error) {
      console.error(error);
      alert("Failed to calculate returns");
    }
};

    const [equityDistribution, setEquityDistribution] = useState({
        shareholders: [],
        fundingRound: {
            newInvestorName: "",
            investmentEquityPercentage: "",
        },
    });
    const handleAddShareholder = () => {
        setEquityDistribution((prevState) => ({
            ...prevState,
            shareholders: [
                ...prevState.shareholders,
                { name: "", equityPercentage: "", isEmployee: false },
            ],
        }));
    };
    const handleShareholderChange = (index, key, value) => {
        const updatedShareholders = [...equityDistribution.shareholders];
        updatedShareholders[index][key] = value;
        setEquityDistribution((prevState) => ({
            ...prevState,
            shareholders: updatedShareholders,
        }));
    };
    const [updatedCapTable, setUpdatedCapTable] = useState([]);
    useEffect(() => {
        // Clear stored data on refresh, if needed
        localStorage.removeItem('shareholderData');  // Example for localStorage
    }, []);
    
    const handleSubmit4 = async (e) => {
        e.preventDefault();

        // Add all shareholders to the backend
        for (const shareholder of equityDistribution.shareholders) {
            await axios.post("http://127.0.0.1:5001/add-shareholder", {
                name: shareholder.name,
                equityPercentage: parseFloat(shareholder.equityPercentage),
                isEmployee: shareholder.isEmployee,
                vestingSchedule: shareholder.vestingSchedule || null,
            });
        }

        // Simulate funding round
        await axios.post("http://127.0.0.1:5001/simulate-funding", {
            newInvestorName: equityDistribution.fundingRound.newInvestorName,
            investmentEquityPercentage: parseFloat(
                equityDistribution.fundingRound.investmentEquityPercentage
            ),
        });

        // Get updated cap table
        const response = await axios.get("http://127.0.0.1:5001/get-cap-table");
        setUpdatedCapTable(response.data);
        console.log(response.data)
        setEquityDistribution({
            shareholders: [],
            fundingRound: {
                newInvestorName: "",
                investmentEquityPercentage: "",
            },
        });
    };
    const [valuationInputs, setValuationInputs] = useState({
        revenue: "",
        growthRate: "",
        tam: "",
        marketShare: "",
        industryMultiplier: "",
    });
    
    
      const [valuation, setValuation] = useState(null);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValuationInputs({
          ...valuationInputs,
          [name]: value,
        });
      };

      const calculateValuation = async () => {
        try {
          const response = await axios.post("http://127.0.0.1:5001/calculate_valuation", valuationInputs);
          setValuation(response.data.valuation);
        } catch (error) {
          console.error("Error calculating valuation:", error);
          alert("Failed to calculate valuation. Please check your inputs.");
        }
      };

    const [equityResult, setEquityResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const weightsParsed = JSON.parse(cofounderEquity.weights);
            const contributionsParsed = JSON.parse(cofounderEquity.cofounderContributions);

            const payload = {
                founderEquity: cofounderEquity.founderEquity,
                weights: weightsParsed,
                cofounderContributions: contributionsParsed,
            };

            const response = await fetch('http://127.0.0.1:5001/calculate-equity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch results from the server');
            }

            const result = await response.json();
            
            // Update state with the result
            setEquityResult(result);
            console.log(result);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error processing your request.');
        }
    };
    

        // Handle shareholders array input
    

    return (
        <div className="flex h-screen overflow-hidden bg-bgWhite">
            {/* Sidebar */}

            <SidebarWithSearch />



            {/* Main Content */}
            <main className="flex flex-col flex-grow">
                {/* Navbar */}
                <div className={${showNotifications ? "w-[1048px]" : "w-full"}}>
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
                                    <form onSubmit={handleSubmit} className="space-y-4">
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
                                    {/* Conditionally render the result */}
                                    {equityResult && (
                                        <div>
                                            <h3>Equity Calculation Result:</h3>
                                            <p>New Founder Equity: {equityResult.newFounderEquity}</p>
                                            <p>Co-Founder Equity: {equityResult.cofounderEquity}</p>
                                        </div>
                                    )}  
                                </div>

                                {/* Section 2: P&L Statement Generator */}
                                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Profit & Loss (P&L) Statement Generator</h2>
      <form className="space-y-4" onSubmit={handleSubmit1}>
        <div>
          <label htmlFor="periodType" className="block mb-2 text-sm font-medium">Period Type</label>
          <select
            id="periodType"
            name="periodType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={pnlInputs.periodType}
            onChange={handleChange}
          >
            <option value="monthly">Monthly</option>
            <option value="6-month">6-Month</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        <div>
          <label htmlFor="sales" className="block mb-2 text-sm font-medium">Sales</label>
          <input
            type="number"
            id="sales"
            name="sales"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={pnlInputs.sales}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="cogs" className="block mb-2 text-sm font-medium">Cost of Goods Sold (COGS)</label>
          <input
            type="number"
            id="cogs"
            name="cogs"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={pnlInputs.cogs}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="operatingExpenses" className="block mb-2 text-sm font-medium">Operating Expenses</label>
          <input
            type="number"
            id="operatingExpenses"
            name="operatingExpenses"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={pnlInputs.operatingExpenses}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="depreciation" className="block mb-2 text-sm font-medium">Depreciation</label>
          <input
            type="number"
            id="depreciation"
            name="depreciation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={pnlInputs.depreciation}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="amortization" className="block mb-2 text-sm font-medium">Amortization</label>
          <input
            type="number"
            id="amortization"
            name="amortization"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={pnlInputs.amortization}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="interestExpense" className="block mb-2 text-sm font-medium">Interest Expense</label>
          <input
            type="number"
            id="interestExpense"
            name="interestExpense"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={pnlInputs.interestExpense}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="interestIncome" className="block mb-2 text-sm font-medium">Interest Income</label>
          <input
            type="number"
            id="interestIncome"
            name="interestIncome"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={pnlInputs.interestIncome}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="otherIncome" className="block mb-2 text-sm font-medium">Other Income</label>
          <input
            type="number"
            id="otherIncome"
            name="otherIncome"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={pnlInputs.otherIncome}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="otherExpenses" className="block mb-2 text-sm font-medium">Other Expenses</label>
          <input
            type="number"
            id="otherExpenses"
            name="otherExpenses"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={pnlInputs.otherExpenses}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="taxRate" className="block mb-2 text-sm font-medium">Tax Rate</label>
          <input
            type="number"
            id="taxRate"
            name="taxRate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={pnlInputs.taxRate}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Generate P&L</button>
      </form>
      {plResult && plResult.result && (
  <div>
    <h3>P&L Results</h3>
    <ul>
      <li>Gross Profit: {plResult.result.grossProfit}</li>
      <li>Operating Profit: {plResult.result.operatingProfit}</li>
      <li>EBT: {plResult.result.ebt}</li>
      <li>Net Profit: {plResult.result.netProfit}</li>
      <li>Interest Income: {plResult.result.interestIncome}</li>
      <li>Interest Expense: {plResult.result.interestExpense}</li>
      <li>Other Income: {plResult.result.otherIncome}</li>
      <li>Other Expenses: {plResult.result.otherExpenses}</li>
      <li>Tax Expense: {plResult.result.taxExpense}</li>
    </ul>
  </div>
)}


      {plotImage && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">P&L Plot</h3>
          <img src={plotImage} alt="P&L Plot" className="w-full" />
        </div>
      )}
    </div>

                                {/* Section 3: Investment ROI Simulator */}
                                <div>
      <h1>Investment Return Simulator</h1>
      <form onSubmit={handleSubmit2}>
        <label>
          Initial Investment:
          <input type="number" name="initialInvestment" value={investmentInputs.initialInvestment} onChange={handleChange1} />
        </label>
        <label>
          Exit Time Periods (comma-separated):
          <input type="text" name="exitTimePeriods" value={investmentInputs.exitTimePeriods} onChange={handleChange1} />
        </label>
        <label>
          Exit Multiples (comma-separated):
          <input type="text" name="exitMultiples" value={investmentInputs.exitMultiples} onChange={handleChange1} />
        </label>
        <label>
          Base Growth Rate (%):
          <input type="number" name="baseGrowthRate" value={investmentInputs.baseGrowthRate} onChange={handleChange1} />
        </label>
        <label>
          Inflation Rate (%):
          <input type="number" name="inflationRate" value={investmentInputs.inflationRate} onChange={handleChange1} />
        </label>
        <label>
          Volatility:
          <input type="number" name="volatility" step="0.01" value={investmentInputs.volatility} onChange={handleChange1} />
        </label>
        <label>
          Dividend Yield (%):
          <input type="number" name="dividendYield" step="0.01" value={investmentInputs.dividendYield} onChange={handleChange1} />
        </label>
        <label>
          Decay Factor (%):
          <input type="number" name="decayFactor" step="0.01" value={investmentInputs.decayFactor} onChange={handleChange1} />
        </label>
        <button type="submit">Calculate Returns</button>
      </form>

      {results && (
        <div>
          <h2>Simulation Results</h2>
          <ul>
            {Object.entries(results).map(([exitTime, rois]) => (
              <li key={exitTime}>
                Exit in {exitTime} years:
                <ul>
                  {rois.map((roi, index) => (
                    <li key={index}>Multiple {investmentInputs.exitMultiples.split(",")[index]}x: {roi.toFixed(2)}%</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}

      {plot && (
        <div>
          <h2>ROI Plot</h2>
          <img src={data:image/png;base64,${plot}} alt="ROI Plot" />
        </div>
      )}
    </div>

                                {/* Section 4: Equity Distribution Tracker */}
                                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4">Equity Distribution Tracker</h2>
    <form className="space-y-4" onSubmit={handleSubmit4}>
        <div>
            <label className="block mb-2 text-sm font-medium">New Investor Name</label>
            <input
                type="text"
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
            <label className="block mb-2 text-sm font-medium">Investment Equity Percentage</label>
            <input
                type="number"
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
                </div>
            ))}
            <button
                type="button"
                className="px-4 py-2 text-sm bg-blue-400 text-white rounded-md"
                onClick={handleAddShareholder}
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

    {/* Display the updated Cap Table */}
    <div className="mt-6">
        <h3 className="text-xl font-bold">Updated Cap Table</h3>
        <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
                <tr>
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">Total Equity</th>
                    <th className="p-4 text-left">Unvested Equity</th>
                    <th className="p-4 text-left">Vested Equity</th>
                </tr>
            </thead>
            <tbody>
                {updatedCapTable.map((shareholder, index) => (
                    <tr key={index}>
                        <td className="p-4">{shareholder.name}</td>
                        <td className="p-4">{shareholder.total_equity}</td>
                        <td className="p-4">{shareholder.unvested_equity}</td>
                        <td className="p-4">{shareholder.vested_equity}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>



                                {/* Section 5: Business Valuation Calculator */}
                                <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Company Valuation Calculator</h2>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Revenue (USD):
          <input
            type="number"
            name="revenue"
            value={valuationInputs.revenue}
            onChange={handleInputChange}
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Growth Rate (e.g., 1.2 for 20% growth):
          <input
            type="number"
            name="growthRate"
            value={valuationInputs.growthRate}
            onChange={handleInputChange}
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>
          TAM (Total Addressable Market in USD):
          <input
            type="number"
            name="tam"
            value={valuationInputs.tam}
            onChange={handleInputChange}
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Market Share (e.g., 0.05 for 5%):
          <input
            type="number"
            name="marketShare"
            value={valuationInputs.marketShare}
            onChange={handleInputChange}
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Industry Multiplier (optional, default is 5):
          <input
            type="number"
            name="industryMultiplier"
            value={valuationInputs.industryMultiplier}
            onChange={handleInputChange}
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
      </div>
      <button
        onClick={calculateValuation}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Calculate Valuation
      </button>
      {valuation !== null && (
        <div style={{ marginTop: "20px" }}>
          <h3>Estimated Company Valuation: ${valuation.toLocaleString()}</h3>
        </div>
      )}
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