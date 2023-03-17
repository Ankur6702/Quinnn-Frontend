import Image from "next/image";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";

import useCopyToClipboard from "../custom-hooks/useCopyToClipboard";

import {
  LINKEDIN,
  FACEBOOK,
  TWITTER,
  INSTAGRAM,
  COPYLINK,
  EMAIL,
} from "../../utils/constants";
import { neutral } from "../../config/colors";

const IconButtonStyles = (props) => (
  <IconButton
    sx={{
      mx: 2,
      mt: 3,
      mb: 1,
    }}
    {...props}
    disableRipple
  />
);

const ShareIcon = ({ linkedin, facebook, twitter, instagram, copyLink }) => {
  const onClickSocialIcon = (url) => (url ? window.open(url, "_blank") : null); //to open new page

  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  const [copiedText, onCopy] = useCopyToClipboard();
  const onClickCopy = () => {
    onCopy(copyLink);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      mb={{ xs: 0, sm: 8 }}
    >
      {linkedin && (
        <Box display="flex" flexDirection="column" alignItems="center">
          <IconButtonStyles
            aria-label="linkedin"
            onClick={() => onClickSocialIcon(linkedin)}
          >
            <Image
              src={LINKEDIN}
              alt="linkedin"
              width={isDownMd ? 45 : 50}
              height={isDownMd ? 45 : 50}
            />
          </IconButtonStyles>
          <Typography
            variant="subtitle1"
            align="center"
            color="#007AB7"
            fontWeight={400}
            fontSize={{ xs: 12 }}
          >
            Linkedin
          </Typography>
        </Box>
      )}
      {facebook && (
        <Box display="flex" flexDirection="column" alignItems="center">
          <IconButtonStyles
            aria-label="facebook"
            onClick={() => onClickSocialIcon(facebook)}
          >
            <Image
              src={FACEBOOK}
              alt="facebook"
              width={isDownMd ? 45 : 50}
              height={isDownMd ? 45 : 50}
            />
          </IconButtonStyles>
          <Typography
            variant="subtitle1"
            align="center"
            color="#1877F2"
            fontWeight={400}
            fontSize={{ xs: 12 }}
          >
            Facebook
          </Typography>
        </Box>
      )}
      {twitter && (
        <Box display="flex" flexDirection="column" alignItems="center">
          <IconButtonStyles
            aria-label="twitter"
            onClick={() => onClickSocialIcon(twitter)}
          >
            <Image
              src={TWITTER}
              alt="twitter"
              width={isDownMd ? 45 : 50}
              height={isDownMd ? 45 : 50}
            />
          </IconButtonStyles>
          <Typography
            variant="subtitle1"
            align="center"
            color="#1DA1F2"
            fontWeight={400}
            fontSize={{ xs: 12 }}
          >
            Twitter
          </Typography>
        </Box>
      )}
      <Box display="flex" flexDirection="column" alignItems="center">
        <IconButtonStyles
          aria-label="email"
          href={`mailto:?subject=Check out this site ${window.location.href}.`}
          target="_blank"
          title="Share by Email"
        >
          <Image
            src={EMAIL}
            alt="email"
            width={isDownMd ? 45 : 50}
            height={isDownMd ? 45 : 50}
          />
        </IconButtonStyles>
        <Typography
          variant="subtitle1"
          align="center"
          color="#25D366"
          fontWeight={400}
          fontSize={{ xs: 12 }}
        >
          Mail
        </Typography>
      </Box>
      {instagram && (
        <Box display="flex" flexDirection="column" alignItems="center">
          <IconButtonStyles
            aria-label="instagram"
            onClick={() => onClickSocialIcon(instagram)}
          >
            <Image
              src={INSTAGRAM}
              alt="intagram"
              width={isDownMd ? 45 : 50}
              height={isDownMd ? 45 : 50}
            />
          </IconButtonStyles>
          <Typography
            variant="subtitle1"
            align="center"
            color="#8522B1"
            fontWeight={400}
            fontSize={{ xs: 12 }}
          >
            Instagram
          </Typography>
        </Box>
      )}
      {isDownMd && (
        <Box display="flex" flexDirection="column" alignItems="center">
          <IconButtonStyles aria-label="copy-link" onClick={onClickCopy}>
            <Image
              src={COPYLINK}
              alt="copy-link"
              width={isDownMd ? 45 : 50}
              height={isDownMd ? 45 : 50}
            />
          </IconButtonStyles>
          <Typography
            variant="subtitle1"
            align="center"
            color={neutral["900"]}
            fontWeight={400}
            fontSize={{ xs: 12 }}
          >
            {!!copiedText ? "Copied!" : "Copy Link"}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ShareIcon;
