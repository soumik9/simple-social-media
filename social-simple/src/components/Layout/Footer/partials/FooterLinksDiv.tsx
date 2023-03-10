import { navItemType } from "@config/types/types";
import Link from "next/link";
import React from "react";

type Props = {
  array: navItemType[];
  title: string;
};

const FooterLinksDiv = ({ title, array }: Props) => {
  return (
    <>
      <span className="block uppercase text-sm font-semibold text-secondary">
        {title}
      </span>

      <ul className="mt-4 flex flex-col items-center md:items-start">
        {array.map((item: navItemType) => (
          <li key={item._id} className="w-max ">
            <Link
              href={item.url}
              className="text-white hover:text-primary-300 font-semibold trans block py-[9px] text-sm  "
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterLinksDiv;
