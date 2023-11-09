import { MdTextFields } from 'react-icons/md';

const Settings = () => {
  return (
    <div className="hidden p-3 m-3 text-sm font-semibold bg-white rounded-lg h-60 lg:block lg:col-start-9 lg:col-end-11 dark:bg-darkBlack dark:text-gray-200">
      <div className="mb-3 font-bold text-primary dark:text-lighter">
        <MdTextFields size={20} className="inline mr-2" />
        Settings
      </div>

      <div className="flex flex-col gap-3 pb-3">
        Paragraph font size
        <input
          type="range"
          className="cursor-pointer accent-primary"
          min="10"
          max="30"
        />
      </div>

      <div className="flex flex-col gap-3 pb-4">
        <label>Choose Vitamin</label>
        <select className="p-3 rounded-lg bg-slate-200 dark:bg-darkBlackSecondary">
          <option value="Vitamin A">Vitamin A</option>

          <option value="Vitamin B">Vitamin B</option>

          <option value="Vitamin C">Vitamin C</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        <label
          className="inline-block pl-[0.15rem] hover:cursor-pointer"
          htmlFor="flexSwitchCheckDefault"
        >
          Turn off subtitle
        </label>
        <input
          className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] dark:bg-darkBlackSecondary bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]  dark:after:bg-neutral-400 dark:checked:bg-lighter dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
      </div>
    </div>
  );
};

export default Settings;
