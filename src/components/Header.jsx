import MenuItem from "./MenuItem"
import { AiFillHome, AiFillContacts } from "react-icons/ai"
import { BsFillInfo, BsFillInfoCircleFill } from "react-icons/bs"
import Link from 'next/link'
import { DarkModelToggle } from "./DarkModelToggle"

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
        <MenuItem title="Contact" address="/contact" Icon={AiFillContacts} />
      </div>
      <div className="flex gap-1 items-center">
        <DarkModelToggle className="flex items-center gap-4" />
        <Link href="/">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">M.Movies</span>
        </Link>
        <span className="text-xl hidden sm:inline">Clone</span>
      </div>
    </div>
  )
}

export default Header