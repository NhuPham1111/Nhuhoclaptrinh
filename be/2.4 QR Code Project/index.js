import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your message: ",
      name: "MESSAGE",
    },
  ])
  .then((answers) => {
    const message = answers.MESSAGE;
    const qrPng = qr.image(message);

    qrPng.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("message.txt", message, (err) => {
      if (err) {
        throw err;
      }
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTypeError) {
      console.log("Prompt couldn't be rendered in the current environment.");
    } else {
      console.log("Something else went wrong:", error);
    }
  });

/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user-entered message into a QR code image.
3. Create a text file to save the user input using the native fs node module.
*/

