const getState = ({ getStore, getActions, setStore }) => {
  let BACKEND_URL = process.env.BACKEND_URL;
  return {
    store: {
      power: [],
      RAM: [],
      cases: [],
      casefans: [],
      cpufans: [],
      keyboards: [],
      mice: [],
      motherboards: [],
      processors: [],
      storage: [],
      videocards: [],
      singlePower: [],
      singleKeyboard: [],
      singleCase: [],
      singleCasefan: [],
      singleCPUFan: [],
      singleMemory: [],
      singleMotherboard: [],
      singleMouse: [],
      singleProcessor: [],
      singleStorage: [],
      singleVideoCard: [],
      signup: [],
      login: [],
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
      signup: (data) => {
        const store = getStore();
        fetch(`https://3001-jbritton2343-plfront-gy85ddko12s.ws-us84.gitpod.io/api/signup`, {
          method: "POST",
          headers: { "Content-type": "application/json", "mode": "no-cors" },
          body: JSON.stringify(data),
        })
          .then((res) => {
            if (res.status === 409)
              throw new Error(
                "The email address already exists. Please login to your account to continue."
              );
            return res.json();
          })
          .then((data) => {
            console.log("data ", data);
            getActions().setAlert({
              type: "success",
              msg: data.msg,
              show: true,
            });
            return true;
          })
          .catch((err) => err);
      },
      login: async (email, password) => {
        console.log("email: " + email, "password: " + password);
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        // fetch(BACKEND_URL + "/api/login", opts)
        //   .then((resp) => resp.json())
        //   .then((data) => console.log(data));
        try {
          const resp = await fetch(BACKEND_URL + "/api/login", opts);
          if (resp.status !== 200) {
            alert("An error has occurred");
            return false;
          }
          const data = await resp.json();
          console.log("this came from the backend", data);
          sessionStorage.setItem("token", data.access_token); //Access token needed here
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There has be an error logging in", error);
        }
      },

      get_power: () => {
        fetch(
          process.env.BACKEND_URL+"/api/Power"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ power: data });
          });
      },
      get_ram: () => {
        fetch(
          process.env.BACKEND_URL+"/api/RAM"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ RAM: data });
          });
      },
      get_cases: () => {
        fetch(
          process.env.BACKEND_URL + "/api/Cases"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ cases: data });
          });
      },
      get_case_fans: () => {
        fetch(
          process.env.BACKEND_URL + "/api/CaseFans"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ casefans: data });
          });
      },
      get_cpu_fans: () => {
        fetch(
          process.env.BACKEND_URL + "/api/CPUFan"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ cpufans: data });
          });
      },
      get_keyboards: () => {
        fetch(
          process.env.BACKEND_URL + "/api/Keyboards"
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
          process.env.BACKEND_URL + "/api/Motherboards"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ motherboards: data });
          });
      },
      get_processors: () => {
        fetch(
          process.env.BACKEND_URL + "/api/Processors"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ processors: data });
          });
      },
      get_storage: () => {
        fetch(
          process.env.BACKEND_URL + "/api/Storage"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ storage: data });
          });
      },
      get_videocards: () => {
        fetch(
          process.env.BACKEND_URL + "/api/GPUs"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setStore({ videocards: data });
          });
      },
      get_single_power: async (id) => {
        const resp = await fetch(
          `${process.env.BACKEND_URL}/api/power/${id}`
        );
        const store = getStore();
        try {
          const data = await resp.json();
          console.log(data);
          setStore({ singlePower: data });
          console.log(store);
        } catch (error) {
          console.log(error);
        }
      },
      get_single_case: async (id) => {
        const resp = await fetch(
          `${process.env.BACKEND_URL}/api/cases/${id}`
        );
        const store = getStore();
        try {
          const data = await resp.json();
          console.log(data);
          setStore({ singleCase: data });
          console.log(store);
        } catch (error) {
          console.log(error);
        }
      },
      get_single_casefan: async (id) => {
        const resp = await fetch(
          `${process.env.BACKEND_URL}/api/casefans/${id}`
        );
        const store = getStore();
        try {
          const data = await resp.json();
          console.log(data);
          setStore({ singleCasefan: data });
          console.log(store);
        } catch (error) {
          console.log(error);
        }
      },
      get_single_cpu_fan: async (id) => {
        const resp = await fetch(
          `${process.env.BACKEND_URL}/api/cpufans/${id}`
        );
        const store = getStore();
        try {
          const data = await resp.json();
          console.log(data);
          setStore({ singleCPUFan: data });
          console.log(store);
        } catch (error) {
          console.log(error);
        }
      },
      get_single_keyboard: async (id) => {
        const resp = await fetch(
          `${process.env.BACKEND_URL}/api/keyboards/${id}`
        );
        const store = getStore();
        try {
          const data = await resp.json();
          console.log(data);
          setStore({ singleKeyboard: data });
          console.log(store);
        } catch (error) {
          console.log(error);
        }
      },
      get_single_memory: async (id) => {
        const resp = await fetch(
          `${process.env.BACKEND_URL}/api/memory/${id}`
        );
        const store = getStore();
        try {
          const data = await resp.json();
          console.log(data);
          setStore({ singleMemory: data });
          console.log(store);
        } catch (error) {
          console.log(error);
        }
      },
      get_single_motherboard: async (id) => {
        const resp = await fetch(
          `${process.env.BACKEND_URL}/api/motherboards/${id}`
        );
        const store = getStore();
        try {
          const data = await resp.json();
          console.log(data);
          setStore({ singleSingle: data });
          console.log(store);
        } catch (error) {
          console.log(error);
        }
      },
      get_single_mouse: async (id) => {
        const resp = await fetch(
          `${process.env.BACKEND_URL}/api/mice/${id}`
        );
        const store = getStore();
        try {
          const data = await resp.json();
          console.log(data);
          setStore({ singleMouse: data });
          console.log(store);
        } catch (error) {
          console.log(error);
        }
      },
      get_single_processor: async (id) => {
        const resp = await fetch(
          `${process.env.BACKEND_URL}/api/processors/${id}`
        );
        const store = getStore();
        try {
          const data = await resp.json();
          console.log(data);
          setStore({ singleProcessor: data });
          console.log(store);
        } catch (error) {
          console.log(error);
        }
      },
      get_single_storage: async (id) => {
        const resp = await fetch(
          `${process.env.BACKEND_URL}/api/storage/${id}`
        );
        const store = getStore();
        try {
          const data = await resp.json();
          console.log(data);
          setStore({ singleStorage: data });
          console.log(store);
        } catch (error) {
          console.log(error);
        }
      },
      get_single_videocard: async (id) => {
        const resp = await fetch(
          `${process.env.BACKEND_URL}/api/gpus/${id}`
        );
        const store = getStore();
        try {
          const data = await resp.json();
          console.log(data);
          setStore({ singleVideoCard: data });
          console.log(store);
        } catch (error) {
          console.log(error);
        }
      },
      
    },
  };
};

export default getState;
