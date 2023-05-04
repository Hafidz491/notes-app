import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

function NavAdd() {
  return (
    <div className="btn-add_note">
      <button className="btn-add" type="button" title="tambah note">
        <Link to="/add">
          <FiPlus />
        </Link>
      </button>
      {/* <ul>
        <li className="btn-add">
          <Link to="/add">
            <FiPlusCircle />
          </Link>
        </li>
      </ul> */}
    </div>
  );
}

export default NavAdd;
