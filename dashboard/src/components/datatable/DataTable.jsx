import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {userColumns , userRows} from "../../datatablesource";
import {Link} from "react-router-dom";
export default function DataTable(){
    const actionColumn = { field : "action" , headerName : "Action", width : 200 , renderCell : ()=>{
        return(
            <div className="cellAction">
                <Link to ="/users/test" style={{textDecoration : "none"}}><div className="viewButton">View</div></Link>
                <Link to ="/" style={{textDecoration : "none"}}> <div className="deleteButton">Delete</div></Link>
            </div>
        )
        }}

    return(
        <>

            <div style={{ height: 500, width: '100%' }} className="datatable">
                <div className="datatableTitle">
                    Users
                    <Link to ="/users/new" style={{textDecoration : "none"}} className="add">Add New </Link>
                </div>
                <DataGrid
                    className="dataGrid"
                    rows={userRows}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                    checkboxSelection
                />
            </div>
        </>
    )
}