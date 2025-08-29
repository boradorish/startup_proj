"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { useRouter } from "next/navigation";

interface BottomTabProps {
  location: number;
}
export const CBottomTab = ({ location }: BottomTabProps) => {
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue);
    if (newValue == 0) router.push("/customer/main");
    if (newValue == 1) router.push("/customer/chat");
  };
  return (
    <Box
      sx={{
        borderBottom: 1,
        position: "fixed",
        bottom: 0,
        backgroundColor: "var(--subLight)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        maxWidth: 393,
        // borderTop: "2px solid var(--main)",
      }}
    >
      <Tabs
        value={location}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab
          label={
            <FontAwesomeIcon
              icon={faHome}
              style={{ color: "var(--subDark)" }}
            />
          }
        />

        <Tab
          label={
            <FontAwesomeIcon
              icon={faComment}
              style={{ color: "var(--subDark)" }}
            />
          }
        />
      </Tabs>
    </Box>
  );
};
