import React, {useState} from 'react'
import map from '../assets/images/lg-map-placeholder.jpg'
import {useMutation} from '@apollo/client'
import { ADD_JOB } from '../utils/mutations'

const JobPosting = () => {

  const [formState, setFormState] = useState({
    title: '',
    price: '',
    description: '',
  });

  const [addJob] = useMutation(ADD_JOB);

  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    console.log(formState, 'test123');

    try {
      const { data } = await addJob({
        variables: { ...formState },
      });
      console.log(data, 'TEST');

      setFormState({
        title: '',
        price: '',
        description: '',
      });

    } catch (e) {
      console.error(e);
    }
  };





  return (
    <div>
      <form onSubmit={handleFormSubmit} action='#' method='POST'>
        <div className='mt-5 w-full md:w-9/12 m-auto'>
          <div className='job-details'>
            <div className='flex'>
              <div className='w-2/12'>
                <p className='text-center font-bold text-lg text-gray-700 mx-5 py-0.5 rounded-xl shadow-md bg-cust-yellow'>
                  01.
                </p>
                <div className='py-4 flex divide-x-4 divide-gray-200 h-full'>
                  <div className='flex-1'></div>
                  <div className='flex-1'></div>
                </div>
              </div>

              <div className='my-2 w-full mx-auto'>
                <p className='font-bold text-gray-700'>JOB DETAILS</p>
                <p className='text-gray-500 mt-1'>Add a detailed description</p>
                <div className=''>
                  <div className='flex mt-5'>
                    <div className='flex-1 mr-3'>
                      <label
                        htmlFor='title'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Title
                      </label>
                      <div className='mt-1'>
                        <input
                          type='text'
                          name='title'
                          id='title'
                          className='focus:ring-gray-400 focus:border-gray-400  w-full rounded-none rounded-md sm:text-sm border-gray-300'
                          placeholder='Job title'
                          value={formState.title}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='flex-1 ml-3'>
                      <label
                        htmlFor='price'
                        className='text-sm font-medium text-gray-700'
                      >
                        Price
                      </label>
                      <input
                        type='text'
                        name='price'
                        id='price'
                        className='focus:ring-gray-400 focus:border-gray-400 w-full rounded-none rounded-md sm:text-sm border-gray-300'
                        placeholder='Set your price'
                        value={formState.price}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='w-full mt-3'>
                    <label
                      htmlFor='description'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Description
                    </label>
                    <div className='mt-1'>
                      <textarea
                        id='description'
                        name='description'
                        rows={3}
                        className='shadow-sm focus:ring-gray-400 focus:border-gray-400 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                        placeholder=''
                        value={formState.description}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>

          <div className='location mt-10'>
            <div className='flex'>
              <div className='w-2/12'>
                <p className='text-center font-bold text-lg text-gray-700 mx-5 py-0.5 rounded-xl shadow-md bg-gray-300'>
                  02.
                </p>
                <div className='py-4 flex divide-x-4 divide-gray-200 h-full'>
                  <div className='flex-1'></div>
                  <div className='flex-1'></div>
                </div>
              </div>
              <div className='my-2 w-full mx-auto'>
                <p className='font-bold text-gray-700'>LOCATION</p>
                <p className='text-gray-500 mt-1'>
                  Choose on map where the job is located
                </p>
                <div className=''>
                  <div className='mt-5 w-full '>
                    <div className='relative h-56 border border-gray-200 sm:rounded-lg sm:overflow-hidden'>
                      <img className='lg-map-placeholder' src={map} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='payment mt-10'>
            <div className='flex'>
              <div className='w-2/12'>
                <p className='text-center font-bold text-lg text-gray-700 mx-5 py-0.5 rounded-xl shadow-md bg-gray-300'>
                  03.
                </p>
                <div className='py-4 flex divide-x-4 divide-gray-200 h-full'>
                  <div className='flex-1'></div>
                  <div className='flex-1'></div>
                </div>
              </div>

              <div className='my-2 w-full mx-auto'>
                <p className='font-bold text-gray-700'>PAYMENT METHOD</p>
                <p className='text-gray-500 mt-1'>How would you like to pay?</p>
                <div className=''></div>
              </div>
            </div>
          </div>

          <div className='submit mt-5'>
            <div className='flex items-center'>
              <div className='w-2/12'>
                <p className='text-center font-bold text-lg text-gray-700 mx-5 py-0.5 rounded-xl shadow-md bg-gray-300'>
                  04.
                </p>
              </div>

              <div className='flex w-full'>
                <button
                  type='submit'
                  className='my-2 mx-auto  text-center font-bold text-gray-700 btn-main-orange py-2 px-24 rounded-xl shadow-lg hover:bg-red-400'
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default JobPosting