import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

export default function Single(){
    return(
        <>
            <div className="single">
                <Sidebar/>
                <div className="singleContainer">
                    <Navbar/>
                    <div className="top">
                        <div className="left">
                            <div className="editButton">Edit</div>
                            <h1 className="title">Information</h1>
                            <div className="item">
                                <img className="itemImg" src="https://images.pexels.com/photos/12581576/pexels-photo-12581576.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=loadd" alt="Missing"/>
                                <div className="details">
                                    <h1 className="detailName">David Peters</h1>
                                    <div className="detailItem">
                                        <span className="itemKey">Email: </span>
                                        <span className="itemValue">dpet@gmail.com</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Phone:</span>
                                        <span className="itemValue">+230 58417209</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Address:</span>
                                        <span className="itemValue">34 Lanio, Brankenstate</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Country:</span>
                                        <span className="itemValue">Germany</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="right">
                            <Chart  aspect={2} title="User Spending (Last Six Months)"/>

                        </div>

                    </div>
                    <div className="bottom">
                        <h1 className="title">Last Transactions</h1>
                        <List/>
                    </div>
                    </div>
            </div>
        </>
    )
}