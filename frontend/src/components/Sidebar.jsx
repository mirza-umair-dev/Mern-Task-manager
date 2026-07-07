import React, { useContext } from 'react'
import { sidebarItems,UsersidebarItems } from '../utils/sidebarData'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider';
import { FaRegCircleUser } from "react-icons/fa6";
const Sidebar = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    clearUser();
    navigate('/auth/login')

    
  }
  return (
    <div className='flex flex-col px-3 py-6 bg-gray-50 h-full border-r border-gray-100'>

      <div className='flex items-center flex-col gap-4 pb-6 border-b border-gray-200'>
        <div className='w-16 h-16 rounded-full flex items-center justify-center ring-2 ring-offset-2 ring-blue-100'>
          {user?.user.profileImgUrl ? (
            <img
            src={user.user.profileImgUrl}
            alt="Profile"
            className="w-16 h-16 object-cover rounded-full shadow-sm"
          />) : (<div className='font-bold text-3xl w-16 h-16 text-green-700 bg-green-100 flex items-center justify-center rounded-full shadow-sm'>
            {user.user.name[0].toUpperCase()}
          </div>)}
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
          {user?.user.role === 'admin' ? <h5 className='bg-blue-500 rounded-full text-[10px] font-semibold tracking-wide uppercase text-white px-3 py-1' > Admin</h5> : <h5 className='bg-gray-200 rounded-full text-[10px] font-semibold tracking-wide uppercase px-3 py-1 text-center text-gray-600'>User</h5>}
          <h3 className='text-md font-semibold text-gray-900'>{user?.user.name}</h3>
          <p className='text-gray-400 text-xs'>{user?.user.email}</p>
        </div>
      </div>



      <div className='flex flex-col gap-1 mt-4'>

      {user?.user.role === 'admin' ? 
      (
        sidebarItems.map((item, index) => {
          const Icon = item.icon;
          if (item.action == 'logout') {
            return (
              <button
                key={index}
                onClick={handleLogout}
                className='flex items-center gap-4 px-3 py-3 mt-4 rounded-md hover:bg-red-50 text-red-500 hover:text-red-700 active:scale-[0.98] transition-all duration-200'
              >
                <Icon className='text-xl' />
                <span className='text-sm font-medium'>{item.title}</span>
              </button>
            );
          }

          return (

            
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-3 py-2.5 rounded-lg transition-all duration-200 active:scale-[0.98] ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 shadow-sm font-semibold'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/60'
                }`
              }
            >
              <Icon className='text-xl' />
              <span className='text-sm font-medium'>{item.title}</span>
            </NavLink>
          )
        })
      ) : 
      (
        UsersidebarItems
        .map((item, index) => {
          const Icon = item.icon;
          if (item.action == 'logout') {
            return (
              <button
                key={index}
                onClick={handleLogout}
                className='flex items-center gap-4 px-3 py-3 mt-4 rounded-md hover:bg-red-50 text-red-500 hover:text-red-700 active:scale-[0.98] transition-all duration-200'
              >
                <Icon className='text-xl' />
                <span className='text-sm font-medium'>{item.title}</span>
              </button>
            );
          }

          return (

            
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-3 py-2.5 rounded-lg transition-all duration-200 active:scale-[0.98] ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 shadow-sm font-semibold'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/60'
                }`
              }
            >
              <Icon className='text-xl' />
              <span className='text-sm font-medium'>{item.title}</span>
            </NavLink>
          )
        })
      )}
      </div>

    </div>
  )
}

export default Sidebar