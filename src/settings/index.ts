interface Settings {
    API_BASE_URL: string | undefined;
    token: string | undefined;
    API_IMAGE_URL: string | undefined;
  }
  
  const settings: Settings = {
    API_BASE_URL: process.env.REACT_APP_SCOHATI_TV_API_URL,
    token: process.env.REACT_APP_SCOHATI_TV_API_TOKEN,
    API_IMAGE_URL: process.env.REACT_APP_SCOHATI_TV_API_IMAGE_URL
  };
  
  export default settings;