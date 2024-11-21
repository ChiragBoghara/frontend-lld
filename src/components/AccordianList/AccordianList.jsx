import { useState } from "react";
import AccordianItem from "../AccordianItem";
import "./AccordianList.module.css";

const AccordianList = ({ accordianData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((oldIndex)=>{
      if(oldIndex===index){
        return null;
      }
      return index;
    });
  };

  return accordianData.map((accordian, index) => {
    return (
      <AccordianItem
        isOpen={openIndex === index}
        key={accordian.title}
        accordian={accordian}
        toggle={() => handleToggle(index)}
      />
    );
  });
};

export default AccordianList;
