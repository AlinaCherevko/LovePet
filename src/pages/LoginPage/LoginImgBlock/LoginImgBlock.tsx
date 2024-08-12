import type { FC } from "react";

const LoginImgBlock: FC = () => {
  return (
    <picture>
      <source
        srcSet="/img/login/login-desktop-1x-min.png 1x,
  /img/login/login-desktop-2x-min.png 2x
"
        media="(min-width: 1440px)"
      />
      <source
        srcSet="
  /img/login/login-tablet-1x-min.png 1x,
  /img/login/login-tablet-2x-min.png 2x
"
        media="(min-width: 768px)"
      />
      <source
        srcSet="
  /img/login/login-mob-1x-min.png 1x,
  /img/login/login-mob-2x-min.png 2x
"
        media="(min-width: 320px)"
      />
      <img src=" /img/login/login-mob-1x-min.png" alt="login-img" />
    </picture>
  );
};

export default LoginImgBlock;
