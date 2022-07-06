import React,{Component} from "react";
import axios from "axios";
 class DoctorList1 extends Component{

    constructor(props){
        super(props);

        this.state ={
            lists:[]
        }
     
    
    }
    
    

    refreshList()
    {
        axios.get("https://localhost:44374/Api/Admin/DoctorList")
                            .then(res => { 
            this.setState({lists:res.data});
            console.log(this.state.lists)
        })
    }

    componentDidMount()
    {
        this.refreshList();
    }
    render(){

        const lists= this.state.lists
        
       /*  [{"ID":1,"DID":"DOC01","DocterName":"Doc1","DocterType":"Cardiologist","ContactNo":90876541,"EmailId":"test mail","Gender":"Female","password":"1234"},{"ID":2,"DID":"DOC02","DocterName":"Doc1","DocterType":"Neurologist","ContactNo":9087654,"EmailId":"test mail","Gender":"Female","password":"123"}]; */
        
return(
        <div>
            
            <table className="table  table-striped">
                <thead>
                 <tr>
                    <th>
                    Doctor Id
                    </th>
                    <th>
                        Doctor name
                    </th>
                    <th>
                        Options
                    </th>
                 </tr>
                   
                </thead>
                <tbody>
                    {this.state.lists.map(data =>
                        <tr key={data.DID}>
                            <td>{data.DID}</td>
                            <td>{data.DocterName}</td>
                        </tr>
                        )}
                        
                </tbody>
            </table>
        </div>
)
    }
}

export default DoctorList1