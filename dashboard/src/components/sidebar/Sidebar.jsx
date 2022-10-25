import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import {Link} from "react-router-dom";

export default function Sidebar(){
    return(
        <>
            <div className="sidebar">
                <div className="top">
                    <Link to ="/" style={{textDecoration : "none"}}>
                        <span className="logo">Admin</span>
                    </Link>

                </div>
                <hr/>
                <div className="center">
                  <ul className="">
                      <p className="title">MAIN</p>

                      <Link to ="/" style={{textDecoration : "none"}}>
                          <li className="">
                              <DashboardIcon className="icon"/>
                              <span className="">Dashboard</span>
                          </li>
                      </Link>

                      <p className="title">LISTS</p>

                          <Link to ="/users" style={{textDecoration : "none"}}>
                              <li className="">
                              <PeopleAltIcon className="icon" />
                              <span className="">Users</span>
                              </li>
                          </Link>


                      <Link to ="/products" style={{textDecoration : "none"}}>
                          <li className="">
                              <StoreMallDirectoryIcon className="icon"/>
                              <span className="">Products</span>
                          </li>
                      </Link>


                      <Link to ="/orders" style={{textDecoration : "none"}}>
                          <li className="">
                              <CreditCardIcon className="icon"/>
                              <span className="">Orders</span>
                          </li>
                      </Link>

                      <Link to ="/delivery" style={{textDecoration : "none"}}>
                          <li className="">
                              <LocalShippingIcon className="icon"/>
                              <span className="">Delivery</span>
                          </li>
                      </Link>


                      <p className="title">USEFUL LINKS</p>


                      <Link to ="/stats" style={{textDecoration : "none"}}>
                          <li className="">
                              <InsertChartIcon className="icon"/>
                              <span className="">Stats</span>
                          </li>
                      </Link>


                      <Link to ="/notifications" style={{textDecoration : "none"}}>
                          <li className="">
                              <NotificationsIcon className="icon"/>
                              <span className="">Notifications</span>
                          </li>
                      </Link>


                      <p className="title">SERVICE</p>

                      <Link to ="/health" style={{textDecoration : "none"}}>
                           <li className="">
                              <SettingsSystemDaydreamIcon className="icon"/>
                              <span className="">System Health</span>
                           </li>
                      </Link>

                      <Link to ="/logs" style={{textDecoration : "none"}}>
                          <li className="">
                              <PsychologyIcon className="icon"/>
                              <span className="">Logs</span>
                          </li>
                      </Link>

                      <Link to ="/settings" style={{textDecoration : "none"}}>
                          <li className="">
                              <SettingsIcon className="icon"/>
                              <span className="">Settings</span>
                          </li>
                      </Link>



                      <p className="title">USER</p>

                      <Link to ="/profile" style={{textDecoration : "none"}}>
                          <li className="">
                              <PersonOutlineIcon className="icon"/>
                              <span className="">Profile</span>
                          </li>
                      </Link>


                      <Link to ="/logout" style={{textDecoration : "none"}}>
                          <li className="">
                              <LogoutIcon className="icon" />
                              <span className="">Log Out</span>
                          </li>
                      </Link>



                  </ul>
                </div>
                <div className="bottom">
                    <div className="colorOption"></div>
                    <div className="colorOption"></div>
                </div>
            </div>
        </>
    )
}