'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Tab } from '@headlessui/react';

import SearchIcon from './header/SearchIcon';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function FoodSelector() {
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

  return (
    <div className="flex-col items-center hidden col-span-2 gap-4 px-3 m-3 bg-white rounded-lg h-[40rem] lg:flex dark:bg-darkBlack dark:text-gray-200">
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
        <div className="relative flex items-center justify-center w-full ml-auto lg:ml-0">
          <input
            type="text"
            className="hidden w-full p-3 text-sm placeholder-black rounded-lg outline-gray-300 outline outline-1 lg:block focus:outline-primary focus:outline-2 dark:bg-darkBlackSecondary dark:outline-lighter dark:placeholder-gray-200"
            placeholder="Search By Fruit Name"
          />
          <span className="mr-5 lg:mr-0 lg:absolute lg:right-2">
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
  );
}
