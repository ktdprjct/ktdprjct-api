const cheerio = require("cheerio")
const axios = require("axios")
const qs = require("qs")

function wallanime(query){
  return new Promise((resolve, reject) => {
  axios.get('https://www.peakpx.com/en/search?q=anime '+query+'&page=1',{
    headers: {
      "user-agent": "Mozilla/5.0 (Linux; Android 7.1.1; SM-J250F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.87 Mobile Safari/537.36",
      "cookie": "ID=e5975a8f1a81991d-2260af4f91d100f2:T=1649072990:RT=1649072990:S=ALNI_MYNuQsY1sXkiCd-XzLOb7PXvqqoXQGA1.2.885999978.16490729901GA1.2.1284017588.1649072990"
    }
  })
  .then(({ data }) => {
    const $ = cheerio.load(data)
    const result = [];
    	$('li > figure > a').each(function(a, b) {
    	  result.push($(b).find('img').attr('data-src'))
    	})
      resolve(result)
    })
  .catch({status: 'err'})
  })
}
/*wallanime("naruto")
.then(data => console.log(data))*/
module.exports.wallanime = wallanime



