import {Logo} from "../../components/logo/Logo.tsx";
import {Link, useLocation} from "react-router-dom";
import {ChatsIcon, CoursesIcon, DashboardIcon, NotificationsIcon, ProfileIcon, SearchIcon} from "../../assets";

export const Header = () => {
  const location = useLocation()

  return (
    <header className={`flex items-center justify-between py-10 pr-[80px] ${location.pathname !== '/' && 'bg-[linear-gradient(to_right,_#96B1DD,_#515F77)]'}`}>
      <Logo />
      {location.pathname === '/' && (
        <button className="py-[17px] px-[22px] rounded-[12px] uppercase bg-[#313131] text-[#F9FAFB] z-10">
          Завантажити додаток
        </button>
      )}
      {location.pathname !== '/' && (
        <div className="flex items-center px-[15px] py-[5px] bg-[#F9FAFB14] rounded-[16px]">
          <Link to={'/dashboard'} className={`flex items-center gap-[6px] py-[5px] px-[10px] rounded-[12px] ${location.pathname === '/dashboard' && 'bg-[#F9C74F]'}`}>
            <DashboardIcon />
            <span className="text-[14px] font-bold text-[#F9FAFB]">Дашборд</span>
          </Link>
          <Link to={'/'} className="flex items-center gap-[6px] py-[5px] px-[10px] rounded-[12px]">
            <CoursesIcon />
            <span className="text-[14px] text-[#F9FAFB]">Курси</span>
          </Link>
          <Link to={'/'} className="flex items-center gap-[6px] py-[5px] px-[10px] rounded-[12px]">
            <ChatsIcon />
            <span className="text-[14px] text-[#F9FAFB]">Чати</span>
          </Link>
        </div>
      )}
      {location.pathname !== '/' && (
        <div className="flex items-center">
          <button className="p-[10px] rounded-[16px] bg-[#F9FAFB14]">
            <SearchIcon />
          </button>
          <button className="p-[10px] rounded-[16px] bg-[#F9FAFB14] ml-[10px]">
            <NotificationsIcon />
          </button>
          {location.pathname !== '/profile' && (
            <Link to={'/profile'} className="p-[10px] rounded-[16px] bg-[#F9FAFB14] ml-[58px]">
              <ProfileIcon />
            </Link>
          )}
        </div>
      )}
    </header>
  )
}