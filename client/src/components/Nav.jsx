/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "./Icons.jsx";
import { Avatar } from "@nextui-org/react";
import { useTranslation } from 'react-i18next';

const navLink = [
  { path: '#hero', key: 'hero' },
  { path: '#about', key: 'about' },
  { path: '#ourexpertise', key: 'ourexpertise' },
  { path: '#reference', key: 'reference' },
  { path: '#team', key: 'team' },
  { path: '#contact', key: 'contact' },
];

function Buttons() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  const [isSvgClicked, setIsSvgClicked] = useState(false);
  const [isSvg1Hovered, setIsSvg1Hovered] = useState(false);

  const handleClickSvg = () => {
    setIsSvgClicked(!isSvgClicked);
  };

  const handleSvg1MouseEnter = () => {
    setIsSvg1Hovered(true);
  };

  const handleSvg1MouseLeave = () => {
    setIsSvg1Hovered(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng); // Change language
  };

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="static h-[100px]" >


          <NavbarBrand>
            <div className="w-36 h-12 relative flex items-center">
              <img className="w-22 h-22 mr-2" alt="" src="/siyeso-navv.svg" />
            </div>
          </NavbarBrand>

          <NavbarContent className="hidden md:flex gap-4" justify="center">
            {navLink.map((link) => (
              <NavbarItem key={link.key}>
                <Link href={link.path}>
                  {t(link.key)}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>




        <NavbarContent justify="end">
          <NavbarMenuToggle
            className="md:hidden"
            onClick={() => setIsMenuOpen(isMenuOpen)}
          />

          <NavbarMenu>
            {navLink.map((link, index) => (
              <NavbarMenuItem key={link.key}>
                <Link
                  onClick={handleLinkClick} 
                  color={
                    index === 2 ? "primary" : index === navLink.length - 1 ? "danger" : "foreground"
                  }
                  className="w-full"
                  href={link.path} // Navigate to the specific section
                  size="lg"
                >
                  {t(link.key)}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>


          {/* Conditionally render Dropdown based on isMenuOpen and screen size */}
          {!isMenuOpen && (
            <div className="hidden md:block"> {/* Show Dropdown only on md screens */}
              <Dropdown>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                      endContent={icons.chevron}
                      radius="sm"
                      variant="light"
                    >
                      {t('Navbar.Selectelanguage')}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="black"
                        className={`svg1 w-8 h-8 ${isSvgClicked ? 'clicked' : ''}`}
                        onMouseEnter={handleSvg1MouseEnter}
                        onMouseLeave={handleSvg1MouseLeave}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  aria-label="Language selection"
                  className="w-[240px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                >
                  <DropdownItem
                    key="english"
                    description="English"
                    startContent={
                      <Avatar alt="United States" className="w-14 h-8 rounded-none" src="https://flagcdn.com/us.svg" />
                    }
                    onClick={() => handleLanguageChange('en')}
                  >
                    {t('Navbar.En')}
                  </DropdownItem>
                  <DropdownItem
                    key="turkish"
                    description="Turkish"
                    startContent={
                      <Avatar alt="Turkey" className="w-14 h-8 rounded-none" src="https://flagcdn.com/tr.svg" />
                    }
                    onClick={() => handleLanguageChange('tr')}
                  >
                    {t('Navbar.Tr')}
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          )}
        </NavbarContent>
      </Navbar>
    </>
  );
}

export default Buttons;
