const link1 = "https://gowthamportfolio.vercel.app/";
const link2 = "https://github.com/vvssgowtham";

const handleProjectClick = (number) => {
    if(number===1){
        window.open(link1, "_blank");
    }else if(number===2){
        window.open(link2, "_blank");
    }
}