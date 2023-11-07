import { Link } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import "./footer.css";
import insta from "../../assets/insta.svg";
import telegram from "../../assets/tg.svg";
import fb from "../../assets/fb.svg";
import gitImg from "../../assets/github.png";

export const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Link target="_blank" href="https://www.instagram.com/">
            <img src={insta} alt="" />
          </Link>
          <Link href="https://t.me/baazarova" target="_blank">
            <img className="tg" src={telegram} alt="" />
          </Link>
          <Link
            href="https://www.facebook.com/campaign/landing.php?&campaign_id=11554070363&extra_1=s%7Cc%7C518929547027%7Ce%7Cfb%7C&placement=&creative=518929547027&keyword=fb&partner_id=googlesem&extra_2=campaignid%3D11554070363%26adgroupid%3D112923417056%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-143742855%26loc_physical_ms%3D1028523%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw0N6hBhAUEiwAXab-TRSoHQDG-hQTGJrx2Tu1jDZM_5NW96S46YW3K1gQOFhcfPFPqcy5JRoCjGAQAvD_BwE"
            target="_blank"
          >
            <img src={fb} alt="" />
          </Link>
          <Link
          href="https://github.com/baazarova"
            target="_blank"
          >
            <img className="git" src={gitImg} alt="" />
          </Link>
        </Stack>

      </div>
    </footer>
  );
};
