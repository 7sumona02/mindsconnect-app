'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const menuVariants = {
  initial: { x: 20, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { x: 20, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, onClose }) => {
  return (
    <motion.div
      className="absolute top-full right-0 mt-2 w-48 bg-[#E4D9CEff] border border-gray-200 rounded-md origin-top-right overflow-hidden"
      variants={menuVariants}
      initial="initial"
      animate={isOpen ? "animate" : "initial"}
      exit="exit"
    >
      <Link href="/resources/blogs" className="block px-4 py-2 text-sm text-gray-700 font-medium">
        Blogs
      </Link>
      <Link href="/resources/podcasts" className="block px-4 py-2 text-sm text-gray-700 font-medium">
        Podcasts
      </Link>
      <Link href="/resources/test" className="block px-4 py-2 text-sm text-gray-700 font-medium">
        Test Assessments
      </Link>
    </motion.div>
  );
};

interface MenuToggleProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>; // Correctly type the onClick
}

const MenuToggle: React.FC<MenuToggleProps> = ({ children, onClick }) => {
  return (
    <button className="bg-[#ebffa5] font-medium text-sm text-black px-4 py-2 rounded" onClick={onClick}>
      {children}
    </button>
  );
};

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <MenuToggle onClick={toggleDropdown}>
        Browse
      </MenuToggle>
      {isOpen && <Dropdown isOpen={isOpen} onClose={closeDropdown} />}
    </div>
  );
};

export default DropdownMenu;
