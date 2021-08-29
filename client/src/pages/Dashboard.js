import React from 'react';
import JobList from '../components/JobList'
// import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { useQuery } from '@apollo/client';
import { QUERY_JOBS } from '../utils/queries';


const Dashboard = () => {

  const { loading, data } = useQuery(QUERY_JOBS);
  const jobs = data?.jobs || []
  console.log(jobs)


  return (
    <div>
      <div>
        {/* <Breadcrumb>
          <Breadcrumb.Item href='#'>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item href='#'>Category</Breadcrumb.Item>
          <Breadcrumb.Item active>Moving</Breadcrumb.Item>
        </Breadcrumb> */}
      </div>
      <div>
        {loading ? (
          <div>Loading...</div>
         ) : ( 
          <JobList jobs={jobs} />
         )}
      </div>
    </div>
  );
};

export default Dashboard;
