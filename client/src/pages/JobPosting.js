import React, { useState, Fragment, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';
//import map from '../assets/images/lg-map-placeholder.jpg'
import {useMutation} from '@apollo/client'
import { ADD_JOB } from '../utils/mutations'

const JobPosting = () => {

  const [formState, setFormState] = useState({
    title: '',
    price: '',
    description: '',
    location: ''
  });

  const [modalOpen, setModalOpen] = useState(false);
  const newPostButtonRef = useRef(null);

  const [addJob, {error}] = useMutation(ADD_JOB);

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
        location: ''
      });

      setModalOpen(true)

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
                  <div className='flex mt-5 items-center'>
                    <div className='flex-1 mr-3'>
                      <label
                        htmlFor='title'
                        className=' text-sm font-medium text-gray-700'
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
                      <div className='mt-1 flex rounded-md shadow-sm'>
                        <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                          $
                        </span>
                        <input
                          type='text'
                          name='price'
                          id='price'
                          className='focus:ring-gray-400 focus:border-gray-400 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300'
                          placeholder='Set your price'
                          value={formState.price}
                          onChange={handleChange}
                        />
                      </div>
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
                  Enter the Address of the Job
                </p>
                <div className=''>
                  <div className='mt-1'>
                    <textarea
                      id='location'
                      name='location'
                      rows={3}
                      className='shadow-sm focus:ring-gray-400 focus:border-gray-400 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                      placeholder=''
                      value={formState.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center'>
            <div className='w-2/12'></div>
            {error && (
              <div className='flex mx-auto text-red-700 text-center text-sm'>
                Please fill out all the fields
              </div>
            )}
          </div>

          <div className='submit mt-5'>
            <div className='flex items-center'>
              <div className='w-2/12'>
                <p className='text-center font-bold text-lg text-gray-700 mx-5 py-0.5 rounded-xl shadow-md bg-gray-300'>
                  03.
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

      <Transition.Root show={modalOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed z-10 inset-0 overflow-y-auto'
          initialFocus={newPostButtonRef}
          onClose={setModalOpen}
        >
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10'>
                      <CheckIcon
                        className='h-6 w-6 text-green-600'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-lg leading-6 font-medium text-gray-900'
                      >
                        Success!
                      </Dialog.Title>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-500'>
                          Your post has been successfully created. You can now
                          safely go to the Home page or create another listing
                          if you wish.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                  <button
                    type='button'
                    className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 btn-cust-orange text-base font-bold text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm'
                    onClick={() => setModalOpen(false)}
                    ref={newPostButtonRef}
                  >
                    Create Another
                  </button>
                  <NavLink
                    exact
                    to='/'
                    className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-bold text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                    replace
                  >
                    Home Page
                  </NavLink>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default JobPosting