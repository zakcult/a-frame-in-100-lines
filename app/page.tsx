import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const NEXT_PUBLIC_URL = 'https://ivory-hollow-crayfish-496.mypinata.cloud';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'please press here',
    },
  ],
  image: `https://ivory-hollow-crayfish-496.mypinata.cloud/ipfs/QmNjCFVSC8dtdn7Jhc1n39zskHoCiUc4Q2yzUGXupG3CdX/0.png`,
  input: {
    text: 'Tell me a boat story',
  },
  post_url: `${NEXT_PUBLIC_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'z21d.com',
  description: 'LFG',
  openGraph: {
    title: 'z21d.com',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/ipfs/QmNjCFVSC8dtdn7Jhc1n39zskHoCiUc4Q2yzUGXupG3CdX/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>z21d.com</h1>
    </>
  );
}
