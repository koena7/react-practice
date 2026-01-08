import { useParams } from "react-router-dom"


function User() {
    const {userId} = useParams();

    return(
        <div className="w-auto h-20 my-10 mx-5 bg-orange-600 text-center flex items-center justify-center text-2xl text-white">
            User: {userId}
        </div>
    )
}

export default User;