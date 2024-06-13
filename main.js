// @ts-check

const detailPageBrandClassNames = ["XKeLfu", "lm1Id5"];

const detailPageModelClassNames = [
  "sDq_FX",
  "QdlUSH",
  "FxZV-M",
  "HlZ_Tf",
  "wYGQO3",
];

const detailsPagePriceClassNames = ["hD5J5m"];

const productListPageBrandModelPriceContainerClassNames = [
  "_0xLoFW",
  "_78xIQ-",
  "EJ4MLB",
  "f4ql6o",
  "JT3_zV",
];

const classNamesList = [
  detailPageBrandClassNames,
  detailPageModelClassNames,
  detailsPagePriceClassNames,
  productListPageBrandModelPriceContainerClassNames,
];

function removeShit() {
  for (const classNames of classNamesList) {
    const htmlElements = document.getElementsByClassName(...classNames);

    [...htmlElements]
      .filter((e) => [...e.classList].every((c) => classNames.includes(c)))
      .forEach((e) => e.remove());
  }
}

removeShit();
