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
        }, 6000);
        alert('copied!');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <CopyToClipboardButton onClick={handleCopyClick}>
      <span>{isCopied ? <RiFileCopyFill /> : <RiFileCopyLine />}</span>
    </CopyToClipboardButton>
  );
}

const CopyToClipboardButton = styled(Button)`
  width: 30px;
  background: transparent;
  color: gold;
  border-color: goldenrod;
`;
