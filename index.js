// objects to use
const someJSONToSend = {
  results: ['default data to send'],
  errors: null,
  msg: 'I sent this to the fetch',
}
const someDefaultJSONToRespond = {
  results: ['default result'],
  errors: null,
  msg: 'success in sending a POST',
}

/**
 * gatherResponse awaits and returns a response body as a string.
 * Use await gatherResponse(..) in an async function to get the response body
 * @param {Response} response to
 */

let url = ""

// for parsing the data
async function gatherResponse(response) {
  const { headers } = response
  const contentType = headers.get('content-type')
  
  if (contentType.includes('application/json')) {
    console.log("json response found")
    const body = await response.json()
    // random function gurantees 50% chance of 1 or 0
    url = body["variants"][Math.floor(Math.random() * (2 - 0)) + 0]

    // used to save url when the user loads the website for the first time
    const res = fetchGetHtml(url)
    return (res)
  
  } else if (contentType.includes('application/text')) {
    const body = await response.text()
    return body
  } else if (contentType.includes('text/html')) {
    const body = {
      content:await response.text(),
      url: url
    }
    // console.log(url);
    // body.headers.append('Set-Cookie', `url_val=${url}; path=/`)
    return body
  } else {
    const body = await response.text()
    return body
  }
}

/**
 * Use await fetchGetHtml(..) in an async function to get the HTML
 * @param {string} url the URL to send the request to
 */
async function fetchGetHtml(url) {
  const init = {
    method: 'Get',
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }

  const response = await fetch(url)
  const respBody = await gatherResponse(response)
  return respBody
}

// cookie function
function getCookie(request, name) {
  let result = null
  let cookieString = request.headers.get('Cookie')
  if (cookieString) {
    let cookies = cookieString.split(';')
    cookies.forEach(cookie => {
      let cookieName = cookie.split('=')[0].trim()
      if (cookieName === name) {
        let cookieVal = cookie.split('=')[1]
        result = cookieVal
      }
    })
  }
  return result
}
/**
 * Example of how fetch methods above can be used in an application
 *  */

addEventListener('fetch', async event => {
  const { url, method } = event.request
  
  // checking the cookie
  const cookie = getCookie(event.request, 'url_val')
  
  
  // Set respBody and init according to the route
  // and method of the incoming request
  init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  if(cookie==null)
  respBody = fetchGetHtml('https://cfw-takehome.developers.workers.dev/api/variants')
  else{
    respBody = fetchGetHtml(cookie)
  }

  // Turn the the respBody string into a Response
  // return this response to the requester
  event.respondWith(
    (async function() {
      const body = await respBody
      
      let response = new Response(body.content, init)
      if(cookie==null){
        console.log("making cookie")
        response.headers.append('Set-Cookie', `url_val=${body.url}; path=/`)
      }
      return response
    })()
  )
})