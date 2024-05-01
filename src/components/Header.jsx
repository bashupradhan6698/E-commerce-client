import { CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header>
        <div className="flex bg-purple-700 items-center justify-between p-2">
          <div className="flex gap-4 text-xs">
            <div className="flex text-white">
              <CiMail className="w-4 h-4" />
              <span>email@email.com</span>
            </div>
            <div className="flex text-white">
              <FaPhoneVolume className="w-4 h-4" />
              <span>9861416191</span>
            </div>
          </div>
        </div>
        <div>Hekto</div>
      </header>
    </>
  );
}
