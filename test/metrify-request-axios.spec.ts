import axios from "axios";
import curl from "../src/main";

curl(axios);

describe("Testing Metrify Request Axios", () => {

  it("should return the response with the metrics of request", async () => {
    const res = await axios.get("http://localhost:3000/");

    console.log("res", res.config.meta)
    expect(res.config.meta?.unitTime).toBe("milliseconds");
  });

  it("should return the error with the metrics of request", async () => {
    try {
      await axios.post("http://localhost:3000/", { dummy: "data-post" });
    } catch (error) {
      console.log("error", error.config.meta)
      expect(error.config.meta?.unitTime).toBe("milliseconds");
    }
  });

});