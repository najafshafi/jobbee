import React, { useState, createContext } from "react";
import { users } from "../../../services/apis";

export const UserContext = createContext();
export const UserContextProvider = (props) => {

  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(false);

  const fetchUsers = async (params) => {
    setLoading(true);
    users(params).then((data) => {
      setLoading(false);
      setData(data.data)
    })
  };




  return <UserContext.Provider value={{ loading, data, fetchUsers, setData }}>{props.children}</UserContext.Provider>;
};
