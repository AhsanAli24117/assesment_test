import axios from 'axios';

const BASE_URL = 'your_api_base_url';

async function saveWorksheet(worksheet) {
    try {
        const response = await axios.post(`${BASE_URL}/worksheets`, worksheet);
        return response.data;
    } catch (error) {
        console.error('Error saving worksheet:', error);
        throw error;
    }
};

async function fetchWorksheet(worksheetId) {
    try {
        const response = await axios.get(`${BASE_URL}/worksheets/${worksheetId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching worksheet:', error);
        throw error;
    }
};

export default{
    fetchWorksheet,
    saveWorksheet
}
