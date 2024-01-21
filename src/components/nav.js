import React from 'react';
import Toggle from './toggle';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {

  return (
    <header className="text-gray-700 bg-transparent body-font">
      <div className="lg:container flex flex-row items-center justify-between p-5 mx-auto">
        <div className="flex items-center">
          <nav className="flex flex-wrap items-center justify-center ml-4 text-base">
            <CustomLink
              to="/"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"
            >
              About
            </CustomLink>
            <CustomLink
              to="/work"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"
            >
              Projects
            </CustomLink>
            <CustomLink
              to="/contact"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"
            >
              Contact
            </CustomLink>
          </nav>
        </div>
        <div className="flex items-center">
          {/* Add LinkedIn icon */}
          <a href="https://www.linkedin.com/in/tehilashapiro/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-blue-500 dark:text-gray-200 mr-4" />
          </a>
          {/* Add GitHub icon */}
          <a href="https://github.com/Tehila03" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-700 dark:text-white" />
          </a>
          <Toggle />
        </div>
      </div>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link to={to} {...props} className={isActive ? "mr-5 p-4 text-sm font-semibold text-gray-700 dark:text-white border-b-4 border-gray-600 dark:border-white hover:text-gray-700" : "mr-5 p-3 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"}>
      {children}
    </Link>
  );
}
