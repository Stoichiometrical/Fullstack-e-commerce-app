import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';



export default function Navbar(){
    return(
        <>
            <div className="navbar">
                <div className="wrapper">
                    <div className="search">
                        <input type="text" placeholder="Search....." className=""/>
                        <SearchOutlinedIcon/>
                    </div>
                    <div className="items">
                        <div className="item">
                            <LanguageOutlinedIcon/>
                            English
                        </div>
                        <div className="item">
                            <DarkModeOutlinedIcon/>
                        </div>

                        <div className="item">
                            <FullscreenExitIcon/>
                        </div>

                        <div className="item">
                            <NotificationsNoneOutlinedIcon/>
                            <div className="counter">2</div>
                        </div>

                        <div className="item">
                            <ChatBubbleOutlineOutlinedIcon/>
                            <div className="counter">1</div>
                        </div>

                        <div className="item">
                            <ListOutlinedIcon/>
                        </div>

                        <div className="item">
                            <img src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=600" className="avatar" alt="Missing"/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}