import React, { useState } from 'react';
import axios from 'axios';
import Web3 from 'web3';

// Initialize Web3
const web3 = new Web3('http://localhost:8545'); // Ensure this matches your Hardhat network URL

const InvestForm = () => {
    const [investorName, setInvestorName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [agreementFile, setAgreementFile] = useState(null);
    const [investorSignature, setInvestorSignature] = useState('');
    const [agreementURL, setAgreementURL] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('agreementFile', agreementFile);
        formData.append('investorName', investorName);
        formData.append('companyName', companyName);
        formData.append('investorSignatureHash', web3.utils.sha3(investorSignature));

        try {
            const response = await axios.post('http://localhost:5000/api/investments', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setAgreementURL(response.data.agreementURL);
            alert('Investment recorded successfully!');
        } catch (error) {
            console.error('Error recording investment:', error);
            alert('Error recording investment.');
        }
    };

    const handleFileChange = (e) => {
        setAgreementFile(e.target.files[0]);
    };

    return (
        <div>
            <h2>Investment Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={investorName}
                    onChange={(e) => setInvestorName(e.target.value)}
                    placeholder="Investor Name"
                    required
                />
                <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Company Name"
                    required
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                    required
                />
                <input
                    type="text"
                    value={investorSignature}
                    onChange={(e) => setInvestorSignature(e.target.value)}
                    placeholder="Investor Signature"
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {agreementURL && (
                <div>
                    <h3>Uploaded Agreement URL:</h3>
                    <a href={agreementURL} target="_blank" rel="noopener noreferrer">
                        {agreementURL}
                    </a>
                </div>
            )}
        </div>
    );
};

export default InvestForm;
