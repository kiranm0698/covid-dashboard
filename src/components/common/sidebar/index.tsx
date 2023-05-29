import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const handleSidebarToggle = () => {
    const sidebar = document.getElementById("logo-sidebar");
    if (sidebar?.classList.contains("-translate-x-full")) {
      sidebar?.classList.remove("-translate-x-full");
      sidebar?.classList.add("transform-none");
    } else {
      sidebar?.classList.add("-translate-x-full");
      sidebar?.classList.remove("transform-none");
    }
  };

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/contacts"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={handleSidebarToggle}
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-9 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM20 17H24V19H20V17ZM17 12H24V14H17V12ZM19 7H24V9H19V7Z"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Contacts</span>
            </Link>
          </li>
          <li>
            <Link
              to="/charts-and-maps"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={handleSidebarToggle}
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-9 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3V19H21V21H3V3H5ZM20.2929 6.29289L21.7071 7.70711L16 13.4142L13 10.415L8.70711 14.7071L7.29289 13.2929L13 7.58579L16 10.585L20.2929 6.29289Z"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">
                Charts and Maps
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
