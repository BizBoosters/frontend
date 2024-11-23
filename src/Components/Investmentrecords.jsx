import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

// // Initialize Web3 and contract
// const web3 = new Web3('http://localhost:8545'); // Ensure this matches your Hardhat network URL
// // const contractABI = require('C:/Users/91941/OneDrive/Desktop/frontend/client/src/Components/InvestmentRecord.json').abi; // Update the path to the ABI JSON file
// const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Replace with your contract address
// // const contract = new web3.eth.Contract(contractABI, contractAddress);

const InvestmentRecords = () => {
    const [investments, setInvestments] = useState([]);

    useEffect(() => {
        const fetchInvestments = async () => {
            try {
                const count = await contract.methods.getInvestmentsCount().call();
                const investmentPromises = [];
                for (let i = 0; i < count; i++) {
                    investmentPromises.push(
                        contract.methods.getInvestment(i).call()
                    );
                }
                const investmentsData = await Promise.all(investmentPromises);
                setInvestments(investmentsData);
            } catch (error) {
                console.error('Error fetching investments:', error);
            }
        };

        fetchInvestments();
    }, []);

    return (
        <div>
            <h2>Investment Records</h2>
            <ul>
                {investments.map((investment, index) => (
                    <li key={index}>
                        <strong>Investor Name:</strong> {investment[0]}<br />
                        <strong>Company Name:</strong> {investment[1]}<br />
                        <strong>Agreement Hash:</strong> {investment[2]}<br />
                        <strong>Investor Signature Hash:</strong> {investment[3]}<br />
                        <strong>Company Signature Hash:</strong> {investment[4]}<br />
                        <strong>Timestamp:</strong> {investment[5]}<br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InvestmentRecords;
