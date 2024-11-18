import React, { useEffect, useState } from 'react';
import { getLocalStorage } from '../../utils/LocalStorage';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({ user, data }) => {
  const [employeeData, setEmployeeData] = useState(data);

  useEffect(() => {
    const { employees } = getLocalStorage();
    const updatedEmployeeData = employees.find((e) => e.email === data.email);
    setEmployeeData(updatedEmployeeData);
  }, [data]);

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header user={user} data={employeeData} />
      <TaskListNumbers data={employeeData} />
      <TaskList data={employeeData} />
    </div>
  );
};

export default EmployeeDashboard;
