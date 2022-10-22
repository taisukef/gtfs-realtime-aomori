import { ProtocolBuffers } from "./ProtocolBuffers.js";

const proto = await ProtocolBuffers.load("gtfs-realtime.proto");
const data = await Deno.readFile("VehiclePosition.pb");
//const data = await Deno.readFile("TripUpdate.pb"); // 遅れ情報
const vpos = proto.lookup("FeedMessage");
const decoded = vpos.decode(data);
console.log(JSON.stringify(decoded, null, 2));
