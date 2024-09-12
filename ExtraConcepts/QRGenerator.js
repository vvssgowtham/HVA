import qrcode from "qrcode";

qrcode.toString("www.google.com", { type: "terminal" }, (err, url) => {
  if (err) console.error(err);
  //this console statement will print out the qrcode on to the terminal
  else console.log(url);
});

//This generates a base 64 encoded url which when opened in browser will get scanner
qrcode
  .toDataURL("I am gowtham!")
  .then((url) => {
    console.log(url);
  })
  .catch((err) => {
    console.error(err);
  });

const generateQRCode = async (content)=>{
     try {
          console.log(await qrcode.toDataURL(content));
     } catch (error) {
          console.error(error);
     }
}  

generateQRCode("Trying out using async and await");