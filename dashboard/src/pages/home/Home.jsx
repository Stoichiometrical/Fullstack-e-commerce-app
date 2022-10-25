import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";
import List from "../../components/table/Table";


export default function Home(){
    return(
        <>
            <div className="home">
             <Sidebar/>
               <div className="homeContainer">
                   <Navbar/>
                 <div className="widgets">
                     <Widget type="user"/>
                     <Widget type="order" />
                     <Widget type="earnings" />
                     <Widget type="balance" />
                 </div>
                   <div className="charts">
                       <Featured/>
                       <Chart title="LAST SIX MONTHS (REVENUE)" aspect={2}/>
                   </div>
                   <div className="listContainer">
                       <div className="listTitle">Latest Transactions</div>
                       <List/>
                   </div>

               </div>
            </div>
        </>
    )
}