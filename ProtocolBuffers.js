import { protobuf } from "https://taisukef.github.io/protobuf-es.js/dist/protobuf-es.js";

export const ProtocolBuffers = {
  load: async (protofn) => {
    return new Promise((resolve, reject) => {
      protobuf.load(protofn, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
};
