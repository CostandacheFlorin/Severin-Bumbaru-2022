import React from "react";

import { BsFillShieldLockFill } from "react-icons/bs";
import { IoIosOptions } from "react-icons/io";
import {
  AiOutlineCloudUpload,
  AiOutlineForm,
  AiOutlineMonitor,
} from "react-icons/ai";
import { BiSupport, BiDollar, BiBuildings } from "react-icons/bi";
import { GrHostMaintenance } from "react-icons/gr";
import { FaWpforms } from "react-icons/fa";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
  {
    name: "Cerinte clare",
    description:
      "Adăugarea de către firmele IT a stagiilor de practică și cerințele acestora",
    icon: iconStyle(FaWpforms),
    imgClass: "one",
  },
  {
    name: "Usor de folosit",
    description:
      "Gestionarea facila a stagiilor de practica, atat de catre studenti cat si de firme sau profesori.",
    icon: iconStyle(AiOutlineForm),
    imgClass: "two",
  },
  {
    name: "Gama larga de stagii",
    description:
      "Aici poti gasi o gama large de stagii de practica din toata tara",
    icon: iconStyle(AiOutlineMonitor),
    imgClass: "three",
  },
  {
    name: "Remote sau Fizic",
    description:
      "Firmele aleg daca vor ca stagiul de practica sa fie remote sau fizic",
    icon: iconStyle(BiSupport),
    imgClass: "four",
  },
  {
    name: "Fii gata pentru viitorul job",
    description: "Firmele doresc sa te pregateasca pentru viitorul tau job",
    icon: iconStyle(BiDollar),
    imgClass: "five",
  },
  {
    name: "Diversitate",
    description:
      "Multitudine de firme partenere cu oferte atractive din domeniu",
    icon: iconStyle(BiBuildings),
    imgClass: "six",
  },
];
