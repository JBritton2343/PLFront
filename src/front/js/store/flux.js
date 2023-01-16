const getState = ({ getStore, getActions, setStore }) => {
  let BACKEND_URL = process.env.BACKEND_URL;
  return {
    store: {
      power: [],
      RAM: [],
      cases: [],
      keyboards: [],
      mice: [],
      motherboards: [],
      processors: [],
      storage: [],
      videocards: [],
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
        fetch(
          "https://3001-jbritton2343-plfront-gy85ddko12s.ws-us82.gitpod.io/api/Power"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ power: data });
          });
      },
      get_ram: () => {
        fetch(
          "https://3001-jbritton2343-plfront-gy85ddko12s.ws-us82.gitpod.io/api/RAM"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ RAM: data });
          });
      },
      get_cases: () => {
        fetch(
          "https://3001-jbritton2343-plfront-gy85ddko12s.ws-us82.gitpod.io/api/Cases"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ cases: data });
          });
      },
      get_keyboards: () => {
        fetch(
          "https://3001-jbritton2343-plfront-gy85ddko12s.ws-us82.gitpod.io/api/Keyboards"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ keyboards: data });
          });
      },
      get_mice: () => {
        
        fetch(
          process.env.BACKEND_URL + "/api/Mouse"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ mice: data });
          });
      },
      get_motherboards: () => {
        fetch(
          "https://3001-jbritton2343-plfront-gy85ddko12s.ws-us82.gitpod.io/api/Motherboards"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ motherboards: data });
          });
      },
      get_processors: () => {
        fetch(
          "https://3001-jbritton2343-plfront-gy85ddko12s.ws-us82.gitpod.io/api/Processors"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ processors: data });
          });
      },
      get_storage: () => {
        fetch(
          "https://3001-jbritton2343-plfront-gy85ddko12s.ws-us82.gitpod.io/api/Storage"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ storage: data });
          });
      },
      get_videocards: () => {
        fetch(
          "https://3001-jbritton2343-plfront-gy85ddko12s.ws-us82.gitpod.io/api/GPUs"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ videocards: data });
          });
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
