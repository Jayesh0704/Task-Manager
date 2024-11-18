import React, { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  const Authdata = useContext(AuthContext);
  const [user, setuser] = useState(null);
  const [LoggedInUserData, setLoggedInUserData] = useState(null)

   
  useEffect(() => {
    
    setLocalStorage();
    getLocalStorage();
    const LoggedInUser = localStorage.getItem("LoggedInUser");
    
    if (LoggedInUser)
      { 
       const userdata= JSON.parse(LoggedInUser);
      
       setuser(userdata.role);
       setLoggedInUserData(userdata.data)

      }
  }, [Authdata]);

  const getEmailandPassword = (email, password) => {
    if (
      Authdata &&
      Authdata.admin.find((e) => e.email == email && e.password == password)
    ) {
      setuser("admin");
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: "admin" }));
    } else if (Authdata)
     {
      const employee=Authdata.employees.find((e) => e.email == email && e.password == password)
      if (employee){
        
         setuser("employee");
         setLoggedInUserData(employee);

         localStorage.setItem(
          "LoggedInUser",
          JSON.stringify({ role: "employee",data:employee })
        );
      }
     
    } else alert("abe gandu thik se bhar form");
  };

  return (
    <>
      {!user ? <Login getEmailandPassword={getEmailandPassword} /> : ""}
      {user == "admin" ? <AdminDashboard  user={setuser}/> : ""}
      {user == "employee" ? <EmployeeDashboard  data={LoggedInUserData} user={setuser} /> : ""}
    </>
  );
};

export default App;
