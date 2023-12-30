import React, { useState, createContext } from "react";
import { onBoarding, onBoardings } from "../services/apis";

export const OnBoardingsContext = createContext();

export const OnBoardingsContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [onBoardingLaoded, setonBoardingLoaded] = useState(false);
  const [data, setonBoardingList] = useState({ results: [] });
  const [selectedonBoarding, setSelectedonBoarding] = useState({});

  const useOnBoarding = () => {
    const getOnBoarding = async (id) => {

      if(id === undefined) {
        setSelectedonBoarding({});
        setonBoardingLoaded(true);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const response = await onBoarding(id);
        setSelectedonBoarding(response.data);
        setonBoardingLoaded(true);
        setLoading(false);
      } catch (error) {
        setonBoardingLoaded(false);
        setLoading(false);
      }
    };

    return { getOnBoarding, selectedonBoarding, setSelectedonBoarding, onBoardingLaoded };
  };

  const useOnBoardings = () => {
    const fetchonBoardings = async (params) => {
      setLoading(true);
      try {
        const response = await onBoardings(params);
        setonBoardingList(response.data);
      } catch (error) {
        setLoading(false);
      }
    };

    return { fetchonBoardings, data, setonBoardingList };
  };

  const commonValues = { loading };
  const onBoardingsValue = useOnBoardings();
  const onBoardingValue = useOnBoarding();

  return (
    <OnBoardingsContext.Provider value={{ ...commonValues, ...onBoardingsValue, ...onBoardingValue }}>
      {props.children}
    </OnBoardingsContext.Provider>
  );
};

export default OnBoardingsContextProvider;