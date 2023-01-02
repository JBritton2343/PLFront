const getState = ({ getStore, getActions, setStore }) => {
  let BACKEND_URL = process.env.BACKEND_URL;
  return {
    store: {
      power: [],
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      
      get_power: () => {
        const opts={
          headers:{
            'mode': 'no-cors'
          }
        }
        fetch(
          ('/api/Power', opts)
        )
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ power: data });
          });
      },
      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/power");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      login: (email) => {
        let user = getStore().userAccounts.find((user) => user.email == email);
        setStore({ user: user });
        return true;
      },
    },
  };
};

export default getState;
