'use client';

import Image from 'next/image';

import { MdOutlineMenu } from 'react-icons/md';
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition, Tab } from '@headlessui/react';
import SearchIcon from './SearchIcon';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const MenuIcon = () => {
  let [categories] = useState({
    Fruits: [
      {
        id: 1,
        name: 'Oranges',
        image: '/oranges.png',
        vitamin: 'Vitamin A',
      },
      {
        id: 2,
        name: 'Apples',
        image: '/apples.png',
        vitamin: 'Vitamin B',
      },
    ],
    Vegetables: [
      {
        id: 1,
        name: 'Cucumbers',
        image: '/cucumbers.png',
        vitamin: 'Vitamin C',
      },
      {
        id: 2,
        name: 'Carrots',
        image: '/carrots.png',
        vitamin: 'Vitamin D',
      },
    ],
  });
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  return (
    <>
      <MdOutlineMenu
        size={40}
        className="p-1 text-black transition duration-500 bg-gray-200 rounded-lg cursor-pointer hover:text-white hover:bg-primary"
        onClick={() => setOpen(!open)}
      />
      <Transition.Root show={open} as={Fragment} className="lg:hidden">
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl dark:bg-darkBlack sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="px-4 pt-5 pb-4 bg-white dark:bg-darkBlack sm:p-6 sm:pb-4">
                    <div className=" items-center justify-center lg:hidden gap-4 px-3 m-3 bg-white rounded-lg h-[40rem] flex-col dark:bg-darkBlack dark:text-gray-200">
                      <Tab.Group>
                        <Tab.List className="flex w-full p-1 m-3 space-x-1 border rounded-xl dark:bg-darkBlackSecondary border-primary dark:border-gray-200">
                          {Object.keys(categories).map((category) => (
                            <Tab
                              key={category}
                              className={({ selected }) =>
                                classNames(
                                  'w-full rounded-lg py-3 text-sm font-medium leading-5 text-black dark:text-white',

                                  selected
                                    ? 'bg-lighter text-primary dark:text-primary outline-none'
                                    : 'text-black  hover:text-primary dark:hover:text-primary'
                                )
                              }
                            >
                              {category}
                            </Tab>
                          ))}
                        </Tab.List>
                        <div className="relative flex items-center justify-center w-full ml-0">
                          <input
                            type="text"
                            className="w-full p-3 text-sm placeholder-black rounded-lg lg:hidden outline-gray-300 outline outline-1 focus:outline-primary focus:outline-2 dark:bg-darkBlackSecondary dark:outline-lighter dark:placeholder-gray-200"
                            placeholder="Search By Fruit Name"
                          />
                          <span className="absolute mr-0 right-2">
                            <SearchIcon />
                          </span>
                        </div>
                        <Tab.Panels className="mt-2">
                          {Object.values(categories).map((items, idx) => (
                            <Tab.Panel key={idx}>
                              <ul className="flex flex-col gap-3">
                                {items.map((item) => (
                                  <li
                                    key={item.id}
                                    className="relative grid items-center justify-center grid-cols-3 p-3 rounded-md hover:bg-primary/30"
                                  >
                                    <Image
                                      src={item.image}
                                      width={50}
                                      height={50}
                                      alt={item.name}
                                      className="col-span-1"
                                    />
                                    <div className="pl-3">
                                      <h3 className="text-sm font-medium leading-5 ">
                                        {item.name}
                                      </h3>
                                      <h4 className="text-xs leading-5 w-max">
                                        {item.vitamin}
                                      </h4>

                                      <a
                                        href="#"
                                        className={classNames(
                                          'absolute inset-0 rounded-md ',
                                          'ring-primary focus:z-10 focus:outline-none focus:ring-2 '
                                        )}
                                      />
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </Tab.Panel>
                          ))}
                        </Tab.Panels>
                      </Tab.Group>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 dark:bg-darkBlack sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto dark:bg-primary "
                      onClick={() => setOpen(false)}
                    >
                      Done
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto dark:bg-darkBlackSecondary dark:text-white"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default MenuIcon;
