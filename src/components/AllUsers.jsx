
import "../styles/allusers.css"
import axois from "axios"
import { useState, useEffect } from "react"

const url = "http://localhost:8080/api/v1/getall";

const deleteurl = "http://localhost:8080/api/v1/delete"

export default function AllUsers() {

    const [nextData, setNextData] = useState([]);

    useEffect(() => {
        axois.get(url).then((response) => {
            setNextData(response.data);
        })
    }, [])

    // function deleteUser(id) {
    //     axois.delete(deleteurl, { params: { id: id } }).then((response) => {
    //         console.log(response.data);
    //         setNextData(nextData.filter((data) => data.id !== id));
    //     })
    // }

    function deleteUser(id) {
        axois.delete(deleteurl, { params: { id: id } })
            .then((response) => {
                console.log(response.data);
                setNextData(nextData.filter((data) => data.id !== id));
            })
            .catch((error) => {
                console.error('Error deleting user:', error);
            });
    }


    return (
        <div className="root">
            <h1>User List</h1>
            {nextData ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            nextData.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.number}</td>
                                        <td><button className="edit">Edit</button></td>
                                        <td><button className="delete" onClick={() => deleteUser(data.id)}>Delete</button></td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}