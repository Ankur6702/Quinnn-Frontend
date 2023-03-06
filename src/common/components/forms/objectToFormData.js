function objectToFormData(obj) {
  const formData = new FormData();
  Object.entries(obj).forEach(([key, val]) => {
    if (![undefined, null].includes(val)) formData.append(key, val);
  });
  return formData;
}

export default objectToFormData;
