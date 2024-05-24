import React, { createContext, useState } from "react";
import axios from "axios";

export const DynamicOptionsContext = createContext();

export const DynamicOptionsProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({ results: [], totalResults: 0 });

    const fetchOptions = async (params) => {
        setLoading(true);
        try {
            const response = await axios.get(`/api/options`, { params });
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <DynamicOptionsContext.Provider value={{ loading, data, fetchOptions }}>
            {children}
        </DynamicOptionsContext.Provider>
    );
};

