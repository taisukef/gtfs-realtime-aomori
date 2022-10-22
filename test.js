import { protobuf } from "https://taisukef.github.io/protobuf-es.js/dist/protobuf-es.js";

protobuf.load("gtfs-realtime.proto", async (err, res) => {
  const data = await Deno.readFile("VehiclePosition.pb");
  const vpos = res.lookup("FeedMessage"); // "VehiclePosition");
  const decoded = vpos.decode(data);
  console.log(decoded);
});
