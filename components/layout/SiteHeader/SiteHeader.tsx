"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Logo } from "@/components/ui/Logo";
import { Wrap } from "@/components/ui/Wrap";
import { useLanguage } from "@/context/LanguageContext";

export const SiteHeader = () => {
  const { dictionary } = useLanguage();
  const { nav, common } = dictionary;
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinksRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", menuOpen);
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.documentElement.classList.remove("menu-open");
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      navLinksRef.current?.scrollTo(0, 0);
    }
  }, [menuOpen]);

  useEffect(() => {
    const header = headerRef.current;

    if (!header) {
      return;
    }

    const handleScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((open) => !open);
  }, []);

  return (
    <header
      id="siteHeader"
      ref={headerRef}
      className={menuOpen ? "menu-open" : undefined}
    >
      <Wrap className="nav">
        <Logo ariaLabel={nav.logoAriaLabel} />
        <nav
          ref={navLinksRef}
          className={`nav-links${menuOpen ? " open" : ""}`}
          id="navLinks"
          aria-label="Primary"
        >
          <a href="#services" onClick={closeMenu}>
            {nav.services}
          </a>
          <a href="#showcase" onClick={closeMenu}>
            {nav.showcase}
          </a>
          <a href="#about" onClick={closeMenu}>
            {nav.about}
          </a>
          <a href="#contact" onClick={closeMenu}>
            {nav.contact}
          </a>
          <a
            href={`tel:${common.phone}`}
            className="btn btn-primary"
            onClick={closeMenu}
          >
            {nav.bookNow}
          </a>
        </nav>
        <div className="nav-cta">
          <a href={`tel:${common.phone}`} className="nav-phone">
            {common.phoneDisplay}
          </a>
          <button
            type="button"
            className={`menu-btn${menuOpen ? " open" : ""}`}
            id="menuBtn"
            aria-label={nav.menuToggle}
            aria-expanded={menuOpen}
            aria-controls="navLinks"
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </Wrap>
    </header>
  );
};
