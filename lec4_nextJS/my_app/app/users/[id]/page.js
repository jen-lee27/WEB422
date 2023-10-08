// Dynamic Routing
// create a folder with it's name in square brackets
// this will create a dynamic route
// for example, this will be a page for each student depending on student id
// http://localhost:3000/users/1 will be for student 1
// http://localhost:3000/users/2 will be for student 2...

export default function UserDetails({params}) {
    //{params} are basically the page parameters (ie. studentID)
    return (
        <h1>User Details Page {params.id}</h1>
    );
}