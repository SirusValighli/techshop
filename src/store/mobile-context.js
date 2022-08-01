import { createContext, useState } from "react";
const DUMMY_DATA = [
  {
    id: "m1",
    title: "iPhone 13",
    image:
      "https://images.hindustantimes.com/tech/img/2022/07/18/960x540/iPhone_13_Mini_(8)_1632560687653_1658123734878_1658123734878.jpg",
    ram: "4 GB",
    description: "Released 2021, September 24 ",
  },
  {
    id: "m2",
    title: "Samsung S22",
    image:
      "https://images.hindustantimes.com/tech/img/2022/03/13/960x540/Untitled_design_-_2022-03-06T214122.391_1647139624286_1647139645302.jpg",
    ram: "16 GB",
    description: "Released 2022, February 25",
  },
  {
    id: "m3",
    title: "Xiaomi mi 12 pro",
    image:
      "https://www.androidheadlines.com/wp-content/uploads/2022/03/Xiaomi-12-Pro-AH-HR-UB3-1420x1069.jpg",
    ram: "8 GB",
    description: "Released 2022, April 27",
  },
  {
    id: "m4",
    title: "Nokia 6.1 Plus",
    image:
      "https://i0.wp.com/nokiamob.net/wp-content/uploads/2018/02/Nokia-6-Blue-4.jpg?resize=768%2C576&ssl=1",
    ram: "6/8 GB",
    description: "Released 2018, Aguest 30 ",
  },
  {
    id: "m5",
    title: "Huawei P30",
    image:
      "https://helios-i.mashable.com/imagery/reviews/01eZR9T91t9KqBde5fVoTuF/hero-image.fill.size_1248x702.v1623384422.jpg",
    ram: "4/6 GB",
    description: "Released 2019, March 26 ",
  },
];

const MobileContext = createContext();

export function MobileContextProvider(props) {
  const [mobiles, setMobiles] = useState(DUMMY_DATA);
  function addMobile(mobile) {
    setMobiles((prevState) => [...prevState, mobile]);
  }

  const context = {
    mobiles: mobiles,
    addMobile: addMobile,
  };

  return (
    <MobileContext.Provider value={context}>
      {props.children}
    </MobileContext.Provider>
  );
}
export default MobileContext;
