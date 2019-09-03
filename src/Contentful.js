import { createClient } from "contentful";

const spaceID = process.env.REACT_APP_SPACE_ID;
const AccessToken = process.env.REACT_APP_ACCESS_TOKEN;

export default createClient({
  space: spaceID,
  accessToken: AccessToken
});
