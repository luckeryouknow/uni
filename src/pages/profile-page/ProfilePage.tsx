import {Header} from "../../modules/header/Header.tsx";
import ProfileLeftContent from "../../modules/profile-left-content/ProfleLeftContent.tsx";

export default function ProfilePage () {
  return (
    <>
      <Header />
      <div className="py-10 pl-20">
        <ProfileLeftContent />
      </div>
    </>
  )
}