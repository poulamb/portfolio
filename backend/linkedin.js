const https = require('https');

// Replace with access token for the r_liteprofile permission
const accessToken = 'AQWOKAh8J-wt9F2qU6YR09db-MKDGK-LXD9AGDpTJQR1zD1EfT2ID3gxU5h5JVMEGqxhvrZs_K7N2EH-gsLy-9ePAuy37n5k7wrJCHJB7idOrZchevi_enesrTqR4s7qVaOGlcNfSzhedrQDSATtlbRB7BCSVjY0iPCPJyPSv5FvS1nE3Z62ay6NcyRt4SH3VZRqar8ms6srLM8ohRhvHOkVKdnvnM0AZjbs43faZvqEGuSpuYjjDyunEY_CnbIJ0Q9rnPvtLCpt10l0XQGfMN97OSxOjowPCuuhJ-oM8lNmzgIBege1NXf9LHe2D0xLbKE22EShxMmlIiOxATeUhX23TaD3tQ';
const options = {
  host: 'api.linkedin.com',
  path: '/v2/me',
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'cache-control': 'no-cache',
    'X-Restli-Protocol-Version': '2.0.0'
  }
};

const profileRequest = https.request(options, function(res) {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const profileData = JSON.parse(data);
    console.log(JSON.stringify(profileData, 0, 2));
  });
});
profileRequest.end();