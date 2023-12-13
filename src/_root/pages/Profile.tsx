import { useGetUserById } from "@/lib/react-query/queriesAndMutations"
import { Link, useParams } from "react-router-dom"

const Profile = () => {
  const { id } = useParams();
  const { data: currentUser } = useGetUserById(id || "");

  return (
    <div>
      Profile
      <Link to={`/update-profile/${currentUser?.$id}`}>
        <p className="flex whitespace-nowrap small-medium">Edit Profile</p>
      </Link>
    </div>
  )
}

export default Profile