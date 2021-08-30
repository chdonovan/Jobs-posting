import React, { useState } from 'react';
import map from '../../assets/images/map-img-placeholder.png';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import {useMutation} from '@apollo/client';
import { REMOVE_JOB } from '../../utils/mutations';


const MyJobs = () => {
    const { data } = useQuery(QUERY_ME);
    const [jobs, setJobs
    ] = useState(data.me.jobs || []);
   const [removeJob] = useMutation(REMOVE_JOB);


    const handleDeleteBtn = async (event, jobId) => {
        event.preventDefault();
        console.log(jobId);
        const updatedJobs = await removeJob(jobId);
        console.log(updatedJobs);
        setJobs(updatedJobs);
        

    }

    return (
      <div>
        {jobs &&
          jobs.map((job) => (
            <div key={job._id} className='mt-5 w-full md:w-9/12 m-auto'>
              <div className='flex border border-gray-200 shadow-lg sm:rounded-lg sm:overflow-hidden'>
                <div className='flex-1 px-4 py-5 bg-white space-y-6 sm:p-6'>
                  <div>
                    <div className='flex justify-between block text-xl font-medium text-gray-700'>
                      <p>{job.title}</p>
                      <p className='cust-font'>${job.price}</p>
                    </div>
                    <div className='mt-1 flex'>
                      <div>
                        <div className='flex mt-2 w-40'>
                          <span className='inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100'>
                            <svg
                              className='h-full w-full text-gray-300'
                              fill='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                            </svg>
                          </span>
                          <p className='flex items-center cust-font ml-3'>
                            {job.firstName}
                            {job.lastName}
                          </p>
                        </div>
                        <p className='mt-2 text-sm text-gray-500'>
                          ✔ Verified user
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          (512)-555-2233
                        </p>
                      </div>
                      <div
                        className='
                        flex-initial mt-1 block w-full sm:text-sm border
                        border-gray-200 rounded-lg'
                      >
                        <p className='py-2 px-3 text-gray-800'>
                          {job.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='flex justify-between'>
                    <div className='flex text-xs cust-font'>
                      <p className='flex items-end'>Date posted: 8-23-2021</p>
                    </div>
                    <div className='flex items-center'>
                      <button
                        type='button'
                        className='btn-main-red py-2.5 px-5 border border-none shadow-md rounded-lg text-sm leading-4 font-bold text-gray-700 focus:outline-none focus:ring-none'
                        onClick={(event) => handleDeleteBtn(event, job._id)}
                        id={job._id}
                      >
                        Delete this job
                      </button>
                    </div>
                  </div>
                </div>

                <div className='m-auto mr-5 map'>
                  <img alt='map' src={map} className='rounded-lg h-auto w-44' />
                </div>
              </div>
            </div>
          ))}
      </div>
    );
}

export default MyJobs;