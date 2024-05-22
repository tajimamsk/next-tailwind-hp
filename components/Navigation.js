import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";

const Navigation = () => {
  return (
    <>
      {/* web menu */}
      <header>
        <div>
          <div>
            {/* logo */}
            <div>
              <Link href={"/"}>
                <Image
                  src={"/assets/logo.png"}
                  width={90}
                  height={60}
                  alt="ロゴ"
                />
              </Link>
            </div>

            {/* menu */}
            <div>
              <ul>
                <li>
                  <Link href={"/"}>ホーム</Link>
                </li>
              </ul>
            </div>

            {/* button */}
            <div>
              <Link href={"/"}>申し込み</Link>

              {/* for mobile */}
              <button>
                <HiOutlineBars3 />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile menu */}
    </>
  );
};

export default Navigation;
