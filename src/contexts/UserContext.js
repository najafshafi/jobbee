import React, { useState, createContext } from "react";
import { user, users } from "../services/apis";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [userLaoded, setUserLoaded] = useState(false);
  const [data, setUserList] = useState({ results: [] });
  const [selectedUser, setSelectedUser] = useState({});

  const useUser = () => {
    const getUser = async (id) => {
      setLoading(true);
      try {
        const response = await user(id);
        setSelectedUser(response.data);
        setUserLoaded(true);
        setLoading(false);
      } catch (error) {
        setUserLoaded(false);
        setLoading(false);
      }
    };

    return { getUser, selectedUser, setSelectedUser, userLaoded };
  };

  const useUsers = () => {
    const fetchUsers = async (params) => {
      setLoading(true);
      try {
        const response = await users(params);
        setUserList(response.data);
      } catch (error) {
        setLoading(false);
      }
    };

    return { fetchUsers, data, setUserList };
  };

  const commonValues = { loading };
  const usersValue = useUsers();
  const userValue = useUser();

  return (
    <UserContext.Provider value={{ ...commonValues, ...usersValue, ...userValue }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;