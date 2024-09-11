const link1 = "https://bloghere.vercel.app/";
const link2 = "https://instasave-olive.vercel.app/";
const link3 = "https://github.com/vvssgowtham/Machine_Learning_Project";
const link4 = "https://bookinsights.vercel.app/";
const link5 = "https://visualize-charts.vercel.app/";

const handleProjectClick = (number) => {
  if (number === 1) {
    window.open(link1, "_blank");
  } else if (number === 2) {
    window.open(link2, "_blank");
  } else if (number === 3) {
    window.open(link3, "_blank");
  } else if (number === 4) {
    window.open(link4, "_blank");
  } else if (number === 5) {
    window.open(link5, "_blank");
  }
};
