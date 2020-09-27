import React, { useState, useEffect } from "react";
import axios from "axios";
export const Context = React.createContext(null);
export const BASEURL = "http://35.226.96.109";

export const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    //this will be passed as the contenxt value
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );

    useEffect(() => {
      /**
       * EDIT THIS!
       * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
       * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
       * store, instead use actions, like this:
       *
       * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
       *
       **/
    });

    // The initial value for the context is not null anymore, but the current state of this component,
    // the context will now have a getStore, getActions and setStore functions available, because they were declared
    // on the state of this component
    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: { actions: null, data: null, events: null, token: null },
    actions: {
      getActions: async () => {
        try {
          const {data} = await axios(`${BASEURL}/action`, {
            headers: { uuid: "test-uuid" },
          });
          setStore({actions:data})
        } catch (error) {
          alert("getactions error");
        }
      },
      getData: async () => {
        try {
          const response = await axios(`${BASEURL}/data`, {
            headers: { uuid: "test-uuid" },
          });
          console.log(response);
        } catch (error) {
          alert("getactions error");
        }
      },
      getEvents: async () => {
        try {
          const response = await axios(`${BASEURL}/event`, {
            headers: { uuid: "test-uuid" },
          });
          console.log(response);
        } catch (error) {
          alert("getactions error");
        }
      },
    },
  };
};

export default getState;
