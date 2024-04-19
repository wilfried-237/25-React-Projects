import { useState } from "react";
import MainMenu from "./MainMenu";
import { FaMinus, FaPlus } from "react-icons/fa";

function SubMenu(prop) {
  const [display, setDisplay] = useState({});

  function handleDisplay(getcurrentindex) {
    setDisplay({
      ...display,
      [getcurrentindex]: !display[getcurrentindex],
    });
  }

  return (
    <>
      {prop.subdata && prop.subdata.length > 0
        ? prop.subdata.map((subchild) => {
            return (
              <div key={subchild.label} className="subMenu">
                <div className="menu">
                <li>{subchild.label}</li>
                {subchild.children ? (
                  <span onClick={() => handleDisplay(subchild.label)}>{display[subchild.label]? <FaMinus /> : <FaPlus />}</span>
                ) : null}
                </div>
                {subchild.children &&
                subchild.children.length &&
                display[subchild.label] > 0 ? (
                  <ul>
                    <MainMenu data={subchild.children} />
                  </ul>
                ) : null}
              </div>
            );
          })
        : null}
    </>
  );
}

export default SubMenu;
