import axios from "axios";
import curl from "../src/main";

curl(axios);

describe("Testing Metrify Request Axios", () => {

  it("should return the response with the metrics of request", async () => {
    const res = await axios.post("http://localhost:3000/", { dummy: "data-post" });

    expect(res.config.meta?.unitTime).toBe("milliseconds");
  });

});