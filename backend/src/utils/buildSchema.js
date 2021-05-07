import fs from "fs-extra";
import path from "path";
import { graphql } from "graphql";
import { introspectionQuery, printSchema } from "graphql/utilities";

import Schema from "../schema";

async function buildSchema() {
  await fs.ensureFile("../data/schema.graphql.json");
  await fs.ensureFile("../data/schema.graphql");

  fs.writeFileSync(
    path.join(__dirname, "../data/schema.graphql.json"),
    JSON.stringify(await graphql(Schema, introspectionQuery), null, 2)
  );

  fs.writeFileSync(
    path.join(__dirname, "../data/schema.graphql"),
    printSchema(Schema, { commentDescriptions: true })
  );
}

async function run() {
  await buildSchema();
  console.log("Schema build complete!");
  process.exit(0);
}

run().catch((e) => {
  console.log(e);
  process.exit(0);
});


// const res = await fetch('http://localhost:8000/graphql', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ query: `
//           query {
//             userOne(filter:{email: "ex@ma.com"}) {
//               username
//               _id
//             }
//           }`
//         }),
//       })
//     if (!res.ok) return null;
//     return {
//         ok: true,
//         error: null,
//         token: 'something new',
//         res: res.json().then(res => res.data.userOne.username)
//     };
