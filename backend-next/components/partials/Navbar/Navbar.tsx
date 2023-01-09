import Link from 'next/link'
import ScienceIcon from '@mui/icons-material/Science';
import DnsIcon from '@mui/icons-material/Dns';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="#black_domains">
            <ScienceIcon />
            Black Listed Domains
          </Link>
        </li>
        <li>
          <Link href="#black_ip">
            <DnsIcon />
            Black Listed IP Addresses
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <DnsIcon />
            Projects
          </Link>
        </li>
        <li>
          <Link href="#users">
            Users
          </Link>
        </li>
        <li>
          <Link href="#ticket_system">
            Ticketing System
          </Link>
        </li>
        <li>
          <Link href="#manual_contacts">
            Manual Contacts
          </Link>
        </li>
        <li>
          <Link href="#subscriber">
            Agenda View's
          </Link>
        </li>
        <li>
          <Link href="#pricing">
            Mailshot Agenda View
          </Link>
        </li>

        <li>
          <Link href="#users">
            Users
          </Link>
        </li>
        <li>
          <Link href="#ticket_system">
            Ticketing System
          </Link>
        </li>
        <li>
          <Link href="#manual_contacts">
            Manual Contacts
          </Link>
        </li>
        <li>
          <Link href="#subscriber">
            Agenda View's
          </Link>
        </li>
        <li>
          <Link href="#pricing">
            {/* <Image src="../assets/sidebar/equipment-for-sale.jpg" /> */}
            Mailshot Agenda View
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;