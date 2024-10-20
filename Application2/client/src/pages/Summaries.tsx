import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SummaryCard from '../components/SummaryCard';

const Summaries: React.FC = () => {
    const [summaries, setSummaries] = useState<any[]>([]);

    useEffect(() => {
        fetchSummaries();
    }, []);

    const fetchSummaries = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/weather/daily-summaries');
            setSummaries(response.data);
        } catch (error) {
            console.error('Error fetching summaries:', error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-4xl font-extrabold text-center mb-6">Daily Weather Summaries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {summaries.map((summary) => (
                    <SummaryCard key={`${summary.city}-${summary.date}`} summary={summary} />
                ))}
            </div>
        </div>
    );
};

export default Summaries;
