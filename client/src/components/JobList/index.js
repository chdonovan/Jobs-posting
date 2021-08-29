import React, { useState, Fragment, useRef } from 'react';
import map from '../../assets/images/map-img-placeholder.png';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';

const JobList = ({ jobs }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeButtonRef = useRef(null);

  const handleFormSubmit = async (event) => {
    try {
      setModalOpen(true);
    } catch (e) {
      console.error(e);
    }
  };

  if (!jobs.length) {
    return <h3>No Jobs availible at this moment.</h3>;
  }

  return (
    <div>
      {jobs &&
        jobs.map((job) => (
          <div>
            <div key={job._id} className='mt-5 w-full md:w-9/12 m-auto'>
              <div className='bg-white flex border border-gray-200 shadow-lg sm:rounded-lg sm:overflow-hidden'>
                <div className='flex-1 px-4 py-5 space-y-6 sm:p-6'>
                  <div>
                    <div className='flex justify-between block text-xl font-medium text-gray-700'>
                      <p>{job.title}</p>
                      <p className='cust-font'>{job.price}</p>
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
                        onClick={handleFormSubmit}
                        type='button'
                        className='btn-main-yellow py-2.5 px-5 border border-none shadow-md rounded-lg text-sm leading-4 font-bold text-gray-700 focus:outline-none focus:ring-none'
                      >
                        Request this job
                      </button>
                      <button
                        type='button'
                        className='ml-2 bg-gray-300 py-2 px-3 border border-none shadow-md rounded-lg leading-4 hover:bg-gray-400 focus:outline-none focus:ring-none'
                      >
                        <BsFillEnvelopeFill className='h-5 w-5 text-gray-600' />
                      </button>
                    </div>
                  </div>
                </div>

                <div className='m-auto mr-5 map'>
                  <img alt='map' src={map} className='rounded-lg h-auto w-44' />
                </div>
              </div>
            </div>
            <Transition.Root show={modalOpen} as={Fragment}>
              <Dialog
                as='div'
                className='fixed z-10 inset-0 overflow-y-auto'
                initialFocus={closeButtonRef}
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
                              Requested!
                            </Dialog.Title>
                            <div className='mt-2'>
                              <p className='text-sm text-gray-500'>
                                Your successfully requested this job.
                                <br />
                                Please wait for the job creator to reach out to
                                you.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:justify-center'>
                        <button
                          type='button'
                          className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                          onClick={() => setModalOpen(false)}
                          ref={closeButtonRef}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>
          </div>
        ))}
    </div>
  );
};

export default JobList;
