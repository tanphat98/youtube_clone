import MenuIcon from '@material-ui/icons/Menu';
import React from 'react'
import './head.scss'
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
function Header() {
    return (
        <section className="Header">
            <div className="row">
                <div className="col-2">
                    <div className="HeaderLeft">
                        <div className="HeaderLeft__menu">
                            <MenuIcon className="HeaderLeft__menu--icon" />
                        </div>
                        <div className="HeaderLeft__logo">
                            <img src="https://www.thietkemyb.com.vn/wp-content/uploads/2020/11/yt-0-740x520-740x520.png"/>    
                        </div> 
                    </div>     
                </div>
                <div className="col-8">
                    <div className="HeaderCenter">
                        <div className="HeaderCenter__search">
                            <input type="text" placeholder="Tìm kiếm"/>
                            <button>
                                <SearchIcon className="HeaderCenter__search--icon"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                <div className="HeaderRight">
                    <button>
                        <VideoCallIcon />
                    </button>
                    <button>
                        <AppsIcon />
                    </button>
                    <button>
                        <NotificationsIcon />
                    </button>
                    <button>P</button>
                </div>
                </div>
            </div>
                {/* <div className="HeaderLeft">
                    <div className="HeaderLeft__menu">
                        <MenuIcon className="HeaderLeft__menu--icon" />
                    </div>
                    <div className="HeaderLeft__logo">
                        <img src="https://www.thietkemyb.com.vn/wp-content/uploads/2020/11/yt-0-740x520-740x520.png"/>    
                    </div> 
                </div>
                <div className="HeaderCenter">
                    <div className="HeaderCenter__search">
                        <input type="text" placeholder="Tìm kiếm"/>
                        <button>
                            <SearchIcon className="HeaderCenter__search--icon"/>
                        </button>
                    </div>
                </div>
                <div className="HeaderRight">
                    <button>
                        <VideoCallIcon />
                    </button>
                    <button>
                        <AppsIcon />
                    </button>
                    <button>
                        <NotificationsIcon />
                    </button>
                    <button>P</button>
                </div> */}
        </section>
    )
}

export default Header
