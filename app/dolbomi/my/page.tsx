"use client";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faPlus,
  faQuestion,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  Box,
  FormControlLabel,
  IconButton,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Stack,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { BottomTab } from "../BottomTab";

export default function Info() {
  const router = useRouter();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className="app-container flex flex-col items-center justify-center">
      <div className="h-30" />
      여기는 마이
      <BottomTab location={2} />
      <div className="h-20" />
    </div>
  );
}
