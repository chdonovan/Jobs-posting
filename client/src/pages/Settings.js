import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';

//import Settings from '../components/Settings';

/*
const Settings = () => {
  return (
    <div>
      <Settings />
    </div>
  );
};
*/
const Settings = () => {
  /*
  Add logic to settings
  Be able to grab the Users Email and Password and display it after they're logged in
  Add ability to edit the the Email and Password
  */
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-700">Account Info</h2>
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mt-8 space-y-6">
            <div>
              <label>Your Email</label>
              <label className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-gray-400 focus:border-gray-400 focus:z-10 sm:text-sm">
                test@gmail.com</label>
            </div>
          </div>
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mt-8 space-y-6">
            <div>
              <label>Your Password</label>
              <label className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-gray-400 focus:border-gray-400 focus:z-10 sm:text-sm">
                testPass</label>
            </div>
          </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-400 font-extrabold group relative w-80 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                    className="lock-icon h-5 w-5 text-white text-blue-500"
                    aria-hidden="true"
                  />
              </span>
              Edit Info
            </button>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Settings;
