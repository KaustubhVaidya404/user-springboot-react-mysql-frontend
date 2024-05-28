

export default function CreateUser() {

    return (
        <div className="root">
            <h1 className="heading">Create User</h1>
            <form>
                <label>Name
                    <input type="text" placeholder="Enter Name" /></label><br />
                <label>Email
                    <input type="email" placeholder="Enter Email" /></label><br />
                <label>Number
                    <input type="number" placeholder="Enter Number" /></label><br />
                <button type="submit" className="button">Submit</button>
            </form>
        </div>
    )


}