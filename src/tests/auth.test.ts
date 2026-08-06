import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("auth testing", () => {
  test("Extract correct authorization string", () => {
    expect(getAPIKey({ authorization: "ApiKey 1234" })).equals("1234");
  });

  test("Authorization missing", () => {
    expect(getAPIKey({ abcd: "muh me bd"})).toBeNull;
  });

  test("Incorrect auth bad value", () => {
    expect(getAPIKey({ authorization: "muh me bd"})).toBeNull;
  });

  test("Incorrect auth no value", () => {
    expect(getAPIKey({ authorization: " a"})).toBeNull;
  });
});
