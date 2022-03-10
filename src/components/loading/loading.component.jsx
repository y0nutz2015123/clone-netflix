import React from "react";

import { LockBody, ReleaseBody, Spinner, Picture } from "./loading.styles";

const Loading = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
};

export default Loading;

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
