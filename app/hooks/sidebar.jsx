"use client"
import { useEffect } from 'react';

export function useSidebarToggle() {
  useEffect(() => {
    const sidebar = document.querySelector("#sidebar");
    const toggleBtn = document.querySelector("#toggleBtn");
    const closeBtn = document.querySelector("#closeBtn");

    const handleToggle = () => {
      sidebar.classList.toggle("-translate-x-full")
    };

    if (toggleBtn && closeBtn && sidebar) {
      toggleBtn.addEventListener("click", handleToggle);
      closeBtn.addEventListener("click", handleToggle);

      // Cleanup function
      return () => {
        toggleBtn.removeEventListener("click", handleToggle);
        closeBtn.removeEventListener("click", handleToggle);
      };
    }
  }, []);
}
