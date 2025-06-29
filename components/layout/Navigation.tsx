'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="navbar fixed top-0 z-50 bg-base-100/95 backdrop-blur-sm shadow-sm">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">
          <Code2 className="w-6 h-6 mr-2" />
          Mahbub E Waduzzaman
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`btn btn-ghost rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle mr-2"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>

        <div className="dropdown dropdown-end lg:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52 border border-base-300"
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-primary bg-primary/10'
                        : 'hover:text-primary hover:bg-primary/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;