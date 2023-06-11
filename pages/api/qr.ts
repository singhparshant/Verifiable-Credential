import Cors from 'micro-cors';
import type { NextApiRequest, NextApiResponse } from "next";
import qr from "qr-image";
const cors = Cors();


export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
    const body = req.body
    console.log("body: ", body);
    // Convert JSON data to string
    let dataString = JSON.stringify(body);
    let qr_png = qr.image(dataString, { type: "png" });

    // Set the response headers
    res.setHeader("Content-Disposition", "attachment; filename=qrcode.png");
    res.setHeader("Content-Type", "image/png");

    // Pipe the qr image to the response
    qr_png.pipe(res);
})