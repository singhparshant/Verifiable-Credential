import Cors from 'micro-cors';
import type { NextApiRequest, NextApiResponse } from "next";
// import vc from '@digitalbazaar/vc';

// Required to set up a suite instance with private key
import {Ed25519VerificationKey2020, } from
  '@digitalbazaar/ed25519-verification-key-2020';
import {Ed25519Signature2020} from '@digitalbazaar/ed25519-signature-2020';
import { docLoader as documentLoader } from '../../lib/document';

const cors = Cors();


export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
    const keyPair = await Ed25519VerificationKey2020.generate();
    keyPair.id = 'https://example.edu/issuers/keys/1'; // See Key ID section
    keyPair.controller = 'https://example.com/i/carol'; // See Controller Document section
    console.log("keyPair", keyPair);
    const body = req.body

    const suite = new Ed25519Signature2020({verificationMethod: keyPair.id, key: keyPair});
    const signedCred = await signCredential(suite, body);
    res.status(200).json({ cred: signedCred });
})

async function signCredential(suite: any, body) {
const vc = await import('@digitalbazaar/vc');
// Sample unsigned credential
const credential = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "https://example.com/credentials/1872",
  "type": ["VerifiableCredential", "AlumniCredential"],
  "issuer": "did:example:ebfeb1f712ebc6f1c276e12",
  "issuanceDate": "2010-01-01T19:23:24Z",
  "credentialSubject": {
    // "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "id": "did:example:"+body.did,
    "alumniOf": "Example University",
    "name": body.name,
  }
};
console.log("suite", suite);

const signedVC = await vc.issue({credential, suite, documentLoader});
return signedVC
}