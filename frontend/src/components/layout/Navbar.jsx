import { useState, useRef, useEffect } from "react";
import {
  Search,
  Bell,
  Moon,
  Menu,
} from "lucide-react";

function Navbar({ active }) {
  const [showSearch, setShowSearch] =
    useState(false);

  const searchRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchRef.current &&
        !searchRef.current.contains(
          event.target
        )
      ) {
        setShowSearch(false);
      }
    }

    if (showSearch) {
      document.addEventListener(
        "mousedown",
        handleClickOutside
      );
    }

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, [showSearch]);

  console.log( "<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>TYPE" ,typeof active);

  return (
    <div className="relative">

      <header
        className="
          w-full
          h-20

          bg-white/90
          backdrop-blur-xl

          border-b
          border-slate-200

          px-4
          md:px-8

          flex
          items-center
          justify-between

          overflow-hidden
        "
      >

        {/* LEFT */}

        <div
          className="
            flex
            items-center
            min-w-0
          "
        >
          <h1
            className="
              text-2xl
              md:text-3xl
              font-bold
              truncate
            "
          >
            {active}
          </h1>

          { active === "Dashboard" && (
            <div>
              <p
                className="
                  hidden
                  md:block
                  text-slate-500
                  ml-4
                "
              >
                Welcome back
              </p>
            </div>
          )}
        </div>

        {/* RIGHT */}

        <div
          className="
            flex
            items-center
            gap-2
            shrink-0
          "
        >

          {/* Desktop Search */}

          <div
            className="
              hidden
              lg:block
              relative
            "
          >
            <Search
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
              "
            />

            <input
              placeholder="Search..."
              className="
                w-72
                h-12
                pl-12

                rounded-2xl
                bg-slate-100
                outline-none

                focus:ring-4
                focus:ring-indigo-100
              "
            />
          </div>

          {/* Mobile Search */}

          <button
            onClick={() =>
              setShowSearch(true)
            }
            className="
              lg:hidden
              h-12
              w-12

              rounded-2xl
              bg-slate-100

              flex
              items-center
              justify-center
            "
          >
            <Search size={20} />
          </button>

          {/* Bell */}

          <button
            className="
              relative

              h-12
              w-12

              rounded-2xl
              bg-slate-100

              flex
              items-center
              justify-center
            "
          >
            <Bell size={18} />

            <span
              className="
                absolute
                top-2
                right-2

                w-2
                h-2

                rounded-full
                bg-red-500
              "
            />
          </button>

          {/* Theme */}

          <button
            className="
              h-12
              w-12

              rounded-2xl
              bg-slate-100

              flex
              items-center
              justify-center
            "
          >
            <Moon size={18} />
          </button>

          {/* Avatar */}

          <div
            className="
              h-12
              w-12

              rounded-2xl

              bg-gradient-to-br
              from-indigo-500
              to-violet-500

              flex
              items-center
              justify-center

              text-white
              font-bold
            "
          >
            OH
          </div>

        </div>

      </header>

      {/* SEARCH OVERLAY */}

      {showSearch && (
        <>
          {/* backdrop */}

          <div
            className="
              fixed
              inset-0
              bg-black/10
              z-40
            "
          />

          {/* panel */}

          <div
            ref={searchRef}
            className="
              fixed
              top-24
              left-4
              right-4

              z-50

              rounded-3xl
              bg-white

              p-4
              shadow-xl

              lg:hidden
            "
          >
            <input
              autoFocus
              placeholder="Search..."
              className="
                w-full
                h-12

                rounded-2xl
                px-4

                bg-slate-100
                outline-none
              "
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
