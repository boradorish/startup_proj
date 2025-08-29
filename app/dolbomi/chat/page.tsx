"use client";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faComment,
  faHome,
  faPerson,
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
    if (newValue == 0) router.push("/dolbomi/home");
    if (newValue == 1) router.push("/dolbomi/chat");
    if (newValue == 2) router.push("/dolbomi/my");
  };

  return (
    <div className="app-container flex flex-col items-center justify-center">
      <div className="h-30" />
      여기는 챗
      <BottomTab location={1} />
      {/* <Box sx={{ borderBottom: 1, position: "fixed", bottom: 0 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={
              <FontAwesomeIcon icon={faHome} style={{ color: "var(--main)" }} />
            }
          />

          <Tab
            label={
              <FontAwesomeIcon
                icon={faComment}
                style={{ color: "var(--main)" }}
              />
            }
          />
          <Tab
            label={
              <FontAwesomeIcon icon={faUser} style={{ color: "var(--main)" }} />
            }
          />
        </Tabs>
      </Box> */}
      <div className="h-200" />
    </div>
  );
}
