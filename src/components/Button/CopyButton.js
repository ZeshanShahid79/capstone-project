import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { RiFileCopyLine, RiFileCopyFill } from 'react-icons/ri';

export default function CopyButton(copyText) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(copyText.copytext)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch(err => {
        console.log(err);
      });
    console.log(copyText.copytext);
  };

  return (
    <>
      <CopyToClipboardButton onClick={handleCopyClick}>
        <span>{isCopied ? <RiFileCopyLine /> : <RiFileCopyFill />}</span>
      </CopyToClipboardButton>
    </>
  );
}

const CopyToClipboardButton = styled(Button)`
  width: 30px;
`;
