export const calculateReadTime = (text, readingSpeed = 150) => {
  // Split the text into words
  const words = text.trim().split(/\s+/);

  // Calculate the total number of words
  const wordCount = words.length;

  // Calculate the read time in minutes
  const readTime = Math.ceil(wordCount / readingSpeed);

  return `${readTime} min read`;
};

export const wrapPreWithScrollableBox = (text) => {
  // Regular expression to match <pre> tags
  const preRegex = /<pre\b[^>]*>([\s\S]*?)<\/pre>/gi;

  // Wrap <pre> tags with a scrollable <Box> component
  const updatedText = text.replace(
    preRegex,
    '<Box sx={{ overflowX: "auto" }}><pre style="white-space: pre-wrap;">$1</pre></Box>'
  );

  return updatedText;
};

export const removeHTMLTags = (text) => {
  const regex = /(<([^>]+)>)/gi;
  return text.replace(regex, "");
};
