import React from "react";
import ButtonSSS, { DetailButton } from "./styles/ButonSSS";
import ImageSSS, { LogoSSS } from "./styles/ImageSSS";
import DisplaySSS from "./styles/DisplaySSS";

const Header = () => {
  return (
    <div>
      <DisplaySSS>
        <LogoSSS src="./images/logo.png" />

        <div>
          <ButtonSSS fatih ="#a62440">Apple courses</ButtonSSS>
          <ButtonSSS halit>Talk to Adviser</ButtonSSS>
        </div>
      </DisplaySSS>
<hr />
      <DisplaySSS>
        <div>
          <h1>The IT Career of Your Dreams Starts Here!</h1>
          <p> Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.</p>
          <ButtonSSS halit>Start Your New Career</ButtonSSS>
          <DetailButton>Details</DetailButton>
        </div>
        <ImageSSS src="./images/hero.jpg"/>
      </DisplaySSS>
    </div>
  );
};

export default Header;
