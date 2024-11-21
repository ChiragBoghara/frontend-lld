import { AccordianList } from "../../components";
import "./accordian.module.css";

const Accordian = () => {
  const data = [
    {
      title: "Accordian 1",
      content: "Lorem ",
    },
    {
      title: "Accordian 2",
      content: "Lorem ",
    },
    {
      title: "Accordian 3",
      content: "Lorem ",
    },
    {
      title: "Accordian 4",
      content: "Lorem ",
    },
  ];
  return <AccordianList accordianData={data}/>;
};

export default Accordian;
