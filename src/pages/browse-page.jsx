import React from "react";

import BrowseContainer from "../containers/browse.container";

import { useContent } from "../hooks";

import selectionFilter from "../utils/selection-filter";

const BrowsePage = () => {
  const { series } = useContent("series");
  const { films } = useContent("films");

  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
};

export default BrowsePage;
