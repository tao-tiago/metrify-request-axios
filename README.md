# Versions
* 0.0.1 - Version compatible with CommonJS and Modules. Compatible with TypeScript, Frontend and Backend

# Description
This module is an axios third-party module to metrify the requests.

# How it works

The module makes use of axios' interceptors to metrify the requests. Therefore, the command can be seen in the app's console, as well as in the `res.config.meta` property of the response.

# How to use it

metrify-request-axios is super easy to use. First you'll have to install it.

```shell
npm i metrify-request-axios
```

Then all you have to do is import and instanciate metrify-request-axios in your app. Here's a sample:

```javascript
import axios from "axios";
import metrify from "metrify-request-axios";

// initializing metrify-request-axios with your axios instance
metrify(axios);

axios.post("http://localhost:3000/", { dummy: "data-post" })
  .then(res => {
    console.log(res.config.meta);
    /*
    meta: {
      unitTime: string;
      beginTime: number;
      finishTime: number;
      durationTime: number;
    };
    */

  }).catch(err => {
    console.log(err);
  });
```

# Axios Version Compatible (tested)
### Version 0.21.1 or higher